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
    <link rel="stylesheet" href="/resources/css/mail.css">
	
    
</head>
<body>
	<c:if test="${session == null}">
		<script>
			alert("로그인 해주세요");
			location.href="/";
		</script>
	</c:if>
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
					<h2 class="receiveMailBoxTitle">받은 우편함</h2>
				<div class="mailTitle">
					<span>우편은 최대 15개까지만 표시 가능합니다.</span>
					
				</div>
				<div class="mailList">
					
					<c:if test="${receiveMail[0] != null && receiveMail[0].receiveId == session.getId()}">
						<ul>
							<li>보낸이</li>
							<li>제목</li>
							<li>보낸 시각</li>
							<li>읽기 여부</li>
						</ul>
						<c:forEach var="mailList" items="${receiveMail}">				
							<ul onclick="mailDetail(${mailList.mailNo})">
								<li>${mailList.sendId}</li>
								<li>${mailList.title}</li>
								<li>${mailList.regdate}</li>
								<c:if test ="${mailList.isRead == 0}">
								<li>안 읽음</li>
								</c:if>
								<c:if test ="${mailList.isRead == 1}">
								<li>읽음</li>
								</c:if>
							</ul>
						</c:forEach>
						<script>
							$(".mailTitle").append('<button onclick="receiveTrue()" class="receiveTrue">전체 읽음</button>');
						</script>
					</c:if>
					<c:if test="${receiveMail[0] == null}">
						<div>받은 메일이 없습니다.</div>
					</c:if>
					<c:if test="${receiveMail[0] != null && receiveMail[0].receiveId != session.getId()}">
						<div>사용자가 아닙니다.</div>
					</c:if>
				</div>
			</div>
<!-- 			메일 디테일 모달 -->
			<div class="mailModal"> 
				
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
    <script src="/resources/js/mail.js"></script>
</body>
</html>