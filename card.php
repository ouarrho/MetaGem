<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>mg</title>

	<!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">-->

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

	<link rel="stylesheet" type="text/css" href="index.css">
	
	<script src="jquery.min.js"></script>

	<script type="text/javascript" src="index.js"></script>

	<style type="text/css">

		.left {

			display: inline-block;

		}

		.right {

			display: inline-block;

		}

		.square {

			position:relative;
			background-color: currentColor;
			float: left;
			width: 24px;
			height: 24px;
			margin: 1px;
			border-radius: 2px;

		}

		@media only screen and (max-width: 780px) {

		
		}

	</style>

</head>
<body class="">

	<?php

		$value = '#}=i"KA^';

		$hash = '94b50dc4775c31ab0599af7805498455816493de86b373e9993f87ae3d52911283121d96419854dac1ff59939f9db73534f8fb08a6d4078ba31c4c5b61eb908a03862ceffcab6a78e83673ae5b32e0d2559ef590e55a84feb8b30ff5d68fd735';

	?>

	<div class="container p-4">

		<div class="d-flex justify-content-center">

			<div class="text-center mb-4 overflow-hidden" style="max-width: 700px;">

				<h1 style="word-break: break-all;"><?php echo $value; ?></h1>

				<h4 class="mt-4" style="word-break: break-all;"><?php echo $hash; ?></h1>

				<div class="left my-4  mx-2" style="width: 312px;background-color: #fff;">
					
					<?php for( $n = 0; $n < 192; $n++ ): ?>

						<?php if( $n % 12 == 0 ): ?>
							
							<div class="w-100 overflow-hidden" style="line-height: 0;">

						<?php endif; ?>

						<?php if( $n < 187 ): ?>

							<div class="square" style="
								
								color: #<?php echo $hash[ $n ].$hash[ $n + 1 ].$hash[ $n + 2 ].$hash[ $n + 3 ].$hash[ $n + 4 ].$hash[ $n + 5 ]; ?>;

							"></div>

						<?php else: ?>

							<div class="square" style="

							color: #<?php echo $hash[ $n ].$hash[ $n - 1 ].$hash[ $n - 2 ].$hash[ $n - 3 ].$hash[ $n - 4 ].$hash[ $n - 5 ]; ?>;"></div>

						<?php endif; ?>

						<?php if( ( $n + 1 ) % 12 == 0 ): ?>

							</div>

						<?php endif; ?>

					<?php endfor; ?>

				</div>

				<div class="right my-4  mx-2" style="width: 312px;background-color: #fff;">
					
					<?php for( $n = 0; $n < 192; $n++ ): ?>

						<?php if( $n % 12 == 0 ): ?>
							
							<div class="w-100 overflow-hidden" style="line-height: 0;">

						<?php endif; ?>

							<div class="square" style="color: #<?php echo $hash[ $n ].$hash[ $n ].$hash[ $n ]; ?>;"></div>

						<?php if( ( $n + 1 ) % 12 == 0 ): ?>

							</div>

						<?php endif; ?>

					<?php endfor; ?>

				</div>

			</div>

		</div>

	</div>

</body>
</html>