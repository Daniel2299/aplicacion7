// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(i,f,g){var c=jQuery;var e=function(p,v){var o=c.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},v);var r={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var m=c(p);m.data("wow:vars",r);if(!/absolute|relative/.test(m.css("position"))){m.css("position","relative")}var k=v.container||m;var n=m.children();r.totalSlides=n.length;if(o.startSlide>0){if(o.startSlide>=r.totalSlides){o.startSlide=r.totalSlides-1}r.currentSlide=o.startSlide}if(c(n[r.currentSlide]).is("img")){r.currentImage=c(n[r.currentSlide])}else{r.currentImage=c(n[r.currentSlide]).find("img:first")}if(c(n[r.currentSlide]).is("a")){c(n[r.currentSlide]).css("display","block")}for(var q=0;q<o.slices;q++){var u=Math.round(k.width()/o.slices);var t=c('<div class="wow-slice"></div>').css({left:u*q+"px",overflow:"hidden",width:((q==o.slices-1)?(k.width()-(u*q)):u)+"px",position:"absolute"}).appendTo(k);c("<img>").css({position:"absolute",left:0,top:0}).appendTo(t)}var l=0;this.sliderRun=function(w,x){if(r.busy){return false}o.effect=x||o.effect;r.currentSlide=w-1;s(m,n,o,false);return true};var j=function(){if(o.onEffectEnd){o.onEffectEnd(r.currentSlide)}k.hide();r.busy=0};var s=function(w,x,z,B){var C=w.data("wow:vars");if((!C||C.stop)&&!B){return false}C.busy=1;C.currentSlide++;if(C.currentSlide==C.totalSlides){C.currentSlide=0}if(C.currentSlide<0){C.currentSlide=(C.totalSlides-1)}C.currentImage=c(x[C.currentSlide]);if(!C.currentImage.is("img")){C.currentImage=C.currentImage.find("img:first")}c(".wow-slice",k).each(function(H){var J=c(this),G=c("img",J);var I=Math.round(k.width()/z.slices);G.width(k.width());G.attr("src",C.currentImage.attr("src"));G.css({left:-I*H+"px"});J.css({height:"0px",opacity:"0",left:I*H+"px",width:((H==z.slices-1)?(k.width()-(I*H)):I)+"px"})});k.show();if(z.effect=="random"){var D=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");C.randAnim=D[Math.floor(Math.random()*(D.length+1))];if(C.randAnim==undefined){C.randAnim="fade"}}if(z.effect.indexOf(",")!=-1){var D=z.effect.split(",");C.randAnim=c.trim(D[Math.floor(Math.random()*D.length)])}if(z.effect=="sliceDown"||z.effect=="sliceDownRight"||C.randAnim=="sliceDownRight"||z.effect=="sliceDownLeft"||C.randAnim=="sliceDownLeft"){var y=0;var A=0;var F=c(".wow-slice",k);if(z.effect=="sliceDownLeft"||C.randAnim=="sliceDownLeft"){F=c(".wow-slice",k)._reverse()}F.each(function(){var G=c(this);G.css({top:0,bottom:""});if(A==z.slices-1){setTimeout(function(){G.animate({height:"100%",opacity:"1.0"},z.animSpeed,j)},(100+y))}else{setTimeout(function(){G.animate({height:"100%",opacity:"1.0"},z.animSpeed)},(100+y))}y+=50;A++})}else{if(z.effect=="sliceUp"||z.effect=="sliceUpRight"||C.randAnim=="sliceUpRight"||z.effect=="sliceUpLeft"||C.randAnim=="sliceUpLeft"){var y=0;var A=0;var F=c(".wow-slice",k);if(z.effect=="sliceUpLeft"||C.randAnim=="sliceUpLeft"){F=c(".wow-slice",k)._reverse()}F.each(function(){var G=c(this);G.css({top:"",bottom:0});if(A==z.slices-1){setTimeout(function(){G.animate({height:"100%",opacity:"1.0"},z.animSpeed,j)},(100+y))}else{setTimeout(function(){G.animate({height:"100%",opacity:"1.0"},z.animSpeed)},(100+y))}y+=50;A++})}else{if(z.effect=="sliceUpDown"||z.effect=="sliceUpDownRight"||C.randAnim=="sliceUpDownRight"||z.effect=="sliceUpDownLeft"||C.randAnim=="sliceUpDownLeft"){var y=0;var A=0;var E=0;var F=c(".wow-slice",k);if(z.effect=="sliceUpDownLeft"||C.randAnim=="sliceUpDownLeft"){F=c(".wow-slice",k)._reverse()}F.each(function(){var G=c(this);if(A==0){G.css({top:0,bottom:""});A++}else{G.css({top:"",bottom:0});A=0}if(E==z.slices-1){setTimeout(function(){G.animate({height:"100%",opacity:"1.0"},z.animSpeed,j)},(100+y))}else{setTimeout(function(){G.animate({height:"100%",opacity:"1.0"},z.animSpeed)},(100+y))}y+=50;E++})}else{if(z.effect=="fold"||C.randAnim=="fold"){var y=0;var A=0;c(".wow-slice",k).each(function(){var G=c(this);var H=G.width();G.css({top:"0px",height:"100%",width:"0px"});if(A==z.slices-1){setTimeout(function(){G.animate({width:H,opacity:"1.0"},z.animSpeed,j)},(100+y))}else{setTimeout(function(){G.animate({width:H,opacity:"1.0"},z.animSpeed)},(100+y))}y+=50;A++})}else{if(z.effect=="fade"||C.randAnim=="fade"){var A=0;c(".wow-slice",k).each(function(){c(this).css("height","100%");if(A==z.slices-1){c(this).animate({opacity:"1.0"},(z.animSpeed*2),j)}else{c(this).animate({opacity:"1.0"},(z.animSpeed*2))}A++})}}}}}}};c.fn._reverse=[].reverse;var a=c("li",g);var d=c("ul",g);var b=c("<div></div>").css({left:0,top:0,"z-index":8,width:"100%",height:"100%",position:"absolute"}).appendTo(g);var h=new e(d,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:i.duration,startSlide:i.startSlide,container:b,onEffectEnd:function(j){d.css({left:-j+"00%"}).stop(true,true).show()}});this.go=function(k,j){var l=h.sliderRun(k);if(l){if(i.fadeOut){d.fadeOut(i.duration)}return k}else{return -1}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"slices",prev:"",next:"",duration:20*100,delay:20*100,width:960,height:360,autoPlay:true,playPause:true,stopOnHover:false,loop:false,bullets:true,caption:false,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});