var sessionGetId = document.querySelector("#sessionGetId").value;
let id = document.querySelector("#sessionGetId").value;
// 플레이어 테이블 에있는 정보 사용
var players;
var monsterInfos;
var monsterHp;
var monsterStr;
var	monsterAmr;
var monsterGold;
var monsterExp;
//플레이어 정보
var playerHp;
var playerStr;
var	playerAmr;
var playerGold;
var playerExp;
var playerMaxExp;
var playerLevel;
var isPlayerDead = false;
var isMonsterDead = false;
var playerStatePoint;
var levelUp= false;
var playerStatePoint;
var playerStateAdd;
var itemBuyCode = "";
var goBuyItemInfoCopy;
var inventoryList;
var attackPlayer;
// 첫 화면 메뉴 생성
function firstGameMenu(){
	document.querySelector("#firstText").innerHTML = "캐릭터가 생성되어있지 않습니다.<br>종족을 선택하신 후<br>캐릭터를 <button class='createOrc' id='createBrood' onclick='createOrc()'>생성</button>해주세요<p class='broodName'>오크</p><div class='chooseBrood'><a href='#'class='chooseOrc'><img src='../resources/img/orc.png' ></a><a href='#' class='chooseElf'><img src='../resources/img/elf.jpg'></a></div><button type='button' class='elfBtn' onclick='chooseElf()'>엘프 선택 >> </button><button type='button' class='orcBtn' onclick='firstGameMenu()'><<오크 선택</button>";
	document.querySelector("#firstText").innerHTML += "<div class='orcInfo'>주변 환경은 풍부한 자원이 있어 초반에 성장하기가 편한대신 중간에 위치해 있어 외부종족의 침입이 잦다</div>"
	document.querySelector(".orcBtn").style.display='none';
	document.querySelector(".elfInfo").style.display='none';
	document.querySelector(".orcInfo").style.display='block';
	
}

// 엘프선택 버튼 클릭시
function chooseElf(){
	document.querySelector("#firstText").innerHTML += "<div class='elfInfo'>주변이 산으로 둘러싸여 있어 대체적으로 몬스터들의 침입이 적은 대신 산적들의 출몰과 자원이 부족함</div>";
	document.querySelector(".orcBtn").style.display='block';
	document.querySelector(".elfBtn").style.display='none';
	document.querySelector(".chooseOrc").style.display='none';
	document.querySelector(".chooseElf").style.display='block';
	document.querySelector(".broodName").innerHTML="엘프";
	document.querySelector(".orcInfo").style.display='none';
	document.querySelector(".elfInfo").style.display='block';
	document.querySelector("#createBrood").removeAttribute("class");
	document.querySelector("#createBrood").setAttribute("class","createElf");
	document.querySelector("#createBrood").setAttribute("onclick","createElf()");
	
	
}

// 오크 생성버튼눌렀을시
function createOrc(){

	createAjax(sessionGetId);
	var brood = "orc";
	createAjax2({brood:brood,id:sessionGetId});
}

// 엘프 생성버튼 눌렀을시
function createElf(){
	createAjax(sessionGetId);
	var brood = "elf";
	createAjax2({brood:brood,id:sessionGetId});
}

// 캐릭 생성시 isHavePlayer = 1 로 변경
function createAjax(sessionGetId){
	$.ajax({
		url: "/createPlayer/"+sessionGetId,
		type: "put",
		data: JSON.stringify(sessionGetId),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			if(result=="success"){
			}else{
				alert("캐릭터 생성 오류!");
			}
		}
	})
}
	// 캐릭 생성시 player 테이블에 데이터 삽입
function createAjax2(create){
	$.ajax({
		url: "/createPlayer2",
		type: "post",
		data: JSON.stringify(create),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			if(result=="success"){
				alert("캐릭터 생성을 위해 로그아웃 합니다.");
				location.href="/logout";
			}else{
				alert("캐릭터 생성 오류!");
			}
		}
	})
}
	
	// 캐릭 생성 후 화면
	
function gameIn(){
//플레이어 정보 ajax로 요청
	document.querySelector(".chatText").innerHTML ="";
	itemBuyCode = "";
	playerInfo(id);
	
//메인 화면 호출
		setTimeout(function() {
			mainGame();
		}, 100)
	
}
//플레이이어 정보 select
function playerInfo(id){
	$.getJSON("/playerInfo",{id:id},function(player){
			// 플레이어 정보를 select 후 players 전역변수에 저장
			players = player;
			playerStateAdd = players.statePoint;
			
	})
}

