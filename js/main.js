$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.reviews__slider.swiper-container', {
        // Optional parameters
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
    })
});