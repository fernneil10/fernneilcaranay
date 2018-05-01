 jQuery(document).ready(function($) {

     jQuery('#fullpage').fullpage({
         anchors: ['Home', 'AboutMe', 'MySkills', 'Portfolio', 'Contact'],
         menu: '#menu',
         navigation: true,
         autoScrolling: true,
         parallax: true,
         parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
         scrollBar: false,
         css3:false
     });


    equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.eq-blocks');
});


$(window).resize(function(){
  equalheight('.eq-blocks');
});


  // fc slider
  jQuery('.testimonials-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    // fade: true,
    // cssEase: 'linear',
    arrows: true,
    slidesToShow: 2,
    autoplay: true,
      autoplaySpeed: 5000,
      responsive: [

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
    ]
  });

     jQuery('.burger-menu').click(function() {
         jQuery('.header-fix-menu').toggleClass('open-menu');
     });

 });

 function myFunction(x) {
     x.classList.toggle("change");
 }
