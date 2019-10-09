// RELEASED UNDER MIT LICENSE. A REFERENCE TO THIS PAGE MUST BE PRODUCED WHEREEVER THE CONTENT IS USED.
(function(){
		 var  __EMAIL=/^[a-zA-Z0-9]{2,}((\!|\#|\$|\%|\&|\'|\*|\+|\-|\/|\=|\?|\^|\_|\`|\{|\||\}|\~|\!|\#|\$|\%|\&|\'|\*|\.)[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z0-9]{2,6}){0,1}$/;
		  var __URL=/^(https:\/\/|http:\/\/|ftp:\/\/){0,1}(www.){1}[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6}){0,1}(\/){0,1}$/;
		  var __MAILLINK=/^mailto:[a-zA-Z0-9]{2,}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z0-9]{2,6}){0,1}$/;
 		  var __STRING=/^[a-zA-Z]+$/;
		  var __NUMBER=/^[0-9]+$/;
		  var __NAME=/^[A-Z]{1}[a-z]*((\s|\.){1}[A-Z]{1,3}[a-z]*){0,}$/;
		  var __HTMLELEMENT=/^\[object\s[a-zA-Z]+\]/;
		  var __ATTRIBUTES=/[a-zA-Z\-]+(\=(\'[a-zA-Z0-9\s\;\:\-]+\'+|\"[a-zA-Z0-9\s\;\:\-]+\"))?/g;
		  var __MOBILE=/^(\+([0-9]|[0-9][0-9]|[0-4][0-9][0-9]))?[0-9]{10}$/;
		  var __HTMLTAG=/^\<[a-zA-Z0-9]+(\s[a-zA-Z\-]+(\=\'[a-zA-Z0-9\s\;\:\-]+\'+|\=\"[a-zA-Z0-9\s\;\:\-]+\")?)*(\s\/)?\>$/;
		  var __PASSWORD=/^([a-zA-Z0-9-_.]+|[\@\#\$\%\&\*\(\)\s]+){8,}$/;
		  var __USERNAME=/^[a-zA-Z0-9-.]{5,}$/;
		  var __DATE=/^([0-9]{1}|(1|2){1}[0-9]{1}|3[0-1]{1})[\.\-\/]{1}([0-9]{1}|1[0-2]{1})[\.\-\/]{1}(19[0-9]{2}|200[0-9]{1}|201[0-6]{1})$/;
		  var __HEX=/^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
		  var __EVENTS=/^(abort|animationend|animationiteration|animationstart|beforeunload|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|devicemotion|deviceorientation|deviceorientationabsolute|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|hashchange|input|invalid|keydown|keypress|keyup|languagechange|load|loadeddata|loadedmetadata|loadstart|message|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|offline|online|pagehide|pageshow|pause|play|playing|popstate|progress|ratechange|rejectionhandled|reset|resize|scroll|search|seeked|seeking|select|show|stalled|storage|submit|suspend|timeupdate|toggle|transitionend|unhandledrejection|unload|volumechange|waiting|webkitanimationend|webkitanimationiteration|webkitanimationstart|webkittransitionend|wheel)$/;
		  var __HTMLTAGWITHCLOSE=/^<[a-zA-Z0-9]+(\s[a-zA-Z\-]+(\=\'[a-zA-Z0-9\s\;\:\-]+\'+|\=\"[a-zA-Z0-9\s\;\:\-]+\")?)*>([a-zA-Z0-9\s\.\,\/\!\\\@\#\$\%\^\&\*\(\)\{\}\[\]]+)*<\/[a-zA-Z0-9]+>$/;
		  var regExp=function(REGEXP,STRING){
			  try{
				  if(REGEXP && STRING){
					  if(typeof REGEXP==STR){
						  return new RegExp(REGEXP).test(STRING);
					  }
					  else{
						  return REGEXP.test(STRING);
					  }
				  }
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var regMatch = function(REGEXP, STRING){
			  try{
				  if( REGEXP && STRING ){
					  return STRING.match(REGEXP);
				  }
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };

})();
