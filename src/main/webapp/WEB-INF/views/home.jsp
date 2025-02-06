<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script>
//window.onload = function(){	
	var msg = ""; 
	msg = "${msg}";
	if(msg != "")
	{
		alert(msg);	
		$("#user_pw").focus();
	}	
//}
</script>        
           <main>
                <h2 class="main title">로그인</h2>
        
                <div class="breadcrumb">
                    <h3 class="hidden">breadlet</h3>
                    <ul>
                        <li>home</li>
                        <li>사용자정보</li>
                        <li>로그인</li>
                    </ul>
                </div>
        
                <div class="margin-top first">
                    <h3 class="hidden">로그인 정보 입력</h3>
                    <form class="login-form" method="post" action="login">
                        <fieldset>
                            <legend class="hidden">로그인 폼</legend>
                             
                            <h4>
                                <img src="../images/member/txt-title2.png" />
                            </h4>
 							                    
                            <ul class="login-box">
                                <li>
                                    <label for="id">아이디</label>
                                    <input id="id" type="text" name="user_id" value="${user_id}" required placeholder="아이디" placeholder="영문과 숫자 8자" maxlength="8" pattern="^\w{5,8}$"/></li>
                                <li>
                                    <label for="pw">비밀번호</label>
                                    <input id="pw" type="password" name="user_pw" required placeholder="비밀번호" pattern="^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$"/></li>
                            </ul>
                            
                            <div class="login-btn-box">
                                <!-- <input type="hidden" name="" value="" /> -->
                                <input type="submit" class="btn login-btn"/>
                            </div>
                            <ul class="login-option">
                                <li>
                                    <span>아이디 또는 비밀번호 분실시,<br>관리자에게 문의 하시기 바랍니다.<br>02-761-2223, coreplus@coreplus.co.kr</span>
                                  
                                </li>                             
                            </ul>
                        </fieldset>
                    </form>
                </div>        
            </main>                  
           