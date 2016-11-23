/* used for patternlab specific things */
$(document).ready(function(){
	$('.sg-swatch').each(function(){
		var color = $(this).css('background-color');		
		$(this).html("<span>"+color+"</span>");
	});
});