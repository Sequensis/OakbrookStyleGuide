+ function ($) {

	var preventBodyScrollIosFlag = false;

	function preventBodyScrollIos() {
		preventBodyScrollIosFlag = !preventBodyScrollIosFlag;
		if (preventBodyScrollIosFlag) {
			// Prevent body scrolling in background on iOS
			$('.container-fluid').on('touchmove', function (e) {
				e.preventDefault();
				//CODE GOES HERE
			});
		} else {
			$('.container-fluid').off('touchmove');
		}
	}

	$('.navbar-off-canvas').on('click', '#navbar-icon', function (e) {
		$(this).toggleClass('icon-open');
		$(".navbar-circle").toggleClass("circle-open");
		$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade');
		$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade-out');
		$('.mask').toggleClass('on');
		$('.off-canvas').toggleClass('open');
		$('body').toggleClass('noscroll');
		preventBodyScrollIos();
	});

	// click on mask overlay
	$('.load-fade-in').on('click', '.mask.on', function () {
		$('#navbar-icon').toggleClass('icon-open');
		$(".navbar-circle").toggleClass("circle-open");
		$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade');
		$('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade-out');
		$('.mask').toggleClass('on');
		$('.off-canvas').toggleClass('open');
		$('body').toggleClass('noscroll');
		preventBodyScrollIos();
	});


	$('#previous-loan-selector').click(function (e) {
		$('.fa.fa-caret-down').toggleClass('fa-rotate-180');
		// $('.off-canvas-bottom').fadeToggle(200);
	})

}(jQuery);