function () {
    'use strict';

    
    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
    
    
        $('.mock').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
         
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    
    /* parallax scroll */
    function scrollBanner() {
  $(document).scroll(function(){
  	var scrollPos = $(this).scrollTop();
  	$('.movie-background').css({
  	  'top' : (scrollPos/2)+'px'
  	});
  	$('.movie-image').css({
  	  'background-position' : 'center ' + (-scrollPos/4)+'px'
  	});
  });    
}
scrollBanner();
});

