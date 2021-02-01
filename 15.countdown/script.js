// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// prettier-ignore
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const time_boxes = document.querySelectorAll(".deadline-format h4");



let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();    //0-31 arasi gunler



let futureDate = new Date(2021, 0, 20, 16, 10, 00);
const futureYear = futureDate.getFullYear();
const futureMonth = months[futureDate.getMonth()];
const futureWeekday = weekdays[futureDate.getDay()]; //0-6 arasi gun
const futureDay = futureDate.getDate();
const futureHours = futureDate.getHours();
const futureMinutes = futureDate.getMinutes();
const futureTime = futureDate.getTime();


const format = (value) => (value < 10 ? (value = `0${value}`) : value);
giveaway.innerHTML = `giveaway ends on ${futureWeekday}, ${futureDay} ${futureMonth} ${futureYear}, ${futureHours}:${format(futureMinutes)}`;

const getRemainingTime = () => {
	const currentTime = new Date().getTime();

	
	const timeDiff = futureTime - currentTime;

	// values in milliseconds
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	const oneSecond = 1000;
	// calculate all values

	let days = Math.floor(timeDiff / oneDay);
	let hours = Math.floor((timeDiff % oneDay) / oneHour);
	let minutes = Math.floor((timeDiff % oneHour) / oneMinute);
	let seconds = Math.floor((timeDiff % oneMinute) / oneSecond);

	let values = [days, hours, minutes, seconds];

	time_boxes.forEach((h4, i) => (h4.innerHTML = format(values[i])));

	if (timeDiff < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
	}
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);
// set initial values
getRemainingTime();