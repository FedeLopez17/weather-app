import getWeatherData from './api-calls';
import '../style.css';

// import weather icons
import clearSkyDay from '../images/weather-icons/01d.svg';
import clearSkyNight from '../images/weather-icons/01n.svg';
import fewCloudsDay from '../images/weather-icons/02d.svg';
import fewCloudsNight from '../images/weather-icons/02n.svg';
import scatteredCloudsDay from '../images/weather-icons/03d.svg';
import scatteredCloudsNight from '../images/weather-icons/03n.svg';
import brokenCloudsDay from '../images/weather-icons/04d.svg';
import brokenCloudsNight from '../images/weather-icons/04n.svg';
import showerRainDay from '../images/weather-icons/09d.svg';
import showerRainNight from '../images/weather-icons/09n.svg';
import rainDay from '../images/weather-icons/10d.svg';
import rainNight from '../images/weather-icons/10n.svg';
import thunderstormDay from '../images/weather-icons/11d.svg';
import thunderstormNight from '../images/weather-icons/11n.svg';
import snowDay from '../images/weather-icons/13d.svg';
import snowNight from '../images/weather-icons/13n.svg';
import mistDay from '../images/weather-icons/50d.svg';
import mistNight from '../images/weather-icons/50n.svg';

// import background videos
import initialScreenVideo from '../videos/initial-screen-video.mp4';
import clearDayVideo from '../videos/clear-day.mp4';
import clearNightVideo from '../videos/clear-night.mp4';
import cloudsDayVideo from '../videos/clouds-day.mp4';
import cloudsNightVideo from '../videos/clouds-night.mp4';
import mistDayVideo from '../videos/mist-day.mp4';
import mistNightVideo from '../videos/mist-night.mp4';
import rainDayVideo from '../videos/rain-day.mp4';
import rainNightVideo from '../videos/rain-night.mp4';
import snowDayVideo from '../videos/snow-day.mp4';
import snowNightVideo from '../videos/snow-night.mp4';
import thunderstormVideo from '../videos/thunderstorm.mp4';

let lastSearch = null;

const container = document.querySelector('#content');
const main = document.querySelector('main');

const UNITS = {
    metric: { temperature: '°C', speed: 'km/h' },
    imperial: { temperature: '°F', speed: 'm/h' }
};

const DEFAULT_UNIT = 'metric';

let currentUnit = DEFAULT_UNIT;

const WEATHER_MEDIA = {
    '01d': { icon: clearSkyDay, video: clearDayVideo },
    '01n': { icon: clearSkyNight, video: clearNightVideo },
    '02d': { icon: fewCloudsDay, video: cloudsDayVideo },
    '02n': { icon: fewCloudsNight, video: cloudsNightVideo },
    '03d': { icon: scatteredCloudsDay, video: cloudsDayVideo },
    '03n': { icon: scatteredCloudsNight, video: cloudsNightVideo },
    '04d': { icon: brokenCloudsDay, video: cloudsDayVideo },
    '04n': { icon: brokenCloudsNight, video: cloudsNightVideo },
    '09d': { icon: showerRainDay, video: rainDayVideo },
    '09n': { icon: showerRainNight, video: rainNightVideo },
    '10d': { icon: rainDay, video: rainDayVideo },
    '10n': { icon: rainNight, video: rainNightVideo },
    '11d': { icon: thunderstormDay, video: thunderstormVideo },
    '11n': { icon: thunderstormNight, video: thunderstormVideo },
    '13d': { icon: snowDay, video: snowDayVideo },
    '13n': { icon: snowNight, video: snowNightVideo },
    '50d': { icon: mistDay, video: mistDayVideo },
    '50n': { icon: mistNight, video: mistNightVideo }
};

function displayErrorMessage() {
    const errorMessage = document.querySelector('p.error-message');
    if (errorMessage) {
        errorMessage.innerText = `Something went wrong.
        Make sure you enter a valid location!`;
    }
}

function displayLoadingAnimation() {
    const alreadyOnScreen = document.querySelector('#loading-animation');
    if (alreadyOnScreen) return;

    const loadingAnimation = document.createElement('section');
    loadingAnimation.id = 'loading-animation';
    container.appendChild(loadingAnimation);
}

function removeLoadingAnimation() {
    const loadingAnimation = document.querySelector('#loading-animation');
    if (loadingAnimation) loadingAnimation.remove();
}

