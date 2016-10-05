$(document).ready(function () {
    $('#change-payment-day').on('shown.bs.modal', function (e) {
        swiper.update();
    })
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: '5',
        spaceBetween: 10,
        nextButton: '.next',
        prevButton: '.prev',
        freeMode: true,
        centeredSlides: true,
        freeModeSticky: true,
        breakpoints: {
            767: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            },
        }
    });

    var paymentCarousel = $(".owl-carousel");

    paymentCarousel.owlCarousel({
        margin: -10,
        slideBy: 3,
        center: true,
        mouseDrag: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 5
            }
        }
    });

    $(".prev").click(function () {
        paymentCarousel.trigger('prev.owl.carousel');
    });

    $(".next").click(function () {
        paymentCarousel.trigger('next.owl.carousel');
    });
});

$(document).on('click', '.swiper-slide', function (e) {
    $('.swiper-slide').removeAttr('id', 'calendar-carousel-date-active');
    $(this).attr('id', 'calendar-carousel-date-active');
    $('#payment-change-effective').removeClass('invisible');
    $('#payment-loader').addClass('d-none');
});

$(document).on('click', '#close-modal', function (e) {
    $('#important-1').removeClass('in');
    setTimeout(function () {
        $('#important-1').modal('hide');
    }, 500);
});