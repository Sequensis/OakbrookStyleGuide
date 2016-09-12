$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:7
        },
        1000:{
            items:8
        }
    }
})

 $(document).on('click', '.calendar-carousel-date', function (e) {
   $('.calendar-carousel-date').removeClass('calendar-carousel-date-active');
   $('.calendar-carousel-date').removeClass('large');
   $(this).addClass('calendar-carousel-date-active');
   $(this).addClass('large');
 });
