<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/game.css">
<link rel="stylesheet" href="/resources/css/main.css">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<button onclick="screenshot()">진행중인 게임 화면 캡처</button>
	<p>캡처 버튼을 클릭 후 생성된 목록 오른쪽 버튼 -> 다른이름으로 저장</p>
	<div class="game">
		<%@ include file="./gamePhone.jsp" %>
	</div>
	<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
    <script src="http://html2canvas.hertzen.com/dist/html2canvas.js"></script>
	<script src="/resources/js/main.js"></script> 
	<script src="/resources/js/game.js"></script> 
	<div id="hi"></div>
</body>
</html>