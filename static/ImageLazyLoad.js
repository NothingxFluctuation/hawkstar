/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.plugins:ImageLazyLoad",["require","jquery"],function(require,$){function getSrcset(info){for(var arr=info.arr,width=$w.width(),res=null,i=0;i<arr.length;i++){var item=arr[i];if(width<=item.w){res=item.src;break}}return res=res||arr[arr.length-1].src}function validateSrcset(data){if(!data)return null;for(var res=null,arr=[],str=[],items=data.split(","),i=0;i<items.length;i++){var item=$.trim(items[i]||"").replace(/\s+/g," "),sp=item.split(" ");if(2===sp.length){var w=/\w$/i.test(w)?parseInt(sp[1].replace(/\w$/i,""),10):null;"number"!=typeof w||isNaN(w)||(arr.push({src:sp[0],w:w}),str.push(item))}}return arr.length>0&&(res={str:str.join(","),arr:arr}),res}var th=300,retina=window.devicePixelRatio>1,$w=$(window),UNVEIL_STACK=[],App=function(images,threshold,callback){isNaN(threshold)||(th=threshold),images.each(function(){var elm=$(this);if("1"!==elm.attr("data-lz-init")){var srcset=elm.attr("data-srcset")||null,srcsetInfo=validateSrcset(srcset),src=function(){var res=(retina?elm.attr("data-src-retina"):elm.attr("data-src"))||elm.attr("data-src");if(srcsetInfo){var s=getSrcset(srcsetInfo);s&&(res=s)}return res}();src&&(elm.attr("data-lz-init","1"),elm.attr("data-lz-done","0"),elm.one("fnc.unveil",function(){elm.attr("data-lz-done","1");var img=new Image;elm.css({opacity:0}).attr("src",src),srcset&&elm.attr("srcset",srcset);var parent=elm.parent();"picture"===parent.prop("tagName").toLowerCase()&&parent.find("> source").each(function(){var el=$(this),ps=el.attr("data-srcset")||null;ps&&el.attr("src",ps).removeAttr("data-srcset")});var show=function(){elm.animate({opacity:1},500,"linear",function(){elm.removeAttr("data-src data-srcset"),"function"==typeof callback&&callback(elm)})};img.onload=function(){show()},img.src=elm.get(0).currentSrc||src}))}});var unveil=function(){var inview=images.filter(function(){var $e=$(this);if(!$e.is(":hidden")){var wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top;return et+$e.height()>=wt-th&&et<=wb+th}}),loaded=inview.trigger("fnc.unveil");return images=images.not(loaded),images.length};UNVEIL_STACK.push(unveil),triggerStack()},triggerStack=function(){var running=!1;return function(){if(UNVEIL_STACK.length>0){if(running)return;running=!0;for(var arr=[];UNVEIL_STACK.length>0;){var fn=UNVEIL_STACK.shift();fn()&&arr.push(fn)}UNVEIL_STACK=arr,running=!1}}}();return function(){var sTimeout,rTimeout;$w.on("scroll",function(){clearTimeout(sTimeout),sTimeout=setTimeout(function(){triggerStack()},50)}),$w.resize("resize",function(){clearTimeout(rTimeout),rTimeout=setTimeout(function(){triggerStack()},50)})}(),App});