//사용자정보등록: submit전에 아이디 확인 실행 값을 확인
$(function(){
        $('#user_reg_form').submit( function() {
			if($("#dupchk").val() == 'false'){
				alert( '아이디 확인을 클릭 하세요.' );
				return false;
			}
        } );
} ); 

// 사용자정보등록: 사용자 아이디 체크
function UserDupChk(){	
	var user_corp = $("#user_corp").val();	
	if (user_corp == "") {		
	    alert("소속 회사를 선택해 주세요.");         
	    $("#user_corp").focus();
	    return false;
	}
	
	$.post(
		"userGetLastId",
		{ user_corp : user_corp},
		function(data){
			if(data != ""){
				//alert("사용 가능한 아이디는 "+user_corp+data+"입니다.");
				$("#dupchk").val("true");						//아이디 확인 체크 유무를 true로 변경
				$("#user_id").val(user_corp+data);				//아이디 필드값 셋팅 (회사코드+일련번호(2자리))
				$("#user_id").css("background-color","silver");	//아이디 필드 색상을 회색으로 변경
				$("#user_pw").val(user_corp+data);				//비밀번호 필드값 셋팅 (회사코드+일련번호(2자리))
				$("#user_pw").css("background-color","silver");	//비밀번호 필드 색상을 회색으로 변경				
				$("#user-check-button").attr("disabled",true);	//아이디 확인 버튼 사용불가로 변경
			}else{
				alert("Data-base 서버 접속 오류 입니다. 관리자에게 문의하세요.");
				$("#dupchk").val("false");				
			}
			//alert("data="+co_type+data);			
		}		
	)		
};

// 사용자정보등록: 아이디 확인 버튼 초기화(새로고침 및 소속회사 재선택시 사용)
function init_user_id(){	
	$("#dupchk").val("false");						//아이디확인 체크 유무를 false로 변경
	$("#user_id").css("background-color","");		//아이디 필드 색상을 회색에서 없음으로 변경
	$("#user_id").val("");							//아이드 필드 빈값으로 초기화
	$("#user_pw").css("background-color","");		//비밀번호 필드 색상을 회색에서 없음으로 변경	
	$("#user_pw").val("");							//비밀번호 필드 빈값으로 초기화
	$("#user-check-button").attr("disabled",false);	//아이디 확인 버튼 사용가능으로 재변경	
}
