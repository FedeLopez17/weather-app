const MY_API_KEY = '27c777166bf3f6fa04f43c0835cb89b1';

const PLACEHOLDER_UNITS = 'metric';

export async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${MY_API_KEY}`,
        { mode: 'cors' }
    );

    return response.json();
}

export async function getCurrentWeather({ lat, lon }) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=${PLACEHOLDER_UNITS}`,
        { mode: 'cors' }
    );

    return response.json();
}

export async function getForecast({ lat, lon }) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=${PLACEHOLDER_UNITS}`
    );

    return response.json();
}
