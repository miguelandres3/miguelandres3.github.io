$(document).ready(function() {
	$('.portfolio').addClass("js");
	
	$('.portfolio.js .piece').hover(function() {
		var imageHeight = $(this).children('img').attr('height');
		$(this).animate({height:imageHeight}, 500);
	},
	function() {
		$(this).animate({height:"230px"}, 500);	
	});
});