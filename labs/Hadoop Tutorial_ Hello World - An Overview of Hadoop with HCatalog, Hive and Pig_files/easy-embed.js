




/*
     FILE ARCHIVED ON 2:27:13 May 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:37:34 Jul 29, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function($) {

	var form;

	$('.marketo-form-embed').validationEngine();

	$('.marketo-form-embed').on( 'submit', function( e ) {
		e.preventDefault();

		form = $(this);
		var unique_identifier = $( '.unique_identifier', this ).val();

		var valid = $( form ).validationEngine('validate');

		if ( valid && mktoEE[ unique_identifier ] ) {
			$.ajax({
				data: querystring( funkifyArrayParams( getValues( this ) ) ),
				dataType: 'json',
				error: marketoSubmitFail,
				success: marketoSubmitSuccess,
				type: 'POST',
				url: '//app-sjl.marketo.com/index.php/leadCapture/save2'
			});
		}
	});

	function marketoSubmitSuccess() {
		dataLayer.push( {'event': $( form ).attr( 'id' ) } );
		$(form).next('.success_message').show();
		$(form).hide();
		$('#RFBlockFrame').remove();
		$('#RFLoadingFrame').remove();
	}

	function marketoSubmitFail() {
		$('#RFBlockFrame').remove();
		$('#RFLoadingFrame').remove();
		alert( 'There was a problem processing your submission' );
	}

	var querystring = function (obj){
		var query = '';
		$.each(obj, function (k, v){
			query = query + k + '=' + v + '&';
		});
		return query;
	};

	var funkifyArrayParams = function (obj){
		var newObj = {};
		$.each(obj, function (k, v){
			if($.isArray(v) && v.length > 1){
				newObj[k+"[]"] = v;
			}else{
				newObj[k] = v;
			}
		});
		return newObj;
	};

	var getValues = function ( form ){
		var vals = {};
		$(form).find(".customMktoField").each(function (i, element){
			var name = $(this).attr('name');
			var value = $(this).val();
			vals[name] = encodeURIComponent( value );
		});
		return vals;
	};

})(jQuery);