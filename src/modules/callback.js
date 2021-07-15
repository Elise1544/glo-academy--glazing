const callback = () => {
	const btnCallback = document.querySelectorAll('a[href^="#callback"]'),
		modal = document.querySelector('.header-modal'),
		overlay = document.querySelector('.overlay');

	btnCallback.forEach(button => {
		button.addEventListener('click', () => {
			modal.style.display = 'block';
			overlay.style.display = 'block';
		});
	});

	window.addEventListener('click', evt => {
		const target = evt.target;
		if (target.classList.contains('header-modal__close') || target.classList.contains('overlay')) {
			modal.style.display = 'none';
			overlay.style.display = 'none';
		}
	});

	window.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			modal.style.display = 'none';
			overlay.style.display = 'none';
		}
	});
};

export default callback;
