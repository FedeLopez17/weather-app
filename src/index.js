import { getCoordinates, getCurrentWeather, getForecast } from './api-calls';
import './style.css';

const searchBar = document.querySelector('#search-bar');

window.addEventListener('keypress', async (event) => {
    const enterKeyWasPressed = event.key === 'Enter';
    const searchBarIsFocused = searchBar === document.activeElement;
    if (enterKeyWasPressed && searchBarIsFocused) {
        try {
            const coordinatesData = await getCoordinates(searchBar.value);
            const { lat, lon, name, country } = coordinatesData[0];
            const coordinates = { lat, lon };

            console.log(`${name}, ${country}`);

            const currentWeatherData = await getCurrentWeather(coordinates);
            console.log(currentWeatherData);

            const forecastData = await getForecast(coordinates);
            console.log(forecastData);
        } catch {
            console.log('Sorry, something went wrong');
        }
    }
});
