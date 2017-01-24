(function(){
		  var show=function(){
			  try{
				  return $.css('display','');
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var hide=function(){
			  try{
				  return $.css('display','none');
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var toggle=function(){
			  try{
				  return $.css('display')=='none'?$.show():$.hide();
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  })()