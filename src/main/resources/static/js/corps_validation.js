//회사등록 및 수정시 validation
function corpInputChk(){	
		
	//회사명 validation
	var in_co_name = $("#co_name").val().trim();	
	if(in_co_name.length <=0){
		alert("회사명 은 필수 입력입니다.");
		$("#co_name").focus();
		return false;
	}	
	
	//사업자 번호 validation
	var in_co_rno = $("#co_rno").val().trim();	
	if(in_co_rno.length <=0){
		alert("사업자번호는 필수 입력입니다.");
		$("#co_rno").focus();
		return false;
	}	

	//대표자명 validation
	var in_co_pname = $("#co_pname").val().trim();	
	if(in_co_pname.length <=0){
		alert("대표자명은 필수 입력입니다.");
		$("#co_pname").focus();
		return false;
	}	
	
	//대표 이메일 validation
	var in_co_email = $("#co_email").val().trim();
	if(in_co_email.length <=0){
		alert("대표 이메일은 필수 입력입니다.");
		$("#co_email").focus();
		return false;
	}else{
		var co_email_EX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		if (!co_email_EX.test(in_co_email)){
			alert("이메일 양식에 맞춰서 입력바랍니다.");
			$("#co_email").focus();
			return false;
		}		
	}	
	
	return true;	
}
