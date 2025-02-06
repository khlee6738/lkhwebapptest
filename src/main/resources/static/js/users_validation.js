//사용자정보 수정시 validation
function userInputChk(val1){	
	//사용자 비밀번호 validation - 사용자 등록후, 아이디와 동일하게 저장
	//var in_user_pw = $("#user_pw").val().trim();
	//if(in_user_pw.length <=0){
	//	alert("비밀번호는 필수 입력입니다.");
	//	$("#user_pw").focus();
	//	return false;
	//}else{
	//	var user_pw_EX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
	//	if (!user_pw_EX.test(in_user_pw)){
	//		alert("비밀번호는 영문과 숫자 조합으로 8-20자 이내로 입력하세요.");
	//		$("#user_pw").focus();
	//		return false;
	//	}	
	//}
	
	if(val1 == "reg"){
		//사용자 이름 validation
		var in_user_corp = $("#user_corp").val().trim();	
		if(in_user_corp.length <=0){
			alert("소속회사는 필수 입력입니다.");
			$("#user_corp").focus();
			return false;
		}	
	}
	
		
	//사용자 이름 validation
	var in_user_name = $("#user_name").val().trim();	
	if(in_user_name.length <=0){
		alert("사용자 이름은 필수 입력입니다.");
		$("#user_name").focus();
		return false;
	}else{
		var user_name_EX = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
		if (!user_name_EX.test(in_user_name)){
			alert("한글 또는 영문만 입력 가능합니다.");
			$("#user_name").focus();
			return false;
		}		
	}
	
	//사용자 이메일1 validation
	var in_user_email1 = $("#user_email1").val().trim();
	if(in_user_email1.length <=0){
		alert("이메일1은 필수 입력입니다.");
		$("#user_email1").focus();
		return false;
	}else{
		var user_email_EX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		if (!user_email_EX.test(in_user_email1)){
			alert("이메일1 : 이메일 양식에 맞춰서 입력바랍니다.");
			$("#user_email1").focus();
			return false;
		}		
	}
	
	//사용자 이메일2 validation
	var in_user_email2 = $("#user_email2").val().trim();
	if(in_user_email2.length >0){
		var user_email_EX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		if (!user_email_EX.test(in_user_email2)){
			alert("이메일2 : 이메일 양식에 맞춰서 입력바랍니다.");
			$("#user_email2").focus();
			return false;
		}		
	}	
	
	//모바일 validation
	var in_user_mobile = $("#user_mobile").val().trim();
	var in_user_tel = $("#user_tel").val().trim();
	if(in_user_mobile.length <=0 && in_user_tel.length <=0){
		alert("모바일과 전화중 하나는 입력하셔야 합니다.");
		$("#user_mobile").focus();
		return false;
	}
	
	return true;	
}
