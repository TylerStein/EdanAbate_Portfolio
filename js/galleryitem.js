$(document).ready(function() {
    $('.carousel').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        adaptiveHeight: false,
        appendArrows: $('.carousel'),
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next')
    });
});