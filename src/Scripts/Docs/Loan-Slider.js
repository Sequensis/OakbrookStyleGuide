if (location.pathname === "/example-top-up-calc.html") {

	var minVal = 1000;
	var maxVal = 2000;
	var loanStep = 10;

	var loanSlider = document.getElementById('loan-slider');

	noUiSlider.create(loanSlider, {
		start: maxVal - 500,
		connect: [true, false],
		step: loanStep,
		range: {
			'min': minVal,
			'max': maxVal
		}
	});

	var loanSliderValue = document.getElementById('loan-slider-value');

	loanSlider.noUiSlider.on('update', function (values, handle) {
		loanSliderValue.value = values[handle];
	});

	loanSliderValue.addEventListener('change', function () {
		loanSlider.noUiSlider.set(this.value);
	});

}