var playerInfos
var gold=0;
$(function(){
	$(".recipient").focus();
	$(".remittanceMoney").keyup(function(){
		gold = playerInfos.gold - $(".remittanceMoney").val()
		$(".haveMoney span").text(gold);
		if(gold < 0){
			alert("소지하신 금액보다 보내실 금액이 더 많습니다");
			$(".remittanceMoney").val("");
			$(".haveMoney span").text(playerInfos.gold);
			return;
		}
	})
	$(".remittanceMoney").change(function(){
		if($(".remittanceMoney").val().includes("-")){
			alert("0보다 큰수만 입력 가능합니다.");
			$(".remittanceMoney").val("");
			$(".haveMoney span").text(playerInfos.gold);
			return;
		}
	})
	$.getJSON("/playerInfo",{id:id},function(player){
		// 플레이어 정보를 select 후 players 전역변수에 저장
		playerInfos = player;
		showMyMoney();
})
})

function overlap(){
	var text = $(".recipient").val();
	if(text == ""){
		alert("아이디를 입력해주세요");
		return;
	}
	if(text == id){
		alert("본인한테 송금 할 수 없습니다. 다른아이디를 입력해주세요.");
		$(".recipient").val("");
		$(".recipient").focus();
		return;
	}

	$.ajax({
		url: "/idOverRapCheck/"+text,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			if(result=="success"){
				alert("존재하지 않는 아이디입니다.");
				$(".recipient").val("");
				$(".recipient").focus();
				return;
			}else{
				alert("송금 가능한 아이디입니다.");
				$(".recipient").attr("readonly","true");
				$(".recipient").css("backgroundColor","#888");
				$(".overlapButton").css("display","none");
				$(".cancleButton").css("display","block");
				showMoney();
			}
		}
	})
}

function showMoney(){
	$(".remittanceMoney").css("display","block");
	$(".sendMoney").removeAttr("disabled");
}

function showMyMoney(){
	$(".haveMoney span").text(playerInfos.gold);
}

function cancleButton(){
	$(".recipient").removeAttr("readonly");
	$(".recipient").css("backgroundColor","transparent");	
	$(".recipient").val("");
	$(".recipient").focus();
	$(".overlapButton").css("display","block");
	$(".cancleButton").css("display","none");
	$(".sendMoney").attr("disabled","true");
	
}

function sendMoney(){
	if($(".remittanceMoney").val() == "" || $(".remittanceMoney").val() == 0){
		alert("보내실 금액을 입력해주세요!");
		return;
	}
	reciveMoney({gold:$(".remittanceMoney").val(),id:$(".recipient").val()});
	sendUpdate({gold:gold,id:playerInfos.id});
	
}

function sendUpdate(updateGold){
	
	$.ajax({
		url: "/buyUpdate",
		type: "put",
		data: JSON.stringify(updateGold),
		contentType: "application/json; charset=utf-8",
		success: function(result){
				alert("송금 완료!");
				location.reload();
			}
		})
}

function reciveMoney(updateGold){
	$.ajax({
		url: "/reciveMoney",
		type: "put",
		data: JSON.stringify(updateGold),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			}
		})
}

