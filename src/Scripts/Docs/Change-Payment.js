$(document).on('click', '#change-payment', function(e) {
    $('#change-payment-top').toggleClass('payment-active');
    $('#change-payment-bottom').toggleClass('payment-active');
    $('#change-payment-dotted-line').toggleClass('payment-active');
    $('#change-payment-active').toggleClass('payment-active'); 
    $('#payment-change-effective').addClass('invisible');
});