function attackPlayerInfo(){
	$.getJSON("/playerInfo",{id:id},function(player){
		attackPlayer = player;
		for(var i = 0; i<inventoryList.length;i++){
			attackPlayer.str += inventoryList[i].itemStr;
			attackPlayer.amr += inventoryList[i].itemAmr;
			attackPlayer.hp += inventoryList[i].itemHp;
		}
	})
}
//게임 메인화면
function mainGame(){
	// 종족 별로 게임 메인화면 이미지 변경
	document.querySelector("#firstText").innerHTML="";
	setTimeout(function(){
		createButton();
	}, 200);
	if(players.brood == "orc"){
		$("#firstText").append("<div class='mainGameDisplay'></div>");
		$(".mainGameDisplay").append("<div class='mainBroodImage'><img src='../resources/img/orc.png' class='mainOrcImage'></div>");
	}else if(players.brood == "elf"){
		$("#firstText").append("<div class='mainGameDisplay'></div>");
		$(".mainGameDisplay").append("<div class='mainBroodImage'><img src='../resources/img/elf.jpg' class='mainElfImage'></div>");
	}
	
	
	
}



//버튼 생성 함수
function createButton(){
	$(".goButton").remove();
	document.querySelector("#firstText").innerHTML += "<button class='goButton goHunting' onclick='goHunting()'>사냥터</button>";
	document.querySelector("#firstText").innerHTML += "<button class='goButton goInven' onclick='goInven()'>인벤토리</button>";
	document.querySelector("#firstText").innerHTML += "<button class='goButton goState' onclick='goState()'>스텟</button>";
	document.querySelector("#firstText").innerHTML += "<button class='goButton goShop' onclick='goShop()'>상점</button>";
	document.querySelector("#firstText").innerHTML += "<button class='goButton goCamp' onclick='chooseCamp()'>진영</button>";
}
//진영 선택 페이지
function chooseCamp(){
	alert("구현중입니다.");
}


//웹브라우저 로딩시 메인화면 정보 업데이트 함수 호출
$(function(){
	webLoadingInven();
	webLoading();	
	
	
})

//인벤토리, 무기 추가스텟 로딩
function webLoadingInven(){
	inventoryList();
	
}

// 웹브라우저 로딩시 메인화면 정보 업데이트
function webLoading(){
	
	playerInfo(id);
	
	setTimeout(function() {
		if(players.brood == "elf")
			players.brood = "엘프";
		else
			players.brood = "오크";
		loadingInventory();
		showLanking();
		$(".chInfoUl").append("<li><span>진영 : </span>"+players.camp+"</li>");
		$(".chInfoUl").append("<li><span>레벨 : </span>"+players.level+"</li>");
		$(".chInfoUl").append("<li><span>직업 : </span>"+players.job+"</li>");
		$(".chInfoUl").append("<li><span>종족 : </span>"+players.brood+"</li>");
		$(".chInfoUl").append("<li class='maxExpBar'><p class='expBar' style='width:"+(players.exp/players.maxExp)*100+"%;font-size:12px''>"+"경험치 : "+players.exp+"/"+players.maxExp+"("+((players.exp/players.maxExp)*100).toFixed(4)+"%)</p></li>");
		$(".chInfoUl").append("<li><span>골드 : </span>"+numberWithCommas(players.gold)+"</li>")
		$(".chStateUl").append("<li class='stateStr'>공격력 : <span>"+players.str+" (+"+(attackPlayer.str-players.str)+")</span></li>");
		$(".chStateUl").append("<li class='stateAmr'>방어력 : <span>"+players.amr+"(+"+(attackPlayer.amr-players.amr)+")</span></li>");
		$(".chStateUl").append("<li class='haveStatePoint'>스텟포인트: <span>"+players.statePoint+"<span></li>");
		
		
		
		if(players.statePoint >0){
			$(".stateStr").append("<button class='strPlus' onclick='strPlus()'>╉</button>");
			$(".stateAmr").append("<button class='amrPlus' onclick='amrPlus()'>╉</button>");
			$(".stateStr").append("<button class='strMinus' onclick='strMinus()'>―</button>");
			$(".stateAmr").append("<button class='amrMinus' onclick='amrMinus()'>―</button>");
			$(".chStateUl").append("<li style='margin-top: 25px'><button class='stateOk' onclick='stateOk()'>적용</button></li>");
		}
	}, 600)
}

