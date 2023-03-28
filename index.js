'use strict';

console.log('funguju!');

const zacatek = (e) => {
	e.preventDefault()
	let time = Number(document.querySelector('.time-input').value)

	const sekundyElm = document.querySelector('.alarm__seconds')
	const alarmElm = document.querySelector('.alarm')


	alarmElm.classList.remove('alarm--ring')

	sekundyElm.textContent = String(time)

	const timer = () => {
		if (time > 0) {
			time -= 1
			sekundyElm.textContent = String(time)
		}
		if (time <= 0) {
			clearInterval(casovac)
			alarmElm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}

	const casovac = setInterval(timer, 1000)
}

const formularElm = document.querySelector('.controls')
formularElm.addEventListener('submit', zacatek)