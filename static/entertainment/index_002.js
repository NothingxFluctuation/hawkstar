/*! updated; 07-26-2018 09:21 PM **/


Modulr.define("core.components:embed-video/index",["require","core.video:api","jquery"],function(require,Video,$){return function(){var embed=$(".video-container .video-player");if(0!==embed.length){var prop=(embed.attr("data-video-id"),embed.attr("data-video-domain"),{app:{rules:["autoplay","autoAdvance","inpage"]}});Video.embed(embed,prop).on("player.ready",function(data){var iframe=embed.find("> iframe:first");iframe.length>0&&iframe.css({width:"100%",height:"100%"})})}}});