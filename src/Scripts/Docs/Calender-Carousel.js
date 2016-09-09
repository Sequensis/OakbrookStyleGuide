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

 $(document).on('click', '.calender-carousel-date', function (e) {
   $('.calender-carousel-date').removeClass('calender-carousel-date-active');
   $('.calender-carousel-date').removeClass('large');
   $(this).addClass('calender-carousel-date-active');
   $(this).addClass('large');
 });
