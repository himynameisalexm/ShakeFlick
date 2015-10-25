$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
    
        /* Check the location of each desired element */
        $('.mock').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    
    
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

