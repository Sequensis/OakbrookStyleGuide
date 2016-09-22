// $(document).on('click', '#change-payment', function(e) {
//     $('#change-payment-top').toggleClass('payment-active');
//     $('#change-payment-bottom').toggleClass('payment-active');
//     $('#change-payment-dotted-line').toggleClass('payment-active');
//     $('#change-payment-active').toggleClass('payment-active');
//     $('#payment-change-effective').addClass('invisible');
// });

$(document).on('click', '#change-payment-success', function(e) {
    $('#toast-successful').removeClass('invisible');
    $('.toast').show()
    $('.toast').addClass('toast-fade-out');
    $('.modal').modal('hide');
    setTimeout(function() {
        $(".toast").addClass('invisible');
        $('.toast').removeClass('toast-fade-out');
    }, 7000);
});

//dan

$(document).on('click', '#toast-close', function(e) {
    $('.toast').hide();
});
