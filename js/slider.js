$(document).ready(function (){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    verticalDraggable: true,
    verticalSwiping: true,
    waitForAnimate: true,
    variableWidth: 760,
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          veriableWidth: 560,
        }
      },
      {
        breakpoint: 810,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  $('.team__slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '10px',
   draggable: false,
   swiping: false,
   autoplay: true,
   autoplaySpeed: 5000,
   responsive: [
    {
      breakpoint: 900,
      settings: {
        veriableWidth: 560,
        arrows: true,
        swaping: true,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        touchThreshold: 10,
        swipeToSlide: true,
      }
    }
  ]
  });
});
