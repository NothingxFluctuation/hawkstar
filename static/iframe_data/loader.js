/*! updated; 07-26-2018 09:21 PM **/


!function(FNC,$){FNC.Loader&&FNC.Loader.load(["/static/orion/scripts/core/auth/ag.app.js"],function(){FNC.core.auth.init(function(require){require(["jquery"],function($){var pagetype=$('meta[name="auth_type"]').attr("content")||null;pagetype&&require(["pages/"+pagetype])})})})}(window.FNC||{},window.jQuery);