window.onload = function() {

//variables

	var wins = 0, 
		losses = 0, 
		playerNumber = 0,
		magicNumber = 0,
		c1value,
		c2value,
		c3value,
		c4value;
	var allCrystals = [];


//crystals
	function magicNumberGenerator() {
		magicNumber = Math.floor((Math.random() * 120) +19);
		console.log(magicNumber);
	}
	magicNumberGenerator();

	$('#magicNumber').html('<p> Magic Number: ' + magicNumber + '</p>');

// function to generate random # between 1-12
	function crystalValueGenerator() {
		crystalValue = Math.floor((Math.random() * 12) +1);
		return crystalValue;
		//console.log(crystalValue);
	}
	crystalValueGenerator();	

	

	c1value = crystalValueGenerator();
	c2value = crystalValueGenerator();
	c3value = crystalValueGenerator();
	c4value = crystalValueGenerator();

	allCrystals.push(c1value);
	allCrystals.push(c2value);
	allCrystals.push(c3value);
	allCrystals.push(c4value);

	// alert(allCrystals);

	//$('#c1value').attr('value', crystalValueGenerator()); 
	
	//$('#c2value').attr('value', crystalValueGenerator());

	//$('#c3value').attr('value', crystalValueGenerator());

	//$('#c4value').attr('value', crystalValueGenerator());

	function reset() {
		wins = 0, 
		losses = 0, 
		playerNumber = 0,
		magicNumber = 0,
		c1value,
		c2value,
		c3value,
		c4value;		
	}	

	function win() {
		alert('You won!');
		reset();
		wins++;
		$('#wins').html('Wins: ' + wins);
	}

	function gameLoss() {
		alert('Darn, Try Again!');
		reset();
		losses++;
		$('losses').html('Losses: ' + losses);
	}
	


	// magicNumberGenerator();
	// console.log(magicNumber);

	


	$('#c1value').on('click', function() {

			if (playerNumber == magicNumber) {
				console.log("you win");
				win();
			} 
			else if (playerNumber > magicNumber) {
				gameLoss();
			}
			else {
				alert(allCrystals[0]);
				playerNumber += allCrystals[0];
				$('#playerNumber').html('<p>Player Status: ' + playerNumber + '</p>');
			};
		
	});

	$('#c2value').on('click', function() {
			
			if (playerNumber == magicNumber) {
				console.log("you win");
				win();
			} 
			else if (playerNumber > magicNumber) {
				gameLoss();
			}
			else {
				alert(allCrystals[1]);
				playerNumber += allCrystals[1];
				$('#playerNumber').html('<p>Player Status: ' + playerNumber + '</p>');
			};

	});

	$('#c3value').on('click', function() {
			if (playerNumber == magicNumber) {
				console.log("you win");
				win();
			} 
			else if (playerNumber > magicNumber) {
				gameLoss();
			}
			else {
				alert(allCrystals[2]);
				playerNumber += allCrystals[2];
				$('#playerNumber').html('<p>Player Status: ' + playerNumber + '</p>');
			};
			
	});

	$('#c4value').on('click', function() {
			if (playerNumber == magicNumber) {
				console.log("you win");
				win();
			} 
			else if (playerNumber > magicNumber) {
				gameLoss();
			}
			else {
				alert(allCrystals[3]);
				playerNumber += allCrystals[3];
				$('#playerNumber').html('<p>Player Status: ' + playerNumber + '</p>');
			};
			
	});

};