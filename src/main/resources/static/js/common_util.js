// 화면(page) 이동 : post방식
function postForm(path, params, method) {
	method = method || 'post';
	//method = method || 'get';
    
    var form = document.createElement('form');
    form.setAttribute('name','ptemp');
    form.setAttribute('method', method);
    form.setAttribute('action', path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement('input');
            hiddenField.setAttribute('type', 'hidden');
            hiddenField.setAttribute('name', key);
            hiddenField.setAttribute('value', params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();    
}

//숫자만 입력 양식 체크
function inputOnlyNum(element){
	  let inputStr = element.value;	  
	  element.value = inputStr.replace(/[^0-9]/gi,"");	    	  
}

//숫자와 영어만 입력 양식 체크
function inputOnlyNumEng(element){
	  let inputStr = element.value;	  
	  element.value = inputStr.replace(/[^0-9a-zA-Z]/gi,"");	    	  
}

//한글과 영어만 입력 양식 체크
function inputOnlyKorEng(element){
	  let inputStr = element.value;	  
	  element.value = inputStr.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/gi,"");	    	  
}

//휴대폰번호 입력 양식 체크
function inputOnlyMobie(element){
	  let inputStr = element.value;
	  //element.value = inputStr.replace( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g, "$1-$2-$3" );
	  element.value = inputStr.replace(/[^0-9]/gi,"");
	  if(inputStr.length == "11"){
		element.value = inputStr.replace( /(^01.{1}|[0-9]{3})([0-9]{4})([0-9]{4})/g, "$1-$2-$3" );    
	  }	  	  
}

//일반전화번호 입력 양식 체크
function inputOnlyPhone(element){
	  let inputStr = element.value;	  
	  element.value = inputStr.replace(/[^0-9]/gi,"");
	  if(inputStr.length >= "9"){
		element.value = inputStr.replace( /(^02.{0}|[0-9]{3})([0-9]{4})([0-9]{4})/g, "$1-$2-$3" );    
	  }	  	  
}

//사업자번호, 주민번호 입력 양식 체크
function inputRnoCheck(element){	
	element.value = element.value.replace(/[^0-9]/gi,"");	
	let inputStr = element.value;		
	var tmp = "";
	var bullet = "-";	
	
	if(inputStr.length > 3 && inputStr.length < 6){
		tmp = tmp + inputStr.substr(0, 3);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(3);
        element.value = tmp;		
	}else if(inputStr.length >= 6 && inputStr.length <= 10){
		tmp = tmp + inputStr.substr(0, 3);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(3, 2);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(5);        
        element.value = tmp;				
	}else if(inputStr.length >= 11){
		tmp = tmp + inputStr.substr(0, 6);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(6);	
        element.value = tmp;	
	}
}

//일반전화 + 휴대전화 입력양식 체크
function inoutAllPhoneCheck(element){	
	element.value = element.value.replace(/[^0-9]/gi,"");
	let inputStr = element.value;	
	var tmp = "";
	var bullet = "-";
	//alert(inputStr.length);
	if(inputStr.length > 3 && inputStr.length < 8){		
		tmp = tmp + inputStr.substr(0, 3);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(3);        
        element.value = tmp;
	}else if(inputStr.length >= 8 && inputStr.length <= 9){
		tmp = tmp + inputStr.substr(0, 2);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(2, 3); 
        tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(5, 4);               
        element.value = tmp;
	}else if(inputStr.length == 10){		
		if(inputStr.substr(0, 2) == "02"){
			tmp = tmp + inputStr.substr(0, 2);
			tmp = tmp + bullet;
	        tmp = tmp + inputStr.substr(2, 4);			
		}else{
			tmp = tmp + inputStr.substr(0, 3);
			tmp = tmp + bullet;
	        tmp = tmp + inputStr.substr(3, 3);			
		} 
        tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(6);
        element.value = tmp;		
	}else if(inputStr.length > 10) {		
		tmp = tmp + inputStr.substr(0, 3);
		tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(3, 4); 
        tmp = tmp + bullet;
        tmp = tmp + inputStr.substr(7);
        element.value = tmp;		
	}	
}

//금액 등...천단위 이상 숫자에 , 표시
function moneyFormat(obj) {
	obj.value = comma(uncomma(obj.value));
}
function comma(str) {
	var str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
function uncomma(str) {
	var str = String(str);
	return str.replace(/[^\d]+/g, '');
}