function displayInitialScreen() {
    main.innerHTML = '';
    main.id = 'initial-screen';

    displayLoadingAnimation();

    const backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('background-video');
    backgroundVideo.id = 'initial-screen-video';
    backgroundVideo.src = initialScreenVideo;
    backgroundVideo.muted = true;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.onloadeddata = removeLoadingAnimation;
    main.appendChild(backgroundVideo);

    const title = document.createElement('p');
    title.id = 'title';
    title.innerText = "What's the weather like in...";
    main.appendChild(title);

    const searchBar = document.createElement('input');
    searchBar.id = 'search-bar';
    searchBar.type = 'text';
    searchBar.autocomplete = 'off';
    searchBar.placeholder = 'Enter a city';
    main.appendChild(searchBar);

    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    main.appendChild(errorMessage);
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function displayWeatherInformationScreen(weatherData, unit) {
    main.innerHTML = '';
    main.id = 'weather-information-screen';

    const backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('background-video');
    backgroundVideo.src = WEATHER_MEDIA[weatherData.weatherIconId].video;
    backgroundVideo.muted = true;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.onloadeddata = removeLoadingAnimation;
    main.appendChild(backgroundVideo);

    const goBackArrow = document.createElement('i');
    goBackArrow.classList.add('fa-solid', 'fa-circle-chevron-left');
    goBackArrow.id = 'go-back-button';
    goBackArrow.title = 'GO BACK';
    goBackArrow.addEventListener('click', displayInitialScreen);
    main.appendChild(goBackArrow);

    const unitsToggle = document.createElement('p');
    unitsToggle.id = 'units-toggle';
    unitsToggle.innerText = `Display ${unit === 'metric' ? '°F' : '°C'}`;
    unitsToggle.addEventListener('click', toggleUnits);
    main.appendChild(unitsToggle);

    const cityTitle = document.createElement('p');
    cityTitle.id = 'city-title';
    // If it's the US, then show the state instead of the country
    cityTitle.innerText = `${weatherData.city}, ${
        weatherData.countryCode === 'US'
            ? weatherData.state
            : weatherData.countryCode
    }`;
    main.appendChild(cityTitle);

    const weatherIcon = document.createElement('img');
    weatherIcon.id = 'weather-icon';
    weatherIcon.src = WEATHER_MEDIA[weatherData.weatherIconId].icon;
    weatherIcon.alt = `${weatherData.weather} weather icon`;
    main.appendChild(weatherIcon);

    const weather = document.createElement('p');
    weather.id = 'weather';
    weather.innerText = weatherData.weather;
    main.appendChild(weather);

    const weatherDescription = document.createElement('p');
    weatherDescription.id = 'weather-description';
    weatherDescription.innerText = capitalize(weatherData.weatherDescription);
    main.appendChild(weatherDescription);

    const temperature = document.createElement('p');
    temperature.id = 'temperature';
    temperature.innerText = `${weatherData.temperature} ${UNITS[unit].temperature}`;
    main.appendChild(temperature);

    const feelsLike = document.createElement('p');
    feelsLike.id = 'feels-like';
    const feelsLikeTitle = document.createElement('span');
    feelsLikeTitle.classList.add('title');
    feelsLikeTitle.innerText = 'Feels like: ';
    feelsLike.appendChild(feelsLikeTitle);
    const feelsLikeValue = document.createElement('span');
    feelsLikeValue.classList.add('value');
    feelsLikeValue.innerText = `${weatherData.feelsLike} ${UNITS[unit].temperature}`;
    feelsLike.appendChild(feelsLikeValue);
    main.appendChild(feelsLike);

    const humidity = document.createElement('p');
    humidity.id = 'humidity';
    const humidityTitle = document.createElement('span');
    humidityTitle.classList.add('title');
    humidityTitle.innerText = 'Humidity: ';
    humidity.appendChild(humidityTitle);
    const humidityValue = document.createElement('span');
    humidityValue.classList.add('value');
    humidityValue.innerText = `${weatherData.humidity}%`;
    humidity.appendChild(humidityValue);
    main.appendChild(humidity);

    const windSpeed = document.createElement('p');
    windSpeed.id = 'wind-speed';
    const windSpeedTitle = document.createElement('span');
    windSpeedTitle.classList.add('title');
    windSpeedTitle.innerText = 'Wind speed: ';
    windSpeed.appendChild(windSpeedTitle);
    const windSpeedValue = document.createElement('span');
    windSpeedValue.classList.add('value');
    windSpeedValue.innerText = `${weatherData.windSpeed} ${UNITS[unit].speed}`;
    windSpeed.appendChild(windSpeedValue);
    main.appendChild(windSpeed);
}

async function getAndDisplayWeatherData(location, unit) {
    displayLoadingAnimation();
    try {
        const weatherData = await getWeatherData(location, unit);
        displayWeatherInformationScreen(weatherData, unit);
    } catch {
        removeLoadingAnimation();
        displayErrorMessage();
    }
}

window.addEventListener('keypress', (event) => {
    const notInInitialScreen = !document.querySelector('#initial-screen');
    if (notInInitialScreen) return;

    const enterKeyWasPressed = event.key === 'Enter';
    const searchBar = document.querySelector('#search-bar');
    const searchBarIsFocused = searchBar === document.activeElement;
    if (enterKeyWasPressed && searchBarIsFocused) {
        getAndDisplayWeatherData(searchBar.value, currentUnit);
        lastSearch = searchBar.value;
    }
});

function toggleUnits() {
    if (currentUnit === 'metric') {
        currentUnit = 'imperial';
    } else {
        currentUnit = 'metric';
    }
    getAndDisplayWeatherData(lastSearch, currentUnit);
}

displayInitialScreen();
