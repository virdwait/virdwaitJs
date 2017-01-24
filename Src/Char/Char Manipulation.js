(function(){
		  var toASCII=function(STRING){
			  try{
				  if(STRING && (typeof STRING==STR || typeof STRING==DIG)){
					  STRING=STRING.toString();
					  var I94=0;
					  var RESULT94=0;
					  while(I94<STRING.length){
						  RESULT94*=100;
						  RESULT94+=STRING.charCodeAt(I94);
						  I94++;
					  }
					  return RESULT94;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var formFy=function(DATA){
			  try{
				  if(DATA && typeof DATA==OBJ){
					  var I95=0;
					  var RESULT95='';
					  while(I95<O.keys(DATA).length-1){
						  RESULT95+=O.keys(DATA)[I95]+"="+DATA[O.keys(DATA)[I95]]+"&";
						  I95++;
					  }
					  RESULT95+=O.keys(DATA)[I95]+"="+DATA[O.keys(DATA)[I95]];
					  return RESULT95;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  var toNumber=function(STRING){
			  try{
				  if(STRING && typeof STRING==STR){
					  var I96=0;
					  var RESULT96=0;
					  while(I96<STRING.length){
						  if($.regExp(__NUMBER,STRING[I96])){
							  RESULT96*=10;
							  RESULT96+=parseInt(STRING[I96]);
						  }
						  I96++;
					  }
					  return RESULT96;
				  }
				  else
				  if(STRING && typeof STRING==DIG){
					  return STRING;
				  }
				  return eL;
			  }
			  catch(_ERR){
				  $.errOr(_ERR);
				  return eL;
			  }
		  };
		  })()