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
  $('.contact-btn').on('click', function(){
      var contact_top   = $('footer').offset().top;
      $('html,body').animate({ scrollTop: contact_top + 'px' });
      $(this).addClass('active').siblings().removeClass('active');
  });
	
	
});


