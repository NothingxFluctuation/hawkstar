/*! updated; 07-26-2018 09:21 PM **/


!function(FNC){FNC.Loader.load(function(require){require(["jquery","core.plugins:EventMessageHandler"],function($,EventMessageHandler){var Handler=new EventMessageHandler;Handler.addHandler("newsletter.messenger.submit",function(data){var SENT=!1;$.ajax({type:"POST",url:"/portal/newsalertsubscribe",data:{slids:data.slid,email:data.email,format:"html"},dataType:"text"}).done(function(){SENT=!0}),Handler.sendMessage("parent","parent.newsletter.receiver",{uid:data.uid})}),Handler.sendMessage("parent","parent.newsletter.iframe.loaded",!0)})})}(window.FNC);