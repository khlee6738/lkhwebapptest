//회사등록 : submit전에 회사코드 확인 실행 값을 확인
$(function(){
        $('#corp_reg_form').submit( function() {
			if($("#dupchk").val() == 'false'){
				alert( '회사코드 확인을 클릭 하세요.' );
				return false;
			}
        } );
} ); 

// 회사등록: 회사코드 체크
function CorpDupChk(){	
	var co_type = $("#co_type").val();	
	if (co_type == "") {		
	    alert("회사 유형을 선택해 주세요.");         
	    $("#co_type").focus();
	    return false;
	}
	
	$.post(
		"corpGetLastCode",
		{ co_type : co_type},
		function(data){
			if(data != ""){
				//alert("사용 가능한 회사코드는 "+co_type+data+"입니다.");
				$("#dupchk").val("true");	//회사코드 체크 유무를 true로 변경
				$("#co_code").val(co_type+data);	//회사코드값 셋팅
				$("#co_code").css("background-color","silver");	//co_code필드 색상을 회색으로 변경
				//$("#corp-check-button").css("background-color","silver");	//회사코드 확인 버튼 색상을 회색으로 변경
				$("#corp-check-button").attr("disabled",true);	//회사코드 확인 버튼 사용불가
			}else{
				alert("Data-base 서버 접속 오류 입니다. 관리자에게 문의하세요.");
				$("#dupchk").val("false");				
			}
			//alert("data="+co_type+data);			
		}		
	)		
};

// 회사등록: 회사코드 체크 버튼 초기화(새로고침 및 회사유형 재선택시 사용)
function init_co_code(){	
	$("#dupchk").val("false");	//회사코드 체크 유무를 false로 변경
	$("#co_code").css("background-color","");	//co_code필드 색상을 회색에서 없음으로 변경
	//$("#corp-check-button").css("background-color","#759D2A");	//회사코드 확인 버튼 색상을 회색으로 변경
	$("#corp-check-button").attr("disabled",false);	//회사코드 확인 버튼 사용가능으로 재변경
	$("#co_code").val("");	//회사코드 필드 빈값으로 초기화
}


// 회사등록,수정 : 첨부한 회사 사용 인감도장 이미지파일 미리보기
function setThumbnail(event) {
	var reader = new FileReader();
	reader.onload = function(event) {
		var img = document.createElement("img");
		img.setAttribute("src", event.target.result);
		img.setAttribute("width", "68px");
		img.setAttribute("height", "68px");
		document.getElementById("signImg").innerHTML='';
		document.querySelector("div#signImg").appendChild(img);          
	};
	reader.readAsDataURL(event.target.files[0]);
}

//우편번호 가져오기 : kakap API이용
function getPost() {	
  new daum.Postcode({
    oncomplete: function (data) {
      document.querySelector("#co_post").value = data.zonecode;
      document.querySelector("#co_addr").value = data.address
    }
  }).open();
}




