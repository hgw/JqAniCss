/* 
jquery.aniCss.js ~ v0.1 ~ Copyright (c) 2010, hgw(http://shunyahagiwara.com)  
Liscensed under the MIT License
*/

(function() {  
		
	jQuery.fn.aniCss = function(src_, wid_, hei_, framelate_){
	
		var target = this;
		
		$(target).append("<img id='anicssdummy' style='display:none' />");
		$("#anicssdummy").attr( "src", src_ ).load( function(){
			var totalFrames = Math.floor($("#anicssdummy").height() / hei_);
			
			$(target).css({
				"width":wid_,
				"height":hei_,
				"background-image":"url("+src_+")",
				"background-repeat":"no-repeat",
				"background-position":"0px 0px"
			});
			
			var currentFrame = 0;
			var id = setInterval(function(){
				currentFrame = (currentFrame<totalFrames-1)? currentFrame+1 : 0;
				$(target).css("background-position","0px "+(currentFrame*hei_*-1)+"px");
			}, framelate_);
		});
		

		
	};
})(jQuery);