function loadingInventory(){
	// 장비 창 인벤토리 표시
	var count = 0;
	for(var i = 0; i<=20; i++){
			if(i %5 ==0 && i!=0){
				count++;
			}
			if(inventoryList[i] !=null)
			$(".equipmentTr"+count).append('<td><img style="width:100%; height: 100%" src="/resources/img/'+inventoryList[i].itemCode+'.png"></td>');
	}
	
}
//사냥터 클릭시
function goHunting(){
	document.querySelector(".goHunting").remove();
	document.querySelector(".mainBroodImage").remove();
	$(".mainGameDisplay").append('<div class="huntingDisplay"></div>');
	$(".huntingDisplay").append('<p class="chooseHunting">사냥터를 선택해주세요</p>');
	$(".huntingDisplay").append('<div class="chooseHuntingImage"></div>');
	$(".chooseHuntingImage").append('<div class="h1-20-hunting huntingImageDiv" onclick="goLevel1Hunting()"><img src="../resources/img/1~20.jpg" class="h1-20-hunting-img huntingImageImg"></img><span class="h1-20 huntingImageFont">1~20사냥터</span></div>');
	$(".chooseHuntingImage").append('<div class="h21-30-hunting huntingImageDiv" onclick="implement()"><img src="../resources/img/21~30.jpg" class="h21-30-hunting-img huntingImageImg"></img><span class="h21-30 huntingImageFont">21~30사냥터</span></div>');
	$(".chooseHuntingImage").append('<div class="h31-40-hunting huntingImageDiv" onclick="implement()"><img src="../resources/img/31~40.jpg" class="h31-40-hunting-img huntingImageImg"></img><span class="h31-40 huntingImageFont">31~40사냥터</span></div>');
	$(".chooseHuntingImage").append('<div class="h41-50-hunting huntingImageDiv" onclick="implement()"><img src="../resources/img/41~50.jpg" class="h41-50-hunting-img huntingImageImg"></img><span class="h41-50 huntingImageFont">41~50사냥터</span></div>');
	$(".chooseHuntingImage").append('<div class="orcBoth-hunting huntingImageDiv" onclick="implement()"><img src="../resources/img/orcBoth.jpg" class="orcBoth-hunting-img huntingImageImg"></img><span class="orcBothFont huntingImageFont">오크 보스</span></div>');
	$(".chooseHuntingImage").append('<div class="elfBoth-hunting huntingImageDiv" onclick="implement()"><img src="../resources/img/elfBoth.jpg" class="elfBoth-hunting-img huntingImageImg"></img><span class="elfBothFont huntingImageFont">엘프 보스</span></div>');
	document.querySelector("#firstText").innerHTML += "<button class='goButton goMain' onclick='mainGame()'>메인화면</button>";
}

//구현중인 메뉴
function implement(){
	alert("구현 중 입니다.");
	return;
}

//1~20 사냥터 클릭시
function goLevel1Hunting(){
	if(players.level>20){
		alert("해당 하는 레벨이 아닙니다 다른 사냥터를 이용해주세요");
		return;
	}else{
		$(".chooseHuntingImage").remove();
		$(".chooseHunting").remove();
		//몬스터 생성 함수 호출
		setTimeout(function() {
			level1MonsterAppear();
		}, 300)
	}
}
//몬스터 생성 함수
function level1MonsterAppear(){
	$(".goButton").remove();
	setTimeout(function() {
		$(".huntingDisplay").append('<p class="monsterAppearFont" style="text-align:center">몬스터가 나타납니다</p>');
	}, 300)
	setTimeout(function() {
		$(".huntingDisplay").append('<div class="monsterCount" style="font-size: 40px;line-height: 80px;text-align: center; color:red">3</div>');
	}, 1000)
	setTimeout(function() {
		$(".monsterCount").text("2");
	}, 1500)
	setTimeout(function() {
		$(".monsterCount").text("1");
	}, 2000)
	
	setTimeout(function() {
		$(".monsterAppearFont").remove();
		$(".monsterCount").remove();
	}, 2500)
	
	setTimeout(function() {
		level1MonsterAppearStart();
	}, 3000);
	
}


