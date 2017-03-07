$(document).ready(function() {
    
// isotope

 $(".portfolio-items").isotope({
        itemSelector: '.single-work',
        layoutMode: 'fitRows',
    });
    
    // Add isotope click function
    
    $('.work-ul li').click(function(){
        $(".work-ul li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: true,
            }
        });
        return false;
    });
    
    $('.counter').counterUp();
    

    // transparent nav

    
    
});




