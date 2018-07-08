 jQuery(document).ready(function($) {
  
  jQuery(window).load(function() {
  
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
 
});


jQuery(window).resize(function(){
 
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
 
});
  
  jQuery('.portfolio-slider').slick({
         centerMode: true,
         centerPadding: '250px',
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 5000,
         arrows: false,
         responsive: [
             {
                 breakpoint: 1281,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '230px',
                     slidesToShow: 1
                 }
             },
             {
                 breakpoint: 1025,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '140px',
                     slidesToShow: 1
                 }
             },
             {
                 breakpoint: 992,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1
                 }
             },
             {
                 breakpoint: 481,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '15px',
                     slidesToShow: 1
                 }
             },
             {
                 breakpoint: 361,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '0px',
                     slidesToShow: 1
                 }
             }

         ]
     });

     



     jQuery('.burger-menu').click(function() {
         jQuery('.header-fix-menu').toggleClass('open-menu');
     });

 });

function myFunction(x) {
     x.classList.toggle("change");
 }