function level1MonsterAppearStart(){
	//몬스터 별로 등장 확률
	var monster = "";
	var appearRandom = Math.floor((Math.random()*6))+1;
	if(appearRandom == 1 || appearRandom == 2 || appearRandom ==3){
		$(".huntingDisplay").append('<p class="monsterAppearFont" style="text-align:center;margin-bottom: 20px">스켈레톤 병사가 나타났습니다.</p>');
		$(".huntingDisplay").append('<div class="monsterAppearImage" style="width:100%; height: 80%"><img src="/resources/img/skeletonSoldier.jpg" style="width: 100%; height: 100%"></div>');
		//몬스터 코드번호 
		monster = "1111";
		monsterInfo(monster);
	}else if(appearRandom == 4 || appearRandom == 5){
		$(".huntingDisplay").append('<p class="monsterAppearFont" style="text-align:center; margin-bottom: 20px">스켈레톤 아처가 나타났습니다.</p>');
		$(".huntingDisplay").append('<div class="monsterAppearImage" style="width:100%; height: 80%"><img src="/resources/img/skeletonArcher.jpg" style="width: 100%; height: 100%;object-fit: cover"></div>');
		monster = "1112";
		monsterInfo(monster);
	}else{
		$(".huntingDisplay").append('<p class="monsterAppearFont" style="text-align:center; margin-bottom: 20px">스켈레톤 위자드가 나타났습니다.</p>');
		$(".huntingDisplay").append('<div class="monsterAppearImage" style="width:100%; height: 80%"><img src="/resources/img/skeletonWizard.jpg" style="width: 100%; height: 100%;object-fit: cover"></div>');
		monster = "1113";
		monsterInfo(monster);
	}

		$(".goButton").remove();
		$(".goMain").text("뒤로가기");
		document.querySelector("#firstText").innerHTML += "<button class='goButton goMain'onclick='gameIn()'>뒤로가기</button>";
		document.querySelector("#firstText").innerHTML += "<button class='goButton goAttack' onclick='goAttack()'>공격하기</button>";
		document.querySelector("#firstText").innerHTML += "<button class='goButton goRun' onclick='implement()'>도망가기</button>";

//		document.querySelector("#firstText").innerHTML += "<button class='goButton goCamp'>r</button>";
		
		
		
}

//몬스터 생성 될시 정보 select

function monsterInfo(monster){
	$.getJSON("/monsterInfo",{code:monster},function(monsters){
		// 플레이어 정보를 select 후 players 전역변수에 저장
		monsterInfos = monsters;
//		alert(monsterInfos.code);
})
}

$(".goRetry").on("click",function(){
	$(this).remove();
})


