(function(){
		  'use strict';
		  var eL=[D];
		  var $=function(SELECTOR){
			  try{
				  if(SELECTOR){
					  if($.regExp(__HTMLELEMENT,SELECTOR)){
						  eL=[SELECTOR];
						  return eL;
					  }
					  else
					  if($.regExp(__HTMLTAG,SELECTOR)){
						  var ATTR_LIST=SELECTOR.match(__ATTRIBUTES);
						  var ELEM_HEAD=ATTR_LIST.shift();
						  var ELEM;
						  if(ATTR_LIST.length==0){
							  ELEM=$.create(ELEM_HEAD);
							  eL=[ELEM];
						  }
						  else{
							  var ATTR_LEN=ATTR_LIST.length();
							  var COUNTER=0,ATTR_SEL;
							  var ATTRS={};
							  while(COUNTER<ATTR_LEN){
								  ATTR_SEL=ATTR_LIST[COUNTER];
								  if(ATTR_SEL.indexOf('=')!=-1){
									  ATTR_SEL=ATTR_SEL.split('=');
									  ATTR_SEL[1]=ATTR_SEL[1].replace(/\"|\'/g,'');
									  ATTRS[ATTR_SEL[0]]=ATTR_SEL[1];
								  }
								  else{
									  ATTRS[ATTR_SEL]='';
								  }
								  COUNTER++;
							  }
							  ELEM=$.create(ELEM_HEAD,ATTRS);
							  eL=[ELEM];
						  }
						  return eL;
					  }
					  else
					  if($.regExp(__HTMLTAGWITHCLOSE,SELECTOR)){}
					  else
					  if(typeof SELECTOR==STR){
						  eL=D.querySelectorAll(SELECTOR);
						  return eL;
					  }
				  }
				  else{
					  return eL;
				  }
				  
				  
				  
				  
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
				  
			  }
		  };
		  var Select=function(INDEX){
			  try{
				  if(!INDEX || typeof INDEX!=DIG){
					  INDEX=0;
				  }
				  if(INDEX<eL.length){
					  eL=[eL[INDEX]];
					  return eL[0];
				  }
				  else{
					  return eL[0];
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  })()