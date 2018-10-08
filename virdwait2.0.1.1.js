//################################################################################################################################################
//###################################################	AUTHOR :  SAGAR VD							##############################################
//###################################################	EMAIL : sagarvd1995@gmail.com				##############################################
//###################################################	THIS PROJECT IS LICENSED UNDER MIT LICENSE.	##############################################
//###################################################	CODENAME : VIRDWAIT2.JS						##############################################
//###################################################	FILE:Virdwait2.0.1.1.min.prod.js			##############################################
//###################################################	BETA VERSION CONTAIN BUGS					##############################################
//################################################################################################################################################
/*
# LICENSED UNDER MIT License
#This and the above lines should stay intact for Copyright Information.
*/
var STR=typeof "VIRDWAIT", DIG=typeof 0, FUN=typeof function(){},OBJ=typeof {},UNDEF=typeof undefined;
APP_NAME='VirDwaitJs';
ERR=[[600,'ERR_NO_WD','A document and a window is required for '+APP_NAME+' to Run'],[601,'ERR_INV_REQ','INVALID REQUEST'],[602],[603],[604],[605],[606],[607],[608]];
__EMAIL=/^[a-zA-Z0-9]{2,}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z0-9]{2,6}){0,1}$/;
__URL=/^(https:\/\/|http:\/\/|ftp:\/\/){0,1}(www.){1}[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6}){0,1}(\/){0,1}$/;
__MAILLINK=/^mailto:[a-zA-Z0-9]{2,}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z0-9]{2,6}){0,1}$/;
__STRING=/^[a-zA-Z]+$/;
__NUMBER=/^[0-9]+$/;
__NAME=/^[A-Z]{1}[a-z]*((\s|\.){1}[A-Z]{1,3}[a-z]*){0,}$/;
__HTMLELEMENT=/^\[object\s[a-zA-Z]+\]/;
__ATTRIBUTES=/[a-zA-Z\-]+(\=(\'[a-zA-Z0-9\s\;\:\-]+\'+|\"[a-zA-Z0-9\s\;\:\-]+\"))?/g;
__MOBILE=/^(\+([0-9]|[0-9][0-9]|[0-4][0-9][0-9]))?[0-9]{10}$/;
__HTMLTAG=/^\<[a-zA-Z0-9]+(\s[a-zA-Z\-]+(\=\'[a-zA-Z0-9\s\;\:\-]+\'+|\=\"[a-zA-Z0-9\s\;\:\-]+\")?)*(\s\/)?\>$/;
__HTMLTAGWITHCLOSE=/^<[a-zA-Z0-9]+(\s[a-zA-Z\-]+(\=\'[a-zA-Z0-9\s\;\:\-]+\'+|\=\"[a-zA-Z0-9\s\;\:\-]+\")?)*>([a-zA-Z0-9\s\.\,\/\!\\\@\#\$\%\^\&\*\(\)\{\}\[\]]+)*<\/[a-zA-Z0-9]+>$/;
__PASSWORD=/^([a-zA-Z0-9-_.]+|[\@\#\$\%\&\*\(\)\s]+){8,}$/;
__USERNAME=/^[a-zA-Z0-9-.]{5,}$/;
__DATE=/^([0-9]{1}|(1|2){1}[0-9]{1}|3[0-1]{1})[\.\-\/]{1}([0-9]{1}|1[0-2]{1})[\.\-\/]{1}(19[0-9]{2}|200[0-9]{1}|201[0-6]{1})$/;
__HEX=/^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
__EVENTS=/^(blur|cancel|change|click|close|dblclick|error|focus|keydown|keypress|keyup|load|scroll|select|submit|unload)$/;
(function(D,W,S,O,M,N){ 
		  eL=[D];
		  W.D=D;
		  W.W=W;
		  W.S=S;
		  W.O=O;
		  W.M=M;
		  W.N=N;
		  if(!D || !W){  
		  	try{ 
				console.log(ERR[0][0]+ERR[0][1]);
				throw(ERR[0][2]);
			}
			catch(_ERR){ 
				throw(_ERR);
			}
		  };
		  VD=function(SELECTOR){ 
		  	return VD.core.init(SELECTOR);
		  };
		  VD.core=function(){
			  console.log('This should not be executed');
			  return eL;
		  };
		  VD.core.init=function(SELECTOR){
			  try{
				  if($.regExp(__HTMLELEMENT,SELECTOR)){
					  eL=[SELECTOR];
				  }
				  else{
					  eL=D.querySelectorAll(SELECTOR);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.Select=function(){
			try{
				if(arguments.length<=0 || typeof arguments[0]!=DIG) throw "ERROR";
				if(arguments[0]<=eL.length){
					eL=[eL[arguments[0]]];
				}
				return eL;
			}
			catch(_ERR){
				return eL;
			}
		  };
		  VD.add=function(){
			  try{
				  i=0;
			  	  while(i<eL.length){
					j=0;
				  	while(j<arguments.length){
						k=arguments[j].cloneNode(true);
						eL[i].appendChild(k);
						j++;
					}
					i++;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.after=function(){
			  try{
				  i=0;
			  	  while(i<eL.length){
					j=0;
					l=0;
					while(l<eL[i].parentNode.children.length){
						if(eL[i].parentNode.children[l]==eL[i]){
							break;
						}
						l++;
					}
					l++;
				  	while(j<arguments.length){
						k=arguments[j].cloneNode(1);
						if(eL[i].parentNode.children[l]==null)
							eL[i].parentNode.appendChild(k);
						else
							eL[i].parentNode.insertBefore(k,eL[i].parentNode.children[l]);
						j++;
					}
					i++;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.before=function(){
			  try{
				  i=0;
				  while(i<eL.length){
					  j=0;
					  while(j<arguments.length){
						  k=arguments[j].cloneNode(1);
						  eL[i].parentNode.insertBefore(k,eL[i]);
						  j++;
					  }
					  i++;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.addFirst=function(){
			try{
				i=0;
				while(i<eL.length){
					j=0;
					while(j<arguments.length){
						k=arguments[j].cloneNode(1);
						if(eL[i].children.length>0)
							eL[i].insertBefore(k,eL[i].children[0]);
						else
							eL[i].appendChild(k);
						
						j++;
					}
					i++;
				}
				return eL;
			}
			catch(_ERR){
				return eL;
			} 
		  };
		  VD.remove=function(){
			  try{
				  i=0;
				  while(i<eL.length){
					  eL[i].parentNode.removeChild(eL[i]);
					  i++;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.create=function(){
			  try{
				  if(arguments.length<=0) throw "ERROR";
				  if(arguments.length==1 && typeof arguments[0]==STR){
					  return D.createElement(arguments[0]);
				  }
				  else
				  if(arguments.length==2 && typeof arguments[0]==STR && typeof arguments[1]==OBJ){
					  var ELEM=D.createElement(arguments[0]);
					  i=0;
					  while(i<O.keys(arguments[1]).length){
						  if(O.keys(arguments[1])[i].toUpperCase()=='TEXT'){
							  ELEM.innerHTML=arguments[1][O.keys(arguments[1])[i]];
						  }
						  else{
							  ELEM.setAttribute(O.keys(arguments[1])[i],arguments[1][O.keys(arguments[1])[i]]);
						  }
						  i++;
					  }
					  return ELEM;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.attr=function(){
			  try{
				  if(arguments.length==0) throw "ERROR";
				  if(arguments.length==1 && typeof arguments[0]==STR){
					  i=0;
					  ATTRS=[];
					  while(i<eL.length){
						  ATTRS.push(eL[i].getAttribute(arguments[0]));
						  i++;
					  }
					  return ATTRS;
				  }
				  if(arguments.length==2 && typeof arguments[0]==STR && typeof arguments[1]==STR){
					  i=0;
					  while(i<eL.length){
						  eL[i].setAttribute(arguments[0],arguments[1]);
						  i++;
					  }
					  return eL;
				  }
				  if(arguments.length==1 && typeof arguments[0]==OBJ){
					  i=0;
					  while(i<O.keys(arguments[0]).length){
						  j=0;
						  while(j<eL.length){
							  eL[j].setAttribute(O.keys(arguments[0])[i],arguments[0][O.keys(arguments[0])[i]]);
							  j++;
						  }
						  i++;
					  }
					  return eL;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }	
		  };
		  VD.html=function(){
			  try{
				  if(eL.length==0) throw "ERROR";
				  if(arguments.length==0){
					  _HTML=[];
					  i=0;
					  while(i<eL.length){
						  _HTML.push(eL[i].innerHTML);
						  i++;
					  }
					  return _HTML;
				  }
				  if(arguments.length==1 && typeof arguments[0]==STR){
					  i=0;
					  while(i<eL.length){
						  eL[i].innerHTML=arguments[0];
						  i++;
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.on=function(ACTION,CALLBACK){
			  try{
				  if(!ACTION || typeof ACTION!=STR || !regExp(__EVENTS,ACTION) || !CALLBACK || typeof CALLBACK!=FUN) throw "ERROR";
				  if(W.addEventListener && typeof W.addEventListener==FUN){
					  i=0;
					  while(i<eL.length){
						  eL[i].addEventListener(ACTION,CALLBACK);
						  i++;
					  }
				  }
				  else
				  if(W.attachEvent && typeof W.attachEvent==FUN){
					  i=0;
					  while(i<eL.length){
						  eL[i].attachEvent(ACTION,CALLBACK);
						  i++;
					  }
				  }
				  else{
					  i=0;
					  TEMP=eL;
					  L=eL.length;
					  while(IN<L){
						  eL=TEMP;
						  $.Select(IN).attr("on"+ACTION,CALLBACK);
						  IN++;
					  }
					  eL=TEMP;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.click=function(CALLBACK){
			  try{
				  if(CALLBACK)
				  return $.on('click',CALLBACK);
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.load=function(CALLBACK){
			  try{
				  if(CALLBACK)
				  return $.on('load',CALLBACK);
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.blur=function(CALLBACK){
			  try{
				  return $.on('blur',CALLBACK);
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.focus=function(CALLBACK){
			  try{
				  return $.on('focus',CALLBACK);
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.submit=function(CALLBACK){
			  try{
				  return $.on('submit',CALLBACK);
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.hide=function(){
			  try{
				  K=0;
				  temp=eL;
				  L=eL.length;
				  while(K<L){
					  eL=temp;
					  $.Select(K).css('display','none');
					  K++;
				  }
				  eL=temp;
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.show=function(){
			  try{
				  K=0;
				  temp=eL;
				  L=eL.length;
				  while(K<L){
					  eL=temp;
					  $.Select(K).css('display','');
					  K++;
				  }
				  eL=temp;
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };  
		  VD.toggle=function(){
			  try{
				  K=0;
				  temp=eL;
				  L=eL.length;
				  while(K<L){
					  eL=temp;
					  $.Select(K).css('display')=='none'?$.css('display',''):$.css('display','none');
					  K++;
				  }
				  eL=temp;
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.repeat=function(TIMES,CALLBACK,DELAY){
			  try{
				  if(TIMES && typeof TIMES==DIG && CALLBACK && typeof CALLBACK==FUN){
					  DELAY=(DELAY || 1);
					  COUNTER=1;
					  var EX=W.setInterval(function(){if(COUNTER<=TIMES){CALLBACK(); COUNTER++;} else W.clearInterval(EX); },DELAY);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };							   
		  VD.val=function(){
			try{
				if(eL.length==0) throw "ERROR";
				if(arguments.length==0){
					i=0;
					VALS=[];
					while(i<eL.length){
						if(eL[i].toString()=="[object HTMLInputElement]" || eL[i].toString()=="[object HTMLTextAreaElement]"){
							VALS.push(eL[i].value);
						}
						i++;
					}
					return VALS;
				}
				if(arguments.length==1 && (typeof arguments[0]==STR || typeof arguments[0]==DIG)){
					i=0;
					while(i<eL.length){
						if(eL[i].toString()=="[object HTMLInputElement]" || eL[i].toString()=="[object HTMLTextAreaElement]"){
							eL[i].value=arguments[0];
						}
						i++;
					}
					return eL;
				}
				return eL;
			}
			catch(_ERR){
				return eL;
			} 
		  };
		  VD.setCookie=function(NAME,VALUE,EXPIRE){
			  try{
				  if(!NAME || typeof NAME!=STR || !VALUE || typeof VALUE!=STR && typeof VALUE!=DIG) throw "ERROR";
				  EXPIRE=(typeof EXPIRE==UNDEF || parseFloat(EXPIRE)==NaN)?0.041666666666666664:parseFloat(EXPIRE);
				  DATEOBJ=new Date();
				  DATEOBJ.setTime(DATEOBJ.getTime()+(parseFloat(EXPIRE)*24*60*60*1000));
				  D.cookie=NAME+"="+VALUE+";expires="+DATEOBJ.toUTCString();
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.getCookie=function(NAME){
			  try{
				  if(!NAME || typeof NAME!=STR) throw "ERR";
				  var COOKIE=D.cookie;
				  NAME+="=";
				  var STARTPOS=COOKIE.indexOf(NAME);
				  if(STARTPOS==-1) throw "ERROR";
				  STARTPOS+=NAME.length;
				  var ENDPOS=(COOKIE.indexOf(';',STARTPOS)==-1)?COOKIE.length:COOKIE.indexOf(';',STARTPOS);
				  return COOKIE.substring(STARTPOS,ENDPOS);
			  }
			  catch(_ERR){
				  return false;
			  }
		  };
		  VD.updateCookie=function(NAME,EXPIRE){
			  try{
				  if(!NAME || typeof NAME!=STR) throw "ERROR";
				  var VALUE=($.getCookie(NAME) || '1');
				  typeof EXPIRE!=DIG && typeof EXPIRE!=FLOAT?$.setCookie(NAME,VALUE):$.setCookie(NAME,VALUE,EXPIRE);
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.deleteCookie=function(NAME){
			  try{
				  if(!NAME || typeof NAME!=STR) throw "ERROR";
				  $.updateCookie(NAME,0);
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.toASCII=function(TEXT){
			  try{
				  if(!TEXT || typeof TEXT!=STR) throw "ERROR";
				  var ASCII='',i=0;
				  while(i<TEXT.length){
					  ASCII+=TEXT.charCodeAt(i).toString()+".";
					  i++;
				  }
				  return ASCII;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.cleanString=function(STRING,PARTICLES){
			  try{
				  if(!STRING || typeof STRING!=STR || !PARTICLES || typeof PARTICLES!=STR) throw "ERROR";
				  while(STRING.indexOf(PARTICLES)!=-1){
					  STRING=STRING.replace(PARTICLES,"");
				  }
				  return STRING;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.progressBar=function(P){
			  try{
				  if(!P || typeof P!=OBJ){
					  P={};
				  }
				  P.fg=(P.fg || '#00f000');
				  P.bg=(P.bg || '#ffffff');
				  P.width=parseInt((P.width || 100));
				  P.height=parseInt((P.height || 25));
				  P.delay=(P.delay || 10);
				  var div=$.create('div',{style:'border:1px solid #000; background-color:'+P.bg+'; width:'+P.width+'px; height:'+P.height+'px;',name:'PROGRESSBARBOX'});
				  var inner=$.create('div',{style:'border:0px; margin:0px; background-color:'+P.fg+'; width:0px; height:'+P.height+'px;',name:'PROGRESSBAR','data-delay':P.delay});
				  div.appendChild(inner);
				  return div;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.progressBar.start=function(){
			  try{
				  temp=eL;
				  var widthTarget=parseInt($('[name=PROGRESSBARBOX]').css('width'));
				  delay=parseInt(($('[name=PROGRESSBAR]').attr('data-delay')[0] || 10));
				  COUNTER=((widthTarget/delay) || 1);
				  delay=1;
				  COUNTER=parseInt(COUNTER);
				  delay*=1000;
				  while(COUNTER/2 == parseInt(COUNTER/2)){
					  COUNTER=COUNTER/2;
					  delay=delay/2;
				  }
				  W.setInterval(function(){width=parseInt($('[name=PROGRESSBAR]').css('width')); width+=COUNTER; if(width<=widthTarget){$.css('width',width+'px');}},delay);
				  eL=temp;
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.Loader=function(P){
			  try{
				  if(!P || typeof P!=OBJ) P={};
				  P.width=(parseInt(P.width) || 100)+"px";
				  P.height=P.width;
				  P.i=parseInt(P.width)/2;
				  P.i=P.i+"px";
				  P.fg=$.regExp(__HEX,P.fg)?P.fg:'#ccc';
				  P.bg=$.regExp(__HEX,P.bg)?P.bg:'#fff';
				  P.margin=0-(parseInt(P.i))-1+"px";
				  P.Timing=(parseInt(P.Timing) || 10);
				  var Boundary=$.create('div',{style:"border:1px solid #000; width:"+P.width+"; border-radius:90px 90px 90px 90px; height:"+P.height+";overflow:hidden;background-color:"+P.bg,name:'LOADERBOX','data-timing':P.Timing,'data-fg':P.fg});
				  var DIV1=$.create('div',{style:"width:"+P.i+";height:"+P.i,name:'BLOCK1'});
				  var DIV2=$.create('div',{style:"border-left:1px solid #000;width:"+P.i+";height:"+P.i+";margin-left:"+P.i+";margin-top:"+P.margin,name:'BLOCK2'});
				  var DIV3=$.create('div',{style:"border-top:1px solid #000;width:"+P.i+";height:"+P.i+";margin-left:"+P.i,name:'BLOCK3'});
				  var DIV4=$.create('div',{style:"border-right:1px solid #000;border-top:1px solid #000;width:"+P.i+";height:"+P.i+";margin-left:0px;margin-top:"+P.margin,name:'BLOCK4'});
				  Boundary.appendChild(DIV1);
				  Boundary.appendChild(DIV2);
				  Boundary.appendChild(DIV3);
				  Boundary.appendChild(DIV4);
				  return Boundary;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.Loader.start=function(){
			  try{
				  $('[name=LOADERBOX]');
				  var Timing=parseInt($.attr('data-timing')[0]);
				  var fg=$.attr('data-fg')[0];
				  var bg=$.css('background-color');
				  var i=1,count=0;
				  W.INV=W.setInterval(function(){j=(i==1)?4:i-1;$('[name=BLOCK'+i+']').css('background-color',fg); if(i==1)$('[name=BLOCK'+j+']').css('background-color',bg); else $('[name=BLOCK'+j+']').css('background-color',bg); i<4?i++:i=1; count+=100; if(count/1000>=Timing){ W.clearInterval(INV);}},100);
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.XHR=function(){
			  try{
				  return W.XMLHttpRequest? new XMLHttpRequest() : W.ActiveXObject("Microsoft.XMLHTTP")? new ActiveXObject("Microsoft.XMLHTTP"):new ActiveXObject("MSXML2.XMLHTTP.3.0");
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.Get=function(){
			  try{
				  if(arguments.length==3 && typeof arguments[0]==STR && typeof arguments[1]==FUN && typeof arguments[2]==FUN){
					  var url=arguments[0],success=arguments[1],failure=arguments[2];
				  }
				  else
				  if(arguments.length==1 && typeof arguments[0]==OBJ && arguments[0].hasOwnProperty("URL") && arguments[0].hasOwnProperty("SUCCESS") && arguments[0].hasOwnProperty("FAILURE") && typeof arguments[0].URL==STR && typeof arguments[0].SUCCESS==FUN && typeof arguments[0].FAILURE==FUN){
					  var url=arguments[0].URL,success=arguments[0].SUCCESS,failure=arguments[0].FAILURE;  
				  }
				  if(typeof url!=UNDEF){
					  var FLAG=0;
					  X=VD.XHR();
					  X.open("GET",url,true);
					  arguments[0].hasOwnProperty("BEFORE")?arguments[0].BEFORE():void(0);
					  X.send();
					  X.onreadystatechange=function(){
						  if(X!=null){
							  if(X.status==200){
								  if(X.readyState==4){
									  FLAG=1;
									  success(X.responseText);
								  }
							  }
							  else{
								  FLAG=1;
								  failure("STATUS_ERR",X.status);
								  X=null;
							  }
						  }
					  };
					  if(FLAG=0){
						  failure("RS_ERR",X.readyState);
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  console.log(ERR[1][0]+"\n"+ERR[1][1]);
				  return eL;
			  }
		  };
		  VD.Post=function(){
			  try{
				  if(arguments.length==4 && typeof arguments[0]==STR &&typeof arguments[1]==STR && typeof arguments[2]==FUN && typeof arguments[3]==FUN){
					  var url=arguments[0],data=arguments[1],success=arguments[2],failure=arguments[3];
				  }
				  else
				  if(arguments.length==1 && typeof arguments[0]==OBJ && arguments[0].hasOwnProperty("DATA") && arguments[0].hasOwnProperty("URL") && arguments[0].hasOwnProperty("SUCCESS") && arguments[0].hasOwnProperty("FAILURE") && typeof arguments[0].DATA==STR && typeof arguments[0].URL==STR && typeof arguments[0].SUCCESS==FUN && typeof arguments[0].FAILURE==FUN){
					  var url=arguments[0].URL,success=arguments[0].SUCCESS,failure=arguments[0].FAILURE,data=arguments[0].DATA;  
				  }
				  if(typeof url!=UNDEF){
					  var FLAG=0;
					  X=VD.XHR();
					  X.open("POST",url,true);
					  X.setRequestHeader("content-type","application/x-www-form-urlencoded");
					  arguments[0].hasOwnProperty("BEFORE")?arguments[0].BEFORE():void(0);
					  X.send(data);
					  X.onreadystatechange=function(){
						  if(X!=null){
							  if(X.status==200){
								  if(X.readyState==4){
									  FLAG=1;
									  success(X.responseText);
								  }
							  }
							  else{
								  FLAG=1;
								  failure("STATUS_ERR",X.status);
								  X=null;
							  }
						  }
					  };
					  if(FLAG=0){
						  failure("RS_ERR",X.readyState);
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  console.log(ERR[1][0]+"\n"+ERR[1][1]);
				  return eL;
			  }
		  };
		  
		  VD.Ajax=function(){
			  try{
				  if(arguments.length>=4 && typeof arguments[0]==STR && typeof arguments[1]==STR && typeof arguments[2]==FUN && typeof arguments[3]==FUN){
					  if(arguments[0].toUpperCase()=="POST" || arguments[0].toUpperCase()=="GET"){
						  data=(arguments.length==5 && typeof arguments[4]==STR)?arguments[4]:'';
						  var method=arguments[0].toUpperCase(), url=arguments[1],success=arguments[2],failure=arguments[3];
					  }
				  }
				  else
				  if(arguments.length==1 && typeof arguments[0]==OBJ && arguments[0].hasOwnProperty("METHOD") && arguments[0].hasOwnProperty("URL") && arguments[0].hasOwnProperty("SUCCESS") && arguments[0].hasOwnProperty("FAILURE") && typeof arguments[0].METHOD==STR && typeof arguments[0].URL==STR && typeof arguments[0].SUCCESS==FUN && typeof arguments[0].FAILURE==FUN && arguments[0].METHOD.toUpperCase()=="POST" || arguments[0].METHOD.toUpperCase()=="GET"){
					  var method=arguments[0].METHOD.toUpperCase(), url=arguments[0].URL,success=arguments[0].SUCCESS,failure=arguments[0].FAILURE,data=(arguments[0].hasOwnProperty("DATA") && typeof arguments[0].DATA==STR)?arguments[0].DATA:'';  
				  }
				  if(typeof url!=UNDEF){
					  var FLAG=0;
					  X=VD.XHR();
					  X.open(method,url,true);
					  method=="POST"?X.setRequestHeader("content-type","application/x-www-form-urlencoded"):void(0);
					  arguments[0].hasOwnProperty("BEFORE")?arguments[0].BEFORE():void(0);
					  data!=''?X.send(data):X.send();
					  X.onreadystatechange=function(){
						  if(X!=null){
							  if(X.status==200){
								  if(X.readyState==4){
									  FLAG=1;
									  success(X.responseText);
								  }
							  }
							  else{
								  FLAG=1;
								  failure("STATUS_ERR",X.status);
								  X=null;
							  }
						  }
					  };
					  if(FLAG=0){
						  failure("RS_ERR",X.readyState);
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  console.log(ERR[1][0]+"\n"+ERR[1][1]);
				  return eL;
			  }
		  };
		  VD.include=function(FILE,INDEX){
			try{
				!INDEX||typeof INDEX!=DIG?INDEX=0:void(0);
				if(eL.length==0 || typeof FILE!=STR || typeof INDEX!=DIG) throw "ERROR";
				eL.length<=INDEX?INDEX=0:void(0);
				$.Get({URL:FILE,
					  SUCCESS:function(DATA){
						  temp=eL;
						  $(eL[INDEX]).html(DATA);
						  eL=temp;
						  return eL;
					   },
					   FAILURE:function(STATUS,CODE){
					   	  console.log(STATUS+"\n"+CODE);
						  return eL;
						}
				 });
				return eL;
			}
			catch(_ERR){
				return eL;
			}
		  };
		  VD.require=function(FILE){
			  try{
				  if(!FILE || typeof FILE!=STR) throw "ERROR";
				  if(/\.js$/.test(FILE)){
					  $(document.head).add($.create('script',{src:FILE}));
				  }
				  else
				  if(/\.css$/.test(FILE)){
					  $(document.body).add($.create('link',{rel:'stylesheet',href:FILE}));
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.parseXml=function(){
			  try{
				  var X=new VD.XHR();
				  if(arguments.length<=0) throw "Error";
				  if(arguments.length==2 && typeof arguments[0]==STR && typeof arguments[1]==FUN){
					  var CALLBACK=arguments[1];
					  X.open("GET",arguments[0],true);
					  X.send();
					   X.onreadystatechange=function(){
						  if(X.status==200 && X.readyState==4){
							  CALLBACK(X.responseXML);
						  }
					  };
				  }
				  else
				  if(arguments.length==1 && typeof arguments[0]==OBJ){
					  var CALLBACK=arguments[0].hasOwnProperty("CALLBACK")?arguments[0].CALLBACK:VD.dummy;
					  if(!arguments[0].hasOwnProperty('FILE')) throw "ERROR";
					  X.open("GET",arguments[0].FILE,true);
					  X.send();
					  X.onreadystatechange=function(){
						  if(X.status==200 && X.readyState==4){
							  CALLBACK(X.responseXML);
						  }
					  };
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.toFormData=function(){
			  try{
				  if(arguments.length<=0 || typeof arguments[0]!=OBJ) throw "Error";
				  var EncodedData='';
				  i=0;
				  while(i<O.keys(arguments[0]).length-1){
					  EncodedData+=O.keys(arguments[0])[i]+"="+arguments[0][O.keys(arguments[0])[i]]+"&";
					  i++;
				  }
				  EncodedData+=O.keys(arguments[0])[i]+"="+arguments[0][O.keys(arguments[0])[i]];
				  return EncodedData;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.regExp=function(PATTERN,VALUE){
			  return PATTERN.test(VALUE);
		  };
		  VD.$=function(){
			  try{
				  return VD(arguments[0]);
			  }
			  catch(_ERR){
				  return VD(arguments[0]);
			  }
		  };
		  VD.CustomStyle=function(){
			  try{
				  if(arguments.length<=0 || typeof arguments[0]!=OBJ || eL.length<=0) throw "Argument Error";
				  var bgColor=arguments[0].hasOwnProperty('bg')?arguments[0].bg:'#c0c0c0';
				  var fgColor=arguments[0].hasOwnProperty('fg')?arguments[0].fg:'#ffffff';
				  var width=arguments[0].hasOwnProperty('width')?arguments[0].width:'auto';
				  var height=arguments[0].hasOwnProperty('height')?arguments[0].height:'auto';
				  var padding_left=arguments[0].hasOwnProperty('PL')?arguments[0].PL:'0px';
				  var padding_right=arguments[0].hasOwnProperty('PR')?arguments[0].PR:'0px';
				  var padding_top=arguments[0].hasOwnProperty('PT')?arguments[0].PT:'0px';
				  var padding_bottom=arguments[0].hasOwnProperty('PB')?arguments[0].PB:'0px';
				  arguments[0].hasOwnProperty('PADDING')?padding=arguments[0].PADDING:void(0);
				  i=0;
				  while(i<eL.length){
					  eL[i].style.backgroundColor=bgColor;
					  eL[i].style.color=fgColor;
					  eL[i].style.textAlign="center";
					  eL[i].style.width=width;
					  eL[i].style.height=height;
					  eL[i].style.paddingLeft=padding_left;
					  eL[i].style.paddingRight=padding_right;
					  eL[i].style.paddingTop=padding_top;
					  eL[i].style.paddingBottom=padding_bottom;
					  (padding!=null || padding!=UNDEF)?eL[i].style.padding=padding:void(0);
					  i++;  
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.css=function(){
			  try{
				  if(arguments.length<=0) throw "ERROR";
				  if(arguments.length==1 && typeof arguments[0]==STR){
					  return eL[0].style[arguments[0]];
				  }
				  else
				  if(arguments.length==1 && typeof arguments[0]==OBJ){
					  i=0;
					  while(i<O.keys(arguments[0]).length){
						  j=0;
						  while(j<eL.length){
							  eL[j].style[O.keys(arguments[0])[i]]=arguments[0][O.keys(arguments[0])[i]];
							  j++;
						  }
						  i++;
					  }
				  }
				  else
				  if(arguments.length==2 && typeof arguments[0]==STR && typeof arguments[1]==STR){
					  i=0;
					  while(i<eL.length){
						  eL[i].style[arguments[0]]=arguments[1];
						  i++;
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.Circle=function(){
			  try{
				  if(eL.length==0) throw "ERROR";
				  i=0;
				  while(i<eL.length){
					  eL[i].style.borderRadius="90px 90px 90px 90px";
					  i++;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.use=function(){
			  try{
				  if(arguments.length<=0) throw "Error";
				  if(typeof arguments[0]!=OBJ) throw "ERROR";
				  i=0;
				  while(i<O.keys(arguments[0]).length){
					  if(typeof arguments[0][O.keys(arguments[0])[i]]==FUN){
						  O.prototype[O.keys(arguments[0])[i]]=arguments[0][O.keys(arguments[0])[i]];
					  }
					  i++;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };
		  VD.toNumber=function(){
			  try{
				  if(arguments && typeof arguments[0]==STR){
					  var RES=0,I=0;
					  while(I<arguments[0].length){
 					  	if(__NUMBER.test(arguments[0][I])){
					  		RES=RES*10;
					  		RES+=parseInt(arguments[0][I]);
					  	}
					  I++;
					}
					return RES;
			  	}
				return eL;
			  }
			  catch(_ERR){
				  return eL;
			  }
		  };  
		  VD.Data=function(){
			  return {
				  NAME:'VirDwaitJs',
				  SERIES:'2.0.1.1',
				  STATUS:'Nightly',
				  Browser:/Edge/i.test(N.userAgent)?"Edge":/Opr/i.test(N.userAgent)?"Opera":/Lunascape/i.test(N.userAgent)?"LunaScape":/ubrowser/i.test(N.userAgent)?"UC Browser":/Navigator/i.test(N.userAgent)?"Navigator":/firefox/i.test(N.userAgent)?"Firefox":/msie/i.test(N.userAgent)?"MS IE":/chrome/i.test(N.userAgent)?"Chrome":/safari/i.test(N.userAgent)?"Safari":"Unknown",
				  Platform:N.platform,
				  Java:N.javaEnabled(),
				  Cookie:N.cookieEnabled,
				  Version:/Edge/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('Edge/')+5,N.userAgent.length):/Opr/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('OPR/')+4,N.userAgent.length):/Lunascape/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('Lunascape ')+10,N.userAgent.length):/ubrowser/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('UBrowser/')+9,N.userAgent.indexOf(' ',N.userAgent.indexOf('UBrowser/')+9)):/Navigator/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('OPR/')+4,N.userAgent.length):/firefox/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('Firefox/')+8,N.userAgent.length):/msie/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('MSIE ')+5,N.userAgent.indexOf(';',N.userAgent.indexOf('MSIE ')+5)):/chrome/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('Chrome/')+7,N.userAgent.indexOf(' ',N.userAgent.indexOf('Chrome/')+7)):/safari/i.test(N.userAgent)?N.userAgent.substring(N.userAgent.indexOf('Safari/')+7,N.userAgent.length):"Unknown",
			  };
		  };
		  
		  if(!D.querySelectorAll){
    		D.querySelectorAll = function(selectors) {
    		  var style = D.createElement('style'), el = [], elt;
    		  D.documentElement.firstChild.appendChild(style);
			  D._qsa = [];
		      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
			  w.scrollBy(0, 0);
    		  style.parentNode.removeChild(style);
			  while (D._qsa.length) {
        		elt = D._qsa.shift();
		        elt.style.removeAttribute('x-qsa');
        		el.push(elt);
			  }
			  D._qsa = null;
			  return el;
    		};
		  };
		  VD.HELP=function(TOPIC){
			  var CONTEXTS={
				  add:'input : HTML ELEMENT(s), set the HTML elements as last child of each selected ELEMENT.',
				  after:'input : HTML ELEMENT(s), add the HTML elements in the immediate follow position of all selected elements.',
				  before:'input : HTML ELEMENT(s), add the HTML elements in the previous position of all selected elements.',
				  addFirst:'input : HTML ELEMENT(s), add the HTML elements as the First child of all selected elements.',
				  remove:'Input : NONE, Remove all selected elements.',
				  create:'Input : NAME,+{PROPERTIES} , Create and return HTML ELEMENT.',
				  XHR:'input : NONE, return the XMLHttpRequest Variant for the corresponding Browser.',
				  Get:'Input : URL,SUCCESS(),FAILURE() OR {URL:,SUCCESS:(),FAILURE:(),+BEFORE:()} , Make the Ajax Get Request, if success, Execute Success funciton, if Failed, execute the Failure funciton. if BEFORE present, execute it before sending request.',
				  Post:'Input : URL,DATA,SUCCESS(),FAILURE() OR {URL:,DATA:,SUCCESS:(),FAILURE:(),+BEFORE:()} , Make the Ajax Post Request, if success, Execute Success funciton, if Failed, execute the Failure funciton. if BEFORE present, execute it before sending request.',
				  Ajax:'Input : MATHOD,URL,SUCCESS(),FAILURE(),+DATA OR {METHOD:"POST || GET",URL:,SUCCESS:(),FAILURE:(),+BEFORE:()} , Make the Get Request, if success, Execute Success funciton, if Failed, execute the Failure funciton. if BEFORE present, execute it before sending request.',
				  parseXml:'Input : FILENAME,CALLBACK() OR {FILE:,CALLBACK:()} Make an Ajax request, parse the XML file and return the XML contents to CALLBACK().',
				  regExp:'Input : PATTERN,INPUT, test the INPUT against PATTERN and return the Result.',
				  $:'Input : CSS3 SELECTOR or HTML document, return the array of matching documents.',
				  CustomStyle:'Input : {+bg:,+fg:,+width:,+height:,+PL:,+PR:,+PT:,+PB:,+PADDING:}, Set the above styles only. use css for all styles. fg : color, bg : background Color.',
				  css:'input : {property_1:value_1,PROPERTYN:VALUEN}, set the style to all selected elements.',
				  use:'input : {NAME_1: (),NAME_N:()}, used to extend the support VirdwaitJs by adding custom functions. Used for creating Plugins.',
				  toFormData:'Input : {KEY_1:VALUE_1,KEY_N:VALUE_N} , convert it to url form for sending.',
				  Select:'Input : INDEX, return the element at the Mentioned Position of in the Array of selected elements.',
				  attr:'Input : Property OR PROPERTY,VALUE OR {PROPERTY_1:VALUE_1,PROPERTY_N:VALUE_N} , if only PROPERTY given, return the array of values of the property of all selected elements. Else set the values to properties for all selected elements.',
				  Circle:'Input : NONE, Convert all the Selected elements to Circular Shape.',
				  html:'Input : NONE OR TEXT, If NONE, return array of innerHTML contents of all selected elements otherwise set the given content as innerHTML of all selected elements.',
				  Data:'Input : NONE, return the Details like NAME, SERIES, STATUS, BROWSER, JAVA, COOKIE, BROWSER VERSION, PLATFORM.',
				  include:'Input : filename, set the contents of the remote file as innerHTML of all Selected Elements.',
				  require:'Input : Filename, load the Script and Style files only. Scripts are added to Head and Styles are added to Body.',
				  val:'Input : NONE OR VALUE, If NONE, return Array of value of all Selected input and textarea Elements Else set the Value to All Selected Input and textarea Elements.',
				  setCookie:'Input : NAME, VALUE, +EXPIRE(int or float), set the Cookie.',
				  getCookie:'Input : NAME, Return the Value of the cookie.',
				  updateCookie:'Input : NAME,+EXPIRE(int or float) Update the Cookie time with same Value.',
				  deleteCookie:'Input : Name, Remove the Cookie.',
				  HELP:'Input : NONE OR TOPIC_NAME, If NONE, return all topic names Else Return Details about the Topic.',
				  toASCII:'Input : String, return ASCII value of the String.',
				  cleanString:'Input : STRING, STRINGS_TO_BE_CLEANED, remove the multiple occurances of the STRINGS_TO_BE_CLEANED from the STRING.',
				  progressBar:'Input : {+fg,+bg,+width(px),+height(px),+delay}, return an HTML element contains the Progressbar.',
				  'progressBar.start':'Input : NONE, If the Progressbar attached to Page, start the Propogation.',
				  Loader:'Input {+bg,+fg,+width,+Timing}, Create a fully customized loader.',
				  'Loader.start':'Input : NONE, start the Loader.',
				  on:'Input : EVENT, CALLBACK FUNCTION, add the EVENT listener to all selected elements with the callback function.',
				  click:'Input : CALLBACK FUNCION, add the click event listener to all selected elements.',
				  load:'Input : CALLBACK FUNCION, add the load event listener to all selected elements.',
				  blur:'Input : CALLBACK FUNCION, add the blur event listener to all selected elements.',
				  focus:'Input : CALLBACK FUNCION, add the focus event listener to all selected elements.',
				  submit:'Input : CALLBACK FUNCION, add the submit event listener to all selected elements.',
				  hide:'Input : NONE, hide all the selected elements.',
				  show:'Input : NONE, show all the selected elements.',
				  toggle:'Input : NONE, hide the visible elements and show the hidden elements.',
				  repeat:'Input : NUMBER OF TIMES, CALLBACK FUNCTION , +DELAY , EXECUTE THE CALLBACK FUNCTION IN THE DELAY INTERVAL TO THE GIVEN NUMBER OF TIMES',
				  toNumber:'Input : STRING, return a Number that contain all digits in STRING. For Example, a35bcg6js8 => 3568',
			  };
			  if(TOPIC){
				  return (CONTEXTS[TOPIC] || "INVALID TOPIC");
			  }
			  else{
				  console.log("FOR MORE INFORMATION, try $().HELP(TOPIC); // CASE SENSITIVE");
				  return {
					  add:'',
					  after:'',
					  before:'',
					  addFirst:'',
					  remove:'',
					  create:'',
					  XHR:'',
					  Get:'',
					  Post:'',
					  Ajax:'',
					  parseXml:'',
					  regExp:'',
					  $:'',
					  CustomStyle:'',
					  css:'',
					  use:'',
					  toFormData:'',
					  Select:'',
					  attr:'',
					  Circle:'',
					  html:'',
					  Data:'',
					  include:'',
					  require:'',
					  val:'',
					  setCookie:'',
					  getCookie:'',
					  updateCookie:'',
					  deleteCookie:'',
					  HELP:'',
					  toASCII:'',
					  cleanString:'',
					  progressBar:'',
					  'progressBar.start':'',
					  Loader:'',
					  'Loader.start':'',
					  on:'',
					  click:'',
					  load:'',
					  blur:'',
					  focus:'',
					  submit:'',
					  hide:'',
					  show:'',
					  toggle:'',
					  repeat:'',
					  toNumber:'',
				  };
			  }
								   
		  };
		  $=VD;
		  O.prototype.add=VD.add;
		  O.prototype.after=VD.after;
		  O.prototype.before=VD.before;
		  O.prototype.addFirst=VD.addFirst;
		  O.prototype.remove=VD.remove;
		  O.prototype.create=VD.create;
		  O.prototype.XHR=VD.XHR;
		  O.prototype.Get=VD.Get;
		  O.prototype.Post=VD.Post;
		  O.prototype.Ajax=VD.Ajax;
		  O.prototype.parseXml=VD.parseXml;
		  O.prototype.regExp=VD.regExp;
		  O.prototype.$=VD.$;
		  O.prototype.CustomStyle=VD.CustomStyle;
		  O.prototype.css=VD.css;
		  O.prototype.use=VD.use;
		  O.prototype.toFormData=VD.toFormData;
		  O.prototype.Select=VD.Select;
		  O.prototype.attr=VD.attr;
		  O.prototype.Circle=VD.Circle;
		  O.prototype.html=VD.html;	
		  O.prototype.Data=VD.Data;
		  O.prototype.include=VD.include;
		  O.prototype.require=VD.require;
		  O.prototype.val=VD.val;
		  O.prototype.setCookie=VD.setCookie;
		  O.prototype.getCookie=VD.getCookie;
		  O.prototype.updateCookie=VD.updateCookie;
		  O.prototype.deleteCookie=VD.deleteCookie;
		  O.prototype.HELP=VD.HELP;
		  O.prototype.toASCII=VD.toASCII;
		  O.prototype.cleanString=VD.cleanString;
		  O.prototype.progressBar=VD.progressBar;
		  O.prototype.progressBar.start=VD.progressBar.start;
		  O.prototype.Loader=VD.Loader;
		  O.prototype.Loader.start=VD.Loader.start;
		  O.prototype.on=VD.on;
		  O.prototype.click=VD.click;
		  O.prototype.load=VD.load;
		  O.prototype.blur=VD.blur;
		  O.prototype.focus=VD.focus;
		  O.prototype.submit=VD.submit;
		  O.prototype.hide=VD.hide;
		  O.prototype.show=VD.show;
		  O.prototype.toggle=VD.toggle;
		  O.prototype.repeat=VD.repeat;
		  O.prototype.toNumber=VD.toNumber;
})(document,window,screen,Object,Math,navigator)