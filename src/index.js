import '../css/index.scss';
import {getRandomArbitrary} from '../src/util';

const weatherIcons = ['☀️', '⛅', '☁️', '🌩️', '🌧️', '🌦️', '🌨️'];

document.querySelector('#generate')
    .addEventListener('click', generateWeather);

function generateWeather() {
  const tempValueEl = document.querySelector('.temperature > .value');
  const precipitationValueEl = document.querySelector('.precipitation > .value');
  const windValueEl = document.querySelector('.wind > .value');

  const tempValue = getRandomArbitrary(-20, 30);
  const precipitationIndex = getRandomArbitrary(0, weatherIcons.length - 1);
  const windValue = getRandomArbitrary(0, 10);

  const precipitationValue = weatherIcons[precipitationIndex];

  tempValueEl.innerHTML = `${tempValue} °C`;
  precipitationValueEl.innerHTML = precipitationValue;
  windValueEl.innerHTML = `${windValue} km/h`;
}


generateWeather();
