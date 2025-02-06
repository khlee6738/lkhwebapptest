//계약서관리 validation

// 신규 계약서 등록시 계약서 번호 체크 버튼 클릭 : 현재 사용안함 (등록 저장시점에 자동 발번하여 Insert 하고,  이후 계약번호를 alert으로 표시하기로 함.)
function ContDupChk(){	
	var ct_ctdate = $("#ct_ctdate").val();	
	if (ct_ctdate == "") {		
	    alert("계약 일자를 입력해 주세요.");         
	    $("#ct_ctdate").focus();
	    return false;
	}
	
	$.post(
		"GetContLastId",
		{ ct_ctdate : ct_ctdate},
		function(data){
			if(data != ""){
				//alert("사용 가능한 계약번호는 "+data+"입니다.");
				$("#dupchk").val("true");	//계약번호코드 체크 유무를 true로 변경
				$("#ct_code").val(data);	//계약번호값 셋팅
				$("#ct_code").css("background-color","silver");	//계약번호필드 색상을 회색으로 변경				
				$("#cont-check-button").attr("disabled",true);	//계약번호 확인 버튼 사용불가
			}else{
				alert("Data-base 서버 접속 오류 입니다. 관리자에게 문의하세요.");
				$("#dupchk").val("false");				
			}
			//alert("data="+co_type+data);			
		}		
	)		
};

// 신규 계약서 등록 시 계약번호 체크 버튼 초기화(새로고침 및 계약일자 재선택시 사용) : 현재 사용안함(계약번호 체크 비활성화함).
function init_ct_code(){	
	$("#dupchk").val("false");	//계약번호 체크 유무를 false로 변경
	$("#ct_code").css("background-color","");	//co_code필드 색상을 회색에서 없음으로 변경	
	$("#cont-check-button").attr("disabled",false);	//회사코드 확인 버튼 사용가능으로 재변경
	$("#ct_code").val("");	//회사코드 필드 빈값으로 초기화
}

