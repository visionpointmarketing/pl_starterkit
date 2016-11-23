$(document).ready(function(){
	$('.mobi-toggle-wrapper').on('keypress click',function(e){
		if (e.which === 13 || e.type === 'click') {
			if($('header').hasClass('mobi-open')){
				$('.utility').prependTo('.mobi-toggle-container');
			}else{
				$('.utility').appendTo('.main-nav-container');
			}
			$('header,body').toggleClass("mobi-open");
		};
	});
	$('.main-nav-toggle').on('keypress click',function(e){
		if (e.which === 13 || e.type === 'click') {
			$('.main-nav,body').toggleClass('tab-open');
		};
	});
});
$( window ).resize(function() {
	$('.utility').prependTo('.mobi-toggle-container');
	$('header,body').removeClass("mobi-open");
	$('.main-nav,body').removeClass('tab-open');
});