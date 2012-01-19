function slideSwitch() {
	// Fade effect for home page image carousel
	var $active = $('.image-carousel li.active');

	if ($active.length == 0 ) $active = $('.image-carousel li:last');

	var $next = $active.next().length ? $active.next() : $('.image-carousel li:first');

	$active.addClass('last-active');

	$next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
		$active.removeClass('active last-active');
	});
}
$(function(){
	//setting timer for homepage image carousel
	setInterval('slideSwitch()', 4000);

	//functionality for the Gallery Page gallery
	//$('img.image1').data('ad-desc', 'Whoa! This description is set through elm.data("ad-desc") instead of using the longdesc attribute.<br>And it contains <strong>H</strong>ow <strong>T</strong>o <strong>M</strong>eet <strong>L</strong>adies... <em>What?</em> That aint what HTML stands for? Man...');
	//$('img.image1').data('ad-title', 'Title through $.data');
	var galleries = $('.ad-gallery').adGallery();
	$('#switch-effect').change(
		function() {
			galleries[0].settings.effect = $(this).val();
			return false;
		}
	);
	$('#toggle-slideshow').click(
		function() {
			galleries[0].slideshow.toggle();
			return false;
		}
	);
	$('#toggle-description').click(
		function() {
			if(!galleries[0].settings.description_wrapper) {
				galleries[0].settings.description_wrapper = $('#descriptions');
			} else {
				galleries[0].settings.description_wrapper = false;
			}
			return false;
		}
	);
});