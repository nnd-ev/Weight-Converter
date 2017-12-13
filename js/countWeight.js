let input = document.getElementById('input'),
	 output = document.getElementById('output'),

	 pounds = document.getElementById('pounds'),
	 grams = document.getElementById('grams'),
	 kilograms = document.getElementById('kilograms'),
	 ounces = document.getElementById('ounces'),

	 lbsOutput = document.getElementById('lbsOutput'),
	 gOutput = document.getElementById('gOutput'),
	 kgOutput = document.getElementById('kgOutput'),
	 ozOutput = document.getElementById('ozOutput');

output.style.visibility = 'hidden';

input.addEventListener('input', function(e) {

	output.style.visibility = 'visible';
	let weightValue = e.target.value;

	if (pounds.checked == true) { // if pounds are selected

		lbsOutput.innerHTML = weightValue;

		kgOutput.innerHTML = weightValue * 0.45;
		gOutput.innerHTML = weightValue * 454;
		ozOutput.innerHTML = weightValue * 16;

	} else if (grams.checked == true) { // if grams are selected

		gOutput.innerHTML = weightValue;

		lbsOutput.innerHTML =  weightValue * .0022;
		kgOutput.innerHTML = weightValue * .001;
		ozOutput.innerHTML = weightValue * .035;

	} else if (kilograms.checked == true) { // if kilograms are selected

		kgOutput.innerHTML = weightValue;

		lbsOutput.innerHTML =  weightValue * 2.20;
		gOutput.innerHTML = weightValue * 1000;
		ozOutput.innerHTML = weightValue * 35.27;

	} else if (ounces.checked == true) { // if ounces are selected

		ozOutput.innerHTML = weightValue;

		lbsOutput.innerHTML =  weightValue * .0625;
		kgOutput.innerHTML = weightValue * .0283;
		gOutput.innerHTML = weightValue * 28.3;

	}

});