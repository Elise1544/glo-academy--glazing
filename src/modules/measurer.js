

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

	measureModal.addEventListener('click', evt => {
		const target = evt.target;
		if (target.classList.contains('services-modal__close')) {
			measureModal.style.display = 'none';
			overlay.style.display = 'none';
		}
	});
};

export default measurer;
