var checkJoin1 =false;
var checkJoin2 =false;
var checkJoin3 =false;
var checkJoin4 =false;
// 메뉴바 드롭다운
$(document).ready(function(){

	
	
    $(".mainMenu>li>a")
        
        .on("click",function(){
            if($(this).hasClass("on")){
                $(this).removeClass("on");
                $(this).next().slideUp();
            }
               else{
                $(".mainMenu>li>a").removeClass("on");
                $(".subMenu").slideUp();
                $(this).addClass("on");
                $(this).next().slideToggle();
            } 
    })    
})

//로그인 fadein
let login = $(function(){
    $(".loginClick").on("click",function(){
        $(".login").fadeIn(500);
        $("#wrap")
        .css("opacity","0.3")
        .css("z-index","-500");
        
        $("body")
        .css("overflow","hidden");
        $("header").css("overflow","hidden");
        $(".util").css("display","none");
        $(".subMenu").slideUp();
    })

    $(".loginClose").on("click",function(){
        $(".login").fadeOut(500);
        $(".login input").val("");
        $("#wrap")
        .css("opacity","1")
        .css("z-index","0")
        $("body")
        .css("overflow","auto");
        $("header")
        .css("overflow","");
        $(".util").css("display","block");
    })
})

//회원가입 fade
let join = $(function(){
    $(".joinClick").on("click",function(){
        $(".join").fadeIn(500);
        $("#wrap")
        .css("opacity","0.3")
        .css("z-index","-500");
        $("body")
        .css("overflow","hidden");
        $("header").css("overflow","hidden");
        $(".util").css("display","none");
        $(".subMenu").slideUp();
    })

    $(".joinClose").on("click",function(){
        $(".join").fadeOut(500);
        $(".join input").val("");
        $(".joinBtn").val("회원가입");
        $(".checkId").fadeOut(500);
        $(".checkPw1").fadeOut(500);
        $(".checkPw2").fadeOut(500);
        $("#wrap")
        .css("opacity","1")
        .css("z-index","0")
        $("body")
        .css("overflow","auto");
        $("header").css("overflow","");
        $(".util").css("display","block");
    })
})

// 회원가입 로직
$(function(){
		
	 $(".joinId").on("keyup",function(){
	        if($(".joinId").val().length >12 || $(".joinId").val().length < 4){
	            $(".checkId").fadeIn(500);
	            checkJoin1 = true;
	        }
	        else{
	        	
	            $(".checkId").fadeOut(500);
	            checkJoin1 = false;
	            var joinIds = $(".joinId").val()
	            // ajax에 입력
		        idOverRapCheck(joinIds);
	        }
	        
	        
	        
	    })
	    $(".joinPw1").on("keyup",function(){
	        if($(".joinPw1").val().length< 8){
	            $(".checkPw1").fadeIn(500);
	            checkJoin2 = true;
	        }else{
	            $(".checkPw1").fadeOut(500);
	            checkJoin2 = false;
	        }
	       
	    })
	    $(".joinPw2").on("keyup",function(){
	        if($(".joinPw2").val() != $(".joinPw1").val()){
	            $(".checkPw2").fadeIn(500);
	            checkJoin3 = true;
	            
	         } else{
	            $(".checkPw2").fadeOut(500);
	            checkJoin3 = false;
	        }
	      
	    })
    
})

	function idOverRapCheck(id){
	$.ajax({
		url: "/idOverRapCheck/"+id,
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
			if(result=="success"){
				$(".checkId2").fadeOut(500);
				checkJoin4 = false;
			}else{
				$(".checkId2").fadeIn(500);
				checkJoin4 = true;
			}
		}
	})
}

	function joinCheck(){
	let joinName = document.querySelector(".joinName");
	let joinId = document.querySelector(".joinId");
	let joinPw1 = document.querySelector(".joinPw1");
	let joinPw2 = document.querySelector(".joinPw2");
	let checkId = document.querySelector(".checkId");
	let checkPw1 = document.querySelector(".checkPw1");
	let checkPw2 = document.querySelector(".checkPw2");
	let joinForm = document.querySelector(".joinForm");
	if(joinName.value=="" || joinId.value=="" || joinPw1.value=="" || joinPw2.value==""){
		alert("빈 란을 채워주세요");
		return false;
	}if(checkJoin1 == true || checkJoin2 == true || checkJoin3 == true || checkJoin4 == true){
		alert("올바른 값을 입력해주세요.")
		return false;
	}
		alert("회원가입이 완료 되었습니다.");
		joinForm.submit();
		
	}




//전체화면 전환
let bigGame = $(function(){
    $(".bigSize").on("click",function(){
        $(".game").css("display","none");
        $(".mainCenter").css("display","none");
        $(".bigGame").fadeIn(800);
    })
})

//채팅

$(function(){
    $(".chatEnter").on("click",function(){ 
        if($(".chatting").val()!="")
            $(".chatText").append($("#userName").val()+"님 : "+$(".chatting").val()+"<br>");
            $(".chatting").val("");
    })
})
//키워드 입력
function submitCheck(){
				if(document.querySelector("#keyword").value == ""){
					alert("키워드를 입력해주세요");
					return false;
				}
				return true; 
			}


function PopupExplain(){
    var val = document.querySelector(".gameBg").outerHTML;
    var w = window.open("130","130","130");
    w.document.write(val);
    w.document.close();
    }


