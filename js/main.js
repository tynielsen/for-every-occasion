function slideSwitch() {
	//Fade effect for the home page main image carousel
    var $active = $('.image-carousel li.active');

    if ( $active.length == 0 ) $active = $('.image-carousel li:last');

    var $next = $active.next().length ? $active.next()
        : $('.image-carousel li:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}
$(function(){
	//setting timer for homepage image carousel
	var seconds = 8 /*<--only change this number*/ * 1000;
    setInterval( "slideSwitch()", seconds);
});