//공격하기 버튼 눌렀을시
function goAttack(){
		$(".goMain").attr('disabled',true);
		$(".goAttack").remove();
		//몬스터 정보
		
		 monsterHp = monsterInfos.hp;
		 monsterStr = monsterInfos.str;
		 monsterAmr = monsterInfos.amr;
		 monsterGold = monsterInfos.gold;
		 monsterExp = monsterInfos.exp;
		//플레이어 정보
		 playerHp = attackPlayer.hp;
		 playerStr = attackPlayer.str;
		 playerAmr = attackPlayer.amr;
		 playerGold = players.gold;
		 playerExp = players.exp;
		 playerMaxExp = players.maxExp;
		 playerLevel = players.level;
		 isPlayerDead = false;
		 isMonsterDead = false;
		 playerStatePoint = players.statePoint;
		// 공격 로직

		
		
		//플레이어 공격 로직
	var playerAttack = setInterval(function() {
		var playerDamage = (playerStr - monsterAmr /2) / 2;
		var playerDamageRandom = playerDamage * 0.1;
		var pdamageRandom = (Math.random()*playerDamageRandom);
		var playerHpUp = players.hp * 1.05;
		// 최종 플레이어 데미지
		playerDamage = (playerDamage + pdamageRandom).toFixed(4);
		if(playerDamage <=0){
			playerDamage = 3;
		}
		monsterHp = monsterHp - playerDamage;
		
		//몬스터 사망시
		if(monsterHp <=0){
			isMonsterDead = true;
			clearInterval(playerAttack);
			$(".goRetry").attr('disabled',false);
			$(".goMain").attr('disabled',false);
			playerExp = parseInt(playerExp)+ parseInt(monsterExp);
			playerGold = parseInt(playerGold) + parseInt(monsterGold);
			if (playerExp >= playerMaxExp){
				playerExp = parseInt(playerExp) - parseInt(playerMaxExp);
				playerMaxExp = parseInt(playerMaxExp) * 1.12;
				playerStatePoint = playerStatePoint +5;
				++playerLevel;
				levelUp=true;
				setTimeout(function() {
					clearMonster({level:playerLevel,exp:playerExp,maxExp:playerMaxExp,gold:playerGold,id:id,statePoint:playerStatePoint,hp:playerHpUp});
				}, 200);
				
			}else{
				setTimeout(function() {
					clearMonster({level:playerLevel,exp:playerExp,maxExp:playerMaxExp,gold:playerGold,id:id,statePoint:playerStatePoint,hp:players.hp});
				}, 200);
			}
			
		}
		
		//플레이어 사망시
		if(isPlayerDead == true){
			clearInterval(playerAttack);
			document.querySelector(".chatText").innerHTML += "전투가 종료 되었습니다.";
			document.querySelector(".chatText").innerHTML +="<hr>";
			document.querySelector(".chatText").scrollTop = document.querySelector(".chatText").scrollHeight;
			$(".goRetry").attr('disabled',false);
			$(".goMain").attr('disabled',false);
		}else{
			document.querySelector(".chatText").innerHTML += id+" 님이 <span style='color:red'>"+playerDamage+"</span> 만큼 피해를 입혔습니다.<br>";
			document.querySelector(".chatText").scrollTop = document.querySelector(".chatText").scrollHeight;
		}
	}, 700)
	//몬스터 공격 로직
	var monsterAttack = setInterval(function() {
		var monsterDamage =(monsterStr - (playerAmr /2)) /2;
		var monsterDamageRandom = monsterDamage * 0.1;
		var mdamageRandom = (Math.random()*monsterDamageRandom);
		monsterDamage = (monsterDamage +mdamageRandom).toFixed(4);
		if(monsterDamage <=0){
			monsterDamage = 3;
		}
		playerHp = playerHp - monsterDamage;
		//플레이어 사망시
		if(playerHp <=0){
			isPlayerDead = true;
			clearInterval(monsterAttack);
		}
		//몬스터 사망시
		if(isMonsterDead == true){
			clearInterval(monsterAttack);
			document.querySelector(".chatText").innerHTML += "전투가 종료 되었습니다.";
			document.querySelector(".chatText").innerHTML += "<hr>";
			document.querySelector(".chatText").scrollTop = document.querySelector(".chatText").scrollHeight;
			
		}else{
			document.querySelector(".chatText").innerHTML += monsterInfos.name+"가"+id+"님에게 <span style='color:blue'>"+monsterDamage+"</span> 만큼 피해를 입혔습니다.<br>";
			document.querySelector(".chatText").scrollTop = document.querySelector(".chatText").scrollHeight;
		}
		
	}, 1000)
	
}

// 몬스터 사망시
function clearMonster(playerUpdate){
	$.ajax({
		url: "/playerUpdate",
		type: "put",
		data: JSON.stringify(playerUpdate),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			if(result=="success"){
				clearMonsterAfter();
			}
		}
	})
}

// 몬스터 사망 후 함수 호출

function clearMonsterAfter(){
	$(".goMain").remove();
	$(".goRun").remove();
	$(".goInven").remove();
	$(".goState").remove();
	$(".monsterAppearFont").remove();
	$(".monsterAppearImage").remove();
	document.querySelector("#firstText").innerHTML += "<button class='goButton goHunting' onclick='gameIn()'>메인화면</button>";
	$(".huntingDisplay").append("<span class='clearFont'>CLEAR!!</span>");
	$(".huntingDisplay").append("<div class='coinImage' style='width:25px;height:25px'><img src='/resources/img/coin.png' style='width:100%;height:100%'><span class='goldFont'>+"+numberWithCommas(monsterGold)+" 골드</span></div>");
	if(levelUp == true){
		$(".huntingDisplay").append("<div class='playerPlusExp'>레벨UP!<br> 레벨 : "+playerLevel+"</div>");
		$(".huntingDisplay").append("<div class='playerPlusState'>스텟 증가! : +5</div>");
		levelUp = false;
	}
	$(".huntingDisplay").append("<div class='playerPlusExp'>경험치 : +"+monsterExp+"</div>");
	
	reloadCharacter();
}

