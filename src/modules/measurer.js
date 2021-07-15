const measurer = () => {
	const measurerBtns = document.querySelectorAll('a[href^="#application"]'),
		measureModal = document.querySelector('.services-modal'),
		overlay = document.querySelector('.overlay');


	measurerBtns.forEach(button => {
		button.addEventListener('click', () => {
			measureModal.style.display = 'block';
			overlay.style.display = 'block';
		});
	});

	window.addEventListener('click', evt => {
		const target = evt.target;
		if (target.classList.contains('services-modal__close') || target.classList.contains('overlay')) {
			measureModal.style.display = 'none';
			overlay.style.display = 'none';
		}
	});

	window.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			measureModal.style.display = 'none';
			overlay.style.display = 'none';
		}
	});
};

export default measurer;
