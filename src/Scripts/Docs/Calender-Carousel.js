$(document).ready(function() {

    var paymentCarousel = $(".owl-carousel");

    paymentCarousel.owlCarousel({
        margin: -10,
        slideBy: 3,
        center: true,
        responsive: {
            0: {
                items: 3
            },
            320: {
                items: 5
            },
            600: {
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
    $('.calendar-carousel-date').removeClass('calendar-carousel-date-active');
    $(this).addClass('calendar-carousel-date-active');
    $('#payment-change-effective').removeClass('invisible');
});