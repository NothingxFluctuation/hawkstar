/*! updated; 07-26-2018 09:21 PM **/


!function(Modulr,FNC){if(Modulr.getInstance("core.auth"))return!1;var config={instance:"core.auth",baseDomain:FNC.CDN.domain,baseUrl:"/static/orion/scripts/core/auth/app",masterFile:"/static/orion/scripts/core/utils/modulr/master.js",paths:{},packages:["core.plugins"],shim:{jquery:{src:"/static/orion/scripts/core/utils/jquery/core.js",exports:"jQuery"},lodash:{src:"/static/orion/scripts/core/utils/lodash.js",exports:"_"},"akamai.time":{src:"//global.fncstatic.com/static/v/all/js/geo.js",exports:"AKAMAI_TIME_HELPER"},ISA:{src:"/static/isa/core.js",exports:"FNC.ISA"}}},Instance=Modulr.config(config);Instance.define("cdn",function(){return FNC.CDN}),Instance.define("fnc.isa",["ISA"],function(){return FNC.ISA}),window.FNC.core=window.FNC.core||{},window.FNC.core.auth=window.FNC.core.auth||function(){var App=function(){};return App.prototype.init=function(callback){($('meta[name="auth_type"]').attr("content")||null)&&Instance.require(["index"],function(App){"function"==typeof callback&&callback(App)})},App.prototype.set=function(callback){$('meta[name="auth_type"]').attr("content")||null||Instance.require(["api"],function(API){"function"==typeof callback&&callback(API)})},App.prototype.isAuthenticated=function(callback){Instance.require(["api"],function(API){"function"==typeof callback&&callback(API.isAuthenticated())})},new App}()}(window.Modulr,function(){return window.FNC=window.FNC||{},window.FNC.CDN=window.FNC.CDN||function(){function idx(e,v){return e.indexOf(v)>-1?1:0}for(var type="prod",found=!1,scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var src=scripts[i].getAttribute("src")||"";if(src&&(idx(src,"fncstatic.com/static/")||idx(src,"foxnews.com/static/")||idx(src,"foxbusiness.com/static/")||idx(src,"/static/v"))){found=src;break}}found&&(idx(found,"qa.global.")||idx(found,"-qa.")?type="qa":idx(found,"staging.")?type="staging":idx(found,"global.fncstatic")||(type="relative"));var domain="global.fncstatic.com",env="relative"===type?"prod":type;switch(type){case"qa":domain="qa."+domain;break;case"staging":domain="https:"===window.location.protocol?domain:["v8-staging","foxnews.com"].join(".");break;case"relative":domain=window.location.host}return domain="//"+domain,window.FOX_ENV_STATIC_DOMAIN=domain,window.FOX_ENV_STATIC=env,{domain:domain,env:env}}(),window.FNC}());