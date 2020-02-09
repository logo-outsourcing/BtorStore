$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.reviews__slider.swiper-container', {
        // Optional parameters
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })
});