// 신규 계약서 등록 validation
function contInputChk(){
	//계약번호 확인 및 계약번호 필수체크 --> 등록 저장시점에 자동 발번하여 Insert 하고,  이후 계약번호를 alert으로 표시. 
	//var in_ct_code = $("#ct_code").val().trim();
	//if(in_ct_code.length <=0){
	//	alert("계약번호 확인을 클릭하세요.");		
	//	return false;
	//}	
	//계약일자
	var in_ct_ctdate = $("#ct_ctdate").val().trim();
	if(in_ct_ctdate.length <=0){
		alert("계약일자는 필수 입니다.");	
		$("#ct_ctdate").focus();	
		return false;
	}	
	//계약담당자
	var in_ct_aid = $("#ct_aid").val().trim();
	if(in_ct_aid.length <=0){
		alert("계약담당자는 필수 입니다.");	
		$("#ct_aid").focus();	
		return false;
	}
	//계약명
	var in_ct_title = $("#ct_title").val().trim();
	if(in_ct_title.length <=0){
		alert("계약명은 필수 입니다.");	
		$("#ct_title").focus();	
		return false;
	}
	//계약회사 
	var in_ct_corp = $("#ct_corp").val().trim();
	if(in_ct_corp.length <=0){
		alert("계약회사는 필수 입니다.");	
		$("#ct_corp").focus();	
		return false;
	}	
	//계약시작일 
	var in_ct_startdate = $("#ct_startdate").val().trim();
	if(in_ct_startdate.length <=0){
		alert("계약시작일자는 필수 입니다.");	
		$("#ct_startdate").focus();	
		return false;
	}
	//계약종료일
	var in_ct_enddate = $("#ct_enddate").val().trim();
	if(in_ct_enddate.length <=0){
		alert("계약종료일자는 필수 입니다.");	
		$("#ct_enddate").focus();	
		return false;
	}
	//계약시작일 < 계약종료일
	if(in_ct_startdate >= in_ct_enddate){
		alert("계약시작일자는 계약종료일자 이전 이어야 합니다.");	
		$("#ct_startdate").focus();	
		return false;		
	}
	//공급가
	var in_in_sup_price = $("#in_sup_price").val().trim();
	if(in_in_sup_price.length <=0 || in_in_sup_price == 0){
		alert("공급가는 필수이며, 0 이상 입력하세요.");	
		$("#in_sup_price").focus();	
		return false;
	}
	//계약서 파일 
	var in_ct_docfile = $("#ct_docfile").val().trim();
	if(in_ct_docfile.length <=0){
		alert("계약서파일은 필수 입니다.");		
		return false;
	}else{		
		if((in_ct_docfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}				
	}
	//용역비산출내역서	
	var in_ct_aafile = $("#ct_aafile").val().trim();
	if(in_ct_aafile.length <=0){
		alert("용역비산출내역서는 필수 입니다.");
		return false;
	}else{
		if((in_ct_aafile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("용역비산출내역서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}				
	}	
	//계약일반조건	
	var in_ct_abfile = $("#ct_abfile").val().trim();
	if(in_ct_abfile.length <=0){
		alert("계약일반조건은 필수 입니다.");		
		return false;
	}else{
		if((in_ct_abfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약일반조건 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}				
	}	
	//개인정보처리위탁예약서	
	var in_ct_acfile = $("#ct_acfile").val().trim();
	if(in_ct_acfile.length <=0){
		alert("개인정보처리위탁예약서 파일은 필수 입니다.");		
		return false;
	}else{
		if((in_ct_acfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("개인정보처리위탁예약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}				
	}	
	//정보보호서약서	
	var in_ct_adfile = $("#ct_adfile").val().trim();
	if(in_ct_adfile.length <=0){
		alert("정보보호서약서은 필수 입니다.");		
		return false;
	}else{
		if((in_ct_adfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("정보보호서약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}				
	}	
	//계약보증금지급각서	
	var in_ct_a1file = $("#ct_a1file").val().trim();
	if(in_ct_a1file.length > 0){	//필수조건 아님, 첨부가 존재할때만 체크
		if((in_ct_a1file.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약보증금지급각서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}	
	//하자보증금지급각서
	var in_ct_a2file = $("#ct_a2file").val().trim();
	if(in_ct_a2file.length > 0){	//필수조건 아님, 첨부가 존재할때만 체크
		if((in_ct_a2file.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("하자보증금지급각서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}	
	return true;
}

//계약서 수정 validation
function contEditChk(){
	//계약담당자
	var in_ct_aid = $("#ct_aid").val().trim();
	if(in_ct_aid.length <=0){
		alert("계약담당자는 필수 입니다.");	
		$("#ct_aid").focus();	
		return false;
	}
	//계약명
	var in_ct_title = $("#ct_title").val().trim();
	if(in_ct_title.length <=0){
		alert("계약명은 필수 입니다.");	
		$("#ct_title").focus();	
		return false;
	}	
	
	//계약시작일 
	var in_ct_startdate = $("#ct_startdate").val().trim();
	if(in_ct_startdate.length <=0){
		alert("계약시작일자는 필수 입니다.");	
		$("#ct_startdate").focus();	
		return false;
	}
	//계약종료일
	var in_ct_enddate = $("#ct_enddate").val().trim();
	if(in_ct_enddate.length <=0){
		alert("계약종료일자는 필수 입니다.");	
		$("#ct_enddate").focus();	
		return false;
	}
	//계약시작일 < 계약종료일
	if(in_ct_startdate >= in_ct_enddate){
		alert("계약시작일자는 계약종료일자 이전 이어야 합니다.");	
		$("#ct_startdate").focus();	
		return false;		
	}
	//공급가
	var in_in_sup_price = $("#in_sup_price").val().trim();
	if(in_in_sup_price.length <=0 || in_in_sup_price == 0){
		alert("공급가는 필수이며, 0 이상 입력하세요.");	
		$("#in_sup_price").focus();	
		return false;
	}	
	
	//계약서 파일 
	var in_ct_docfile = $("#ct_docfile").val().trim();	
	if(in_ct_docfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_docfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}		

	//용역비산출내역서	
	var in_ct_aafile = $("#ct_aafile").val().trim();
	if(in_ct_aafile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_aafile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("용역비산출내역서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}
	
	//계약일반조건	
	var in_ct_abfile = $("#ct_abfile").val().trim();
	if(in_ct_abfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_abfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약일반조건 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}
	
	//개인정보처리위탁계약서	
	var in_ct_acfile = $("#ct_acfile").val().trim();
	if(in_ct_acfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_acfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("개인정보처리위탁계약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}	
	
	//정보보호서약서	
	var in_ct_adfile = $("#ct_adfile").val().trim();
	if(in_ct_adfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_adfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("정보보호서약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}		
	
	//계약보증금지급각서	
	var in_ct_a1file = $("#ct_a1file").val().trim();
	if(in_ct_a1file.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_a1file.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약보증금지급각서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}	
	//하자보증금지급각서
	var in_ct_a2file = $("#ct_a2file").val().trim();
	if(in_ct_a2file.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_a2file.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("하자보증금지급각서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}		
	
	return true;
}

//변경계약서 등록 validation
function contRevisionChk(){
	//계약담당자
	var in_ct_aid = $("#ct_aid").val().trim();
	if(in_ct_aid.length <=0){
		alert("계약담당자는 필수 입니다.");	
		$("#ct_aid").focus();	
		return false;
	}
	//계약명
	var in_ct_title = $("#ct_title").val().trim();
	if(in_ct_title.length <=0){
		alert("계약명은 필수 입니다.");	
		$("#ct_title").focus();	
		return false;
	}	
	
	//계약시작일 
	var in_ct_startdate = $("#ct_startdate").val().trim();
	if(in_ct_startdate.length <=0){
		alert("계약시작일자는 필수 입니다.");	
		$("#ct_startdate").focus();	
		return false;
	}
	//계약종료일
	var in_ct_enddate = $("#ct_enddate").val().trim();
	if(in_ct_enddate.length <=0){
		alert("계약종료일자는 필수 입니다.");	
		$("#ct_enddate").focus();	
		return false;
	}
	//계약시작일 < 계약종료일
	if(in_ct_startdate >= in_ct_enddate){
		alert("계약시작일자는 계약종료일자 이전 이어야 합니다.");	
		$("#ct_startdate").focus();	
		return false;		
	}
	//공급가
	var in_in_sup_price = $("#in_sup_price").val().trim();
	if(in_in_sup_price.length <=0 || in_in_sup_price == 0){
		alert("공급가는 필수이며, 0 이상 입력하세요.");	
		$("#in_sup_price").focus();	
		return false;
	}	
	
	//계약서 파일 
	var in_ct_docfile = $("#ct_docfile").val().trim();
	if(in_ct_docfile.length <=0){
		alert("계약서파일은 필수 입니다.");		
		return false;
	}else{		
		if((in_ct_docfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}				
	}	

	//용역비산출내역서	
	var in_ct_aafile = $("#ct_aafile").val().trim();
	if(in_ct_aafile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_aafile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("용역비산출내역서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}
	
	//계약일반조건	
	var in_ct_abfile = $("#ct_abfile").val().trim();
	if(in_ct_abfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_abfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약일반조건 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}
	
	//개인정보처리위탁계약서	
	var in_ct_acfile = $("#ct_acfile").val().trim();
	if(in_ct_acfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_acfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("개인정보처리위탁계약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}	
	
	//정보보호서약서	
	var in_ct_adfile = $("#ct_adfile").val().trim();
	if(in_ct_adfile.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_adfile.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("정보보호서약서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}		
	
	//계약보증금지급각서	
	var in_ct_a1file = $("#ct_a1file").val().trim();
	if(in_ct_a1file.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_a1file.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("계약보증금지급각서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}	
	//하자보증금지급각서
	var in_ct_a2file = $("#ct_a2file").val().trim();
	if(in_ct_a2file.length > 0){	//첨부가 존재할때만 체크
		if((in_ct_a2file.split('\\').pop().toLowerCase()).split('.').pop() != "pdf"){
			alert("하자보증금지급각서 파일은 pdf파일만 첨부 가능합니다.");			
			return false;			
		}		
	}		
	
	return true;
}



//계약서 수정에서 사용 : 첨부미리보기에서 DB조회파일/사용자첨부파일 구분함.
function chkPDF(inputID,fileID,filename){		
	var fileChk = document.getElementById(fileID)	
	if(fileChk == null){
		openPDF2(inputID)
	}else{
		if(fileChk.files.length==0){
			openPDF2(filename)
		}else{
			openPDF(fileID);
		}
	}
}

//DB(서버)저장 전 첨부한 PDF열기
function openPDF(inputID){
	var fileInput = document.getElementById(inputID);
    const file = fileInput.files[0];
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const pdfData = new Uint8Array(this.result);
        const blob = new Blob([pdfData], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
    };
    fileReader.readAsArrayBuffer(file);
}

//서버 업로드용 : 이것이 작동이 안되서 아래 openPDF2를 만듬.
function openPDF1(inputID){
	var fileName = $("#"+inputID).val();
	var xhr = new XMLHttpRequest();
	xhr.open('GET','/openPDF/'+fileName,true);
	xhr.responseType='blob';
	
	xhr.onload = function(){
		if (xhr.status === 200) {
            var blob = xhr.response;
            var pdfUrl = URL.createObjectURL(blob);
            window.open(pdfUrl, '_blank');
        }
	};
	
	xhr.send();
}

//저장후 DB(서버)용 파일 PDF열기
function openPDF2(filename){
	if(filename != ""){
	window.open('openpdf?id='+filename,'_blank');
	//window.open('/filedownload?val1=contfile&id='+filename,'_blank');		
	}
	
}

//계약서 수정 : 파일명 보여주기 필드값 변경하기
function filechange(infile,viewfile,dbfile){	
	var fileInput = document.getElementById(infile);
	var filelength = fileInput.files.length;	
	
	if(filelength > 0){
		var fileName = fileInput.files[0].name;		
	}else{
		var fileName = $("#"+dbfile).val();
	}	
	$("#"+viewfile).val(fileName);
}

function checkSignfile(val1){	
	var return_val="";
	$.post(
		"GetSignFileName",
		{ co_code : val1},
		function(data){
			alert("data="+data);
			if(data != "" && data != null){	
				//alert()			
				return_val = "true";
			}else{
				return_val = "false";
			}						
		}		
	)
	return return_val;
}