// 캐릭터 정보 새로고침
function reloadCharacter() {
	$(".charMainCenter").load(location.href+" .charMainCenter>*","");
	
	webLoading();
}


//골드 쉼표 표시
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//게시판 스텟 로직
//공격력증가 버튼 누르면 발생
function strPlus(){
	if(players.statePoint>0){
			++players.str;
		$(".stateStr span").text(players.str);
		--players.statePoint;
		$(".haveStatePoint span").text(players.statePoint);
	}
}

//공격력 감소 버튼 누르면 발생

function strMinus(){
		
		if(players.statePoint != playerStateAdd && players.str >20){
			players.str = players.str-1;
			$(".stateStr span").text(players.str);
			++players.statePoint;
			$(".haveStatePoint span").text(players.statePoint);
		}
}


//방어력 증가 버튼 누르면 발생
function amrPlus(){
	if(players.statePoint>0){
			++players.amr;
		$(".stateAmr span").text(players.amr);
		--players.statePoint;
		$(".haveStatePoint span").text(players.statePoint);
	}
}

//방어력 감소 버튼 누르면 발생

function amrMinus(){
	if(players.statePoint != playerStateAdd && players.amr >30){
		players.amr = players.amr-1;
		$(".stateAmr span").text(players.amr);
		++players.statePoint;
		$(".haveStatePoint span").text(players.statePoint);
	}
}

//

// 스텟 적용
function stateOk(){
	stateUpdate({str:players.str,amr:players.amr,statePoint:players.statePoint,id:id});
}

function stateUpdate(state){
	$.ajax({
		url: "/stateUpdate",
		type: "put",
		data: JSON.stringify(state),
		contentType: "application/json; charset=utf-8",
		success: function(result){
				alert("스텟 적용 완료!");
				reloadCharacter();
			}
		})
	}

//스텟 버튼 클릭시

function goState(){
	clearButtons();
	$(".mainGameDisplay").append("<div class='stateInformation'></div>")
	$(".stateInformation").append("<div class='stateInfo stateStrs' style='margin-bottom: 10px;margin-top: 50px'>공격력 : <span>"+players.str+"</span></div>");
	$(".stateInformation").append("<div class='stateInfo stateAmrs'style='margin-bottom: 10px'>방어력 : <span>"+players.amr+"</span></div>");
	$(".stateInformation").append("<div class='stateInfo addStatePoint'style='margin-bottom: 10px'>스텟포인트 : <span>"+players.statePoint+"</span></div>");
	if(players.statePoint >0){
		$(".stateStrs").append("<button class='strPlus' onclick='strsPlus()' style='background-color:transparent'>╉</button>");
		$(".stateAmrs").append("<button class='amrPlus' onclick='amrsPlus()' style='background-color:transparent'>╉</button>");
		$(".stateStrs").append("<button class='strMinus' onclick='strsMinus()' style='background-color:transparent'>―</button>");
		$(".stateAmrs").append("<button class='amrMinus' onclick='amrsMinus()' style='background-color:transparent'>―</button>");
		$(".stateInformation").append("<button class='stateOk' onclick='stateOk()' style='margin-top: 20px'>적용</button>");
	}
	
	
}
	
//공격력증가 버튼 누르면 발생
function strsPlus(){
	if(players.statePoint>0){
			++players.str;
		$(".stateStrs span").text(players.str);
		--players.statePoint;
		$(".addStatePoint span").text(players.statePoint);
	}
}

//공격력 감소 버튼 누르면 발생

function strsMinus(){
		
		if(players.statePoint != playerStateAdd && players.str >20){
			players.str = players.str-1;
			$(".stateStrs span").text(players.str);
			++players.statePoint;
			$(".addStatePoint span").text(players.statePoint);
		}
}


//방어력 증가 버튼 누르면 발생
function amrsPlus(){
	if(players.statePoint>0){
			++players.amr;
		$(".stateAmrs span").text(players.amr);
		--players.statePoint;
		$(".addStatePoint span").text(players.statePoint);
	}
}

