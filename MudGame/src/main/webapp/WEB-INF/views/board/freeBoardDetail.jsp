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
						<h2>${freeBoardDetail.title}</h2>
						<p>작성자 <span class="modifyId">${freeBoardDetail.id}</span></p>
						<p>NO.<span class="modifyBno">${freeBoardDetail.bno}</span></p>
					</div>
					<div class="imgShow">
						<c:if test="${freeBoardDetail.imgSrc != ''}">
						<img src ="${freeBoardDetail.imgSrc}" style="width: 100%;height:300px">
						</c:if>
					</div>
					<div class="content">
						<p>${freeBoardDetail.content}</p>
					</div>
					<div class="replys">
						
					</div>
					<div class="buttons">
						<c:if test="${session.getId() == freeBoardDetail.id}">
						<button onclick="location.href='/board/freeBoardModify?bno=${freeBoardDetail.bno}'">글 수정</button>
						<button onclick="freeBoardRemove()">글 삭제</button>
						
						</c:if>	
						<c:if test="${session.getId() != null}">
							<button class="replyWriteForm" onclick="replyWriteForm()">댓글 쓰기</button>
						</c:if>					
						<button class='moreReply'>댓글 더보기</button>
						
					</div>
				</div>
			</div>
        	<div class="chat">
        		<%@ include file = "../chat.jsp" %>
        	</div>  
    	</section> <!--.main-->
    	<%@ include file = "../footer.jsp" %>
    	<!-- 	모달창 -->
		<div class="moreReplyForm">
			
		</div>
	</div> <!--#wrap-->

    

    <!-- jquery 연결 -->
    <script src="/resources/js/jquery-3.6.0.js"></script>  
    <!-- main자바스크립트 -->
    <script src="/resources/js/main.js"></script>
    <!-- 게임 자바스크립트 -->
    <script src="/resources/js/game.js"></script>
	<!--board 자바스크립트 -->
    <script src="/resources/js/board.js"></script>
	<!--boardreply 자바스크립트 -->
	<script src="/resources/js/boardDetailReply.js"></script>
</body>
</html>