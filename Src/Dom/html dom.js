(function(){
		  var add=function(ELEMENT){
			  try{
				  if(ELEMENT && $.regExp(__HTMLELEMENT,ELEMENT)){
					  eL[0].appendChild(ELEMENT);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var before=function(ELEMENT){
			  try{
				  if(ELEMENT && $.regExp(__HTMLELEMENT,ELEMENT)){
					  eL[0].parentNode.insertBefore(ELEMENT,eL[0]);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var after=function(ELEMENT){
			  try{
				  if(ELEMENT && $.regExp(__HTMLELEMENT,ELEMENT)){
					  if(eL[0].parentNode.children[eL[0].parentNode.children.length-1]==eL[0]){
						  eL[0].parentNode.appendChild(ELEMENT);
					  }
					  else{
						  var I103=0;
						  while(I103<eL[0].parentNode.children.length){
							  if(eL[0]==eL[0].parentNode.children[I103]){
								  break;
							  }
							  I103++;
						  }
						  I103++;
						  eL[0].parentNode.insertBefore(ELEMENT,eL[0].parentNode.children[I103]);
					  }
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var addFirst=function(ELEMENT){
			  try{
				  if(ELEMENT && $.regExp(__HTMLELEMENT,ELEMENT)){
					  eL[0].insertBefore(eL[0].children[0]);
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var remove=function(){
			  try{
				  eL[0].remove();
				  eL.shift();
				  if(eL.length==0) eL=[D];
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var attr=function(){
			  try{
				  if(arguments.length==0) throw "Error : Invalid number of arguments";
				  if(arguments.length==1 && typeof arguments[0]==STR){
					  return eL[0].getAttribute(arguments[0]);
				  }
				  else if(arguments.length==2 && typeof arguments[0]==STR && typeof arguments[1]==STR){
					  eL[0].setAttribute(arguments[0],arguments[1]);
					  return eL;
				  }
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		 };
		  })()