<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>10MinutesMud</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- 메인 js -->
    <link rel="stylesheet" href="/resources/css/game.css">
    <link rel="stylesheet" href="/resources/css/main.css">
    <link rel="stylesheet" href="/resources/css/board.css">

    
</head>
<body>
	<%@ include file = "../header.jsp" %>
    <div id="wrap">
    		<input type="hidden" value="${session.getName()}" id="userName">
        <section class="main">
            <div class="bigGame">
            </div>
            <div class="game">
            	<%@ include file = "../gamePhone.jsp" %>
            </div> <!--.game-->
			<div class="mainCenter">
				<div class="detailForm">
					<div class="detailTop">
						<input class="freeBoardModifyTitle" type="text" value="${freeBoardModify.title}">
						<p>작성자 ${freeBoardModify.id}</p>
						<p>NO.<span class="modifyBno">${freeBoardModify.bno}</span></p>
					</div>
					<div class="freeboardImgDiv" style="margin-bottom: 10px">
							<input class="imgs" type="text" placeholder="이미지 주소를 입력 후 등록버튼을 눌러주세요" value="${freeBoardModify.imgSrc}">
							<button class="imgUploads" onclick="imgUploads()" type="button">등록</button>
					</div>
					<div class="imgShow">
						<c:if test="${freeBoardModify.imgSrc != ''}">
							<button class="closed" onclick="imgClosed()">X 취소</button>
							<img src ="${freeBoardModify.imgSrc}" style="width: 100%;height:300px">
						</c:if>
					</div>
					<div class="content">
						<textarea class="contentText" rows="10" cols="88%">${freeBoardModify.content}</textarea>
					</div>
					<div class="replys">
						
					</div>
					<div class="buttons">
						<button onclick="freeboardMoidfyUpdate()">수정</button>
						<button onclick="history.back()">취소</button>
					</div>
				</div>
			</div>
        	<div class="chat">
        		<%@ include file = "../chat.jsp" %>
        	</div>  
    	</section> <!--.main-->
    	<%@ include file = "../footer.jsp" %>
	</div> <!--#wrap-->

    

    <!-- jquery 연결 -->
    <script src="/resources/js/jquery-3.6.0.js"></script>  
    <!-- main자바스크립트 -->
    <script src="/resources/js/main.js"></script>
    <!-- 게임 자바스크립트 -->
    <script src="/resources/js/game.js"></script>
    <script src="/resources/js/board.js"></script>
</body>
</html>