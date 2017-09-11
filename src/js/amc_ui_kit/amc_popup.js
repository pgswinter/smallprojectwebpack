(function($) {
  'use strict';
  $('.apply-job').click(function(e){
  	e.preventDefault();
    $('.set-bg,.apply-form,.cont-form').show();
  });
  $('.apply-form,.cont-form').find('.close').click(function(){
    $('.set-bg,.apply-form,.cont-form').hide();
  });
})(jQuery);