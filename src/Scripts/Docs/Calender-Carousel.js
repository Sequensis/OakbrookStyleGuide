$(document).ready(function () {
    $('#change-payment-day').on('shown.bs.modal', function (e) {
        swiper.update();
    })
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        nextButton: '.next',
        prevButton: '.prev',
        freeMode: true,
        centeredSlides: true,
        freeModeSticky: true
    });
});

$(document).on('click', '.swiper-slide', function (e) {
    $('.swiper-slide').removeAttr('id', 'calendar-carousel-date-active');
    $(this).attr('id', 'calendar-carousel-date-active');
    $('#payment-change-effective').removeClass('invisible');
});