$(document).ready(function() {

    var paymentCarousel = $(".owl-carousel");

    paymentCarousel.owlCarousel({
        loop: true,
        margin: 10,
        center:true,
        responsive: {
            0: {
                items: 4
            },
            550: {
                items: 7
            },
            768: {
                items: 9
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
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
    $('.calendar-carousel-date').removeClass('large');
    $(this).addClass('calendar-carousel-date-active');
    $(this).addClass('large');
});