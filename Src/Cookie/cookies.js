(function(){
		  var setCookie=function(NAME,VALUE,EXPIRE){
			  try{
				  if(NAME && typeof NAME==STR && VALUE && (typeof VALUE==STR || typeof VALUE==DIG) && EXPIRE && typeof EXPIRE==DIG){
					  var DATE=new Date();
					  DATE.setTime(DATE.getTime()+EXPIRE);
					  D.cookie=NAME+"="+VALUE+"; expires="+DATE.toUTCString();
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var getCookie=function(NAME){
			  try{
				  if(NAME && typeof NAME==STR){
					  var COOKIE=D.cookie;
					  NAME+="=";
					  var STARTPOS=COOKIE.indexOf(NAME);
					  if(STARTPOS==-1) throw "ERROR";
					  STARTPOS+=NAME.length;
					  var ENDPOS=(COOKIE.indexOf(';',STARTPOS)==-1)?COOKIE.length:COOKIE.indexOf(';',STARTPOS);
					  return COOKIE.substring(STARTPOS,ENDPOS);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var uptimeCookie=function(NAME,EXPIRE){
			  try{
				  if(EXPIRE && typeof EXPIRE==DIG && NAME && typeof NAME==STR){
					  return $.setCookie(NAME,$.getCookie(NAME),EXPIRE);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
			  
		  };
		  var delCookie=function(NAME){
			try{
				if(NAME && typeof NAME==STR){
					return $.uptimeCookie(-3600);
				}
				return eL;
			}
			catch(_ERR){
				$.errOr(_ERR);
				return eL;
			}
		  };
		  
		  
		  
		  
		  
		  })();