<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<div class="gameBg">
	<button type="button" class="screenshot" onclick="PopupExplain()">스크린샷</button>
	<button type="button" class="screenshotStart" onclick="screenshotStart()">화면캡쳐</button>
	<button class="screenshotFont" onclick="screenshotTuto()">사용 방법</button>
	<div class="display">

	</div>
	<c:if test="${session != null}">
	<script>
		document.querySelector(".gameBg").style.backgroundImage = "url('')";
		document.querySelector(".gameBg").style.backgroundColor = "#fff";
	</script>
		<%@ include file = "./game.jsp" %>
	</c:if>
</div>
