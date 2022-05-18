
var imgSrc = "";
var imgSrcs = $(".imgShow img").attr("src");
$(function(){
	//이미지 등록 버튼 누르면
	
	$(".imgUpload").on("click",function(){
		if($(".imgs").val() == "" || !$(".imgs").val().includes("http")){
			alert("주소를 정확히 입력해주세요\nhttp://혹은 https://를 포함한 주소를 입력 해주세요")
			return;
		}
		$(".imgShow").append("<button type='button'class='closed' onclick='closed()'>X 취소</button>");
		$(".imgShow").append("<img src="+$('.imgs').val()+" style='width:100%;height:300px;'>");
		imgSrc = $(".imgs").val();
		$(".imgUpload").attr("disabled","true");
	})
	
})
// 이미지 등록후 취소버튼 누르면
function closed(){
	$(".imgShow").empty();
	$(".imgUpload").removeAttr("disabled");
	$(".imgs").val("");
	imgSrc = "";

}
//게시글 수정 버튼 클릭 후 이미지 수정 로직

function imgClosed(){
	$(".imgShow").empty();
	$(".imgUploads").removeAttr("disabled");
	$(".imgs").val("");
	imgSrcs = "";
}

function imgUploads(){
	if($(".imgs").val() == "" || !$(".imgs").val().includes("http")){
		alert("주소를 정확히 입력해주세요\nhttp://혹은 https://를 포함한 주소를 입력 해주세요")
		return;
	}
	$(".imgShow").empty();
	$(".imgShow").append("<button type='button'class='closed' onclick='imgClosed()'>X 취소</button>");
	$(".imgShow").append("<img src="+$('.imgs').val()+" style='width:100%;height:300px;'>");
	imgSrcs = $(".imgShow img").attr("src");
	$(".imgUploads").attr("disabled","true");
	
}

//글쓸때 내용이없으면

function confrimWrite(){
	if($(".freeboardTitle").val() == "" || $(".freeboardContent").val() == ""){
		alert("내용을 입력해 주세요");
		return false;
	}
	if(confirm("등록 하시겠습니까?")){
		freeBoardWrite({title:$(".freeboardTitle").val(),content:$(".freeboardContent").val(),id:players.id,camp:players.camp,imgSrc:imgSrc});
		return true;
	}else{
		return false;
	}
	
}

//수정 하기 버튼 누른후 수정 버튼을 클릭하면

function freeboardMoidfyUpdate(){
	if(confirm("수정 하시겠습니까?")){
		freeboardMoidfyUpdateAjax({title:$(".freeBoardModifyTitle").val(),content:$(".contentText").val(),imgSrc:imgSrcs,bno:$(".modifyBno").text()})
	}else{
		return;
	}
}

function freeboardMoidfyUpdateAjax(modify){
	$.ajax({
		url: "/board/freeboardMoidfyUpdate",
		type: "put",
		data: JSON.stringify(modify),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("수정에 성공했습니다.");
			location.href = "/board/freeBoard";
			}
		})
}


function freeBoardWrite(freeBoard){
	$.ajax({
		url: "/board/freeBoardWrite",
		type: "post",
		data: JSON.stringify(freeBoard),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("글작성에 성공했습니다.");
			location.href = "/board/freeBoard";
			}
		})
}

function freeBoardRemove(){
	if(players.id == $(".modifyId").text()){
		if(confirm("글을 삭제 하시겠습니까?")){
			freeBoardRemoveAjax($(".modifyBno").text());
		}else{
			return;
		}
	}else{
		alert("글 작성자가 아닙니다.");
		return;
	}
//	
}

function freeBoardRemoveAjax(bno){
	$.ajax({
		url: "/board/freeBoardRemove",
		type: "delete",
		data: JSON.stringify(bno),
		contentType: "application/json; charset=utf-8",
		success: function(result){
			alert("글삭제를 완료하였습니다.");
			location.href = "/board/freeBoard";
			}
		})
}

