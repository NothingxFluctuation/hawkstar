/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.plugins:LoadAttempt",["require"],function(require){var CONST={attempts:999,timeout:500},fn=function(){},App=function(){var args=arguments,cfg=!1;isNum(args[0])&&isNum(args[1])&&isFunc(args[2])?cfg={attempts:args[0],timeout:args[1],check:args[2],success:isFunc(args[3])?args[3]:fn,expires:isFunc(args[4])?args[4]:fn}:isNum(args[0])&&isFunc(args[1])?cfg={attempts:args[0],timeout:CONST.timeout,check:args[1],success:isFunc(args[2])?args[2]:fn,expires:isFunc(args[3])?args[3]:fn}:isFunc(args[0])&&(cfg={attempts:CONST.attempts,timeout:CONST.timeout,check:args[0],success:isFunc(args[1])?args[1]:fn,expires:isFunc(args[2])?args[2]:fn});var timeout,isAbort=!1,isExpires=!1,isSuccess=!1,attempt=function(){isAbort?(clearTimeout(timeout),isExpires="aborted",cfg.expires(isExpires)):cfg.check()?(isSuccess=!0,cfg.success(),clearTimeout(timeout)):cfg.attempts>0?timeout=setTimeout(function(){attempt()},cfg.timeout):(isExpires="expired",cfg.expires(isExpires)),cfg.attempts--};return attempt(),{abort:function(){isAbort=!0},success:function(success){isSuccess?success():cfg.success=success},expires:function(expires){isExpires?expires(isExpires):cfg.expires=expires}}},isNum=function(val){return"number"==typeof val},isFunc=function(val){return"function"==typeof val};return App});