$(document).ready(function(){

	( localStorage.hash  === undefined ) ? localStorage.hash  = '' : '';
	( localStorage.hash3 === undefined ) ? localStorage.hash3 = '' : '';

	var start  = false;

	var $gemValue    = $( '.gem-value' );

	var $gemHash128  = $( '.gem-hash-128' );

	var $gemHash64   = $( '.gem-hash-64' );

	var $collected   = $( '.collected' );

	var $gemValueCollected   = $( '.gem-value-collected' );

	var $gemHash128Collected = $( '.gem-hash-128-collected' );

	var $gemHash64Collected  = $( '.gem-hash-64-collected' );

	var lastHash = '<Ouarrho />';

	( localStorage.lastHash != undefined && localStorage.lastHash != '' ) ? lastHash = localStorage.lastHash : '';


	const $html = ( v, h ) => {

		$collected.prepend( `<li class="list-group-item">
						
						<div class="row">
				
							<i class="col-md-auto h4 text-primary bi bi-minecart-loaded"></i>

							<div class="col-md-9 px-1 mt-1 h6" style="word-break: break-all;">
	
								<span class="gem-value-collected">${ v }</span>

							</div>

						</div>
						
						<div class="row">

							<i class="col-md-auto h4 text-danger bi bi-gem"></i>
						
							<div class="col-md-9 px-1" style="word-break: break-all;">

								<span class="gem-hash-128-collected">${ h }</span><span class="gem-hash-64-collected"></span>

							</div>

						</div>
						
						<div class="row mt-2">
						
							<a href="card.php?v=${ v }&h=${ h }" class="btn btn-success">view card</a>

						</div>

					</li>` );

	}

	const arrChars = [ 

				/*' ', '	',*/

				'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 

				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

				'~', /*'`',*/ '!', '@', /*'#',*/ '$', '%', '^', /*'&',*/ '*', '(', ')', '-', '_', '+', /*'=',*/ '{', '}', '[', ']', '|', '\\', '/', ':', ';', /*'"',*/ /*'\'',*/ '<', '>', ',', '.'/*, '?'*/

			];


	function sha512( str ){

		return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {

    		return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
	
		});

	}

	function sha256( str ){

		return crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(str)).then(buf => {

    		return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
	
		});

	}

	function startMining(){

		let str = lastHash;

		sha512( str ).then( hash => { 

			lastHash = hash;

			let char0   = hash.charAt( 0 );
			let char1   = hash.charAt( 1 );
			let char2   = hash.charAt( 2 );
			let char125 = hash.charAt( 125 );
			let char126 = hash.charAt( 126 );
			let char127 = hash.charAt( 127 );

			$gemValue.text( str );

			$gemHash128.text( hash );

			if( new Set( [ char0, char1, char2, char125, char126, char127 ] ).size === 1 ){

				localStorage.hash3 = localStorage.hash3 +  '  &&  ' + str + '  ||  ' + hash

				$html( str, hash );

			}

			if( start == true ){

				setTimeout(function(){
		
					startMining();

				}, 10);

			}

		});

	}


	$(document).on( 'click', '.start-mining', function(){

		if( $(this).attr( 'data-start' ) == 'false' ){

			start = true;

			$(this).attr( 'data-start', 'true' ).text( 'Stop Mining' ).removeClass( 'btn-success' ).addClass( 'btn-danger' );
			
			startMining();

		}else{

			start = false;

			localStorage.lastHash = lastHash;

			$(this).attr( 'data-start', 'false' ).text( 'Start Mining' ).removeClass( 'btn-danger' ).addClass( 'btn-success' );

		}

	});

	var allHash = localStorage.hash3;

	var splitAllHash = allHash.split( '  &&  ' );

	$.each( splitAllHash, function( i, v ){

		if( i > 0 ){

			let value = v.split( '  ||  ' );

			$html( value[ 0 ], value[ 1 ] );

		}

	});

});
