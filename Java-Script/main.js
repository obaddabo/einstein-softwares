

$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse =$('.toggle-collapse');


    /** On Click event on togggle-menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('.collapse');
        
    })
    // owl carousel

    $('.owl-carousel').owlCarousel({

        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        dots:false
    }
        
        
    );
});