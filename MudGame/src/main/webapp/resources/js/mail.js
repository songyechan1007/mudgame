
function mailDetail(mailNo){
	if($(".mailModal").css("display") == "none"){
		$(".mailModal").fadeIn(500);
		$(".mailModal").append("<button class='mailModalClose' onclick='mailModalClose()'>X닫기</button>");
		$("body").css("overflow-y","hidden"); 
		$.ajax({
			url:"/mailBox/receiveMailDetail/"+mailNo,
			type: "get",
			contentType: "application/json; charset=utf-8",
			success: function(result){
				
				$(".mailModal").append("<div class='mailModalTitles'><p>보낸이 : "+result.sendId+"</p></div>");
				$(".mailModal div").append("<button onclick='deleteMail("+mailNo+")'>메일 삭제</button>");	
				$(".mailModal").append("<div>"+result.content+"</div>");
				if(result.isRead != 1 && result.sendId != id){
					readMail(mailNo);
					readSendMail(mailNo)
				}
			}
		})
	}
	
}

function sendMailDetail(mailNo){
	if($(".mailModal").css("display") == "none"){
		$(".mailModal").fadeIn(500);
		$(".mailModal").append("<button class='mailModalClose' onclick='mailModalClose()'>X닫기</button>");
		$("body").css("overflow-y","hidden"); 
		$.ajax({
			url:"/mailBox/receiveSendMailDetail/"+mailNo,
			type: "get",
			contentType: "application/json; charset=utf-8",
			success: function(result){
				$(".mailModal").append("<div class='mailModalTitles'><p>받은사람 : "+result.receiveId+"</p></div>");
				$(".mailModal div").append("<button onclick='deleteSendMail("+mailNo+")'>메일 삭제</button>");	
				$(".mailModal").append("<div>"+result.content+"</div>");
			}
		})
	}
	
}




function mailModalClose(){
	
	$(".mailModal").empty();
	$(".mailModal").fadeOut(500);
	location.reload();
}

function readMail(mailNo){
	$.ajax({
		url:"/mailBox/readMail/"+mailNo,
		type: "put",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			
		}
	})
}

function readSendMail(mailNo){
	
	$.ajax({
		url:"/mailBox/readSendMail/"+mailNo,
		type: "put",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("성공");
		}
	})
}

function deleteMail(mailNo){
	if(confirm("메일을 삭제 하시겠습니까?")){
		deleteMailAjax(mailNo);
	}else{
		return;
	}
}

function deleteSendMail(mailNo){
	if(confirm("메일을 삭제 하시겠습니까?")){
		deleteSendMailAjax(mailNo);
	}else{
		return;
	}
}

function deleteSendMailAjax(mailNo){
	$.ajax({
		url:"/mailBox/deleteSendMail/"+mailNo,
		type: "delete",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("메일이 삭제 되었습니다.");
			location.reload();
		}
	})
}

function deleteMailAjax(mailNo){
	$.ajax({
		url:"/mailBox/deleteMail/"+mailNo,
		type: "delete",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("메일이 삭제 되었습니다.");
			location.reload();
		}
	})
}

function writeMailShow(){
	if($(".mailModal").css("display") == "none"){
		$(".mailModal").fadeIn(500);
		$(".mailModal").append("<button class='mailModalClose' onclick='mailModalClose()'>X닫기</button>");
		$(".mailModal").append("<div class='mailModalTitles'><p style='line-height: 30px'>받는 사람 </p><input type='text' placeholder='아이디를 입력 후 아이디 확인 버튼을 클릭해주세요'><button onclick='idOverRapCheck()'>아이디 확인</button></div>");
	}
}

function idOverRapCheck(){
	var ids = $(".mailModalTitles input").val();
	var idsInfo = $(".mailModalTitles input");
	
	if(ids == ""){
		alert("아이디를 입력해주세요!");
		idsInfo.focus();
		idsInfo.val("");
		return;
	}
	if(ids == id){
		alert("본인한테 우편을 작성하실수 없습니다.");
		idsInfo.focus();
		idsInfo.val("");
		return;
	}
	$.ajax({
		url: "/idOverRapCheck/"+ids,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			
			
			if(result=="success"){
				alert("아이디가 없습니다. 다시입력해주세요.");
				idsInfo.focus();
				idsInfo.val("");
				return;
			}else if(result =="false"){
				alert("우편 전송이 가능한 아이디입니다.");
				idsInfo.attr("disabled","true");
				$(".mailModal").append("<input class='mailModalTitle' type='text' placeholder='제목을 입력해주세요'>")
				$(".mailModal").append("<textarea class='mailModalText' cols='68' rows='25' placeholder='내용을 입력해주세요.'></textarea>")
				$(".mailModal").append("<button class='sendMailBtn' onclick='sendMail()'>전송</button>");
			}
		}
	})
}

function sendMail(){
	if($(".mailModalTitle").val() =="" || $(".mailModalText").val() == ""){
		alert("내용을 모두 입력해주세요");
		return;
	}
	sendMailAjax({sendId:id,title:$(".mailModalTitle").val(),content:$(".mailModalText").val(),receiveId:$(".mailModalTitles input").val()});
}

function sendMailAjax(sendInfo){
	$.ajax({
		url:"/mailBox/sendMail",
		data: JSON.stringify(sendInfo),
		type: "post",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			sentMailAjax(sendInfo);
		}
	})
}

function sentMailAjax(sendInfo){
	$.ajax({
		url:"/mailBox/sentMail",
		data: JSON.stringify(sendInfo),
		type: "post",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("메일이 성공적으로 전송되었습니다.");
			location.reload();
		}
	})
}

function receiveTrue(){
	$.ajax({
		url:"/mailBox/readMailAll/"+id,
		type: "put",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			readSendMailAll();
		}
	})
}

function readSendMailAll(){
	$.ajax({
		url:"/mailBox/readSendMailAll/"+id,
		type: "put",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("메일을 모두 읽었습니다.");
			location.reload();
		}
	})
}
