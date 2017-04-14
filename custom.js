$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var slide = $(this).attr('href'); // Page cible
        var speed = 1500; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(slide).offset().top }, speed ); // Go
        return false;
    });
});
