const validation = () => {
	const nameInput = document.querySelectorAll('input[name^="fio"]'),
		phoneInput = document.querySelectorAll('input[name^="phone"]');

	const validateName = () => {
		nameInput.forEach(name => {
			name.addEventListener('input', () => {
				name.value = name.value.replace(/[^а-яa-z]/i, '');
			});
		});
	};
	validateName();

	const validatePhone = () => {
		phoneInput.forEach(phone => {
			phone.addEventListener('input', () => {
				phone.value = phone.value.replace(/[^\+\d]/, '');
				if (phone.value.length > 16) {
					phone.value = phone.value.substring(0, 15);
				}
			});
		});
	};
	validatePhone();

};

export default validation;
