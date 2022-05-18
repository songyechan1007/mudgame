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
				<h2 style="text-align: center;margin-bottom: 10px">랭킹</h2>
				<table style="width: 100%; text-align: center">
					<tr>
						<th>순위</th><th>레벨</th><th colspan="2">캐릭터명</th><th>진영</th><th>종족</th>
					</tr>
				</table>
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
    <script src="/resources/js/lank.js"></script>
</body>
</html>