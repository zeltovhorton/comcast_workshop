




/*
     FILE ARCHIVED ON 2:27:12 May 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:37:33 Jul 29, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function aia_update_token() {
	if ( this.readyState === 4 ) {
		if ( this.status >= 200 && this.status < 400 ) {
			var response	= JSON.parse( this.responseText );

			var element		= document.createElement( 'input' );
			element.type	= 'hidden';
			element.name	= response.field;
			element.value	= response.value;

			var temp		= document.getElementById( 'aia_placeholder' );
			var form		= temp.form;
			var inputs		= form.getElementsByTagName( 'input' );
			var index		= Math.floor( Math.random() * ( inputs.length -1 ) );

			inputs[ index ].parentNode.appendChild( element );
			form.removeChild( temp );
		}
	}
}

function aia_set_cookie() {
	if ( this.readyState === 4 ) {
		if ( this.status >= 200 && this.status < 400 ) {
			var cookie_value = this.responseText;

			var now = new Date();
			var exp = new Date(now.getTime() + 7200*1000);
			document.cookie = 'aia-cookie=' + cookie_value + '; expires=' + exp.toUTCString() + '; path=/;';
			
			aia_field_data_ajax( cookie_value );
		}
	}
}

function aia_get_cookie( aia_cookie ) {
	var cookies = document.cookie;
	if ( cookies.length !== 0 ) {
		var cookie_value = cookies.match( '(^|;)[\\s]*' + aia_cookie + '=([^;]*)' );
		if ( null !== cookie_value && (2 in cookie_value) ) {
			return decodeURIComponent ( cookie_value[2] );
		}
	}
	return '';
}

function aia_user_cookie_ajax() {
	var cookiedata	= 'action=aia_cookie_id';
	var cookierequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
	cookierequest.open( 'POST', AIA.ajaxurl, true );
	cookierequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
	cookierequest.onreadystatechange = aia_set_cookie;
	cookierequest.send( cookiedata );
}

function aia_field_data_ajax( cookie_value ) {
	var fielddata	= 'action=aia_field_update&cookie=' + cookie_value;
	var fieldrequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
	fieldrequest.open( 'POST', AIA.ajaxurl, true );
	fieldrequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
	fieldrequest.onreadystatechange = aia_update_token;
	fieldrequest.send( fielddata );
}

if ( null !== document.getElementById( 'aia_placeholder' ) ) {
	if ( '' === ( cookie_value = aia_get_cookie( 'aia-cookie' ) ) ) {
		aia_user_cookie_ajax();
	} else {
		aia_field_data_ajax( cookie_value );
	}
}