//방어력 감소 버튼 누르면 발생

function amrsMinus(){
	if(players.statePoint != playerStateAdd && players.amr >30){
		players.amr = players.amr-1;
		$(".stateAmrs span").text(players.amr);
		++players.statePoint;
		$(".addStatePoint span").text(players.statePoint);
	}
}

//클리어 함수
function clearButtons(){
	$(".mainGameDisplay").empty();
	$(".goButton").remove();
	$(".mainGameDisplay").css("backgroundColor","#222");
	document.querySelector("#firstText").innerHTML += "<button class='goButton goHunting' onclick='gameIn()'>메인화면</button>";

}
//아이템 인벤토리 정보

//function itemListInfo(){
//	var arr = [];
//	haveItemList = arr;
//	$.getJSON("/itemList",function(data){
//		for(var i = 0; i<inventoryList.length; i++){
//			var thisCode = inventoryList[i].itemCode;
//			for(var j = 0; j<data.length; j++){
//				if(data[j].itemCode == thisCode){
//					arr[i] = data[j];
//				}
//				
//			}
//			
//		}
//	});
//}

//function itemListCalc(){
//
//	
//}
//상점 정보 로딩
function goShopItem(){
	itemBuyCode = "";
	$.getJSON("/itemList",function(data){
		$(".mainGameDisplay").append('<table class="itemListTable" width="100%" height:100%; style="box-sizing:border-box;padding: 0 5px 0 5px"><tr style="width:100%;height:48.66px;box-sizing:border-box"></tr></table>');
		$(".mainGameDisplay").append("<div class='selectItemPrice'></div>");
		$(".mainGameDisplay").append("<div class='coinImage' style='width:25px;height:25px;margin-left:5px;'><img src='/resources/img/coin.png' style='width:100%;height:100%'><span class='haveGoldFont'>보유 골드 : </span><span class='haveGolds'>"+numberWithCommas(players.gold)+"</span></div>");
		for(var i = 0; i<=data.length;i++){
			$(".itemListTable tr").append('<td onclick="buyItem('+data[i].itemCode+');imgClick('+data[i].itemCode+')" class="itemImgList img'+data[i].itemCode+'"style="width: 20%; height: 100%"><button class="buyItem"><img src="/resources/img/'+data[i].itemCode+'.png" style="width:100%;height:auto;background-color: rgb(241,243,245);object-fit:cover"></button></td>');
		}
		
	})
}

//상점 클릭시

function goShop(){
	clearButtons();
	$(".mainGameDisplay").append("<div class='shopFont'>무기나 방어구를 선택해주세요</div>")
	document.querySelector("#firstText").innerHTML += "<button class='goButton goBuy' onclick='goBuy()'>구매하기</button>";
	goShopItem();
	
}


function buyItem(itemBuyCodes){
	itemBuyCode = itemBuyCodes;
	//해당 되는 아이템 정보 select
	goBuyItemInfo(itemBuyCode);
}


	//해당되는 아이템 정보 select ajax
function goBuyItemInfo(id){
	$.ajax({
		url: "/goBuyItemInfo/"+id,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
				//success 후 아이템 정보 표시 함수 호출
			goBuyItemInfoCopy = result;
			buyItemInfo();
			
			}
		})
	}

//success 후 아이템 정보 표시 함수
function buyItemInfo(){
	document.querySelector(".chatText").innerHTML = "아이템 명 : "+goBuyItemInfoCopy.itemName+"<br>";
	document.querySelector(".chatText").innerHTML += "가격 : " + numberWithCommas(goBuyItemInfoCopy.itemPrice)+" 골드<br>";
	document.querySelector(".chatText").innerHTML += "공격력 : +" + goBuyItemInfoCopy.itemStr+"<br>";
	document.querySelector(".chatText").innerHTML += "방어력 : +" + goBuyItemInfoCopy.itemAmr+"<br>";
	document.querySelector(".chatText").innerHTML += "체력 : +" + goBuyItemInfoCopy.itemHp;
	document.querySelector(".selectItemPrice").innerHTML = goBuyItemInfoCopy.itemName+" 금액 : "+numberWithCommas(goBuyItemInfoCopy.itemPrice);
	
	
}

function imgClick(items){
	$(".itemImgList").css("opacity","1");
	$('.img'+items).css("opacity","0.3");
}

