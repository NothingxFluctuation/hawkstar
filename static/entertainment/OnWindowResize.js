/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.plugins:OnWindowResize",["jquery"],function($){return function(callback,threshold){function trigger(){clearTimeout(timeout),timeout=setTimeout(function(){callback()},threshold)}if(threshold="number"!=typeof threshold?25:threshold,"function"!=typeof callback||!$)return!1;var timeout,hasOrientation="onorientationchange"in window,onEvent=hasOrientation?"orientationchange":"resize";window.addEventListener?window.addEventListener(onEvent,function(){trigger()},!1):$(window).on(onEvent,function(){trigger()})}});