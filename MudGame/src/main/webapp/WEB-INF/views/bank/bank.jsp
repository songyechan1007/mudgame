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
    <link rel="stylesheet" href="/resources/css/bank.css">

	
    
</head>
<body>
	<c:if test="${session.getId() == null}">
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
				<h2>송금하기</h2>
				<div class="remittance">
					<input class="recipient" type="text" placeholder="골드 받을 ID를 입력 후 아이디 확인버튼을 클릭해주세요">
					<button class="overlapButton" onclick="overlap()">아이디 확인</button>
					<button class="cancleButton" onclick="cancleButton()">취소</button>
					<input class="remittanceMoney" onkeydown="javascript: return event.keyCode == 69 ? false : true" type="number" placeholder="보내실 금액을 입력해주세요">
				</div>
				<div class="haveMoney">
					<lable>보유 금액 : </lable>
					<span></span>
				</div>
				<button class="sendMoney" disabled onclick="sendMoney()">송금 하기</button>
				
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
    <script src="/resources/js/bank.js"></script>
</body>
</html>