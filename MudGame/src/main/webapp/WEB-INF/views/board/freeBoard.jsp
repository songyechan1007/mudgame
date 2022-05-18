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
				<h2 class="mainCenterHtag">자유게시판</h2>
				<form action="/board/freeBoard" method="GET" onsubmit="return submitCheck();">
					<table>
						<tr style="background-color: transparent">
							<td style="background-color: transparent">
								<select name="amount" id="amount">
									<option value="10">페이지표시수</option>
									<option value="10" ${pageMaker.cri.amount eq '10'?'selected':''}>10</option>
									<option value="15" ${pageMaker.cri.amount eq '15'?'selected':''}>15</option>
								</select>
							</td>
							<td style="background-color: transparent">
								<select name="type" style="backgorund-color: transparent;outline: none">					
									<option value="">전체</option>
									<option value="t" ${pageMaker.cri.type eq 't'?'selected':''}>제목</option>
									<option value="i" ${pageMaker.cri.type eq 'w'?'selected':''}>글작성자</option>
									<option value="c" ${pageMaker.cri.type eq 'c'?'selected':''}>글내용</option>
									<option value="tc" ${pageMaker.cri.type eq 'tc'?'selected':''}>제목+글내용</option>
								</select>
							</td>
							<td style="background-color: transparent">
								<input type="text" style="outline:none" name="keyword" id="keyword" autocomplete=off>
							</td>
							<td>
								<input type="submit" value="검색" id="search">
							</td>
							<td>
								<p id="searchCount">검색 결과 : ${pageMaker.total}개</p>
							</td>
						</tr>
					</table>
				</form>
				<table class="freeboardTable">
					<thead>
						<tr><th>글번호</th><th colspan="2" style="width: 100px">제목</th><th>작성자</th><th>작성날짜</th><th>조회수</th></tr>
					</thead>
					<tbody>
						<c:forEach var="board" items="${blist}" >
							
							<tr style="text-align: center"onClick = "location.href='/board/freeBoardDetail?bno=${board.bno}'">
								<td>${board.bno}</td>
								<td colspan="2">${board.title}</td>
								<td>${board.id}</td>
								<td>${board.regdate}</td>
								<td>${board.count}</td>
							</tr>
							
						</c:forEach>
					</tbody>
					<c:if test="${pageMaker.total eq '0'}">
						<tr>
							<td colspan="7" style="text-align:center">검색 결과가 없습니다</td>
						</tr>
					</c:if>
					<c:if test="${session != null}">
						<tr style="text-align: center;align: center" >
							<td><a href="/board/freeBoardWrite">글쓰기</a></td>
						</tr>
					</c:if>
				</table>
				<div class="pager">
					<c:if test="${pageMaker.prev}">
						<a href="/board/freeBoard?type=${pageMaker.cri.type}&keyword=${pageMaker.cri.keyword}&pagenum=${pageMaker.startPage-1}&amount=${pageMaker.cri.amount}">Prev</a>
					</c:if>
					<c:forEach var = "num" begin="${pageMaker.startPage}" end="${pageMaker.endPage}">
						<c:if test="${num eq pageMaker.cri.pagenum}">
							<span style="font-weight: bold"><a href="/board/freeBoard?type=${pageMaker.cri.type}&keyword=${pageMaker.cri.keyword}&pagenum=${num}&amount=${pageMaker.cri.amount}">${num}</a></span>
						</c:if>
						<c:if test="${num ne pageMaker.cri.pagenum}">
							<a href="/board/freeBoard?type=${pageMaker.cri.type}&keyword=${pageMaker.cri.keyword}&pagenum=${num}&amount=${pageMaker.cri.amount}">${num}</a>
						</c:if>
					</c:forEach>
					<c:if test="${pageMaker.next}">
						<a href="/board/freeBoard?type=${pageMaker.cri.type}&keyword=${pageMaker.cri.keyword}&pagenum=${pageMaker.endPage+1}&amount=${pageMaker.cri.amount}">Next</a>
					</c:if>
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
</body>
</html>