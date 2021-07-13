

const timer = deadline => {
	const timerBlocks = document.querySelectorAll('.count-wrap');

	const getTimeRemaining = () => {
		const dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor((timeRemaining / 60 / 60) % 24),
			days = Math.floor(timeRemaining / 60 / 60 / 24);

		return { timeRemaining, days, hours, minutes, seconds };
	};

	const addZero = time => {
		if (time < 10) {
			return `0${time}`;
		} else {
			return time;
		}
	};

	const updateClock = () => {
		const time = getTimeRemaining();

		for (let i = 0; i < timerBlocks.length; i++) {
			const daysOutputs = timerBlocks[i].children[0].querySelector('span'),
				hoursOutputs = timerBlocks[i].children[1].querySelector('span'),
				minutesOutputs = timerBlocks[i].children[2].querySelector('span'),
				secondsOutputs = timerBlocks[i].children[3].querySelector('span');

			if (time.timeRemaining > 0) {
				daysOutputs.textContent = addZero(time.days);
				hoursOutputs.textContent = addZero(time.hours);
				minutesOutputs.textContent = addZero(time.minutes);
				secondsOutputs.textContent = addZero(time.seconds);
			} else {
				timerBlocks[i].style.color = `red`;
				daysOutputs.textContent = `00`;
				hoursOutputs.textContent = `00`;
				minutesOutputs.textContent = `00`;
				secondsOutputs.textContent = `00`;
			}
		}

	};

	setInterval(updateClock, 1000);
};

export default timer;
