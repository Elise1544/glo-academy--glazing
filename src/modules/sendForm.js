const sendForm = () => {
	const formBlocks = document.querySelectorAll('form'),
		allInput = document.querySelectorAll('input');
	allInput.required = 'required';
	const statusMessage = document.createElement('div');

	const formSubmit = form => {
		const postData = body => fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		const errorMessage = 'Что-то пошло не так...',
			successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
			loadMessage = 'Ожидание ответа от сервера';

		form.append(statusMessage);
		statusMessage.textContent = loadMessage;

		const body = {};
		const formData = form.querySelectorAll('input');
		formData.forEach(input => {
			body[input.name] = input.value;
		});

		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('status network not 200');
				}
				statusMessage.textContent = successMessage;
			})
			.catch(error => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});
		form.reset();
	};

	formBlocks.forEach(form => {
		form.addEventListener('submit', evt => {
			evt.preventDefault();
			if (statusMessage) {
				statusMessage.remove();
			}

			let flag = false;
			for (const item of form.elements) {
				if (item !== form.querySelector('button')) {
					if (item.value === '') {
						flag = false;
						item.style.border = '1px solid red';
						return false;
					} else {
						flag = true;
						item.style.border = '1px solid green';

					}
				}
			}

			if (flag) {
				formSubmit(form);
			}

		});
	});

};

export default sendForm;
