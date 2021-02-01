const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


async function setOptions() {
const endpoint = 'https://v6.exchangerate-api.com/v6/20e49a23166b80429f369f49/latest/USD';
const res = await fetch(endpoint);
const data = await res.json();

 console.log(data);

const options = Object.keys(data.conversion_rates);
//  console.log(options);

currencyEl_one.innerHTML = options.map((option) => `<option value="${option}" ${option === 'USD' && 'selected'}>${option}</option>`);
currencyEl_two.innerHTML = options.map((option) => `<option value="${option}" ${option === 'AZN' && 'selected'}>${option}</option>`);
  calculate();
}


async function calculate() {
const endpoint = `https://v6.exchangerate-api.com/v6/20e49a23166b80429f369f49/latest/${currencyEl_one.value}`;
const res = await fetch(endpoint);
const data = await res.json();

const rate = data.conversion_rates[currencyEl_two.value];
rateEl.innerHTML = `1 ${currencyEl_one.value} = ${rate} ${currencyEl_two.value}`; //optional
amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
}

setOptions();



currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);


swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});