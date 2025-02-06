// 회원가입 : 아이디 중복체크
function UserDupChk(){	
	var id = $("#id").val();
	var userExId = /^\w{5,20}$/;	//영문과 숫자 5~20자 이내 ^\w{5,20}$
	if (!userExId.test(id)) {		
	    alert("아이디는 형식에 맞춰 입력해주세요 (영문과 숫자 5~20자 이내)");         
	    $("#id").focus();
	    return false;
	}	
	
	$.post(
		"memberCheck",
		{ id : id},
		function(data){
			if(data == 0){
				alert("사용가능한 아이디 입니다.");
				$("#dupchk").val("true");				
				$("#id").css("background-color","silver");	//id필드 색상을 회색으로 변경
				//$("#id").prop("readonly",true);	//아래것과 같은 효과
				$("#id").attr("readonly",true);		//id필드 readonly로 변경
				$("#id-check-button").attr("disabled",true);	//중복확인 버튼 사용불가						
			}else if(data == 1){
				alert("이미 사용중인 아이디 입니다.");	
				$("#dupchk").val("false");
				$("#id").focus();			
			}else{
				alert("Data-base 서버 접속 오류 입니다. 관리자에게 문의하세요.");
				$("#dupchk").val("false");
			}
			
		}		
	)
};


