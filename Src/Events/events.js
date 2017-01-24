(function(){
		  var when=function(EVENT,CALLBACK){
			  try{
				  if(EVENT && CALLBACK && typeof EVENT==STR && typeof CALLBACK==FUN && $.regExp(__EVENTS,EVENT)){
					  if(typeof W.addEventListener==FUN){
						  eL[0].addEventListener(EVENT,CALLBACK);
					  }
					  else
					  if(typeof W.attachEvent==FUN){
						  eL[0].attachEvent(EVENT,CALLBACK);
					  }
					  else{
						  $.attr('on'+EVENT,CALLBACK);
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var abort=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('abort',CALLBACK);
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
		  var animationend=function(CALLBACK){
			  	try{
			  		if(CALLBACK && typeof CALLBACK==fun){
			  			return $.WHEN('animationend',CALLBACK);
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
		  var animationiteration=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('animationiteration',CALLBACK);
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
		  var animationstart=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('animationstart',CALLBACK);
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
		  var beforeunload=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('beforeunload',CALLBACK);
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
		  var blur=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('blur',CALLBACK);
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
		  var cancel=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('cancel',CALLBACK);
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
		  var canplay=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('canplay',CALLBACK);
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
		  var canplaythrough=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('canplaythrough',CALLBACK);
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
		  var change=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('change',CALLBACK);
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
		  var click=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('click',CALLBACK);
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
		  var close=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('close',CALLBACK);
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
		  var contextmenu=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('contextmenu',CALLBACK);
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
		  var cuechange=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('cuechange',CALLBACK);
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
		  var dblclick=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('dblclick',CALLBACK);
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
		  var devicemotion=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('devicemotion',CALLBACK);
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
		  var deviceorientation=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('deviceorientation',CALLBACK);
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
		  var deviceorientationabsolute=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('deviceorientationabsolute',CALLBACK);
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
		  var drag=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('drag',CALLBACK);
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
		  var dragend=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('dragend',CALLBACK);
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
		  var dragenter=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('dragenter',CALLBACK);
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
		  var dragleave=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('dragleave',CALLBACK);
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
		  var dragover=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('dragover',CALLBACK);
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
		  var dragstart=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('dragstart',CALLBACK);
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
		  var drop=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('drop',CALLBACK);
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
		  var durationchange=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('durationchange',CALLBACK);
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
		  var emptied=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('emptied',CALLBACK);
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
		  var ended=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('ended',CALLBACK);
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
		  var error=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('error',CALLBACK);
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
		  var focus=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('focus',CALLBACK);
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
		  var hashchange=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('haschange',CALLBACK);
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
		  var input=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('input',CALLBACK);
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
		  var invalid=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('invalid',CALLBACK);
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
		  var keydown=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('keydown',CALLBACK);
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
		  var keypress=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('keypress',CALLBACK);
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
		  var keyup=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('keyup',CALLBACK);
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
		  var languagechange=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('languagechange',CALLBACK);
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
		  var load=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('load',CALLBACK);
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
		  var loadeddata=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('loadeddata',CALLBACK);
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
		  var loadedmetadata=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('loadedmetadata',CALLBACK);
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
		  var loadstart=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('loadstart',CALLBACK);
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
		  var message=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('message',CALLBACK);
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
		  var mousedown=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mousedown',CALLBACK);
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
		  var mouseenter=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mouseenter',CALLBACK);
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
		  var mouseleave=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mouseleave',CALLBACK);
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
		  var mousemove=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mousemove',CALLBACK);
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
		  var mouseout=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mouseout',CALLBACK);
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
		  var hover=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mouseover',CALLBACK);
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
		  var mouseup=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mouseup',CALLBACK);
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
		  var mousewheel=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('mousewheel',CALLBACK);
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
		  var offline=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('offline',CALLBACK);
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
		  var online=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('online',CALLBACK);
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
		  var pagehide=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('pagehide',CALLBACK);
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
		  var pageshow=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('pageshow',CALLBACK);
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
		  var pause=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('pause',CALLBACK);
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
		  var play=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('play',CALLBACK);
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
		  var playing=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('playing',CALLBACK);
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
		  var popstate=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('popstate',CALLBACK);
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
		  var progress=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('progress',CALLBACK);
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
		  var ratechange=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('ratechange',CALLBACK);
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
		  var rejectionhandled=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('rejectionhandled',CALLBACK);
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
		  var reset=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('reset',CALLBACK);
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
		  var resize=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('resize',CALLBACK);
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
		  var scroll=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('scroll',CALLBACK);
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
		  var search=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('search',CALLBACK);
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
		  var seeked=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('seeked',CALLBACK);
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
		  var seeking=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('seeking',CALLBACK);
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
		  var select=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('select',CALLBACK);
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
		  var Show=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('show',CALLBACK);
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
		  var stalled=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('stalled',CALLBACK);
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
		  var storage=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('storage',CALLBACK);
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
		  var submit=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('submit',CALLBACK);
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
		  var suspend=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('suspend',CALLBACK);
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
		  var timeupdate=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('timeupdate',CALLBACK);
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
		  var Toggle=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('toggle',CALLBACK);
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
		  var transitionend=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('transitionend',CALLBACK);
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
		  var unhandledrejection=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('unhandledrejection',CALLBACK);
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
		  var unload=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('unload',CALLBACK);
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
		  var volumechange=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('volumechange',CALLBACK);
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
		  var waiting=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('waiting',CALLBACK);
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
		  var webkitanimationend=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('webkitanimationend',CALLBACK);
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
		  var webkitanimationiteration=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('webkitanimationiteration',CALLBACK);
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
		  var webkitanimationstart=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('webkitanimationstart',CALLBACK);
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
		  var webkittransitionend=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('webkittransitionend',CALLBACK);
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
		  var wheel=function(CALLBACK){
		  		try{
		  			if(CALLBACK && typeof CALLBACK==fun){
		  				return $.WHEN('wheel',CALLBACK);
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
		  	  })();