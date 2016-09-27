$(document).ready(function() {

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

    $(".prev").click(function() {
        paymentCarousel.trigger('prev.owl.carousel');
    });

    $(".next").click(function() {
        paymentCarousel.trigger('next.owl.carousel');
    });
});

$(document).on('click', '.calendar-carousel-date', function(e) {
    $('.calendar-carousel-date').removeAttr('id','calendar-carousel-date-active');
    $(this).attr('id','calendar-carousel-date-active');
    $('#payment-change-effective').removeClass('invisible');
});