//구매 ajax
function goBuy(){
	// select된 값 가져오기 goBuyItemInfoCopy
	if(inventoryList.length >=20){
		alert("아이템은 20개까지 구입가능합니다");
		return;
	}
	
	if(itemBuyCode == ''){
		alert("구매하실 물품을 선택해주세요");
		return;
	}
	if(goBuyItemInfoCopy.itemPrice>players.gold){
		alert("금액이 모자랍니다");
		return;
	}
	//결제 업데이트 함수 호출
	var gold = players.gold - goBuyItemInfoCopy.itemPrice;
	buyUpdate({gold:gold,id:id});
}

//결제 업데이트 ajax
function buyUpdate(updateGold){
	
	$.ajax({
		url: "/buyUpdate",
		type: "put",
		data: JSON.stringify(updateGold),
		contentType: "application/json; charset=utf-8",
		success: function(result){
				
				alert("구매 완료!");
				document.querySelector(".haveGolds").innerHTML = numberWithCommas(players.gold - goBuyItemInfoCopy.itemPrice);
				addInventory({id:id,itemName:goBuyItemInfoCopy.itemName,itemCode:goBuyItemInfoCopy.itemCode,itemStr:goBuyItemInfoCopy.itemStr,itemAmr:goBuyItemInfoCopy.itemAmr,itemHp:goBuyItemInfoCopy.itemHp});
				location.reload();
				
				
			}
		})
}

// 구매한 물품 인벤토리에 추가 함수
function addInventory(inventoryInfo){
	$.ajax({
		url: "/addInventory",
		type: "post",
		data: JSON.stringify(inventoryInfo),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			return
			}
		})
}

//인벤토리 select 함수
function inventoryList(){
	$.ajax({
		url: "/selectInventory/"+id,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
				inventoryList = result;
				attackPlayerInfo();
			}
		})
}

//인벤토리 열면
function goInven(){
	clearButtons();
	var count = 0;
	$(".mainGameDisplay").append("<table style='width:100%;box-sizing:border-box'></table>");
	$(".mainGameDisplay table").append("<tr style='width:100%'></tr>");
	for(var i =0; i<inventoryList.length;i++){
		if(i % 5 ==0 && i != 0){
			count++;
			$(".mainGameDisplay table").append("<tr style='width:100%'></tr>");
		}
		$(".mainGameDisplay tr").eq(count).append("<td data-length="+i+" class='td"+i+"'style='width:20%'><img width='100%' src='/resources/img/"+inventoryList[i].itemCode+".png'></td>")
		
	}
	for(var i = 0; i<inventoryList.length; i++){
		$(".td"+i).on("click",function(){
			$(".chatText").html("");
			document.querySelector(".chatText").innerHTML += inventoryList[$(this).data("length")].itemName+"<br>";
			document.querySelector(".chatText").innerHTML += "공격력 : +"+inventoryList[$(this).data("length")].itemStr+"<br>";
			document.querySelector(".chatText").innerHTML += "방어력 : +"+inventoryList[$(this).data("length")].itemAmr+"<br>";
			document.querySelector(".chatText").innerHTML += "HP : +"+inventoryList[$(this).data("length")].itemHp;
		})
		
			
	}
	
}

function showLanking(){
	$.ajax({
		url: "/showLanking",
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
				var brood
				for(var i =0; i<5; i++){
					if(result[i] !=null){
						switch(result[i].brood){
						case("elf"):
							brood = "엘프";
							break;
						case("orc"):
							brood = "오크";
							break;
						}
						$(".lankTable").append("<tr><td>"+(i+1)+"</td><td>"+result[i].level+"</td><td>"+result[i].playerId+"</td><td>"+result[i].camp+"</td><td>"+brood+"</td></tr>");
					}
				}
			}
		})
}

function screenshot(){
	
    html2canvas($('.gameBg').get(0)).then( function (canvas) {
        $(".display").append(canvas);
    })
    $("#firstText").remove();
}

function screenshotStart(){
	
	$(".screenshot").remove();
	$(".screenshotStart").remove();
	$(".screenshotFont").remove();
	screenshot();
	
}

function screenshotTuto(){
	alert("원하는 크기로 창조절 -> 화면 캡처 버튼 클릭 -> 오른쪽 버튼 -> 이미지를 다른이름으로 저장");
}

