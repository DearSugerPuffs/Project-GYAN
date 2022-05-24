$(".banner-slider").slick({
 prevArrow: '<i class="fas fa-angle-left prev"></i>',
 nextArrow: '<i class="fas fa-angle-right next"></i>',
 autoplay:true,
})

$(".about-slider").slick({
    arrows: false,
    dots: true,
    autoplay:true,
})

$('.counter').counterUp({
    delay: 20,
    time: 2000
});
$(".course-slider").slick({
    autoplay:true,
    centerMode:true,
    centerPadding:'0',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
   })
   $(".img-slider").slick({
    autoplay:true,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:".text-slider",
   })
   $(".text-slider").slick({
    autoplay:true,
       arrows:false,
    asNavFor:".img-slider",
    slidesToShow: 1,
    slidesToScroll: 1,
   })

 $(".foot-slider").slick({
    autoplay:true,
    arrows:false,
    slidesToShow: 6,
    slidesToScroll: 1,
 })
