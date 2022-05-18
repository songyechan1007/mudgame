<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/game.css">
</head>
<body>
	<div id="firstText">
		<input type="hidden" value="${session.getId()}" id="sessionGetId">
		<p>안녕하세요 ${session.getName()} 님 환영합니다.</p>
		<p>게임을 진행하시려면</p>
		<c:if test="${session.getIsHavePlayer() == 0}"> <!-- 게임 캐릭터가 생성되어 있지않으면 -->
		<button id="gameInbtn" onclick="firstGameMenu()">확인</button>
		</c:if>
		<c:if test="${session.getIsHavePlayer() == 1}"> <!-- 게임 캐릭터가 생성되어있으면 -->
		<button id="gameInbtn" onclick="gameIn()">확인</button>
		</c:if>
		버튼을 눌러주세요.
	</div>
	 
	<script src="/resources/js/jquery-3.6.0.js"></script>
	<script src="http://html2canvas.hertzen.com/dist/html2canvas.js"></script>
	<script src="/resources/js/game.js"></script>

</body>
</html>