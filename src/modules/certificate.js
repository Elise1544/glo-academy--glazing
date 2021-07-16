const certificate = () => {

	const certificateBlocks = document.querySelectorAll('.certificate-document'),
		overlay = document.querySelector('.overlay');

	let div;

	certificateBlocks.forEach(certificateBlock => {
		certificateBlock.addEventListener('click', evt => {
			evt.preventDefault();
			div = document.createElement('div');
			const source = certificateBlock.href;

			div.innerHTML = `<img src="${source}" height="100%"></img>`;
			div.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      height: 100vh;
      transform: translate(-50%, -50%);
      z-index: 9999;
      `;
			document.body.append(div);

			overlay.style.display = 'block';
		});
	});

	const closeCertificate = () => {
		overlay.style.display = 'none';
		div.remove();
	};

	overlay.addEventListener('click', () => {
		closeCertificate();
	});

	window.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			closeCertificate();
		}
	});

};

export default certificate;
