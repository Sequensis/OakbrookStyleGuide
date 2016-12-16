var slider = document.getElementById('loan-slider');

noUiSlider.create(slider, {
	start: 2000,
	step: 10,
	connect: [true, false],
	range: {
		'min': 1000,
		'max': 5000
	}
});

var stepSliderValueElement = document.getElementById('loan-slider-value');

slider.noUiSlider.on('update', function( values, handle ) {
	stepSliderValueElement.innerHTML = values[handle];
});