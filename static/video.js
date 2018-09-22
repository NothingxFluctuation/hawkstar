/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.components:modal/modules/video",["require","jquery","lodash","ISA","core.templates:api","core.base:utils/localStorage","core.video:api","core.base:utils/page.reload"],function(require,$,_,ISA){var Template=require("core.templates:api"),Video=require("core.video:api"),PageReload=(require("core.base:utils/localStorage"),require("core.base:utils/page.reload")),TEMPLATE_MARKUP=!1,TEMPLATE_INIT=!1,HOVER_OVER=!1;return function(props){function render(){var videoId=current.videoId,intcmp=(current.config&&current.config.details&&current.config.details,current.config&&current.config.intcmp?current.config.intcmp:null),callback=current.callback||null;if(target)target.addClass("show"),target.find(".content").css("visibility","hidden");else{var html=TEMPLATE_MARKUP();$("#wrapper").prepend(html),target=$("#wrapper > .popup-modal:first")}$("body").addClass("scroll-lock");var content=target.find(".content"),holder=getHolder();if(intcmp&&ISA.track("video-modal",{videoId:videoId,intcmp:intcmp}),holder.attr("data-video-id")!==videoId){var properties={app:{rules:["autoplay","noTitleBar","autoAdvance"]}};current.config&&current.config.domain&&(properties.app.domain=/foxbusiness/i.test(current.config.domain)?"foxbusiness":"foxnews"),current.config&&current.config.playername&&properties.app.rules.push("playername:"+current.config.playername),target.attr("data-video-init")?instance.change(videoId,properties):(target.attr("data-video-init","1"),holder.attr("data-video-id",videoId),instance=Video.embed(holder,properties)),PageReload.clear()}else showContent(),PageReload.clear(),instance.trigger("play");"1"!==target.attr("data-init")&&(target.attr("data-init","1"),target.find("a.close").on("click",function(evt){return evt.preventDefault(),Proto.close(),!1}),content.hover(function(){HOVER_OVER=!0},function(){HOVER_OVER=!1}),$("html, body").on("click",function(){target&&target.hasClass("show")&&!HOVER_OVER&&Proto.close()}),$(document).keyup(function(evt){27===evt.keyCode&&Proto.close()})),instance.on("amp.mediachange",function(data){if(showContent(),data){var title=data.amp&&data.amp.title?data.amp.title:"&nbsp;",desc=data.amp&&data.amp.metadata.description?data.amp.metadata.description:"&nbsp;",link=data.amp&&data.amp.link?data.amp.link:"#";target.find(".info .title a").text(title).attr("href",link),target.find(".info .dek").text(desc)}}),"function"==typeof callback&&callback(instance)}function showContent(){target&&target.find(".content").css("visibility","visible")}function triggerCallback(event,data){if(EVENT_CALLBACK[event])for(var i=0,evt=EVENT_CALLBACK[event];i<evt.length;i++)evt[i](data)}function getHolder(){return target.find(".m.video-player .main-player")}var Proto=this,current=null,target=null,instance=null,EVENT_CALLBACK={};Proto.set=function(videoId,config,callback){if(current={videoId:videoId,config:config,callback:callback},TEMPLATE_MARKUP)render();else{if(TEMPLATE_INIT)return;TEMPLATE_INIT=!0,Template.get("/static/orion/scripts/core/components/app/modal/templates/video.html",function(html){TEMPLATE_MARKUP=_.template(html),render()})}},Proto.on=function(event,callback){void 0===EVENT_CALLBACK[event]&&(EVENT_CALLBACK[event]=[]),EVENT_CALLBACK[event].push(callback)},Proto.close=function(){target&&($("#wrapper > .popup-modal:first").remove(),target||target.remove(),target=null,$("body").removeClass("scroll-lock"),PageReload.reset(),triggerCallback("close"))}}});