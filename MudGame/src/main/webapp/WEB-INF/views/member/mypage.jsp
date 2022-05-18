<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
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
    <link rel="stylesheet" href="/resources/css/mypage.css">

    
</head>
<body>
	<c:if test="${session == null}">
		<script>
			alert("로그인 해주세요.");
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
				<div class="memberCheck">
					<input class="memberCheckPw" type="password" placeholder="본인 확인을 위해 비밀번호를 입력해주세요">
					<button class="memberCheckBtn" onclick="memberCheck()">확인</button>
					<script>
						function memberCheck(){
							if(${session.getPw()} != $(".memberCheckPw").val()){
								alert("비밀번호가 일치하지 않습니다.");
							}else{
								myPageInfo();
								if(${session.getIsHavePlayer() == 1}){
									$(".memberInfos").append("<button onclick='removePlayer()'>캐릭터 삭제</button>")
								}
							}
						}
						
					</script>
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
    <script src="http://html2canvas.hertzen.com/dist/html2canvas.js"></script>
    <!-- main자바스크립트 -->
    <script src="/resources/js/main.js"></script>
    <!-- 게임 자바스크립트 -->
    <script src="/resources/js/game.js"></script>
<!--     마이페이지 스크립트 -->
	<script src="/resources/js/mypage.js"></script>
</body>
</html>