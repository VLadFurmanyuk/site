$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});


// //Добавляем всем элементам прозрачность
// $('.slider__item').addClass('slick-slider-opacity');
// //Убираем прозрачность у центральных элементов
// $('.slider__item.slick-active').eq(1).removeClass('slick-slider-opacity');
// $('.slider__item.slick-active').eq(2).removeClass('slick-slider-opacity');
// //Вешаем обработчик на событие слайдера
// $(".slider").on("afterChange", function() {
//     //Добавляем прозрачность всем элементам, обнуляя её у нужных
//     $('.slider__item').addClass('slick-slider-opacity');
//     $('.slider__item.slick-active').eq(1).removeClass('slick-slider-opacity');
//     $('.slider__item.slick-active').eq(2).removeClass('slick-slider-opacity');
//     $('.slider__item.slick-active').eq(3).removeClass('slick-slider-opacity');
//     $('.slider__item.slick-active').eq(4).removeClass('slick-slider-opacity');
//     $('.slider__item.slick-active').eq(5).removeClass('slick-slider-opacity');
//     $('.slider__item.slick-active').eq(6).removeClass('slick-slider-opacity');
// });