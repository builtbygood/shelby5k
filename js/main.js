$(function(){
	

  $('.about-btn').on('click', function(){
      var about_top   = $('.about').offset().top;
      $('html,body').animate({ scrollTop: about_top + 'px' });
      $(this).addClass('active').siblings().removeClass('active');
  });
  $('.race-btn').on('click', function(){
      var race_top   = $('.race').offset().top;
      $('html,body').animate({ scrollTop: race_top + 'px' });
      $(this).addClass('active').siblings().removeClass('active');
  });
  $('.help-btn').on('click', function(){
      var help_top   = $('.help').offset().top;
      $('html,body').animate({ scrollTop: help_top + 'px' });
      $(this).addClass('active').siblings().removeClass('active');
  });
  $('.sponsorship-btn').on('click', function(){
      var sponsorship_top   = $('.sponsorship').offset().top;
      $('html,body').animate({ scrollTop: sponsorship_top + 'px' });
      $(this).addClass('active').siblings().removeClass('active');
  });
  $('.contact-btn').on('click', function(){
      var contact_top   = $('footer').offset().top;
      $('html,body').animate({ scrollTop: contact_top + 'px' });
      $(this).addClass('active').siblings().removeClass('active');
  });

  $('.modal-btn').on('click', function(){
  
      $('.modal').fadeIn();
  
  });

  $('.modal').mousedown(function(e) {

    var clicked = $(e.target); 

    if (clicked.is('.modal-form') || clicked.parents().is('.modal-form')) {

        return; 

    } else {

        $('.modal').fadeOut();

    }

  });


  function scrollStuff()
  {
      var scroll_top          = $(window).scrollTop();
      var about_top           = $('.about').offset().top -80;
      var race_top            = $('.race').offset().top -80;
      var help_top            = $('.help').offset().top -80;
      var sponsorship_top     = $('.sponsorship').offset().top -80;
      var contact_top         = $('footer').offset().top -80;
      
      if( about_top > scroll_top){
        $('.about-btn').removeClass('active');
      }
      if( about_top <= scroll_top){
        $('.about-btn').addClass('active').siblings().removeClass('active');
      }
      if( race_top <= scroll_top){
        $('.race-btn').addClass('active').siblings().removeClass('active');
      }
      if( help_top <= scroll_top){
        $('.help-btn').addClass('active').siblings().removeClass('active');
      }
      if( sponsorship_top <= scroll_top){
        $('.sponsorship-btn').addClass('active').siblings().removeClass('active');
      }
      if( contact_top <= scroll_top){
        $('.contact-btn').addClass('active').siblings().removeClass('active');
      }        
  }

  $(window).on('scroll', scrollStuff);

	
});


