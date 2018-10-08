(function(){
		  var css=function(NAME,VALUE){
			  try{
				  if(NAME && typeof NAME==STR && !VALUE){
					  return eL[0].style[NAME];
				  }
				  else
				  if(NAME && typeof NAME==STR && VALUE && typeof VALUE==STR){
					  eL[0].style[NAME]=VALUE;
				  }
				  else
				  if(NAME && typeof NAME==OBJ){
					  var I100=0;
					  while(I100<O.keys(NAME).length){
						  eL[0].style[O.keys(NAME)[I100]]=NAME[O.keys(NAME)[I100]];
						  I100++;
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  
		  
		  })()