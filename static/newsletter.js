/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.components:newsletter",["require","newsletter/index"],function(require,Newsletter){var App=function(){};return App.prototype.set=function(props){return new Newsletter(props)},new App});