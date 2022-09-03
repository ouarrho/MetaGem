$(document).ready(function(){

	var start  = false;

	var prefix       = '';

	var prefixLength = 0;

	var $gemValue    = $( '.gem-value' );

	var $gemHash128  = $( '.gem-hash-128' );

	var $gemHash64   = $( '.gem-hash-64' );

	var $collected   = $( '.collected' );

	var $gemValueCollected   = $( '.gem-value-collected' );

	var $gemHash128Collected = $( '.gem-hash-128-collected' );

	var $gemHash64Collected  = $( '.gem-hash-64-collected' );

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

	const arr = [ 

				/*' ', '	',*/

				'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 

				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

				'~', /*'`',*/ '!', '@', '#', '$', '%', '^', /*'&',*/ '*', '(', ')', '-', '_', '+', /*'=',*/ '{', '}', '[', ']', '|', '\\', '/', ':', ';', /*'"',*/ /*'\'',*/ '<', '>', ',', '.'/*, '?'*/

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
		
		let min = Math.ceil( 0 );
		let max = Math.floor( 85 );
		
		let min1 = Math.ceil( 0 );
		let max1 = Math.floor( 85 );

		let min2 = Math.ceil( 0 );
		let max2 = Math.floor( 85 );

		let min3 = Math.ceil( 0 );
		let max3 = Math.floor( 85 );

		let min4 = Math.ceil( 0 );
		let max4 = Math.floor( 85 );

		let min5 = Math.ceil( 0 );
		let max5 = Math.floor( 85 );

		let min6 = Math.ceil( 0 );
		let max6 = Math.floor( 85 );

		let min7 = Math.ceil( 0 );
		let max7 = Math.floor( 85 );

		let min8 = Math.ceil( 0 );
		let max8 = Math.floor( 85 );

		let min9 = Math.ceil( 0 );
		let max9 = Math.floor( 85 );

		let min10 = Math.ceil( 0 );
		let max10 = Math.floor( 85 );

		let min11 = Math.ceil( 0 );
		let max11 = Math.floor( 85 );

		let random   = Math.floor( Math.random() * (max - min) + min );
		let random1  = Math.floor( Math.random() * (max1 - min1) + min1 );
		let random2  = Math.floor( Math.random() * (max2 - min2) + min2 );
		let random3  = Math.floor( Math.random() * (max3 - min3) + min3 );
		let random4  = Math.floor( Math.random() * (max4 - min4) + min4 );
		let random5  = Math.floor( Math.random() * (max5 - min5) + min5 );
		let random6  = Math.floor( Math.random() * (max6 - min6) + min6 );
		let random7  = Math.floor( Math.random() * (max7 - min7) + min7 );
		let random8  = Math.floor( Math.random() * (max8 - min8) + min8 );
		let random9  = Math.floor( Math.random() * (max9 - min9) + min9 );
		let random10 = Math.floor( Math.random() * (max10 - min10) + min10 );
		let random11 = Math.floor( Math.random() * (max11 - min11) + min11 );

		let str = arr[ random ] + arr[ random1 ] + arr[ random2 ] + arr[ random3 ] + arr[ random4 ] + arr[ random5 ] + arr[ random6 ] + arr[ random7 ] + arr[ random8 ] + arr[ random9 ] + arr[ random10 ] + arr[ random11 ];

		sha512( str ).then( hash => { 

			let prefixHash = hash.substring( 0, prefixLength );

			$gemValue.text( str );

			$gemHash128.text( hash );

			if( prefixHash === prefix ){

				$html( str, hash );

				//$gemValueCollected.text( str );

				//$gemHash128Collected.text( hash );

			}

			if( start == true ){

				setTimeout(function(){
		
					startMining();

				}, 10);

			}

		});/*.then( hash => { 
			
			sha256( str ).then( hash => { 

				$gemValue.text( str );

				$gemHash64.text( hash );

				if( start == true ){

					setTimeout(function(){
		
						startMining();

					}, 10);

				}

			})

		});*/

	}


	$(document).on( 'click', '.start-mining', function(){

		if( $(this).attr( 'data-start' ) == 'false' ){

			prefix = $( '#prefix' ).val();

			prefixLength = prefix.length;

			if( prefixLength < 2 ) return

			start = true;

			$(this).attr( 'data-start', 'true' ).text( 'Stop Mining' ).removeClass( 'btn-success' ).addClass( 'btn-danger' );
			
			startMining();

		}else{

			start = false;

			$(this).attr( 'data-start', 'false' ).text( 'Start Mining' ).removeClass( 'btn-danger' ).addClass( 'btn-success' );

		}

	});

	$(document).on( 'keyup', '#prefix', function(){

		start = false;

		$( '.start-mining' ).attr( 'data-start', 'false' ).text( 'Start Mining' ).removeClass( 'btn-danger' ).addClass( 'btn-success' );

	});

});