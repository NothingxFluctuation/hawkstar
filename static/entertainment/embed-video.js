/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.components:embed-video",["require","embed-video/index"],function(require,EmbedVideo){var App=function(){};return App.prototype.set=function(){return new EmbedVideo},App.prototype.init=function(){return this.set()},new App});