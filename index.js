$(document).ready(function(){

	var start = false;

	var $gemValue   = $( '.gem-value' );

	var $gemHash128 = $( '.gem-hash-128' );

	var $gemHash64  = $( '.gem-hash-64' );

	const arr = [ 

				' ', '	',

				'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 

				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

				'~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', '/', ':', ';', '"', '\'', '<', '>', ',', '.', '?'

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
		let max = Math.floor( 95 );
		
		let min1 = Math.ceil( 0 );
		let max1 = Math.floor( 95 );

		let min2 = Math.ceil( 0 );
		let max2 = Math.floor( 95 );

		let min3 = Math.ceil( 0 );
		let max3 = Math.floor( 95 );

		let min4 = Math.ceil( 0 );
		let max4 = Math.floor( 95 );

		let min5 = Math.ceil( 0 );
		let max5 = Math.floor( 95 );

		let min6 = Math.ceil( 0 );
		let max6 = Math.floor( 95 );

		let min7 = Math.ceil( 0 );
		let max7 = Math.floor( 95 );

		let random  = Math.floor( Math.random() * (max - min) + min );
		let random1 = Math.floor( Math.random() * (max1 - min1) + min1 );
		let random2 = Math.floor( Math.random() * (max2 - min2) + min2 );
		let random3 = Math.floor( Math.random() * (max3 - min3) + min3 );
		let random4 = Math.floor( Math.random() * (max4 - min4) + min4 );
		let random5 = Math.floor( Math.random() * (max5 - min5) + min5 );
		let random6 = Math.floor( Math.random() * (max6 - min6) + min6 );
		let random7 = Math.floor( Math.random() * (max7 - min7) + min7 );

		let str = arr[ random ] + arr[ random1 ] + arr[ random2 ] + arr[ random3 ] + arr[ random4 ] + arr[ random5 ] + arr[ random6 ] + arr[ random7 ];
		
		sha512( str ).then( hash => { 

			$gemValue.text( str );

			$gemHash128.text( hash );

		}).then( hash => { 

			sha256( str ).then( hash => { 

				$gemValue.text( str );

				$gemHash64.text( hash );

				if( start == true ){

					setTimeout(function(){
		
						startMining();

					}, 10);

				}

			})

		});

	}


	$(document).on( 'click', '.start-mining', function(){

		if( $(this).attr( 'data-start' ) == 'false' ){

			start = true;

			$(this).attr( 'data-start', 'true' ).text( 'Stop Mining' ).removeClass( 'btn-success' ).addClass( 'btn-danger' );
			
			startMining();

		}else{

			start = false;

			$(this).attr( 'data-start', 'false' ).text( 'Start Mining' ).removeClass( 'btn-danger' ).addClass( 'btn-success' );

		}


	});

});