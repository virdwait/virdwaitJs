//<!--
//!function(){}()
/*
// Author Sagar V

*/
/*INFO
$().css().cssText contains all its user specified css properties
vcc=Valid Css in Chrome
*/
var SITE_PREFIX='secure',TAG_PREFIX="bJ";
var rootName="baseJs",vh="DOCTYPE|a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|menu|menuitem|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr",vc="azimuth|background-attachment|background-color|background-image|background-position|background-repeat|background|border-collapse|border-color|border-spacing|border-style|border-top|border-right|border-bottom|border-left|border-top-color|border-right-color|border-bottom-color|border-left-color|border-top-style|border-right-style|border-bottom-style|border-left-style|border-top-width|border-right-width|border-bottom-width|border-left-width|border-width|border|bottom|caption-side|clear|clip|color|content|counter-increment|counter-reset|cue-after|cue-before|cue|cursor|direction|display|elevation|empty-cells|float|font-family|font-size|font-style|font-variant|font-weight|font|height|left|letter-spacing|line-height|list-style-image|list-style-position|lists-tyle-type|list-style|margin-right|margin-left|margin-top|margin-bottom|margin|max-height|max-width|min-height|min-width|orphans|outline-color|outline-style|outline-width|outline|overflow|padding-top|padding-right|padding-bottom|padding-left|padding|page-break-after|page-break-before|page-break-inside|pause-after|pause-before|pause|pitch-range|pitch|play-during|position|quotes|richness|right|speak-header|speak-numeral|speak-punctuation|speak|speech-rate|stress|table-layout|text-align|text-decoration|text-indent|text-transform|top|unicode-bidi|vertical-align|visibility|voice-family|volume|white-space|widows|width|word-spacing|z-index",vs=".class|#id|*|element|element,element|element element|element>element|element+element|element1~element2|[attribute]|[attribute=value]|[attribute~=value]|[attribute|=value]|[attribute^=value]|[attribute$=value]|[attribute*=value]|:active|::after|::before|:checked|:disabled|:empty|:enabled|:first-child|::first-letter|::first-line|:first-of-type|:focus|:hover|:in-range|:invalid|:lang(language)|:last-child|:last-of-type|:link|:not(selector)|:nth-child(n)|:nth-last-child(n)|:nth-last-of-type(n)|:nth-of-type(n)|:only-of-type|:only-child|:optional|:out-of-range|:read-only|:read-write|:required|:root|::selection|:target|:valid|:visited",vcc=" width| border-top-width| border-right-width| border-bottom-width|border-left-width| border-top-style| border-right-style| border-bottom-style| border-left-style| border-top-color| border-right-color| border-bottom-color|border-left-color| border-image-source| border-image-slice|border-image-width| border-image-outset| border-image-repeat|height|alignContent|alignItems|alignSelf|alignmentBaseline|background|backgroundAttachment|backgroundClip|backgroundColor|backgroundImage|backgroundOrigin|backgroundPosition|backgroundPositionX|backgroundPositionY|backgroundRepeat|backgroundRepeatX|backgroundRepeatY|backgroundSize|baselineShift|border|borderBottom|borderBottomColor|borderBottomLeftRadius|borderBottomRightRadius|borderBottomStyle|borderBottomWidth|borderCollapse|borderColor|borderImage|borderImageOutset|borderImageRepeat|borderImageSlice|borderImageSource|borderImageWidth|borderLeft|borderLeftColor|borderLeftStyle|borderLeftWidth|borderRadius|borderRight|borderRightColor|borderRightStyle|borderRightWidth|borderSpacing|borderStyle|borderTop|borderTopColor|borderTopLeftRadius|borderTopRightRadius|borderTopStyle|borderTopWidth|borderWidth|bottom|boxShadow|boxSizing|bufferedRendering|captionSide|clear|clip|clipPath|clipRule|color|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|content|counterIncrement|counterReset|cssText|cursor|direction|display|dominantBaseline|emptyCells|enableBackground|fill|fillOpacity|fillRule|filter|flex|flexBasis|flexDirection|flexFlow|flexGrow|flexShrink|flexWrap|float|floodColor|floodOpacity|font|fontFamily|fontKerning|fontSize|fontStretch|fontStyle|fontVariant|fontVariantLigatures|fontWeight|glyphOrientationHorizontal|glyphOrientationVertical|height|imageRendering|justifyContent|kerning|left|length|letterSpacing|lightingColor|lineHeight|listStyle|listStyleImage|listStylePosition|listStyleType|margin|marginBottom|marginLeft|marginRight|marginTop|marker|markerEnd|markerMid|markerStart|mask|maskType|maxHeight|maxWidth|maxZoom|minHeight|minWidth|minZoom|objectFit|objectPosition|opacity|order|orientation|orphans|outline|outlineColor|outlineOffset|outlineStyle|outlineWidth|overflow|overflowWrap|overflowX|overflowY|padding|paddingBottom|paddingLeft|paddingRight|paddingTop|page|pageBreakAfter|pageBreakBefore|pageBreakInside|parentRule|pointerEvents|position|quotes|resize|right|shapeRendering|size|speak|src|stopColor|stopOpacity|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|tabSize|tableLayout|textAlign|textAnchor|textDecoration|textIndent|textLineThroughColor|textLineThroughMode|textLineThroughStyle|textLineThroughWidth|textOverflow|textOverlineColor|textOverlineMode|textOverlineStyle|textOverlineWidth|textRendering|textShadow|textTransform|textUnderlineColor|textUnderlineMode|textUnderlineStyle|textUnderlineWidth|top|transition|transitionDelay|transitionDuration|transitionProperty|transitionTimingFunction|unicodeBidi|unicodeRange|userZoom|vectorEffect|verticalAlign|visibility|webkitAnimation|webkitAnimationDelay|webkitAnimationDirection|webkitAnimationDuration|webkitAnimationFillMode|webkitAnimationIterationCount|webkitAnimationName|webkitAnimationPlayState|webkitAnimationTimingFunction|webkitAppRegion|webkitAppearance|webkitAspectRatio|webkitBackfaceVisibility|webkitBackgroundClip|webkitBackgroundComposite|webkitBackgroundOrigin|webkitBackgroundSize|webkitBorderAfter|webkitBorderAfterColor|webkitBorderAfterStyle|webkitBorderAfterWidth|webkitBorderBefore|webkitBorderBeforeColor|webkitBorderBeforeStyle|webkitBorderBeforeWidth|webkitBorderEnd|webkitBorderEndColor|webkitBorderEndStyle|webkitBorderEndWidth|webkitBorderFit|webkitBorderHorizontalSpacing|webkitBorderImage|webkitBorderRadius|webkitBorderStart|webkitBorderStartColor|webkitBorderStartStyle|webkitBorderStartWidth|webkitBorderVerticalSpacing|webkitBoxAlign|webkitBoxDecorationBreak|webkitBoxDirection|webkitBoxFlex|webkitBoxFlexGroup|webkitBoxLines|webkitBoxOrdinalGroup|webkitBoxOrient|webkitBoxPack|webkitBoxReflect|webkitBoxShadow|webkitClipPath|webkitColumnAxis|webkitColumnBreakAfter|webkitColumnBreakBefore|webkitColumnBreakInside|webkitColumnCount|webkitColumnGap|webkitColumnProgression|webkitColumnRule|webkitColumnRuleColor|webkitColumnRuleStyle|webkitColumnRuleWidth|webkitColumnSpan|webkitColumnWidth|webkitColumns|webkitFilter|webkitFontFeatureSettings|webkitFontSizeDelta|webkitFontSmoothing|webkitHighlight|webkitHyphenateCharacter|webkitLineBoxContain|webkitLineBreak|webkitLineClamp|webkitLocale|webkitLogicalHeight|webkitLogicalWidth|webkitMarginAfter|webkitMarginAfterCollapse|webkitMarginBefore|webkitMarginBeforeCollapse|webkitMarginBottomCollapse|webkitMarginCollapse|webkitMarginEnd|webkitMarginStart|webkitMarginTopCollapse|webkitMask|webkitMaskBoxImage|webkitMaskBoxImageOutset|webkitMaskBoxImageRepeat|webkitMaskBoxImageSlice|webkitMaskBoxImageSource|webkitMaskBoxImageWidth|webkitMaskClip|webkitMaskComposite|webkitMaskImage|webkitMaskOrigin|webkitMaskPosition|webkitMaskPositionX|webkitMaskPositionY|webkitMaskRepeat|webkitMaskRepeatX|webkitMaskRepeatY|webkitMaskSize|webkitMaxLogicalHeight|webkitMaxLogicalWidth|webkitMinLogicalHeight|webkitMinLogicalWidth|webkitPaddingAfter|webkitPaddingBefore|webkitPaddingEnd|webkitPaddingStart|webkitPerspective|webkitPerspectiveOrigin|webkitPerspectiveOriginX|webkitPerspectiveOriginY|webkitPrintColorAdjust|webkitRtlOrdering|webkitRubyPosition|webkitTapHighlightColor|webkitTextCombine|webkitTextDecorationsInEffect|webkitTextEmphasis|webkitTextEmphasisColor|webkitTextEmphasisPosition|webkitTextEmphasisStyle|webkitTextFillColor|webkitTextOrientation|webkitTextSecurity|webkitTextStroke|webkitTextStrokeColor|webkitTextStrokeWidth|webkitTransform|webkitTransformOrigin|webkitTransformOriginX|webkitTransformOriginY|webkitTransformOriginZ|webkitTransformStyle|webkitTransition|webkitTransitionDelay|webkitTransitionDuration|webkitTransitionProperty|webkitTransitionTimingFunction|webkitUserDrag|webkitUserModify|webkitUserSelect|webkitWritingMode|whiteSpace|widows|width|wordBreak|wordSpacing|wordWrap|writingMode|zIndex|zoom",d=document,e=[],N=navigator,M=Math,O=Object,s=screen,w=window,xhr,ex,elm=[],regex={}, ERR_NO_WIN_DOC="ERROR : 600; A WINDOW AND A DOCUMENT IS NEEDED FOR "+rootName+" TO WORK",ERR_NO_ELTS="ERROR : 601; NO ELEMENTS SELECTED", ERR_INV_ARGS="ERROR : 602; INVALID ARGUMENTS",ERR_OBJ_INV_DATA="ERROR : 603; OBJECT DOESNOT CONTAIN REQUIRED DATA",ERR_INV_REQ="ERROR : 604; INVALID REQUEST",ERR_INV_ARGS_ELTS="ERROR : 605; INVALID ARGUMENTS OR ELEMENTS",ERR_HTTP_REQ="ERROR : 606; REQUEST FAILED. ADDITIONALY AN HTTP ERROR OCCURED WHILE PROCESSING YOUR REQUEST. ERROR CODE : ",OBJ_SEL="MESSAGE : 700; OBJECT SELECTED",ERR_NO_DATA="ERROR : 607; NO DATA FOUND",ERR_IS_ZERO="ERROR : 608; THE VALUE SHOULD NOT BE ZERO",at="moveLeft|moveRight|moveUp|moveDown|rotate|expand|collapse|shake|twilt|colorChange",logo="data:image/gif;base64,R0lGODlhZABkAKIAAAAAAP///x9LEf9UAP///wAAAAAAAAAAACH5BAEAAAQALAAAAABkAGQAAAP/SLqs8zDKSaulLevNO7lgKGJeaXJjqlZn635rvL60J99jrWt4f+3AhW84CQaJyIcRmEQud03iUxcdTmtV3xWbvW253dmXFhaPX+XUGZz+rclt9xsdZ83hdcmdnR/s+XV/gG2Cg2WFhl2IiVWLjE2Oj06ReGGUklqXlY2am5CdnpOgdFGjmGamLqWpoTispyKvsCCysxa1tiS4LgKZuy0Cva6/wMHDxCbBxjLIJ8rLqM0cz9Bq0h7U1bHXHdnatNzT3sLb4Rrj33bmGejpRevs7eS38A3y7hD19vfz7/oK/PD9WxDQ3UCABfspOZjw20ECDbU9jFhtIkVyFi8uHHhRe5kfhh2DZQwJMqTIfyafoUypTB9LlfBewjQncya3mjal4cyJbCfPXz5/4goqVBbRoqyOIjWldCmopk41QY1KaSpVR1avIsqqVRDXrnu+gp0jduyasmbHoE27ZS3bKW5bdop7UipdAXPv5qW7l++lu3UjAcb7F7BdwxkSAAA7";
//
(function(){
		  
		  // Email regular expression in regex object
		  // Url regular expression in regex object
		  regex.email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
		  regex.url="\\b"+ "("+ "(https?|telnet|gopher|file|wais|ftp) :"+ "[\\w/\\#~:.?+=&%@!\\-]+?" + ")"+ "(?=" + "[.:?\\-]*" + "(?:[^\\w/\\#~:.?+=&%@!\\-]"+ "|$)"+ ")";
		  regex.non_text=/[^a-zA-Z]/;
		  regex.non_number=/[^0-9]/;
		  //A document and a window is required to work. Otherwise, escape.... 
		  try{if(!d || !w){throw ERR_NO_WIN_DOC;} 
		  // This function appends one or more elements to the specified target
		  add=function(){try{
			  //if called by mistake, quit immediately
			 if(arguments.length==0 || elm.length==0) throw ERR_NO_ELTS;
			 var i=0,j=0;
			 do{
				 j=0;
				 do{
					 elm[i].appendChild(arguments[j]);
					 j++;
				 }while(j<arguments.length);
				 i++;
			 }while(i<elm.length);
			  return w;
			  }catch(ex){exception(ex); return false;}},
			  
			  
		  // This function adds an EventHandler to onr or more elements
		  addE=function(){try{
			  // if 3 normal arguments passed, handle them
			  if(arguments.length==0) throw ERR_INV_ARGS;
			  if(!arguments[0].target && arguments.length==3){
				  	arguments[1]=baseInfo().eventType(arguments[1]);
			 		w.addEventListener?arguments[0].addEventListener(arguments[1],arguments[2],false):w.attachEvent?arguments[0].attachEvent(arguments[1],arguments[2]):arguments[0].setAttribute(arguments[1],'"javascript:'+arguments[2]+'"');
			  }
			  //if all arguments are made to a single object and the object is passed, handle it
			  else{
				var i=0;
				do{
					//We need the element, action and function, otherwise quit
					if(arguments[i].hasOwnProperty('target') && arguments[i].hasOwnProperty('action') && arguments[i].hasOwnProperty('callback')){
						arguments[i].action=baseInfo().eventType(arguments[i].action);
						w.addEventListener?arguments[i].target.addEventListener(arguments[i].action,arguments[i].callback,false):w.attachEvent?arguments[i].target.attachEvent(arguments[i].action,arguments[i].callback):arguments[i].target.setAttribute(arguments[i].action,'"javascript:'+arguments[i].callback+'"');
						
						
					}
					else{
						console.log(ERR_OBJ_INV_DATA);
						e.push(ERR_OBJ_INV_DATA);
					}
					i++;
					
				}while(i<arguments.length);
			  }
			  return true;
		  }catch(ex){exception(ex); return false;}}
		  
		  //This function, set arguments to existing or newly created elements or return the arguments of existing or newly created elements
		  attr=function(){try{
			  if(arguments.length==0) throw ERR_INV_ARGS;
			  var i=0;
			  if(arguments.length==3 && typeof arguments[1]=='string'){
				  arguments[0].setAttribute(arguments[1],arguments[2]);
				  return arguments[0];
			  }
			  else
			  if(arguments.length==2 && typeof arguments[1]=='string'){
				  return arguments[0].getAttribute(arguments[1]);
			  }
			  else{
				  if(arguments.length==1 && typeof arguments[0]!='object'){
					  var a=[];
					  do{
						  if(elm[i].getAttribute(arguments[0])!=null){
							  a.push(elm[i].getAttribute(arguments[0]));
						  }
						  i++;
					  }while(i<elm.length);
					  if(a.length==1){
						  return a[0];
					  }
					  else{
						  return a;
					  }
				  }
				  else{
					  i=0;
					  var j;
					  do{
						  j=0;
						  do{
								 elm[i].setAttribute(O.keys(arguments[0])[j],arguments[0][O.keys(arguments[0])[j]]);
							 	 j++;
						  }while(j<O.keys(arguments[0]).length);
						  i++;
					  }while(i<elm.length);
					 return true; 
				  }
			  }
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function insert set of elements to the newxt position of specified element
		  after=function(){try{
			  if(elm.length==0 || arguments.length==0) throw ERR_INV_ARGS_ELTS;
			  var i=0,k=0,j=arguments.length-1;
			  do{
				  j=arguments.length-1;
				  do{
					  k=0;
					  do{
					  if(elm[i].parentNode.children[k]===elm[i]) elm[i].parentNode.insertBefore(arguments[j],elm[i].parentNode.children[k+1]);
					  k++;
					  }while(k<elm[i].parentNode.children.length);
					  
					  
					  j--;
				  }while(j>=0);
				  
				  
				  i++;
			  }while(i<elm.length);
			  
			  
			  return w;
			  
			  
			  
			  
			  }catch(ex){exception(ex); return false;}}, 
		  
		  // This function make an ajax request and execute the callback based on success or error
		  ajax=function(a){try{
			  if(arguments.length!=1 || typeof arguments[0]!='object' || !a.hasOwnProperty('method') || !a.hasOwnProperty('url') || !a.hasOwnProperty('X') || !a.hasOwnProperty('success') || !a.hasOwnProperty('error') || a.method.toUpperCase()!="POST" && a.method.toUpperCase()!="GET") throw ERR_INV_REQ;
			  // If the server username or password is not given, set it as empty
			  !a.params?a.params='ref=baseJs':void(0);
			  !a.username?a.username='':void(0);
			  !a.passwd?a.passwd='':void(0);
			  //Call the info function to get the native HTTP request handler function
			  baseInfo();
			  a.method=a.method.toUpperCase();
			  if(a.method=="GET"){
				if(a.url.indexOf('?')==-1){
					a.url=a.url+"?"+a.params;
				}
				else{
					a.url=a.url+"&"+a.params;
				}
				a.params='';
			  }
			  xhr.open(a.method,a.url,true,a.username,a.passwd);
			  if(a.method="POST") xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xhr.send(a.params);
			  
			  xhr.onreadystatechange=function(){
				  xhr.readyState==4?xhr.status==200 ? a.success(xhr.responseText, xhr.status, xhr) : xhr.status!=200?a.error(xhr.status):void(0):void(0);
			  }
			  return true;
			  }catch(ex){exception(ex); return false;}},
		  
		  
		  
		  // This function contain details corresponding to the browser and this script
		  
		  baseInfo=function(){try{
			  w.version='v 2.0 beta release 2';
			  w.author="SAGAR V";
			  w.mail="sagarvd01@gmail.com";
			  w.license="<license url>";
			  w.url="";
			  w.xhr=w.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");
			  w.eventHandler=w.addEventListener?'addEventListener':w.attachEvent?'attachEvent':'Unknown';
			   w.ua=N.userAgent.indexOf("OPR")!=-1?"OPR":N.userAgent.indexOf("UBrowser")!=-1?"UBrowser":N.userAgent.indexOf("Chrome")!=-1?"Chrome":N.userAgent.indexOf("Safari")!=-1?"Safari":N.userAgent.indexOf("Navigator")!=-1?"Navigator":N.userAgent.indexOf("Lunascape")!=-1?"Lunascape":N.userAgent.indexOf('Firefox')!=-1?"Firefox":N.userAgent.indexOf('MSIE')!=-1?"MSIE":"other";
			  w.uv=N.userAgent.indexOf(' ',N.userAgent.indexOf(w.ua)+w.ua.length+1)!=-1?N.userAgent.substring(N.userAgent.indexOf(w.ua),N.userAgent.indexOf(' ',N.userAgent.indexOf(w.ua)+w.ua.length+1)):N.userAgent.substring(N.userAgent.indexOf(w.ua),N.userAgent.length);
			  w.uv=w.uv.substring(w.ua.length+1,w.uv.length);
			  w.uv.indexOf(';')!=-1?w.uv=w.uv.substring(0,w.uv.length-1):void(0);
			  // This innerfunction convert the action variables for browser supportability. ie, click for webkit and gecko whereas onclick for IE
			  eventType=function(){
				  try{
					  if(arguments.length==0) throw "Invalid Arguments";
					  var i=0,a=[];
					  do{
						  a.push(w.eventHandler=='addEventListener'?arguments[i]:"on"+arguments[i]);
						  i++;
					  }while(i<arguments.length);
					  if(a.length==1){
						  return a[0];
					  }
					  else{
						  return a;
					  }
				  }catch(ex){exception(ex); return false;}
				  
				  }
			  return window;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function insert the set of elements at before position of the specified element
		  before=function(){try{
			  if(arguments.length==0 || elm.length==0) throw ERR_NO_ELTS;
			 var i=0,j=0;
			 do{
				 j=0;
				 do{
					 elm[i].parentNode.insertBefore(arguments[j],elm[i]);
					 j++;
				 }while(j<arguments.length);
				 i++;
			 }while(i<elm.length);
			  return w;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This trigger the function when the specified input element lost its focus
		  blur=function(){try{
			  if(arguments.length==0) throw ERR_INV_ARGS;
			   var i=0;
			  while(i<arguments.length){ // loop through each argument function
				if(typeof arguments[i]!="function") throw "argument - "+(i+1)+" is not a function"; // argument must be a function. otherwise die.
				j=0;
				do{
					addE(elm[j],"blur",arguments[i])
					j++;
				}while(j<elm.length); // do till it cover all the elements
				i++;
			  }
			  return true;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This trigger the function when the specified element clicked
		  click=function(){try{
			  if(arguments.length<=0) throw ERR_INV_ARGS;  // if no arguments are passed
			  var i=0;
			  while(i<arguments.length){ // loop through each argument function
				if(typeof arguments[i]!="function") throw "argument - "+(i+1)+" is not a function"; // argument must be a function. otherwise die.
				j=0;
				do{
					addE(elm[j],"click",arguments[i])
					
					j++;
				}while(j<elm.length); // do till it cover all the elements
				i++;
				  
			  }
			  return true;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function shows a confirm dialog different than the native traditional browser dialog
		 // PLOT FOR CONFIRM
		  
		  // This function either return the css property or set css property to specified elements
		  css=function(){try{
			  if(elm.length==0) throw ERR_NO_ELTS;
			  if(arguments.length==0){
			  var i=0,a=[];
			  do{
				  a.push(elm[i].style);
				  i++;
			  }while(i<elm.length);
			  return a;
			  }
			  else
			  if(arguments.length==2 && typeof arguments[0]=='string' && typeof arguments[1]!='object'){
				  var i=0;
				  do{
					  elm[i].style[arguments[0]]=arguments[1];
					  i++;
				  
				  }while(i<elm.length)
				  return true;
				  
			  }
			  else
			  if(arguments.length==1 && typeof arguments[0]=='object'){
				  var i=0,j=0;
				  do{
					  j=0;
					  do{
						  elm[i].style[O.keys(arguments[0])[j]]=arguments[0][O.keys(arguments[0])[j]];
						  j++;
					  }while(j<O.keys(arguments[0]).length);
					  i++;
				  }while(i<elm.length);	  
				  return true;
			  }
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function wait for the specified amount of time and then continue its execution
		  delay=function(){try{
			  	if(arguments.length!=1 || typeof arguments[0]!="number") throw "Invalid Argument Format"; // the argument must be a number
			  	var b=new Date(),c; // declare b as current date
				c=b.getTime()+arguments[0]; // add the target time to c. ie current time + delay
				while(b.getTime()<=c){ // execute until current time reaches the target time
				  b=new Date(); // get current time for each time when executing
			  	}
				return true;
			}catch(ex){exception(ex); return false;}},
		  
		  // This function delete the cookie with specified name
		  delcookie=function(a){try{d.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; return true;}catch(ex){exception(ex); return false;}},
		  
		  // This function remove the specified set of scripts from the page
		  destroy=function(){try{
			  	if(arguments.length==0) throw ERR_INV_ARGS;
			  	var i=0;
			  	do{
					 $('script[src='+arguments[i]+']').remove();
					 i++;
			  	}
			  	while(i<arguments.length);
				return true;
			 }catch(ex){exception(ex); return false;}},
		  
		  
		  // This function remove all selected elements
		  end=function(){try{elm=[]; return w;}catch(ex){exception(ex); return false;}},
		  
		  // This trigger the function when the specified input element get focused
		  focus=function(){try{  if(arguments.length<=0) throw ERR_INV_ARGS;  // if no arguments are passed
			  var i=0;
			  while(i<arguments.length){ // loop through each argument function
				if(typeof arguments[i]!="function") throw "argument - "+(i+1)+" is not a function"; // argument must be a function. otherwise die.
				j=0;
				do{
					addE(elm[j],"focus",arguments[i])
					
					j++;
				}while(j<elm.length); // do till it cover all the elements
				i++;
				  
			  }
			  return true;}catch(ex){exception(ex); return false;}},
		  
		  // This function return the value of the cookie with the specified name
		  getCookie=function(){try{
			  if(arguments.length==0) throw ERR_INV_ARGS;
				arguments[0]=arguments[0]+"=";
				var b=d.cookie,c,f;
				if(b.indexOf(arguments[0])!=-1){//CB_5_O
					if(b.charAt(b.length)!=';') b=b+';';
					c=b.indexOf(arguments[0]);
					f=b.indexOf(';',c);
					return b.substring(c+arguments[0].length,f);
				}//CB_5_C
				else{//CB_5_O
						throw "Cookie Not Found";
				}//CB_5_C
			}catch(ex){exception(ex); return false;}},
		  
		  // This function hide the set of elements from the page
		  hide=function(){try{
			  	if(elm.length==0) throw ERR_NO_ELTS
		  		var i=0;
			  	do{
					css()[i].display='none';
					i++;
				}while(i<elm.length);
				return true;}catch(ex){exception(ex); return false;}},
		  
		  // This trigger the function when the specified elements have cursor over it
		  hover=function(){try{  if(arguments.length<=0) throw ERR_INV_ARGS;  // if no arguments are passed
			  var i=0;
			  while(i<arguments.length){ // loop through each argument function
				if(typeof arguments[i]!="function") throw "argument - "+(i+1)+" is not a function"; // argument must be a function. otherwise die.
				j=0;
				do{
					addE(elm[j],"mouseover",arguments[i])
					
					j++;
				}while(j<elm.length); // do till it cover all the elements
				i++;
				  
			  }
			  return true;}catch(ex){exception(ex); return false;}},
		  
		  // This function either return the html content of set of elements or set html content tot set of elements
		  html=function(){try{
			  if(elm.length==0) throw ERR_NO_ELTS;
			  var i=0;
			  if(arguments.length==0){
				  var a=[];
				  i=0;
				  do{
					  a.push(elm[i].innerHTML);
					  i++;
				  }while(i<elm.length);
				  return a;
			  }
			  else{
				  i=0;
				  var a='';
				  do{
					  a=a+arguments[i]+' ';
					  i++;
				  }while(i<arguments.length);
				  i=0;
				  do{
					  elm[i].innerHTML=a;
					  i++;
				  }while(i<elm.length);
				  return w;
				  
			  
			  }
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function include the contents of another file by an ajax request
		  include=function(a){try{
			  if(arguments.length!=1 || elm.length==0) throw ERR_INV_ARGS_ELTS;
			  ajax({
method:'get', url:a,X:'false',params:'',
success:function(c,f,g){var i=0; do{elm[i].innerHTML=c; elm[i].value=c; i++;}while(i<elm.length); return true; },
				  error:function(c){throw ERR_HTTP_REQ+c; return false;}});
			  return true;
			  
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function create a script or style attribute in the page
		  init=function(){try{
			  if(arguments.length==0) throw ERR_INV_ARGS;
			  var i=0,a=[],target='';
			  do{
				if(typeof arguments[i]=='string'){
					
					if(arguments[i].lastIndexOf('.')==arguments[i].length-3 && arguments[i].substring(arguments[i].lastIndexOf('.')+1,arguments[i].length)=='js'){// THE EXTENSION SHOULD BE .js. CHECK AND VERIFY
					
							a.push(create({object:'script',src:arguments[i],type:'text/javascript'}));
					}
					else
					if(arguments[i].lastIndexOf('.')==arguments[i].length-4 && arguments[i].substring(arguments[i].lastIndexOf('.')+1,arguments[i].length)=='css'){// THE EXTENSION SHOULD BE .css. CHECK AND VERIFY
							a.push(create({object:'link',rel:'stylesheet',href:arguments[i],type:'text/css'}));
					}
					
				}
				else
				if(typeof arguments[i]=='object' && arguments[i].type && arguments[i].source){
					if(arguments[i].type=='script'){
						a.push(create({object:'script',src:arguments[i].source,type:'text/javascript'}));
					}
					else
					if(arguments[i].type=='style'){
						a.push(create({object:'link',rel:'stylesheet',href:arguments[i].source,type:'text/css'}));
					}
				}
				i++; 
				  
				  
				  
				  
			  }while(i<arguments.length);
			  target=d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0];
			  i=0;
			  do{
				  target.appendChild(a[i]);
				  i++;
			  }while(i<a.length);
			  return w;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function is to gain back control of the $ function 
		  invoke=function(){try{if(w.baseJs!=null)w.$=w.baseJs; w.baseJs=null; return w;}catch(ex){exception(ex); return false;}},
		  
		  // This is the default selector funtion and heart of this script
		  $=function(a){try{
			  if(a==undefined || a==null || a==''){ // If called only for invoke the constructor
				  return this;
			  }
			  var b,i=0;
			  if(typeof a==='object'){elm=[]; elm.push(a); throw OBJ_SEL;} // if a=HTML Object , then push to stack
			  else{
				if(d.querySelectorAll){ // if browser support queryselectorall
					elm=[];
					elm=(d.querySelectorAll(a));
				}
				else{
					elm=[];
					b=/[^a-zA-Z0-9]/; // Contain other characters than Alphanumeric => if false, then it contain only Alphanumeric
					if($().pattern(b,a)==false){ // contain only alphanumeric characters . ie, tag names
						while(i<d.getElementsByTagName(a).length){
							elm.push(d.getElementsByTagName(a)[i]);
							i++;
						}

					}
					else{ // contain other characters than alphanumeric. ie, #id || .class || :selector, etc.
						elm=[];
							
							
					}
						
					
					
					
					
				} 
			  }
			  
			  
			  
			 }catch(ex){exception(ex); return false;}
			 finally{return this;}}, 
		  
		  
		  //This function create a login form with specified properties
		 //PLOT FOR LOGIN
		  
	
		  
		  // this object perform the specified operation on string with pattern
		  pattern=function(){try{
			  if(arguments.length==0 || arguments.length==1 && (!arguments[0].pattern || !arguments[0].value) || arguments.length>2) throw ERR_INV_ARGS;
			  if(arguments.length==2) return arguments[0].test(arguments[1]);
			  else
			  if(!arguments[0].hasOwnProperty('action')){
				  return arguments[0].pattern.test(arguments[0].value);
			  }
			  else
			  if(arguments[0].hasOwnProperty('action') && arguments[0].hasOwnProperty('text')){
				 switch(arguments[0].action.toUpperCase()){
					 case 'REPLACE' : return arguments[0].text.replace(arguments[0].pattern,arguments[0].value);
					 				  break;
					 case 'TEST' : return arguments[0].pattern.test(arguments[0].value);
					 			   break;
					 
					 
				 }
			  }
			  
			  }catch(ex){exception(ex); return false;}},
		  		  
		  // This function is to add the set of elements as the first child of the target element
		  prepend=function(){try{
			  if(elm.length==0 || arguments.length==0)throw ERR_INV_ARGS_ELTS;
			  var i=0,j=arguments.length-1;
			  do{
				  j=arguments.length-1;
				  do{
					  elm[i].insertBefore(arguments[j],elm[i].children[0]);
					  j--;
				  }while(j>=0);
				  i++;
			  }while(i<elm.length);
			  
			  
			  
			  
			  
			 return w; 
			  
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function creates prompt dialog different than the native traditional browser prompt dialog
		  //PLOT FOR PROMPT
		  
		  // This function accept a function as a paramaetet and start to execute when the document is fully loaded
		 // ready=function(a){try{d.addEventListener?d.addEventListener("DOMContentLoaded",a,false):d.attachEvent("onreadystatechange",a);
		  
		  
		  
		  
		//  }catch(ex){exception(ex); return false;}},
		  
		  // This function creates a registration form with specified properties
		  //PLOT FOR REG
		  
		  //This function release the control of baseJs on $ selector and assign the job to baseJs alternative selector
		  release=function(){try{if(w.$!=null)w.baseJs=w.$; w.$=null; return w;}catch(ex){exception(ex); return false;}},
		  
		  // This function remove remove the set of elements from the page
		  remove=function(){try{
			  	if(elm.length==0) throw ERR_NO_ELTS;
			  	var i=0;
			  	do{
					  elm[i].parentNode.removeChild(elm[i]);
					  i++;
			  	}
			  	while(i<elm.length);
				return true;
			  }catch(ex){exception(ex); return false;}},
		  // This function remove the event handlers from the set of elements
		   removeE=function(){try{
			  	if(arguments.length==0) throw ERR_INV_ARGS;
			  if(!arguments[0].hasOwnProperty('target') && arguments.length==3){
				  	arguments[1]=baseInfo().eventType(arguments[1]);
			 		w.removeEventListener?arguments[0].removeEventListener(arguments[1],arguments[2]):arguments[0].detachEvent(arguments[1],arguments[2]);
			  }
			  else{
				var i=0;
				do{
					if(arguments[i].hasOwnProperty('target') && arguments[i].hasOwnProperty('action') && arguments[i].hasOwnProperty('callback')){
						arguments[i].action=baseInfo().eventType(arguments[i]);
						w.removeEventListener?arguments[i].target.removeEventListener(arguments[i].action,arguments[i].callback):arguments[i].target.detachEvent(arguments[i].action,arguments[i].callback);
						
						
					}
					else{
						console.log(ERR_OBJ_INV_DATA);
					}
					i++;
					
				}while(i<arguments.length);
			  }
				return true;  
		  }catch(ex){exception(ex); return false;}},
		  
		  // This function repeat the execution of the argument function for specified number of times at specified time interval
		  repeat=function(){try{
			  if(arguments.length==1 && typeof arguments[0]==="object" && typeof arguments[0].count==="number" && typeof arguments[0].delay==="number" && typeof arguments[0].callback==="function"){// if single variable and it is a object have "count"(number), "delay"(number), "callback"(function)
				  while(arguments[0].count>0){ //execute until count reaches 0
					arguments[0].callback(); // execute immediately
					arguments[0].count--; // reduce count so that can be terminated while reaching 0
					if(arguments[0].count>0) // check whether delay should be called or not. if count reached 0, return immediately
						delay(arguments[0].delay); // if count still greater than 0, then wait for next execution

				}
			  }
			  else
			  if(arguments.length==3 && typeof arguments[2]==="function" && typeof arguments[1]==="number" && typeof arguments[0]==="number"){ // if called in normal method, ie having arguments count(number without ' or "), delay(number without ' or "), callback(function)
				  while(arguments[0]>0){ 
					  arguments[2]();
					  arguments[0]--;
					  if(arguments[0]>0)
						  delay(arguments[1]);
				  }
			  }
			  else throw ERR_INV_ARGS; // if arguments length is not equal to 1 & object or 3 (number,number,function)
			  return w;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function set a cookie by either accepting 3 string arguments or accepting  an object containing the properties of the cookie
		  setCookie=function(){try{
			  if(arguments.length==0) throw ERR_NO_DATA;
			  if(arguments.length>3 || arguments.length<3 && typeof arguments[0]!="object") throw "Invalid data found";
			  var a=new Date();
			  if(arguments.length==3){
				a.setTime(a.getTime()+(parseInt(arguments[2])*24*60*60*1000));
				d.cookie=arguments[0]+'='+arguments[1]+'; expires='+a.toUTCString()+';';
			  }
			  else
			  if(arguments.length==1){  
				  a.setTime(a.getTime()+(parseInt(arguments[0].days)*24*60*60*1000));
				  d.cookie=arguments[0].name+'='+arguments[0].value+'; expires='+a.toUTCString()+';';
			  }
			  return true;
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function display set of hidden elements in a page
		  show=function(){try{
			  	if(elm.length==0) throw ERR_NO_ELTS;
			  	var i=0;
			  	do{
					css()[i].display='';
					i++;
				}while(i<elm.length);
				return true;
				}catch(ex){exception(ex); return false;}},
		 
		 
		  
		  // This function change the visibility of an element within show or hide
		  toggle=function(){try{
			  	var i=0;
			  	do{
					if(css()[i].display!='none')
					css()[i].display='none';
					else
					css()[i].display='';
					i++;
				}while(i<elm.length);
				return w;
			  
			  
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function convert the given data to JSON format
		  //PLOT FOR toJson
		  
		  //This function replace the url like texts to links in a given string
		  toUrl=function(){try{
			 if(arguments.length==0) throw ERR_INV_ARGS;
			 var a=[],i=0;
			 do{
				 a.push(pattern({action:'replace',text:arguments[i],pattern:regex.url,value:"<a href=\"$1\" title=\"Visit $1\">$1</a>"}));
				 i++;
			 }
			 while(i<arguments.length);
			 if(a.length==1) return a[0]; else return a;
			 }catch(ex){exception(ex); return false;}},
		  
		  // This function either return the value of selected elements or set value to selected elements
		  val=function(){try{
			  if(arguments.length==0){
				  var i=0,b=[];
				  while(i<elm.length){
					  b.push(elm[i].value);
					  i++;
				  }
				  return b.length>1?b:b[0];
			  }
			  else{
				  var i=0;
				  while(i<elm.length){
					  elm[i].value=arguments[0];
					  i++;
				  }
				  return w;
			  }
			  
			  
			  }catch(ex){exception(ex); return false;}},
		  
		  // This function validate the specified field (email,url,etc.) with regex for specified value
		  validate=function(){try{
			  if(arguments.length==0 || arguments.length==1 && (!arguments[0].type || !arguments[0].value) || arguments.length!=1 && arguments.length!=2) throw ERR_INV_ARGS;
			  var type,value;
			  if(arguments.length==1){
				  type=arguments[0].type.toUpperCase();
				  value=arguments[0].value;
			  }
			  else
			  if(arguments.length==2){
				  type=arguments[0].toUpperCase();
				  value=arguments[1];
			  }
			  switch(type){
				  case 'EMAIL' : if(pattern(regex.email,value)==true) {return true;}else{return false;}
				  				 break;
				  case 'PASSWORD' : if(pattern(regex.password,value)==true) {return true;}else{return false;}
				  				    break;
				  case 'DATE' : if(pattern(regex.date,value)==true) {return true;}else{return false;}
				  				    break;
				  case 'URL' : if(pattern(regex.url,value)==true) {return true;}else{return false;}
				  				    break;
				  case 'TEXT' : if(pattern(regex.non_text,value)==false) {return true;}else{return false;}
				  				    break;
				  case 'NUMBER' : if(pattern(regex.non_number,value)==false) {return true;}else{return false;}
				  				    break;
			  }
			  }catch(ex){exception(ex); return false;}},
		  
		  //This function change the zoom level of the document
		  zoom=function(){try{var b;if(typeof arguments[0]!="number") throw ERR_INV_ARGS; if(arguments[0]==0) throw ERR_IS_ZERO;  b=parseFloat(!$(d.body).css()[0].zoom?'100%':$(d.body).css()[0].zoom!='0%'?$(d.body).css()[0].zoom:'100%'); $(d.body).css()[0].zoom=arguments[0]<0?parseFloat(b/-arguments[0])+"%":parseFloat(b*arguments[0])+"%"; return true; }catch(ex){exception(ex); return false;}} 
		  
		  
		  //This function handle the exceptions . Either push them into stack or return all the exceptions occured
		  exception=function(){
			  try{
				if(arguments.length===0) return e;
				e.push(arguments[0]);
		  	}
			catch(ex){
				e.push(ex);
				return false;
			}
			},
			// this function creates a div element by either receiving plain text or object with properties of the new element
		  div=function(){try{
				if(arguments.length==0) throw ERR_INV_ARGS;
				var i=0,a=[];
				do{
					if(typeof arguments[i]=='string'){
							a.push(create({object:'div',text:arguments[i]}));
						}else{
							arguments[i].object='div';
							a.push(create(arguments[i]));
						}
						i++;
					}while(i<arguments.length);
				if(a.length==1) return a[0]; else return a;
				}catch(ex){exception(ex); return false;}},
			
				  // this function creates a paragraph elements by accepting either plain text or objects containing the properties of that element
		  p=function(){try{
				if(arguments.length==0) throw ERR_INV_ARGS;
				var i=0,a=[];
				do{
						if(typeof arguments[i]=='string'){
							a.push(create({object:'p',text:arguments[i]}));
						}else{
							arguments[i].object='p';
							a.push(create(arguments[i]));
						}
						
						
						i++;
					}while(i<arguments.length);
				if(a.length==1) return a[0]; else return a;
				}catch(ex){exception(ex); return false;}},
			 
		 // This function create a span element by either accepting plain text or object containing the properties of the element
		 span=function(){try{
				if(arguments.length==0) throw ERR_INV_ARGS;
				var i=0,a=[];
				do{
					
					if(typeof arguments[i]=='string'){
							a.push(create({object:'span',text:arguments[i]}));
						}else{
							arguments[i].object='span';
							a.push(create(arguments[i]));
						}
						
						i++;
					}while(i<arguments.length);
				if(a.length==1) return a[0]; else return a;
				}catch(ex){exception(ex); return false;}},
		  
			//This function create set of input elements with specified set of properties 
			input=function(){try{
					if(arguments.length==0) throw ERR_INV_ARGS;
				var i=0,a=[];
				do{
						if(typeof arguments[i]!='object'){
							a.push(create('input'));
						}
						else{
							arguments[i].object='input';
							a.push(create(arguments[i]));
						}
						
						i++;
					}while(i<arguments.length);
					if(a.length==1) return a[0]; else return a;
				}catch(ex){exception(ex); return false;}},
				
			//This function create set of img elements with specified set of properties 	
			img=function(){try{
				if(arguments.length==0) throw ERR_INV_ARGS;
				var i=0,a=[];
				do{
					
					if(typeof arguments[i]=='string'){
							a.push(d.createElement('img'));
							a[i].src=arguments[i];
												   
							
						}else{
						arguments[i].object='img';
						a.push(create(arguments[i]));
						
						}
						
						i++;
					}while(i<arguments.length);
					if(a.length==1) return a[0]; else return a;
				}catch(ex){exception(ex); return false;}},
				
				create=function(){try{
						if(arguments.length==0) throw ERR_INV_ARGS;
						var i=0,j=0,a=[],b=[];
						do{
							if(typeof arguments[i]==='object' && !arguments[i].object){
								
							// do nothing here	
								
							}else{
								a.push(arguments[i]);
							}
							i++;
						}while(i<arguments.length);
						i=0;
						while(i<a.length){
							j=0;
							if(typeof a[i]=='string'){
								b.push(d.createElement(a[i]));
							}else{
							b.push(d.createElement(a[i].object));
								do{
									if(O.keys(a[i])[j]=='object'){
											//do Nothing here :p
									}else
									if(O.keys(a[i])[j]=='text'){
										b[i].innerHTML=a[i][O.keys(a[i])[j]];
										
									}
									else{
										$().attr(b[i],O.keys(a[i])[j],a[i][O.keys(a[i])[j]]);
										
									}
									
									
									j++;
								}while(j<O.keys(a[i]).length)
							
							}
							
							i++;
						}
					
						if(b.length==1)return b[0]; else return b;
					
					
					
					
					
					}catch(ex){exception(ex); return false;}},
				//This function create set of table elements with specified set of properties number of rows and cols 
				table=function(){try{
					if(arguments.length==0) throw ERR_INV_ARGS;
					var i=0,j=0,k=0,m=0,o=0,a=[],b=[],c;
					do{
						if(typeof arguments[i]!='object' || arguments[i]=={} || !arguments[i].td || !arguments[i].tr || !arguments[i].data || typeof arguments[i].data!='object' || arguments[i].data.length!=parseInt(arguments[i].tr)*parseInt(arguments[i].td)){
							exception(ERR_INV_ARGS);
						}
						else{
							b=[];
							k=0;
							a.push(d.createElement('table'));
							do{
										m=0;
										b.push(d.createElement('tr'));
										do{
											
													c=d.createElement('td');
													o=k*parseInt(arguments[i].td);
													if(typeof arguments[i].data[o+m]!='object'){
													c.appendChild(d.createTextNode(arguments[i].data[o+m]));
													}
													else{
													c.appendChild(arguments[i].data[o+m]);
													}
													b[k].appendChild(c);
													m++;
									
										}while(m<arguments[i].td);
										a[j].appendChild(b[k]);
										k++;
								
							}while(k<arguments[i].tr);
						
						j++;
						}
						i++;
					}while(i<arguments.length && j<arguments.length);
					
					return a;
					}catch(ex){exception(ex); return false;}},
				
				
				//This function create a calendar 
				calendar=function(){
					try{
						today=new Date();
						if(arguments.length!=0){
							if(arguments[0].month){
								month=arguments[0].month;
							}
							else{
								month=today.getMonth();
							}
							if(arguments[0].year){
								year=arguments[0].year;
							}
							else{
								year=today.getFullYear();
							}
							var day="1-"+month+"-"+year;
						}
					var d=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],ld=[31,28,31,30,31,30,31,31,30,31,30,31],m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],y=2015,datas=[],i=0;
					if(y%4==0 || y%400==0){
						ld[1]=29;
					}
					else{
						ld[1]=28;
					}
					var start=(parseInt(today.getDate()/7)*7)+today.getDay()+1;
					start=start-today.getDate();
					while(i<start){
						datas.push('');
						i++;
					}
					i=1;
					while(i<=ld[month]){
						datas.push(i);
						i++;
					}
					while(datas.length<35){
						datas.push('');
					}
					var t=table({tr:5,td:7,data:datas});
					return t;
					}catch(ex){exception(ex); return false;}},
					
					clock=function(){try{
						var a=d.getElementById(TAG_PREFIX+'clock'),b=new Date();
						b=new Date();
						a.innerHTML=b.getHours()+":"+(b.getMinutes()<10?'0'+b.getMinutes():b.getMinutes())+":"+(b.getSeconds()<10?'0'+b.getSeconds():b.getSeconds());
						setTimeout(function(){clock()},500);
						return true;
						}catch(ex){exception(ex); return false;}},
						
						
					loadModule=function(){try{
						if(arguments.length==0) throw ERR_INV_ARGS;
						var i=0;
						do{
							if(arguments[i].hasOwnProperty('name') && arguments[i].hasOwnProperty('data')){
								arguments[i].name(arguments[i].data);
							}else{
								arguments[i]();
							}
							i++;
						}while(i<arguments.length);
						return true;
						
						}catch(ex){exception(ex); return false;}},
						
						form=function(){try{
							if(arguments.length==0) throw ERR_INV_ARGS;
								var i=0,a=[];
								do{
									if(typeof arguments[i]!='object'){
										exception(ERR_INV_ARGS+" IN ARGUMENT "+i);
									}
									else{
										arguments[i].object='form';
										a.push(create(arguments[i]));
									
									}
									i++;
								}while(i<arguments.length);
							if(a.length==1){return a[0];}else{return a;}
							}catch(ex){exception(ex); return false;}},
						
						
						
						ajaxify=function(){try{
							if(arguments.length==0) throw ERR_INV_ARGS;
							var target,a,url,params;
								if(typeof arguments[0]==='object'){
									if(!arguments[0].hasOwnProperty('url')) throw ERR_INV_ARGS;
									target=arguments[0].target||w.d;
									
									if(arguments[0].url.indexOf('?')!=-1){a=arguments[0].url.split('?'); url=a[0]; params=a[1];} else{url=arguments[0].url; params='';}
									ajax({method:'Get',url:url,params:params,X:'false',success:function(a){target.write?target.write(a):target.innerHTML?target.innerHTML=a:target.value?target.value=a:target.setAttribute('baseJs-data',a); return true;}, error:function(a){alert("An Error Occured. The Response From Server Is :"+a);}});
										
								}
								else
								if(typeof arguments[0]=='string'){
									target=w.d;	
									if(arguments[0].indexOf('?')!=-1){a=arguments[0].split('?'); url=a[0]; params=a[1];} else{url=arguments[0]; params='';}
									ajax({method:'Get',url:url,params:params,X:'false',success:function(a){target.write(a); return true;}, error:function(a){alert("An Error Occured. The Response From Server Is :"+a); throw ERR_INV_REQ;}});
									
									
									
								}
						}catch(ex){exception(ex); return false;}},
						
					
						
						login=function(){try{
							if(arguments.length==0) throw ERR_INV_ARGS;
							var parent;
							/*if(typeof arguments[0]=='string'){
								parent=elm.length!=0?elm[0]:d.body;
								
								
							}
							else*/
							if(typeof arguments[0]=='object' && arguments[0].hasOwnProperty('url')){
								parent=arguments[0].hasOwnProperty('parent') && arguments[0].parent!='' && typeof arguments[0].parent==='object'?arguments[0].parent:elm.length!=0?elm[0]:d.body;
								var success;
								if(arguments[0].hasOwnProperty('success') && typeof arguments[0].success==='function'){
									success=arguments[0].success;
								}
								else{var WINDOW_URL='';
									if(arguments[0].hasOwnProperty('ALLOW_REDIR') && typeof arguments[0].ALLOW_REDIR==='string'){
										if(w.location.href.indexOf('?')!=-1 && w.location.href.indexOf(arguments[0].ALLOW_REDIR)!=-1){
											var WINDOW_URL=w.location.href.split('?')[1];
											var FLAG_NEXT=WINDOW_URL.indexOf(arguments[0].ALLOW_REDIR),last;
											if(WINDOW_URL.indexOf('&',FLAG_NEXT)<FLAG_NEXT){
												last=WINDOW_URL.length;
											}
											else{
												last=WINDOW_URL.indexOf('&',FLAG_NEXT);
											}
											WINDOW_URL=WINDOW_URL.substring(FLAG_NEXT+(arguments[0].ALLOW_REDIR.length)+1,last);
										}
										if(WINDOW_URL==''){
											success="function(){w.location.href='"+arguments[0].url+"';}";
										}
										else{
											success="function(){w.location.href='"+WINDOW_URL+"';}";
										}
									}
									else{
										success="function(){w.location.href='"+arguments[0].url+"';}";
									}
								}
								var a=arguments[0].hasOwnProperty('ajax')?arguments[0].ajax:'true',b=form({method:'post',action:arguments[0].url,name:SITE_PREFIX+'_login',id:SITE_PREFIX+'_login'}),c=create({object:'label',text:'Username/Email','for':SITE_PREFIX+'_username_login'}),f=input({type:'text',title:'Enter Username / Email',placeholder:'Username / Email',id:SITE_PREFIX+'_username_login',name:SITE_PREFIX+'_username_login'}),g=create({object:'label','for':SITE_PREFIX+'_secure_login',text:'Password'}),h=input({type:'password',id:SITE_PREFIX+'_secure_login',name:SITE_PREFIX+'_secure_login',title:'Enter Your Secure Key(Password)',placeholder:'Secure Key'}),i=input({type:'hidden',name:SITE_PREFIX+'_hash_login',id:SITE_PREFIX+'_hash_login',value:rand(0000,9999)}),j={};
								setCookie('baseJs_hash_login',i.value,1);
								if(a=='false'){
									
									j=input({type:'submit',value:'Login',id:SITE_PREFIX+'_submit',name:SITE_PREFIX+'_submit'});
								}
								else{
									j=input({type:'button',value:'Login',id:SITE_PREFIX+'_submit',name:SITE_PREFIX+'_submit',onclick:"javascript:ajax({method:'post',url:'"+arguments[0].url+"',X:'false',params:'username='+$('#"+SITE_PREFIX+"_username_login').val().toLowerCase()+'&secure='+$('#"+SITE_PREFIX+"_secure_login').val()+'&hash="+i.value+"',error:function(){alert('Login Failed Due To Connection Problem Or Bad Server Behaviour');},success:"+success+"})"});
									
									
								}
								b.appendChild(i);
									if(arguments[0].hasOwnProperty('align') && arguments[0].align=='inline-label'){
										b.appendChild(table({tr:1,td:9,data:[c,' : ',f,'  ',g,' : ',h,'  ',j]})[0]);	
									}
									else
									if(arguments[0].hasOwnProperty('align') && arguments[0].align=='inline'){
										b.appendChild(table({tr:1,td:5,data:[f,'  ',h,'  ',j]})[0]);
									}
									else{
									b.appendChild(table({tr:3,td:3,data:[c,' : ',f,g,' : ',h,'','',j]})[0]);
									}
									
									parent.appendChild(b);
									return true;
							}
							
							
							
							}catch(ex){exception(ex); return false;}},
						
						
						toJson=function(){try{
							if(arguments.length==0) throw ERR_INV_ARGS;
							var a,b,c=[],f=[],i=0,g;
							if(arguments.length==2 && typeof arguments[0]=='string' && typeof arguments[1]=='string'){
								a=arguments[0];
								b=arguments[1];
							}
							else
							if(arguments.length==1 && typeof arguments[0]=='object' && arguments[0].hasOwnProperty('name') && arguments[0].hasOwnProperty('data')){
								a=arguments[0].name;
								b=arguments[0].data;
							}
							c=b.split('&');
							while(i<c.length){
								f.push(c[i].split('='));																								 
								i++;																															 
							}
							
							g='{"'+a+'":[{';
							i=0;
							while(i<f.length-1){
								g=g+'"'+f[i][0]+'":"'+f[i][1]+'",';
								i++;	
							}
							g=g+'"'+f[i][0]+'":"'+f[i][1]+'"}]}';																															
							return g;
							}catch(ex){exception(ex); return false;}},
						
						
						reg=function(){try{
							if(arguments.length==0) throw ERR_INV_ARGS;
							var parent;
							if(typeof arguments[0]=='object' && arguments[0].hasOwnProperty('url')){
								parent=arguments[0].hasOwnProperty('parent') && arguments[0].parent!='' && typeof arguments[0].parent==='object'?arguments[0].parent:elm.length!=0?elm[0]:d.body;
								var success;
								if(arguments[0].hasOwnProperty('success') && typeof arguments[0].success==='function'){
									success=arguments[0].success;
								}
								else{var WINDOW_URL='';
									if(arguments[0].hasOwnProperty('ALLOW_REDIR') && typeof arguments[0].ALLOW_REDIR==='string'){
										if(w.location.href.indexOf('?')!=-1 && w.location.href.indexOf(arguments[0].ALLOW_REDIR)!=-1){
											var WINDOW_URL=w.location.href.split('?')[1];
											var FLAG_NEXT=WINDOW_URL.indexOf(arguments[0].ALLOW_REDIR),last;
											if(WINDOW_URL.indexOf('&',FLAG_NEXT)<FLAG_NEXT){
												last=WINDOW_URL.length;
											}
											else{
												last=WINDOW_URL.indexOf('&',FLAG_NEXT);
											}
											WINDOW_URL=WINDOW_URL.substring(FLAG_NEXT+(arguments[0].ALLOW_REDIR.length)+1,last);
										}
										if(WINDOW_URL==''){
											success="function(){w.location.href='"+arguments[0].url+"';}";
										}
										else{
											success="function(){w.location.href='"+WINDOW_URL+"';}";
										}
									}
									else{
										success="function(){w.location.href='"+arguments[0].url+"';}";
									}
								}
								var a=arguments[0].hasOwnProperty('ajax')?arguments[0].ajax:'true';
								var b=form({method:'post',action:arguments[0].url,name:SITE_PREFIX+'_reg',id:SITE_PREFIX+'_reg'});
								var c=create({object:'label',text:'First Name','for':SITE_PREFIX+'_fname_reg'});
								var f=input({type:'text',title:'Enter Your First Name', placeholder:'First Name',id:SITE_PREFIX+'_fname_reg',name:SITE_PREFIX+'_fname_reg'});
								var g=create({object:'label',text:'Last Name','for':SITE_PREFIX+'_lname_reg'});
								var h=input({type:'text',title:'Enter Your Last Name', placeholder:'Last Name',id:SITE_PREFIX+'_lname_reg',name:SITE_PREFIX+'_lname_reg'});
								var i=create({object:'label',text:'Email','for':SITE_PREFIX+'_username_reg'});
								var j=input({type:'text',title:'Enter Email',placeholder:'Email',id:SITE_PREFIX+'_username_reg',name:SITE_PREFIX+'_username_reg'});
								var k=create({object:'label','for':SITE_PREFIX+'_secure_reg',text:'Password'});
								var l=input({type:'password',id:SITE_PREFIX+'_secure_reg',name:SITE_PREFIX+'_secure_reg',title:'Enter Your Secure Key(Password)',placeholder:'Secure Key'});
								var m=input({type:'hidden',name:SITE_PREFIX+'_hash',id:SITE_PREFIX+'_hash',value:rand(0000,9999)});
								var n={};
								setCookie('baseJs_hash_reg',m.value,1);
								if(a=='false'){
									
									n=input({type:'submit',value:'Signup',id:SITE_PREFIX+'_submit',name:SITE_PREFIX+'_submit'});
								}
								else{
									var t=m.value;
									n=input({type:'button',value:'Signup',id:SITE_PREFIX+'_submit',name:SITE_PREFIX+'_submit',onclick:"javascript:ajax({method:'post',url:'"+arguments[0].url+"',X:'false',params:'fname='+$('#"+SITE_PREFIX+"_fname_reg').val()+'&lname='+$('#"+SITE_PREFIX+"_lname_reg').val()+'&email='+$('#"+SITE_PREFIX+"_username_reg').val().toLowerCase()+'&secure='+$('#"+SITE_PREFIX+"_secure_reg').val()+'&hash="+t+"',error:function(){alert('Registration Failed Due To Connection Problem Or Bad Server Behaviour');},success:"+success+"})"});
								}
								b.appendChild(m);
								if(arguments[0].hasOwnProperty('align') && arguments[0].align=='inline-label'){
										b.appendChild(table({tr:1,td:17,data:[c,' : ',f,'  ',g,' : ',h,'  ',i,' : ',j,' ',k,' : ',l,' ',n]})[0]);	
									}
									else
									if(arguments[0].hasOwnProperty('align') && arguments[0].align=='inline'){
										b.appendChild(table({tr:1,td:9,data:[f,'  ',h,'  ',j,' ',l,' ',n]})[0]);
									}
									else{
									b.appendChild(table({tr:5,td:3,data:[c,' : ',f,g,' : ',h,i,' : ',j,k,' : ',l,'','',n]})[0]);
									}
									
									parent.appendChild(b);
									return true;
							}
							
							
							
							
							
							}catch(ex){exception(ex); return false;}},
					    
						
						dialog=function(){try{
							if(arguments.length==0 || typeof arguments[0]!='object' || !arguments[0].hasOwnProperty('dialog') || !arguments[0].hasOwnProperty('text') || !arguments[0].hasOwnProperty('success')) throw ERR_INV_ARGS;
							var wh=parseInt(w.innerHeight/2-50)+'px';
							var ww=parseInt(w.innerWidth/2-300)+'px';
							var a=arguments[0].dialog,b=arguments[0].title||a.toUpperCase(),c=arguments[0].text,f=function(){d.body.removeChild(d.getElementById('overlay')); return;},g=arguments[0].cancel || function(){return;},h=div({text:'',style:'width:100%; height:100%; overflow:hidden; opacity:0.7; background-Color:#000; position:absolute; top:0; left:0;',id:'overlay'}),i=div({text:b,style:'width:40%; height%50%; margin-top:'+wh+'; margin-left:'+ww+'; overflow:hidden; background-Color:#00f; color:#fff;',id:'dialog_holder'}),j=img({src:'data:image/gif;base64,R0lGODlhEAAOAPc7AO+tpO+spO2pnu+pnu6pnu+onu2onuyhl+2hl5N1eVNWZu2gl+mZjv///5FydemYjuONgeWNgY9tcOSNgOGJfOOJfI5rbuGIfOCEduKEdo5pbPDw8OKDduGDdt+Dds9KNoZRUejo6M5KNs1FMIVPT+Pj481EMM1HMoVQUN7e3s1QOtra2oVUU81POs1bRIVYV81aRM9pUNFpUNBpUNBoUNF5YNR5YNN5YNR4YNN4YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAANAIAAAM3wAAAAEARQAARAAAAAAAAAAAAAAAAAAAAAAAACMAAAIoAAgAAAzf0BLyjDGTADh3cwAjAXMxb5AldwB3aAAAACMAANAQAAAM3wAAAAAAAAAAAAAAFQAAABLycHmzAAh3cwAx/SMBUEtsAAB1lAAjACMBUAAAAAAAAAAAACMBUAACAAACAAAAAAAARQBFRQAAAAAAAAAAAAADAEUAAEUAAAAARQBFAAAAAAAAAABDygBFiQAAAAAAANxr4AAADAAAAAAAAAAAAAF8AAAAIwAAACMBUAAAAAAAAAAAAN/QEP0IDAAAMQAAAAAARQAAAAAAAAEAADH9CAIoAIgAAAEB8hLxrEtsAOR1lAAS82/XTWoRd/4ACf///3Mxby1odwB3cwAAAN/QEB8xDAB3cwAAAAAAAAAAADAAAAAS85CdBvMwdSUAEnWQnQAAAP//AOwBbwFuDm4O7AAYAQAAAAAAABLzCABAAAAAAAAAABLy9AAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAgEBAFoAEnXnDAAAAAAAAJAAIwzb3QAAAAACACUAAAE9AAAAttAQAAAM3wAAAAAEQNvIAAEM2wAAANvdiPNQDK8AEndzHwAEQFqMAHl3cnWQvgAEQPOEAIwAEgAS8wAACAAOAKAAAAFxggAAAARAAJAAAAzb3W////OMAT4AEnXnKRLzhA7sAAABbgAAAAAAAAAAAAAAAAAAAHJajBatd0B1kgAABBLzuCwAAAAAEAAOAAAIpwABCBxIkGCAAAIGKFy4kMDCAgYOIECQQIHFBBQtKkiwYAGDjwoaiFTgIORIBg8gRIggwWQDlwokRJhAoYJNCy5HWrB5AUOGnxk0KNhAVIEGDhw6ePjAlCkIBSGiKgDRVMSIqyNIKCjBlasCEldNnBiLQkGKs2bRohiroq2CFXAVsHgbV0ULF3hfaHzhQq9FvjBiyBhMmPCMwjRq2FjMmPGNxThw5AgIADs=',id:'close_btn',style:'float:right; margin-right:3px; margin-top:3px; cursor:pointer;'}),k=div({text:c, style:'overflow:hidden; width:100%; height:auto; margin-left:0px; margin-top:1%; margin-bottom:0%; border:1px solid #000; background-color:#fff; color:#000;',id:'dialog_text'}),l=div({text:'',style:'width:100%; height:auto; margin-bottom:5%; background-color:#f0f;',id:'button_holder'}),m,n;
								addE(j,'click',f);
								if(arguments[0].dialog.toUpperCase()=='ALERT'){
									m=input({type:'button',id:'button_ok',style:'float:right; margin-right:30px;',value:'OK'});
									addE(m,'click',f);
									addE(m,'click',arguments[0].success);
									l.appendChild(m);
									
								}
								else
								if(arguments[0].dialog.toUpperCase()=='CONFIRM'){
									m=input({type:'button',id:'button_confirm',style:'float:right; margin-right:30px;',value:'CONFIRM'});
									n=input({type:'button',id:'button_cancel',style:'float:right; margin-right:30px;',value:'CANCEL'});
									addE(m,'click',f);
									addE(m,'click',arguments[0].success);
									addE(n,'click',f);
									addE(n,'click',g);
									l.appendChild(m);
									l.appendChild(n);
									
									
								}
								else   //bug
								if(arguments[0].dialog.toUpperCase()=='PROMPT'){
									m=input({type:'text',id:'dialog_input',style:'margin-left:30%;'});
									n=input({type:'button',id:'button_confirm',style:'float:right; margin-right:30px;',value:'CONFIRM'});
									o=input({type:'button',id:'button_cancel',style:'float:right; margin-right:30px;',value:'CANCEL'});
									addE(n,'click',arguments[0].success);
									addE(n,'click',f);
									addE(o,'click',f);
									addE(o,'click',g);
									k.appendChild(m);
									l.appendChild(n);
									l.appendChild(o);
									
									
								}
								else{
									m=input({type:'button',id:'button_ok',style:'float:right; margin-right:30px;',value:'OK'});
									addE(m,'click',f);
									addE(m,'click',arguments[0].success);
									l.appendChild(m);
									
								}
								i.appendChild(j);
								i.appendChild(k);
								i.appendChild(l);
								h.appendChild(i);
								d.body.appendChild(h);
								
									
							
							}catch(ex){exception(ex); return false;}},
							
							ready=function(a){
								addE(w,'DOMContentLoaded',a);
								return true;
							},
							//EXPERIMENTAL DO NOT USE
							comment=function(){
								try{
									if(!arguments[0].hasOwnProperty('feedUrl') || !arguments[0].hasOwnProperty('postUrl') || !arguments[0].hasOwnProperty('postId') || !arguments[0].hasOwnProperty('userId') || (!arguments[0].hasOwnProperty('parent') && elm.length==0)) throw ERR_INV_ARGS_ELTS;
									var a=arguments[0].feedUrl,b=arguments[0].postUrl,c=arguments[0].postId,f=arguments[0].userId,g=arguments[0].parent || elm[0];
									var cc=create({object:'div',id:'cc',style:'width:100%; overflow-y:scroll;overflow-x:hidden; width:80%;'}); // Comment Container
									
									g.innerHTML='';
									g.appendChild(cc);
									function loadComment(){
										ajax({method:'post',url:a,X:false,success:function(a){$('#cc').elm[0].innerHTML=a; return;},error:function(){return;}});
									}
									loadComment();
									setInterval(loadComment,2000);
									var i=form({method:'post',action:b,name:'comment_form',id:'comment-form'}), j=input({type:'hidden',name:'userId',value:f,id:'userId'}),k=input({type:'hidden',name:'postId',id:'postId',value:c}),l=create({object:'textarea',id:'comment_text',name:'comment_text',placeholder:'Comment here',required:'required',style:'width:10%; height:120%;'}),m=input({type:'button',id:'submit',name:'submit',value:'Comment',style:'margin-left:5%;',onclick:"javascript:if($('#comment_text').elm[0].value.length>1){var n=$('#comment_text').val(); ajax({method:'post',params:'userId="+j.value+"&postId="+k.value+"&comment='+$('#comment_text').val(),url:'"+b+"',X:false,success:function(){loadComment(); alert('posted'); $('#comment_text').elm[0].value='';},error:function(){dialog({dialog:'alert',text:'Comment failed!!! Try Again??',success:function(){return;}});}});}else{dialog({dialog:'alert',text:'Cooment Must be greater than 1 characters',success:function(){return;}})}"});
									i.appendChild(j);
									i.appendChild(k);
									i.appendChild(l);
									i.appendChild(create({object:'br'}));
									i.appendChild(m);
									
									g.appendChild(i);
									return true;
									
								}
								catch(ex){
									exception(ex);
									return false;
								}
							},
							rand=function(){
								try{
								if(arguments.length==0) throw ERR_INV_ARGS;
								var a,b,c,f,i=0;
								if(arguments.length==2 && typeof arguments[0]==='number' && typeof arguments[1]==='number'){
									a=String(arguments[0]);
									b=String(arguments[1]);
								}
								else
								if(arguments.length==1 && typeof arguments[0]==='object' && arguments[0].hasOwnProperty('low') && arguments[0].hasOwnProperty('high')){
									a=arguments[0].low;
									b=arguments[0].high;
									c=arguments[0].exclude || null;
								}
								f=String(M.random());
								f=f.substring(2,f.length);
								while(f[i]>=b[0] || f[i]<=a[0]){
									i++;
								}
								if((f.length-i)>=a.length){
									f=f.substring(i,i+b.length);
									return parseInt(f);
								}
								else{
									b=Number(b);
									a=Number(a);
									b=b-a;
									b=parseInt(b/2);
									return a+b;
								}
								
								}
								catch(ex){
									exception(ex);
									return false;
								}
							},
							
							empty=function(){
								try{
									if(elm.length==0) throw ERR_NO_ELTS;
									var a=elm,i=0,j=0;
									while(i<a.length){
										j=0;
										while(j<a[i].children.length){
											$(a[i]).html('');
											j++;
										}
										i++;
									}
									return w;
									
								}catch(ex){
									exception(ex);
									return w;
								}
							},
							logout=function(){
								try{
									if(arguments.length==0 || typeof arguments[0]!='object' || (!arguments[0].hasOwnProperty('parent') && elm.length==0)) throw ERR_INV_ARGS;
									var a=arguments[0].url || "logout.php",b=arguments[0].type || "link",c=arguments[0].ajax || "false",f=arguments[0].parent || elm[0] || "none",g=arguments[0].text || "Logout",h=arguments[0].params || "logout=1",i=arguments[0].success || function(){w.location.reload();},j='',k,l=0;
									if(b=="button"){
										if(c=="true"){
											j=$().input({type:'button', id:SITE_PREFIX+"_logout", name:SITE_PREFIX+"_logout", value:g,onclick:"javascript:ajax({method:'post',url:'"+a+"',X:'false',params:'"+h+"',success:"+i+",error:function(){dialog({dialog:'alert',text:'Failed Due To Some Bad Server Behaviour',success:function(){return;}})}})"});
											
										}
										else{
											j=form({action:a,method:'post',id:SITE_PREFIX+"_logout_f", name:SITE_PREFIX+"_logout_f"});
											k=h.split('&');
											
											while(l<k.length){
												j.appendChild(input({type:'hidden',name:k[l].split('=')[0],value:k[l].split('=')[1]}));
												l++;
											}
											j.appendChild(input({type:'submit',value:'logout'}));
										}
										
									}
									else{
										if(c=="true"){
											j=$().create({object:'a', href:"javascript:void(0)", text:g, id:SITE_PREFIX+"_logout", name:SITE_PREFIX+"_logout",onclick:"javascript:ajax({method:'post',url:'"+a+"',X:'false',params:'"+h+"',success:"+i+",error:function(){dialog({dialog:'alert',text:'Failed Due To Some Bad Server Behaviour',success:function(){return;}})}})"});
											
										}
										else{
											a=a.indexOf('?')==-1?a+'?'+h:a+'&'+h
											j=$().create({object:'a', href:a, text:g, id:SITE_PREFIX+"_logout", name:SITE_PREFIX+"_logout"});
										}
										
										
										
									}
									
									$(f).add(j);
									
								}
								catch(ex){
									exception(ex);
									return false;
								}
							},
							update=function(){
								try{
									if(arguments.length==0 || typeof arguments[0]!='object' || !arguments[0].hasOwnProperty('url') || !arguments[0].hasOwnProperty('field') || !arguments[0].hasOwnProperty('label') || (!arguments[0].hasOwnProperty('parent') && elm.length==0))throw ERR_INV_ARGS;
									var a=arguments[0].url,b=arguments[0].label, c=arguments[0].field, f=arguments[0].ajax || "true",g=arguments[0].success || function(){return;},h=arguments[0].parent || elm[0],i,j,k,l,m,n;
									i=$().form({action:a,method:'post'});
									j=$().input({type:c,id:'old_'+b,name:'old_'+b});
									k=$().input({type:c,id:'new_'+b,name:'new_'+b});
									if(f=="true"){
										l=$().input({type:'button',id:'update',name:'update',value:'Update',onclick:"javascript:ajax({url:'"+a+"',method:'post',X:'false',success:"+g+",error:function(){return;},params:'old_"+b+"='+$('#old_"+b+"').val()+'&new_"+b+"='+$('#new_"+b+"').val()})"});
									}
									else{
										l=$().input({type:'submit',name:'update',value:'Update'});
									}
									if(arguments[0].hasOwnProperty('align') && arguments[0].align=='inline'){
										i.appendChild(table({tr:1,td:3,data:[j,k,l]})[0]);
									}
									else
									if(arguments[0].hasOwnProperty('align') && arguments[0].align=='inline-label'){
										i.appendChild(table({tr:1,td:7,data:[create({object:'label','for':'old_'+b,text:'Old '+b}),' : ',j,create({object:'label','for':'new_'+b,text:'New '+b}),' : ',k,l]})[0])
									}
									else{
										i.appendChild(table({tr:3,td:3,data:[create({object:'label','for':'old_'+b,text:'Old '+b}),' : ',j,create({object:'label','for':'new_'+b,text:'New '+b}),' : ',k,'','',l]})[0]);
										
									}
									$(h).add(i);
									
									
								}
								catch(ex){
									exception(ex);
									return false;
								}
								
								
								
								
							},
							addClass=function(){
								try{
									if(elm.length==0 || arguments.length==0) throw ERR_INV_ARGS_ELTS;
									var i=0,j=0,k=0,b=[],FLAG,NEW_CLASS,ELM_COPY=elm;
									
									while(i<ELM_COPY.length){//loop for each elements
										j=0;
										
										while(j<arguments.length){//loop for each argument
										//alert(b.length);
											if($(ELM_COPY[i]).attr('class').length==0){
												$().attr(ELM_COPY[i],'class',arguments[j]);
												
											}
											else{
												k=0;
												FLAG=0;
												b=$(ELM_COPY[i]).attr('class').split(' ');
												while(k<b.length){
													if(b[k]==arguments[j]){
														FLAG=0;
														break;
														
													}
													else{
														FLAG=1;
													}
													k++;
												}
												if(FLAG==1){
													NEW_CLASS=$(ELM_COPY[i]).attr('class');
													NEW_CLASS=NEW_CLASS+' '+arguments[j];
													$().attr(ELM_COPY[i],'class',NEW_CLASS);
												}
											}
												j++;
										}
										i++;
									}
								}
								catch(ex){
									exception(ex);
									return false;
								}
								
							},
							removeClass=function(){
								try{
									if(elm.length==0 || arguments.length==0) throw ERR_INV_ARGS_ELTS;
									var i=0,j=0,k=0,a=$().attr('class'),b=[],FLAG,NEW_CLASS,ELM_COPY=elm;
									if(typeof a==='string'){
										a=[a];
									}
									while(i<a.length){//loop for each element
										j=0;
										b=a[i].split(' '); //now b is an array with classnames of current ith element
										while(j<arguments.length){//loop for each argument
											k=0;
											FLAG=0;
											while(k<b.length){
												if(b[k]==arguments[j]){
													FLAG=1;
													break;
													
												}
												else{
													FLAG=0;
												}
												k++;
											}
											if(FLAG==1){
												NEW_CLASS=$(ELM_COPY[i]).attr('class');
												var RE=new RegExp(arguments[j],'g');
												NEW_CLASS=NEW_CLASS.replace(RE,'');
												NEW_CLASS=NEW_CLASS.replace(/  /g,' ');
												$().attr(ELM_COPY[i],'class',NEW_CLASS);
											}
											j++;
										}
										i++;
									}
								
								}
								catch(ex){
									exception(ex);
									return false;
								}
								
							},
							hasClass=function(){
								try{
									if(elm.length==0 || arguments.length==0) throw ERR_INV_ARGS_ELTS;
									var a,b,i=0,j=0,k=0,FLAG=0,RESULT=[],EACH=[],ELM_COPY=elm;
									while(i<ELM_COPY.length){
										j=0;
										b=$(ELM_COPY[i]).attr('class').split(' ');
										EACH=[];
										while(j<arguments.length){
											k=0;
											FLAG=0;
											while(k<b.length){
												if(arguments[j]==b[k]){
													FLAG=1;
													break;
												}
												k++;
											}
											if(FLAG==1){
												EACH.push('true');
											}
											else{
												EACH.push('false');
											}
											j++;
										}
										RESULT.push(EACH);
										i++;
									}
									return RESULT.length==0? false : RESULT.length==1?RESULT[0].length==1?RESULT[0][0]:RESULT[0]:RESULT;
								}
								catch(ex){
									exception(ex);
									return false;
								}	
							},
							changeClass=function(){
								try{
									if(elm.length==0 || arguments.length==0) throw ERR_INV_ARGS_ELTS;
									var i=0,j=0,ELM_COPY=elm;
									while(i<ELM_COPY.length){
										j=0;
										while(j<arguments.length){
											if($(ELM_COPY[i]).hasClass(arguments[j])=="true"){
												$(ELM_COPY[i]).removeClass(arguments[j]);
											}
											else{
												$(ELM_COPY[i]).addClass(arguments[j])
											}
											j++;
										}
										
										
										i++;	
									}
								
								
								
								
								}
								catch(ex){
									exception(ex);
									return false;
								}
							}
							
							
							;
							/*liveSearch=function(){
								try{
									if(arguments.length==0) throw ERR_INV_ARGS;
									var a,b;
									if(arguments.length==1 && typeof arguments[0]==='object' && arguments[0].hasOwnProperty('url') && (arguments[0].hasOwnProperty('parent') || elm.length!=0)){
										
										
										a=arguments[0].url;
										b=arguments[0].parent || elm[0];
									}
									
									else
									if(arguments.length==1 && typeof arguments[0]=='string'){
									
										a=arguments[0];
										b=elm[0] || $('input').elm[0];
									}
									
									if(a!=null && b!=null){
										var WIDTH=$(b).css()[0].width || '200px';
										var c=div({text:'',style:'position:absolute; width:'+WIDTH+'; '});
										
										$(b).after(c);
										$().addE(b,'keypress',function(event){
																	   ajax({
																			url:a,
																			method:'post',
																			params:'q='+b.value,
																			X:'false',
																			success:function(f){
																				$(c).html(f);
																				alert(b.value);
																				},
																			error:function(){return;}
																			})
																	   });
										
										
										
										
										
										
										
										
									}
									
								}
								catch(ex){
									exception(ex);
									return false;
								}
							};*/
							
							
					
					
					/*
					// NEW SHOULD BE IMPLEMENTED IN NEXT VERSION TO SUPPORT BETTER CHAINING
					listfn=function(){
						try{
							var add=w.add,addE=w.addE,attr=w.attr,ajax=w.ajax,after=w.after,baseInfo=w.baseInfo,blur=w.blur,before=w.before,click=w.click,confirm=w.confirm,css=w.css,delay=w.delay,delCookie=w.delCookie,destroy=w.destroy;
							
							
							
							
							return this;
						}catch(ex){exception(ex); return this;
						}
						
						
						
						
						
						};
					
					*/
	if (!d.querySelectorAll) {
    d.querySelectorAll = function(selectors) {
      var style = d.createElement('style'), el = [], elt;
      d.documentElement.firstChild.appendChild(style);
      d._qsa = [];

      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      w.scrollBy(0, 0);
      style.parentNode.removeChild(style);

      while (d._qsa.length) {
        elt = d._qsa.shift();
        elt.style.removeAttribute('x-qsa');
        el.push(elt);
      }
      d._qsa = null;
      return el;
    };
  };
		  }catch(ex){exception(ex); return false;}
		  }())
// ########################################################END######################################################################################################//
//-->
