+function ($) {
 //'use strict';
 
 $(document).on('click', '#navbar-icon', function (e) {
   $(this).toggleClass('icon-open');
   $(".navbar-circle").toggleClass("circle-open");
   $('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade');
   $('.navbar-logo, .navbar-btn.btn-sign-out').toggleClass('ob-fade-out');
   // $('.navbar').toggleClass('hide-inner-text');
   // $(".btn-application").toggleClass('btn-application-open');
   // $(".btn-sign-in").toggleClass('btn-sign-in-open');
   // $(".btn-sign-out").toggleClass('btn-sign-out-open');
   // $(".btn-username").toggleClass('btn-username-open');
   // $(".overlay").toggleClass('overlay-open');
   $('.off-canvas').toggleClass('open');
 });

}(jQuery);