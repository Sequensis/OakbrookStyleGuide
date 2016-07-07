$('#navbar-icon').click(function () {
    $(this).toggleClass('icon-open');
    // $(".navbar").toggleClass("navbar-fixed-top");
    $(".navbar-circle").toggleClass("circle-open");
    $(".btn-application").toggleClass('btn-application-open');
    $(".btn-sign-in").toggleClass('btn-sign-in-open');
    $(".overlay").toggleClass('overlay-open');
});

$('.btn-sign-in').click(function () {
    $(this).toggleClass('btn-primary-1');
    $(this).toggleClass('btn-primary-3');
});