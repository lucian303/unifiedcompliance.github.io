(function( $ ) {
	var hideAllElementPopovers = function() {
		$( '.element-container .element' )
			.removeClass( 'inactive' )
			.removeClass( 'active' )
			.find( '.popover' ).hide();
		
		$( '.popover-mask' ).hide();
	};
	
	var usePopoverMask = function() {
		if( $( window ).width() < 1200 ) {
			$( '.popover-mask' ).addClass( 'use' );
		} else {
			$( '.popover-mask' ).removeClass( 'use' );
		}
	};
	
	$( '.element-container .element' ).on( 'click', function() {
		hideAllElementPopovers();
		$( '.element-container .element' )
			.addClass( 'inactive' );
		$( this )
			.removeClass( 'inactive' )
			.addClass( 'active' )
			.find( '.popover' ).fadeIn( 300 );
		
		$( '.popover-mask.use' ).show();
	} );
	
	$( document )
		.ready( usePopoverMask )
		.on( 'click', function( e ) {
			var target = $( e.target );
			
			if( !target.closest( '.element-container' ).length ) {
				hideAllElementPopovers();
			}
		} );
	
	$( window ).resize( usePopoverMask );
	
	$( '.table-of-contents li.has-caret > a' ).click( function( e ) {
		e.preventDefault();
		$( this ).closest( 'li' ).toggleClass( 'active' );
		return false;
	} );
})( jQuery );