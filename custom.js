$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var slide = $(this).attr('href'); // Page cible
        var speed = 1500; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(slide).offset().top }, speed ); // Go
        return false;
    });
});

/* bouton haut de page */
ScrollToTop=function() {
    var s = $(window).scrollTop();
    if (s > 250) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
}

StopAnimation=function() {
    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
        $('html, body').stop();
    });
}


$(window).scroll(function() {
    ScrollToTop();
    StopAnimation();
});


