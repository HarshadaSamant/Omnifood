$(document).ready(function() 
{
  /*-------For sticky navigation------*/
    $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
      }, {
        offset: '60px'
    });
  /*-------Scroll on buttons------*/
    $('.js--scroll-to-plans').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    /*-------navigation scroll------*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({scrollTop: target.offset().top}, 1000);  
                    return false;
                }
            }
        });
    });
    /*-------animations on scroll------*/
    $('.js--wp1').waypoint(function(direction){
      $('.js--wp1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });
    
    $('.js--wp2').waypoint(function(direction){
      $('.js--wp2').addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });

    $('.js--wp3').waypoint(function(direction){
      $('.js--wp3').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });
    
    $('.js--wp4').waypoint(function(direction){
      $('.js--wp4').addClass('animated pulse');
    }, {
      offset: '50%'
    });

    

    $('.js--mobile-nav-icon').click(function() {
      var nav = $('.js--main-nav');
     /* var icon = $('.js--mobile-nav-icon .ion-icon'); */
      nav.slideToggle(200)
     /* if (icon.hasClass('.ion-icon')) {
        icon.addClass('<ion-icon name="close">');
        icon.removeClass('.ion-icon');
      } else {
        icon.addClass('.ion-icon');
        icon.removeClass('<ion-icon name="close">');
      } */
    });
});