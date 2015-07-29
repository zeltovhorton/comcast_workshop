




/*
     FILE ARCHIVED ON 2:27:14 May 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:37:33 Jul 29, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/**
* Javascript function to disable the links for data-intercept and popup the form
**/
(function($, window, document){
	$(function() {

		var href_slug_array = [];

		$('a[data-action="intercept"]').each(function() {
			var temp_href =  $(this).attr('href');
			var slug_url =  $(this).attr('data-intercept-content');
			href_slug_array [slug_url] = temp_href;
			$(this).attr('href', '#' );
			$(this).fancybox({
				'width'					: 800,
				'height'				: 750,
				'overlayOpacity'		: '0.4',
				'overlayColor'			: '#000',
				'hideOnContentClick'	: false,
				'autoScale'				: true,
				'transitionIn'			: 'elastic',
				'transitionOut'			: 'elastic',
				'href'					: obj_localize.themePath+'?gf_slug='+slug_url,
				'type'					: 'iframe',
				'modal'					: false,
				'closeBtn'				: false,
				'afterClose'			: function() {
											location.href = temp_href;
										}
			});
		});

		$( document ).bind( 'gform_confirmation_loaded', function( event, form_id ) {
			if ( $('#gf-popup').length > 0 ) {
				parent.$.fancybox.close();
			}
		});
	});
}(window.jQuery, window, document));
