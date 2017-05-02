/* ----------------------------------------------------------------------------------------
* Author        : Aman
* Template Name : Hamar | Personal Portfolio Template
* File          : Hamar main script/js files
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */




    
/* INDEX
----------------------------------------------------------------------------------------

01. Preloader js

02. change Menu background on scroll donw js

03. Navigation js

04. Smooth scroll to anchor

06. Portfolio js

07. Magnific Popup js

08. Testimonial js

09. Ajax Contact Form js

-------------------------------------------------------------------------------------- */
  
(function ($) {
    'use strict';

    jQuery(document).ready(function () {
      
        /*  -------------------------------------------------------------------------  *
         *                   01. Preloader                                             *
         *  -------------------------------------------------------------------------  */
          $('#preloader').fadeOut('slow',function(){
              $(this).remove();
          });



        /*  -------------------------------------------------------------------------  *
         *                   02. change Menu background on scroll donw                 *
         *  -------------------------------------------------------------------------  */
          $(window).on('scroll', function () {
              var menu_area = $('.menu-area');
              if ($(window).scrollTop() > 200) {
                  menu_area.addClass('sticky-menu');
              } else {
                  menu_area.removeClass('sticky-menu');
              }
          });



        /*  -------------------------------------------------------------------------  *
         *                   03. Navigation js                                         *
         *  -------------------------------------------------------------------------  */
          $(document).on('click', '.navbar-collapse.in', function (e) {
              if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                  $(this).collapse('hide');
              }
          });

          $('body').scrollspy({
              target: '.navbar-collapse',
              offset: 195
          });


        /*  -------------------------------------------------------------------------  *
         *                   04. Smooth scroll to anchor                              *
         *  -------------------------------------------------------------------------  */
          $('a.smooth_scroll').on("click", function (e) {
              e.preventDefault();
              var anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top - 50
              }, 1000);
          });



        /*  -------------------------------------------------------------------------  *
         *                  06. Portfolio js                                           *
         *  -------------------------------------------------------------------------  */
          $('.portfolio').mixItUp();


        /*  -------------------------------------------------------------------------  *
         *                  07. Magnific Popup js                                      *
         *  -------------------------------------------------------------------------  */
          $('.work-popup').magnificPopup({
              type: 'image',
              gallery: {
                  enabled: true
              },
              zoom: {
                  enabled: true,
                  duration: 300, // don't foget to change the duration also in CSS
                  opener: function(element) {
                      return element.find('img');
                  }
              }
              
          });





        /*  -------------------------------------------------------------------------  *
         *                  08. Testimonial js                                         *
         *  -------------------------------------------------------------------------  */
          $(".testimonial-list").owlCarousel({
              items: 1,
              autoPlay: false,
              navigation: true,
              itemsDesktop: [1199, 1],
              itemsDesktopSmall: [980, 1],
              itemsTablet: [768, 1],
              itemsTabletSmall: false,
              itemsMobile: [479, 1],
              pagination: false,
              autoHeight: true,
              navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
          });


    });

})(jQuery);