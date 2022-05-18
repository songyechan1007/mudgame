function myPageInfo(){
	$(".memberCheck").remove();
	$(".mainCenter").append("<div class='memberInfos'></div>");
	$(".memberInfos").append("<button onclick='removeMember()'>회원탈퇴</button>");
}

function removeMember(){
	if(confirm("회원을 탈퇴하시겠습니까?")){
		removeMemberAjax();
	}else{
		return;
	}
}

function removeMemberAjax(){
	$.ajax({
		url:"/member/removeMember/"+id,
		type: "delete",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("회원을 탈퇴하였습니다.");
			location.href="/logout";
		}
	})
}

function removePlayer(){
	if(confirm("캐릭터를 삭제 하시겠습니까? 삭제 후 캐릭터 재생성 가능합니다.")){
		removePlayerAjax();
	}else{
		return;
	}
}

function removePlayerAjax(){
	$.ajax({
		url:"/member/updateHavePlayer/"+id,
		type: "PUT",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			removePlayers();
		}
	})
}

function removePlayers(){
	$.ajax({
		url:"/member/removePlayer/"+id,
		type: "DELETE",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("캐릭터를 삭제하였습니다.");
			location.href="/logout";
		}
	})
}