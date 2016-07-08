$('#navbar-icon').click(function () {
    $(this).toggleClass('icon-open');
    $(".navbar-circle").toggleClass("circle-open");
    $(".btn-application").toggleClass('btn-application-open');
    $(".btn-sign-in").toggleClass('btn-sign-in-open');
    $(".btn-sign-out").toggleClass('btn-sign-out-open');
    $(".btn-username").toggleClass('btn-username-open');
    $(".overlay").toggleClass('overlay-open');
});

$('.btn-sign-in-example').click(function () {
    $(".btn-sign-out").toggleClass('btn-sign-in');
    $(".btn-sign-out").removeClass('btn-sign-out');
    $(".btn-sign-in").text("Sign in");
    $(".btn-username").empty();
    $("#overlay-sign-in").empty()
});