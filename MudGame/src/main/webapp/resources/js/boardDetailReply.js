var reply;
var moreReplys =false;
$(function(){
	freeBoardDetail();
})
// detail 해당 댓글 호출
function freeBoardDetail(){
	freeBoardDetailAjax($(".modifyBno").text())
}

function freeBoardDetailAjax(bno){
	$.ajax({
		url: "/board/freeBoardDetail/"+bno,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			freeboardCount(bno);
			reply = result;
			$(".replys").append("<ul></ul>");
			if(result[0] != null){
				$(".replys ul").append("<li>"+result[0].rId+"</li>");
				$(".replys ul").append("<li style='width: 200px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden'>"+result[0].rContent+"</li>");
				$(".replys ul").append("<li>"+result[0].regdate+"</li>");
				if($(".userInfo").length >0){
					if(result[0].rId == id){
						$(".replys ul").append("<li><a href='#' onclick='freeBoardReplyModify("+result[0].rNo+")'>수정</a></li>");
						$(".replys ul").append("<li><a href='#' onclick='freeBoardReplyRemove("+result[0].rNo+")'>삭제</a></li>");
					}
				}
			
			}else{
				$(".replys ul").append("<li class='noRe'>댓글이 없습니다.</li>")
			}
			
			if($(".noRe").length >0){
				$(".moreReply").attr("onclick","notMoreReply()");
			}else{
				$(".moreReply").attr("onclick","moreReply()");
			}
			
			}
		})
		
		
}

function freeboardCount(bno){
	$.ajax({
		url: "/board/freeBoardDetail/",
		type: "put",
		data: JSON.stringify(bno),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			console.log(bno)
			}
		})
}

function replyWriteForm(){
	if($(".replyEditor").length <=0){
		$(".replyWriteForm").text("댓글 취소");
		$("body").css("overflow-y","scroll");
		$(".mainCenter").append("<div class='replyEditor'><textarea rows='5' cols='87%' placeholder='댓글을 입력해주세요'></textarea></div>");
		$(".replyEditor").append("<button onclick='replyWrite()'>댓글 등록</button>");
	}else{
		$(".replyEditor").remove();
		$(".replyWriteForm").text("댓글 쓰기");
		$("body").css("overflow-y","hidden");
	}
}

function replyWrite(){
	if(confirm("댓글을 등록 하시겠습니까?")){
		replyWriteAjax({rContent:$(".replyEditor textarea").val(),rId:id,bno:$(".modifyBno").text()});
	}else{
		return;
	}
}

function replyWriteAjax(reply){
	$.ajax({
		url: "/board/replyWrite",
		type: "post",
		data: JSON.stringify(reply),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("댓글 작성이 완료되었습니다.");
			location.reload();
			}
		})
}

function moreReply(){
	if(moreReplys == false){
			$(".moreReplyForm").fadeIn(500);
			$(".moreReplyForm").append('<button class="close" onclick="closeMoreReply()">X 닫기</button>');
			$(".moreReplyForm").append("<div class='moreReplys'></div>")
		for(var i = 0; i<reply.length;i++){
			$(".moreReplys").append("<ul><li class='moreReplyLi'>"+reply[i].rId+"</li><li class='moreReplyLi'>"+reply[i].rContent+"</li><li class='moreReplyLi'>"+reply[i].regdate+"</li></ul>");
			if(reply[i].rId == id){
				$(".moreReplys ul").eq(i).append("<li class='modifyReply'><a href='#' onclick='freeBoardReplyModify("+reply[i].rNo+")'>수정</a></li><li class='deleteReply'><a href='#' onclick='freeBoardReplyRemove("+reply[i].rNo+")'>삭제</a></li>");
			}
		}
		moreReplys =true;
	}
}

function notMoreReply(){
	alert("댓글이 없습니다");
}

function closeMoreReply(){
	$(".moreReplyForm").fadeOut(500);
	moreReplys = false;
	$(".moreReplyForm").empty();
}

function freeBoardReplyModify(rNo){
	moreReplys =true;
	$("body").css("overflow","hidden");
	$(".moreReplyForm").fadeIn(500);
	$.ajax({
		url: "/board/freeBoardReplyGet/"+rNo,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
				$(".moreReplys").remove();
				$(".moreReplyForm").append('<button class="close" onclick="closeMoreReply()">X 닫기</button>');
				$(".moreReplyForm").append("<div><textarea class='replyModifyText' rows='13' cols='87%' style='border:none; outline: none;resize: none;background-color: transparent;'placeholder='내용을 입력해주세요'>"+result.rContent+"</textarea></div>");
				$(".moreReplyForm").append("<button onclick='freeBoardReplyModifyAjax("+result.rNo+")' style='border: none;width: 80px;height: 30px'>수정</button>")
				$(".moreReplyForm textarea").focus();
			}
		})
}

function freeBoardReplyModifyAjax(rNo){
	if(confirm("수정 하시겠습니까?")){
		var rContent = $(".replyModifyText").val();
		var info = {rNo:rNo,rContent:rContent}
		$.ajax({
			url: "/board/freeBoardReplyModify",
			type: "put",
			data: JSON.stringify(info),
			contentType: "application/json; charset=utf-8",
			success: function(result){
					alert("수정을 완료하였습니다.");
					location.reload();
				}
			})
	}else{
		return;
	}
}

function freeBoardReplyRemove(rNo){
	if(confirm("댓글을 삭제 하시겠습니까?")){
		$.ajax({
			url: "/board/freeBoardReplyRemove/"+rNo,
			type: "delete",
			contentType: "application/json; charset=utf-8",
			success: function(result){
				alert("댓글 삭제를 완료하였습니다.");
				location.reload();
				}
			})
	}else{
		return;
	}
}

