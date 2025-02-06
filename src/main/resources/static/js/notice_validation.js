//공지사항 등록 및 수정시 validation
function noticeInputChk(){	
		
	//제목 validation
	var in_TITLE = $("#TITLE").val().trim();	
	if(in_TITLE.length <=0){
		alert("제목은 필수 입력입니다.");
		$("#TITLE").focus();
		return false;
	}	
	
	//제목 validation
	var in_CONTENT = $("#CONTENT").val().trim();	
	if(in_CONTENT.length <=0){
		alert("내용은 필수 입력입니다.");
		$("#CONTENT").focus();
		return false;
	}
		
	return true;	
}
