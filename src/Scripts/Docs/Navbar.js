+function ($) {
 //'use strict';
 
 $(document).on('click', '#navbar-icon', function (e) {
	$(this).toggleClass('icon-open');
	$(".navbar-circle").toggleClass("circle-open");
	$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade');
	$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade-out');
	$('.mask').toggleClass('on');
	$('.off-canvas').toggleClass('open');
 });

// click on mask overlay
$(document).on('click', '.mask.on', function() {
	$('#navbar-icon').toggleClass('icon-open');
	$(".navbar-circle").toggleClass("circle-open");
	$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade');
	$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade-out');
	$('.mask').toggleClass('on');
	$('.off-canvas').toggleClass('open');
});

}(jQuery);