$(document).ready(function() {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        adaptiveHeight: true,
        appendArrows: $('.carousel-container'),
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next')
    });
});