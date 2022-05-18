<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
        <header id="header">
            <div class="headerIn">
                <h1 class="logo">
                    <a href="/"></a>
                </h1>
                <nav class="mainNav">
                    <ul class="mainMenu">
                        <li><a href="#">게시판</a>
                            <ul class="subMenu boardSub">
                                <li><a href="/board/freeBoard">자유게시판</a></li>
                                
                            </ul> <!--subMenu-->
                        </li>
                        <li><a href="#">캐릭터</a>
                            <ul class="subMenu charSub">
<!--                                 <li><a href="#">캐릭터 정보</a></li> -->
<!--                                 <li><a href="#">무기 강화</a></li> -->
                                <li><a href="/board/lank">전체 랭킹</a></li>
                            </ul><!--subMenu-->
                        </li>
                        <li><a href="#">우편함</a>
                            <ul class="subMenu shopSub">
                                <li><a href="/mailBox/receiveMailBox?id=${session.getId()}">받은 우편함</a></li>
                                <li><a href="/mailBox/sendMailBox?id=${session.getId()}">보낸 우편함</a></li>
                            </ul><!--subMenu-->
                        </li>
                        <li><a href="/bank/bank">은행</a></li>
                    </ul> <!--.mainMenu-->
                </nav> <!--mainNav-->
                <c:if test="${session == null}">
                <div class="util">
                    <ul>
                        <li><a href="#" class="loginClick">로그인</a></li>
                        <li><a href="#" class="joinClick">회원가입</a></li>
                    </ul>
                </div> <!--.util-->
                </c:if>
                <c:if test="${session != null}">
                	<div class="util">
                    <ul>
                        <li><a href="/member/mypage" class="userInfo">${session.getName()} 님</a></li>
                        <li><a href="/logout" class="logOutClick">로그아웃</a></li>
                    </ul>
                </div> <!--.util-->
                </c:if>
            </div> <!--.headerIn-->
        </header>
        <!-- 로그인 영역 -->
        <div class="login" id="login">
            <div class="loginClose"><a href="#">X</a></div>
            <form action="/login" class="loginForm" method="post">
                <fieldset>
                    <div class="titleColor"></div>
                    <label for="#" class="loginTxt">LOGIN</label>
                    <input type="text" class="loginInput userId" placeholder="USERID" name="id">
                    <input type="password" class="loginInput userPw" placeholder="PASSWORD" name="pw">
                    <button type="submit" class="loginBtn">LOGIN</button>
                </fieldset>
            </form>
        </div> <!--.login-->

    <!-- 회원가입 영역 -->
    <div class="join" id="join">
        <div class="joinClose"><a href="#">X</a></div>
        <form action="/join" class="joinForm" method="post">
            <fieldset>
                <div class="titleColor"></div>
                <label for="#" class="joinTxt">회원가입</label>
                <input type="text" class="joinInput joinName" placeholder="사용자명" name="name">
                <input type="text" class="joinInput joinId" placeholder="아이디" name="id">
                <p class="check checkId">아이디는 4글자 이상 12글자 미만만 입력 가능합니다.</p>
                <p class="check checkId2">중복된 아이디 입니다.다른 아이디를 사용하세요</p>
                <input type="password" class="joinInput joinPw1" placeholder="비밀번호" name="pw">
                <p class="check checkPw1">비밀번호는 8글자 이상만 가능합니다.</p>
                <input type="password" class="joinInput joinPw2" placeholder="비밀번호 확인">
                <p class="check checkPw2">비밀번호 랑 일치하지 않습니다.</p>
                <button type="button" class="joinBtn" onclick="return joinCheck();">회원가입</button>
            </fieldset>
        </form>
    </div> <!--.join-->