$('#navbar-icon').click(function () {
    $(this).toggleClass('icon-open');
    $(".navbar-circle").toggleClass("circle-open");
    $(".btn-application").toggleClass('btn-application-open');
    $(".btn-sign-in").toggleClass('btn-sign-in-open');
});

$('.btn-sign-in').click(function () {
    $(this).toggleClass('btn-primary-1');
    $(this).toggleClass('btn-primary-3');
});