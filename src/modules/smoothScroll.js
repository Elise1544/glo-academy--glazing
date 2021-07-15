const smoothScroll = () => {
	const button = document.querySelector('.smooth-scroll');

	window.addEventListener('scroll', () => {
		if (pageYOffset > 860) {
			button.style.display = 'block';
		} else {
			button.style.display = 'none';
		}
	});

	button.addEventListener('click', () => {
		document.getElementById('header').scrollIntoView({
			behavior: 'smooth'
		});

	});

};

export default smoothScroll;
