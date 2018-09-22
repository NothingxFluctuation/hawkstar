/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.components:modal/modules/newsletter",["require","jquery","lodash","modernizr","core.templates:controls/api","core.plugins:Base64","newsletter"],function(require,$,_,Modernizr){var Template=require("core.templates:controls/api"),Base64=require("core.plugins:Base64"),Newsletter=require("newsletter"),TEMPLATE_MARKUP=!1,TEMPLATE_INIT=!1,HOVER_OVER=!1;return function(props){function render(){if(!target){var names={uid:encode("modal"),email:encode("email"),submit:encode("submit"),rnd1:encode("rnd1"),rnd2:encode("rnd2")},html=TEMPLATE_MARKUP({uid:names.uid,slid:SLID,name_email:names.email,name_signup:names.submit,name_rnd1:names.rnd1,name_rnd2:names.rnd2m,val_1:encode("val1"),modal_id:MODAL_ID});if($("#wrapper").prepend(html),target=$('#wrapper > .popup-modal > .modal-email[data-uid="'+names.uid+'"]:first'),0!==target.length){var content=target.find(".content"),parent=target.parent();if("1"!==target.attr("data-init"))if(target.attr("data-init","1"),target.find("a.close").on("click",function(evt){return evt.preventDefault(),parent.remove(),!1}),Modernizr.touchevents){content.on("touchstart",function(){HOVER_OVER=!0}),content.on("touchend",function(){setTimeout(function(){HOVER_OVER=!1},100)});var listener=null;$("html, body").on("touchend",function(){clearTimeout(listener),listener=setTimeout(function(){parent.length>0&&parent.hasClass("show")&&!HOVER_OVER&&parent.remove()},50)})}else content.hover(function(){HOVER_OVER=!0},function(){HOVER_OVER=!1}),$("html, body").on("click",function(){parent.length>0&&parent.hasClass("show")&&!HOVER_OVER&&parent.remove()});var form=target.find("form");Newsletter.set({elm:form,SLID:SLID,INPUT:form.find('input[name="'+names.email+'"]'),INPUT_STR:" ",onError:function(){target.find(".invalid").addClass("show")},onSuccess:function(){target.find(".email.signup").removeClass("show"),target.find(".email.thanks").addClass("show")}})}}}function encode(str){return Base64.encode(str+(new Date).getTime())}props=props||{};var Proto=this,SLID=props&&props.SLID?props.SLID:null,MODAL_ID=function(id){var arr=[0,0,1,3,5,6];return arr[id]?"email-"+arr[id]:""}("number"!=typeof props.variantId?0:props.variantId),target=null;Proto.set=function(){if(TEMPLATE_MARKUP)render();else{if(TEMPLATE_INIT)return;TEMPLATE_INIT=!0,Template.get("/static/orion/scripts/core/components/app/modal/templates/newsletter.html",function(html){TEMPLATE_MARKUP=_.template(html),render()})}}}});