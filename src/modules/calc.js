const calc = () => {
	if (document.querySelector('#calc')) {
		const calcBlock = document.querySelector('#calc'),
			type = document.querySelector('#calc-type'),
			material = document.querySelector('#calc-type-material'),
			calcInput = document.querySelector('#calc-input');

		window.calc = document.querySelector('#calc-total');

		calcBlock.addEventListener('change', evt => {
			const target = evt.target;
			if (target === type || target === material || target === calcInput) {
				calcInput.addEventListener('input', () => {
					calcInput.value = calcInput.value.replace(/\D\./, '');
				});

				if (type.value !== '--' && material.value !== '--') {
					window.calc.value = (type.value * material.value * calcInput.value).toFixed(2);
				}

			}
		});
	}

};

export default calc;
