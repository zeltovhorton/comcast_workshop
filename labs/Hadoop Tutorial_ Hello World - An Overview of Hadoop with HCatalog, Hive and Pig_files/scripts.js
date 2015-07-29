




/*
     FILE ARCHIVED ON 2:27:12 May 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:37:33 Jul 29, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//Scripts.js
//Loads all sorts of random JS functions and instantiates various items site-wide
//Sliders, modals (fancybox), PPC campaign tracking, etc.

/*
Hortonworks JS Application "class". Goal is to cleanup and 
migrate all those random functions into this class.
*/
var HWX = (function() {

	var $ = jQuery,
		menuItem = $('#fat-nav .menu-item'),
		loginMenuItem = $('.open[data-tool="profile"]'),
		menuContainer = $('.menu-header-navigation-container'),
		menuItemID;

	// Retrive query string keys such as "login"
	qs = function( key ) {
		key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
		var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
		return match && decodeURIComponent(match[1].replace(/\+/g, " "));
	};

	disableMenu = function() {
		menuItem.off( 'mouseenter').off('mouseleave');
		menuItem.addClass('disabled');
	};

	enableMenu = function() {
		menuItem.on( 'mouseenter', function showSubMenu() {
			var prevMenuID = menuItemID;
			menuItemID = $(this).attr('id');
			$('#fat-nav #'+menuItemID+' .sub-menu').fadeIn(100, function(){
				$('.tools-list .icon-profile').removeClass('hover');
				$('.tools-list .sub-menu').fadeOut(50);
				if (prevMenuID && menuItemID != prevMenuID && $('#fat-nav #'+prevMenuID+' .sub-menu').length ) {
					$('#fat-nav #'+prevMenuID+' .sub-menu').fadeOut(50);
				}
			});
		});
		menuContainer.on( 'mouseleave', function hideSubMenu() {
			$('#fat-nav .sub-menu').fadeOut(100);
			$('.tools-list .icon-profile').removeClass('hover');
			$('.tools-list .sub-menu').fadeOut(50);
			menuItemID = false;
		});
		menuItem.removeClass('disabled');

		loginMenuItem.on( 'mouseenter', function showLoginMenu() {
			$('#fat-nav .sub-menu').fadeOut(50);
			$('.tools-list .icon-profile').addClass('hover');
			$( '.sub-menu', $(this).closest('li') ).fadeIn(50);
		});
	};

	return {

		preInit: function() {
			// Equal height divs. For some reason they fails in some cases when called after document ready.
			$('.equalize').equalize('innerHeight');
			$('.equalize-children').equalize({equalize: 'innerHeight', children: '>div'});

			var equalizeMainpoints = function() {
				// Equalize heights of mainpoints div's
				$(".mainpoints").each(function(){
					var maxHeight = 0;
					var $children = $(this).children();
					$children.each(function() {
						if ($(this).outerHeight() > maxHeight) {
							maxHeight = $(this).outerHeight();
						}
					});
					$children.outerHeight(maxHeight + 20);
				});
			}();

		},

		init: function() {
			this.setMenuEvents();
			this.mobileMenuToggle();
			this.setHeaderTools();
			this.forumReplyCollapsing();
			this.fancybox();
			this.recordPPCKeyword();
			this.easyEditAssets();
			this.tabs();
			this.miniTabs();
			this.resources();
			this.googleAnalytics();
			this.miscHelpers();
			this.commentsAjax();
		},

		setMenuEvents: function() {
			enableMenu();
		},

		mobileMenuToggle: function() {
			$('.menu-link').on( 'click', function() {
				$(this).toggleClass('active');
				$('#navbar, .mainbody').toggleClass('active');
				return false;
			});
		},

		setHeaderTools: function() {

			// Grab the wordpress login query var
			var loginMsg = qs('login'),
				msgTimeOut;

			// Set state of Login form if login fails
			if ( 'failed' === loginMsg ) {
				closeHeaderTools();
				$('#header-tools').show();
					$('#header-tools .login-fail').show();
					msgTimeOut = window.setTimeout( function(){
						$('#header-tools .login-fail').fadeOut('fast', function() {
							$('#header-tools .login-form.forums_login').fadeIn();
						});
					}, 1500 );
			}

			// Open header tools pop-over and display form based on tool data:
			$('.tools-list .open').on( 'click', function getMenuItemID( e ) {
				e.preventDefault();
				disableMenu();
				closeToolForm();
				switch( $(this).data('tool') ) {
					case 'search':
						$('#header-tools').fadeIn();
						$('#header-tools .search-form').fadeIn();
						break;
					case 'language':
						$('#header-tools').fadeIn();
						$('#header-tools .language-form').fadeIn();
						break;
				}
			});

			// Open login forms based on chosen type
			$('.tools-list .sub-menu a').on( 'click', function( e ) {
				var form = $(this).data('login');

				switch ( form ) {
					case 'forums':
					case 'support':
					case 'training':
						e.preventDefault();
						disableMenu();
						closeToolForm();
						$('.tools-list .icon-profile').removeClass('hover');
						$('.tools-list .sub-menu').fadeOut(50);
						$('#header-tools').fadeIn();
						$('#header-tools .login-form.' + form + '_login').fadeIn();
						break;
				}
			});

			// Close the header tools when clicking close button
			$('#header-tools .close').on( 'click', function close( e ) {
				e.preventDefault();
				closeHeaderTools();
			});

			// Close the header tools when login form submitted
			$('.support_login, .training_login').on( 'submit', function() {
				closeHeaderTools();
			});

			// Click events for closing the header tools if clicking anywhere but the #header section
			$('html').on('click', function() {
				closeHeaderTools();
			});
			$('#header, .open-login').on( 'click', function( event ) {
				event.stopPropagation();
			});

			// Scroll to and open header tools
			$('.open-login').on( 'click', function( e ) {
				e.preventDefault();

				$('html,body').animate({ scrollTop: 0 }, 500, function() {
					$('.menu-item-link[data-login="forums"]').trigger('click');
				});
			});

			// Closing functions
			function closeHeaderTools() {
				$('#header-tools, .tool-form').hide();
				enableMenu();
			}
			function closeToolForm() {
				$('.tool-form').hide();
			}

		},

		forumReplyCollapsing: function() {
			//Forum Reply Collapsing. If a reply has been set to globally collapse, collapse it here and give it the class of 'collapsed'
			$('.trigger_collapse').each( function() {
				$( this ).siblings('.reply-post-content').children('.reply-content').slideToggle(0);
				$( this ).text( $( this ).text() == 'Read More' ? 'Collapse' : 'Read More');
				$( this ).closest('div[id^="post-"]').toggleClass('collapsed');
			});
			 
			//We use a cookie to store the user's preferences for which posts to collapse.
			if ( $.cookie('collapsed_replies') === null ) {
				$.cookie('collapsed_replies', 'NaN' );
			}
			//Make an array out of this cookie!
			var collapse_these_replies = $.cookie('collapsed_replies').split(',');
			 
			//For each of these user-specific collapsed replies, toggle their visibility if they're not
			//already collapsed from global settings above (verified by presence of .collapsed class)
			for ( var i=0; i<collapse_these_replies.length; i++ ) {
				$( '#post-' + collapse_these_replies[ i ] ).not('.collapsed').find('.reply-content').slideToggle(0);
				//Alternate our button text
				$( '#post-' + collapse_these_replies[ i ] ).not('.collapsed').find(".reply_toggler").text( $( '#post-' + collapse_these_replies[ i ] + ' .reply_toggler' ).text() == 'Read More' ? 'Collapse' : 'Read More' );
			}
			 
			//Function to handle the AJAX call for forum moderators when clicking from front-end to Collapse or Expand a post globally
			$( '.global_reply_toggler' ).on( 'click', function( e ) {
				e.preventDefault();
				$(this).children('span.ajax_image').fadeIn(400);
	 
				var replyid = $(this).attr('data-replyid');
				var buttonclicked = $(this);
				$.post(
					HWXHelper.ajaxurl,
					{ 'action':'toggle_global_collapse',	'data':{'replyid': replyid}	},
					function( response ) {
						//upon a global expand or collapse, also animate the collapse / expand for the admin user
						var parentcontainer = $( buttonclicked ).closest('.bbp-reply-header').next('.reply');
						if ( response == 'collapsed' ) {
							if ( ! parentcontainer.hasClass('collapsed') ) {
								$( parentcontainer ).find('.reply-content').slideToggle();
								$( parentcontainer ).children('.reply_toggler').text( $( parentcontainer ).children('.reply_toggler').text() == 'Read More' ? 'Collapse' : 'Read More' );
								$( parentcontainer ).toggleClass('collapsed');
							}
						} else if ( response == 'expanded' ) {
							if ( parentcontainer.hasClass('collapsed') ) {
								$( parentcontainer ).find('.reply-content').slideToggle();
								$( parentcontainer ).children('.reply_toggler').text( $( parentcontainer ).children('.reply_toggler').text() == 'Read More' ? 'Collapse' : 'Read More' );
								$( parentcontainer ).toggleClass('collapsed');
							}
						}

						if ( response == 'collapsed' ) {
							response = 'This reply will now be collapsed by default for all visitors';
						} else if ( response == 'expanded' ) {
							response = 'This reply will now be shown by default for all visitors';
						}

						alert(response);

						buttonclicked.children('.linktext').text( buttonclicked.children('.linktext').text() == 'Collapse (Global)' ? 'Expand (Global)' : 'Collapse (Global)' );
						buttonclicked.children('span.ajax_image').fadeOut(400);
					}
				);
			});
			 
			//Collapses or expands a post, saves collapsed post ids to a cookie for future visits!
			$('.reply_toggler').on( 'click', function( e ) {
				e.preventDefault();
				$( this ).siblings('.reply-post-content').children('.reply-content').slideToggle();
				$( this ).text( $( this ).text() == 'Read More' ? 'Collapse' : 'Read More' );
				$( this ).closest('div[id^="post-"]').toggleClass('collapsed');

				var collapsedarr = $.cookie('collapsed_replies').split(',');
				for ( var i=0; i<collapsedarr.length; i++ ) {
					collapsedarr[i] = parseInt( collapsedarr[i], 10 );
				}
				replyid = parseInt( $( this ).closest('div.reply').attr('id').substr(5), 10 );
				if ( $.inArray( replyid, collapsedarr ) != -1 ) {
					//This reply was previously collapsed - remove it!
					collapsedarr.splice(collapsedarr.indexOf(replyid),1);
				} else {
					//Add this new reply to the array
					collapsedarr.push( replyid );
				}
				//Save our array to the cookie!
				$.cookie( 'collapsed_replies', collapsedarr );
			});
		},

		fancybox: function() {
			$('.fancybox-media').fancybox();

			$('.contact-us-launch').fancybox({
				autoSize	: false,
				openEffect	: 'none',
				width		: 800,
				height		: 480,
				closeBtn	: true,
				scrolling	: 'no'
			});
			$('#contact-us-form').validationEngine( 'attach',
				{
					promptPosition: 'bottomLeft',
					scroll: false
				}
			);

			if ( $('.fancybox').length > 0 ) {
				$('.fancybox').fancybox({
					padding : '30',
				});
			}

			// This is used with the product licenses page
			$('.license_fancybox').on( 'click', function() {
				var license = $( 'span', this);
				$.fancybox({
					content		: $(license).html(),
					wrapCSS		: 'roundedcorners',
					maxHeight	: 600,
					type		: 'inline',
					padding		: '30'
				});

				return false;
			});

			// This is used with the addons content to fire the EULA box.
			$('.hw_fancybox a').on( 'click', function() {
				var onclick = $(this).parent().attr('data-onclick');
				var nearest_eula = $(this).parent().siblings("#eula_fb");
				$('#eula_button', nearest_eula).attr('onclick',onclick);
				$.fancybox({
					'content'		: $(nearest_eula).html(),
					'wrapCSS'		: 'roundedcorners',
					'fitToView'		: false,
					'autoCenter'	: false,
					'modal'			: true,
					'minwidth'		: 572,
					'maxwidth'		: 572,
					'minHeight'		: 300,
					'type'			: 'inline'
				});

				return false;
			});

		},

		recordPPCKeyword: function() {
			//Record search engine info into hidden fields in Marketo and registration forms
			var excludedReferrers = [ "hortonworks.com", "hadoopsummit.org" ];
			var cookieDomain = "hortonworks.com";
			var payPerClickParameter = "kw";
			var payPerClickKeywordField = "#PPCKeyword";


			var refer = document.referrer;

			// if there's no referrer, do nothing
			if ( (refer !== undefined) && (refer !== "") ) {

				// get the domain of the referring website -- http://[[this-thing.com]]/
				var referrerDomain =
						refer.substr(refer.indexOf("\/\/") + 2,
							refer.indexOf("\/",8) - refer.indexOf("\/\/") - 2).toLowerCase();

				var excludedDomainFound = false;
				var i = 0;

					// search the excluded domain list to see if the referrer domain is on it
				while ( ( i < excludedReferrers.length ) && ! excludedDomainFound ) {
					var thisExcludedDomain = excludedReferrers[ i ].toLowerCase();

					// weird semantics here -- indexOf returns "-1" if the search string isnt found.
					// thus excludedDomainFound is true only when indexOf matches an excluded domain (!= -1)
					excludedDomainFound = (referrerDomain.indexOf(thisExcludedDomain) != -1);
					i++;
				}

				// only if the referrer isn't in our excluded domain list...
				if ( ! excludedDomainFound ) {

					// Use the provided URL parameter to get the PPC keyword.
					var payPerClickWord = $.getQueryString({
						ID: payPerClickParameter,
						URL: document.URL, DefaultValue: ""
					});
					payPerClickWord = decodeURIComponent(payPerClickWord);
					payPerClickWord = payPerClickWord.replace(/\+/g, "");

					// Put the info into cookies.  These values will be extracted
					// and put into a Marketo form later. Expires in 2 years.
					$.cookie('mktoPPCKeyword', payPerClickWord,
						{expires: 730, path: '\/', domain: cookieDomain});
				}
			}

			// Get the values from the cookies and put them into the hidden fields
			$( payPerClickKeywordField ).attr( 'value', $.cookie('mktoPPCKeyword') );

			//Also update this value on the non-marketo Community Registration form
			jQuery('.field_hidden .fld_div input[name=PPCKeyword]').attr( 'value', $.cookie('mktoPPCKeyword') );

		},

		easyEditAssets: function() {
			/* ADD EDIT LINKS ON IMAGES IF LOGGED IN AS ADMIN */
			if ( $('body').hasClass('is_admin') ) {

				// Mouseover images
				$('.lowerbody img[class*=wp-image-]').on( 'mouseover', function() {

					if ( $(this).hasClass('link_added') ) {
						$(this).next('.edit_link').show();
						return;
					}

					var attachment_class = $(this).attr('class').split(' ');
					var attachment = false;

					$(attachment_class).each( function( index, el ) {
						if( el.match('^wp-image-') ) {
							attachment = el;
							return false;
						}
					});

					if ( attachment === false ) {
						return;
					}

					var attachment_id = attachment.replace('wp-image-','');
					$(this).addClass('link_added');
					$(this).after('<div class="edit_link" style="background:white;position:relative;top:-39px;margin-bottom:-36px;width:44px;display:block;padding:5px 10px;border:1px dashed #aaa;"><a href="/wp-admin/post.php?post=' + attachment_id + '&action=edit">Edit</a></div>');
				});

				// Mouseout images
				$('.lowerbody img[class*=wp-image-]').on( 'mouseout', function() {
					$(this).next('.edit_link').delay(1500).fadeOut('fast');
				});

			}
		},

		tabs: function() {

			// ================================================================================================
			// Tab System - Used in pages such as the HDP Pages, Sandbox Pages etc.
			// ================================================================================================
			function activateTab( $tab, $firstload ) {

				// First check to see if the tab system is in place!
				if ( $('.sectionnav.auto ul li').length === 0 ) {
					return false;
				}

				if ( window.location.hash && $firstload ) {

					$(window).load( function() {
						$(this).scrollTop(0);
					});

					$tab = $('.sectionnav.auto ul li a[href="' + window.location.hash + '"]').parent();

					if ( $tab.length < 1 ) {
						$childtab = $('ul.tabs a[href="' + window.location.hash + '"]').parent();
						parentid = $childtab.closest( '.panel' ).attr('id');

						$tab = $('.sectionnav.auto ul li a[href="#' + parentid + '"]').parent();
					}
					
				}

				// $tab expects a jquery object in the sectionnav
				if ( $tab === void(0) || $tab.length < 1 ) {
					// On page load, there's no object, so choose the first tab.
					$tab = $('.sectionnav ul li:first-child');
				}

				var $activeTab = $tab.closest('ul').find('li.active'),
					contentLocation = $tab.children('a').attr("href");

				// Strip off the current url that IE adds
				contentLocation = contentLocation.replace(/^.+#/, '#');

				//Make Tab Active
				$activeTab.removeClass('active');
				$tab.addClass('active');

				//Show Tab Content
				$(contentLocation).closest('.panels').children('.panel').removeClass('active').hide();
				$(contentLocation).css('display', 'block').addClass('active');

			}
			activateTab( void(0), true );

			// Set up event Handlers for Tabs
			$( document ).on( 'click', '.sectionnav.auto li a', function ( event ) {
				event.preventDefault();

				history.pushState( null, null, $(this).attr('href') );

				activateTab( $( this ).parent('li'), false );
			});

		},

		miniTabs: function() {

			/* ================================================================================================
			 *
			 * MINI TABS - A REPEATABLE TAB SYSTEM FOR USE WITHIN THE FLOW OF THE PAGE.
			 *
			 * BUILDS ON :
			 * <ul class="tabs" data-target="name_of_container">...
			 *
			 * CONTAINER PANELS SHOULD BE THE CHILD DIV's. WE KEEP IT SIMPLE.
			 *
			 */


			function miniTabs( $tab, $firstload ) {
				// First check to see if the tab system is in place!
				if ( $('ul.tabs').length === 0 ) {
					return false;
				}

				var target_continer_id = $('ul.tabs').attr('data-target');

				if ( window.location.hash && $firstload ) {

					$(window).load( function() {
						$(this).scrollTop(0);
					});

					$tab = $('ul.tabs a[href="' + window.location.hash + '"]').parent();
				}

				// $tab expects a jquery object in the sectionnav
				if ( $tab === void(0) || $tab.length < 1 ) {
					// On page load, there's no object, so choose the first tab.
					$tab = $('ul.tabs li:first-child');
				}

				var $activeTab = $tab.closest('ul').find('li.active'),
					contentLocation = $tab.children('a').attr("href");

				// Strip off the current url that IE adds
				contentLocation = contentLocation.replace(/^.+#/, '#');

				//Make Tab Active
				$activeTab.removeClass('active');
				$tab.addClass('active');

				//Show Tab Content
				$('#' + target_continer_id + '>div').hide();
				$( contentLocation ).show();

			}
			miniTabs( void(0), true );

			// Set up event Handlers for Tabs
			$( document ).on( 'click', 'ul.tabs li', function ( event ) {
				event.preventDefault();

				history.pushState( null, null, $('a', this).attr('href') );

				miniTabs( $( this ), false );
			});

		},

		resources: function() {

			/* ================================================================================================
			 * RESOURCES SYSTEM - TAKE A BASIC MARKUP OF LINKS, AND FORMAT THEM WITH THE RIGHT RESOURCES.
			 *
			 * <ul class="related_items">
			 *	<li data-url="/path/to/whatever">
			 *		<div class="title"><a></a></div> <!-- OPTIONAL -->
			 *		<div class="desc"></div> <!-- OPTIONAL -->
			 *	</li>
			 * </ul>
			 *
			 * ================================================================================================ */

			// Extended items allows us to embed a list of resources, and have them nicely marked up
			$('.extended_items li').each( function() {

				var the_url = ( $( this ).attr('data-url') ) ? $( this ).attr('data-url') : '';
				var data_type = $( this ).attr('data-type');
				var icon_src = '/wp-content/themes/hortonworks/images/icons/doctype-unknown.png';

				if ( data_type ) {
					if ( data_type == 'code' ) icon_src = '/wp-content/themes/hortonworks/images/icons/doctype-tutorial.png';
				}
				else if ( the_url.indexOf('hadoop-tutorial') >= 1 ) {
					icon_src = '/wp-content/themes/hortonworks/images/icons/doctype-tutorial.png';
				}
				else if ( the_url.indexOf('slideshare.net') >= 1 || the_url.indexOf('ppt') >= 1) {
					icon_src = '/wp-content/themes/hortonworks/images/icons/doctype-presentation.png';
				}
				else if ( the_url.indexOf('pdf') >= 1) {
					// Show Basic Icon
					icon_src = '/wp-content/themes/hortonworks/images/icons/doctype-document.png';
				}

				if ( $( this ).find('.icon').length === 0 ) {
					// If an icon is not defined.
					$( this ).prepend('<div class="icon"><a href="' + the_url + '" target="_blank"><img src="' + icon_src + '"></a></div>');
				}

			});

		},

		googleAnalytics: function() {

			// Add Google Analytics Tracking Event Handlers
			function trackDocsInGA() {

				var documents = /\.(pdf|doc*|xls*|ppt*)$/i;
				var baseHref = '';
				if ( $('base').attr('href') !== undefined ) {
					baseHref = $('base').attr('href');
				}

				$('a').each( function() {
					// Track External Clicks
					var href = $( this ).attr('href');
					if ( href && ( href.match(/^https?\:/i) ) && ( ! href.match( document.domain ) ) ) {
						$( this ).on( 'click', function() {
							// If an event binding is already set, exit.
							if ( $( this ).attr('onclick') && $( this ).attr('onclick').indexOf('gaq.push') ) {
								return false;
							}

							var extLink = href.replace( /^https?\:\/\//i, '' );
							var title = $( this ).attr('title');
							title = title ? title : extLink;

							// Check to see if there are any overrides.
							var action = $( this ).attr('data-gaaction') ? $( this ).attr('data-gaaction') : 'External';
							var label = $( this ).attr('data-galabel') ? $( this ).attr('data-galabel') : extLink;

							_gaq.push( ['_trackEvent', title, action, label] );
							if ( $( this ).attr('target') !== undefined && $( this ).attr('target').toLowerCase() != '_blank' ) {
								setTimeout( function() { location.href = href; }, 200 );
								return false;
							}
						});
					}

					// Track Documents
					else if ( href && href.match(documents) ) {
						$( this ).on( 'click', function() {
							var extension = ( /[.]/.exec(href) ) ? /[^.]+$/.exec(href) : undefined;
							var filePath = href;
							var shortPath = filePath.substr( filePath.lastIndexOf('/') );

							var title = $( this ).attr('title');
							title = title ? title : shortPath;
							var action = $( this ).attr('data-gaaction') ? $( this ).attr('data-gaaction') : 'Content';
							var label = $( this ).attr('data-galabel') ? $( this ).attr('data-galabel') : filePath;

							_gaq.push( ['_trackEvent', title, action, label] );
							if ( $( this ).attr('target') !== undefined && $( this ).attr('target').toLowerCase() != '_blank' ) {
								setTimeout( function() { location.href = baseHref + href; }, 200 );
								return false;
							}
						});
					}
				});

				// Let's also track click-to-chat
				$('li.chat-to-sales').on( 'click', function() {
					_gaq.push( ['_trackEvent', 'click-to-chat', 'click-to-chat', window.location.pathname] );
				});

				// And Form Submissions...
				$('form').on('submit', function() {
					var title = this.name ? this.name : this.id;
					var label = window.location.pathname;
					if(this.Primary_Interest__c) {
						label = this.Primary_Interest__c.options[this.Primary_Interest__c.selectedIndex].value;
					}
					_gaq.push( ['_trackEvent', title, 'Form Submission', label] );
				});

				// And Also Menu Clicks
				$('#fat-nav').find('a').click(function(evt) {
					var title = $(this).html();
					title = title.substring(0,title.indexOf("<span")).trim(); // Get the friendly text.
					var label = window.location.pathname;
					_gaq.push( ['_trackEvent', title, 'Menu Click', label] );
				});

			}
			trackDocsInGA();

		},

		miscHelpers: function() {

			// Add External link icon to regular links that are external.
			$('.mainbody a').each(function() {
				var url = $(this).attr('href');
				if( url && url.indexOf('hortonworks.com') == -1 &&
					url.indexOf('hortonworks.dev') == -1 &&
					url.indexOf('/') !== 0 &&
					url.indexOf('#') !== 0 &&
					this.children.length === 0 &&
					this.className === "") {
						$(this).addClass('ext-link');
						$(this).attr('target', '_blank');
				}
			});

			// Add class 'bxslider auto' to a div to turn it into a carousel
			$('.bxslider.auto').bxSlider({
				controls: 'true',
				slideWidth: '1200px',
				infiniteLoop: false,
				useCSS: false
			});


			// If page contains Gravity Forms complex elements, move the labels above the fields. - This is noticable on the Partner Page.
			$(".ginput_complex span").each(function(i,e){
				var $label = $(e).find("label");
				var $field = $(e).find("input");
				var label_value = $label.text();
				$field.attr('placeholder', label_value);
				$label.remove();
			});

		},

		commentsAjax: function() {

			$('.comments_ajax').on( 'click', function( e ) {

				e.preventDefault();

				var link = $(this);
				var action = $(this).data('action');
				var tools = $(this).closest('.comment_actions');

				if ( $(this).hasClass('disabled') ) {
					return;
				}

				$('.loading', tools).toggle();
				$('.toggle a', tools).addClass('disabled');

				$.post( link.attr('href'), function(data, textStatus, xhr) {
					switch( action ) {
						case 'approve':
							link.closest('.comment').removeClass('awaiting_moderation');
							$('.awaiting_moderation_note, .toggle', tools).hide();
							$('.loading', tools).toggle();
							break;

						case 'disapprove':
							link.closest('.comment').remove();
							break;
					}
				});

			});

		}

	};

} () );

HWX.preInit();
jQuery(document).ready(function() {
	HWX.init();
});



/* ================================================================================================
 * EVALUATE EVERYTHING BELOW THIS LINE FOR PRUNING
 *
 * ================================================================================================ */


jQuery(document).ready( function($) {
	//colapse + expand download buttons
	$('ul.group_parent li li a').fadeOut(0);
	$('ul.group_parent li a.group_parent_a').bind('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active_parent');
		$(this).parent('li').find('a').not('.group_parent_a').fadeToggle(300);
	});

	// Adds a class of 'ext-link' to any external link
	function addClass(url, object) {
		if( url.indexOf('hortonworks.com') == -1 &&
			url.indexOf('www.hortonworks.com') == -1 &&
			url.indexOf('hortonworks.dev') == -1 &&
			url.indexOf('localhost') == -1 &&
			url.indexOf('#') !== 0 &&
			url.indexOf('http') === 0 &&
			object.children.length === 0
		) {
			$( object ).addClass('ext-link');
			$( object ).attr( 'target', '_blank' );
		}
	}

	// I don't know why this is here?
	$('body').addClass('js');

	var cloakEmails = function() {
		// Take emails in the format of : <a href="#" class="cloak-email" data-before="sales-emaea" data-after="hortonworks.com"></a>
		$('a.cloak-email').each(function() {
			var after = $(this).data("after");
			var before = $(this).data("before");
			$(this).attr('href', 'mailto:' + before + '@' + after);
			if(!($(this).text())) {
				$(this).text(before + "@" + after);
			}
		});
	}();

	// Draw attention to responses from forms that were submitted
	$('.response.fadein').fadeIn();

	// Cornify Easter Egg.... for shits and giggles.... only works on James Dev
	var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39];
	var konami_index = 0;
	$(document).keydown(function(e){
		if(e.keyCode === konami_keys[konami_index++]){
			if(konami_index === konami_keys.length){
				$(document).unbind('keydown', arguments.callee);
				$.getScript('/wp-content/themes/hortonworks/js/libs/cornify.js', function() {
					cornify_add();
					$(document).keydown(cornify_add);
				});
			}
		}else{
			konami_index = 0;
		}
	});




});
