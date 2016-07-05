$('.btn-warning').click(function () {
    $('.modal-container').toggleClass('theme-warning');
    $('.modal-container').toggleClass('theme-light');
    $('.modal-exclamation').toggleClass('modal-exclamation-open');
    $(".modal-login-header h1").text("Check your details and try again!");
});

$('.btn-error').click(function () {
    $('.modal-container').toggleClass('theme-error');
    $('.modal-container').toggleClass('shake');
    $('.modal-container').toggleClass('theme-light');
    $('.modal-login #a0-lock.a0-theme-default .a0-panel .a0-all, #a0-lock.a0-theme-default .a0-panel .a0-forgot-pass').toggleClass('theme-error');
    $('.modal-exclamation').toggleClass('modal-exclamation-open');
    $(".modal-login-header h1").text("For security, your account has been locked!");
});

$('.btn-default').click(function () {
    $('.modal-container').removeClass('theme-warning');
    $('.modal-container').removeClass('theme-error');
    $(".modal-login-header h1").text("Welcome to Likely Loans");
    $('.modal-exclamation').removeClass('modal-exclamation-open');
    $('.modal-validate').empty();
});

$('.btn-warning').one('click', function () {
    $('.a0-password').append( $('<div class = "modal-validate"><p>Your password will contain a minimum of 6 character and at least 1 number</p></div>'));
});

$('.btn-password').click(function () {
    $('.modal-container').removeClass('theme-warning');
    $('.modal-container').removeClass('theme-error');
    $(".modal-login-header h1").text("Create a new password");
    $(".modal-login-header p").text("Enter your email address & we'll send you a link to get back up and running");
    $('.modal-exclamation').removeClass('modal-exclamation-open');
    $('.modal-validate').empty();
});