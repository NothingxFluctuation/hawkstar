/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.components:newsletter/index",["require","jquery","ISA","newsletter/config","newsletter/comm"],function(require,$){var ISA=require("ISA"),Comm=(require("newsletter/config"),require("newsletter/comm")),UID_ITER=0,isValidEmail=function(email){return!!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/i.test(email)},sendSubscription=function(Handler,uid,email,slid,target){var list=target.attr("data-list")||"email-sign-up-success";Handler.submit({uid:uid,slid:slid,email:email},function(){ISA.track({"email-sign-up-success":{listName:list}})})};return function(props){var Proto=this,target=props.elm,SUBMITTING=!1;UID_ITER++;var UID="uid_"+UID_ITER,SLID=props.SLID?props.SLID:target.find("input[type='hidden'][name='slid']").val(),INPUT=props.INPUT?props.INPUT:target.find("input[type='text'][name='signup']"),INPUT_STR=props.INPUT_STR?props.INPUT_STR:"Enter Email Address",onSuccess="function"==typeof props.onSuccess?props.onSuccess:function(){},onError="function"==typeof props.onError?props.onError:function(){},onFocus="function"==typeof props.onFocus?props.onFocus:function(){},onBlur="function"==typeof props.onBlur?props.onBlur:function(){};"3DC725E303A24F8D9C92271F5026F381"===SLID&&(INPUT_STR="Enter your email address"),Handler=new Comm(UID),INPUT.val(INPUT_STR),INPUT.on("focus",function(){var val=$(this).val();$.trim(val.toLowerCase())===INPUT_STR.toLowerCase()&&$(this).val(""),onFocus()}),INPUT.on("blur",function(){var val=$(this).val();""===$.trim(val.toLowerCase())&&$(this).val(INPUT_STR),onBlur()}),target.on("submit",function(){return Proto.submit(),!1}),Handler.receiver(function(data){var list=target.attr("data-list")||"email-sign-up-success";ISA.track({"email-sign-up-success":{listName:list}})}),Proto.submit=function(){if(SUBMITTING)return!1;SUBMITTING=!0;var email=INPUT.val().trim(),valid=isValidEmail(email);if(valid&&SLID)onSuccess(),sendSubscription(Handler,UID,email,SLID,target);else{onError(valid?"slid":"email")}return setTimeout(function(){SUBMITTING=!1},500),!1}}});