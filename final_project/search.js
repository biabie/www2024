const apiKey = '970b342ef8e890400c9062680ce5a36c';

function displayErrorMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.className = 'error';
    messageDiv.style.display = 'block';
}

function updateWeatherInfo(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const weatherHtml = `
        <h2>${data.name}</h2>
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherInfoDiv.innerHTML = weatherHtml;
}

function fetchWeatherData(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                updateWeatherInfo(data);
            } else {
                displayErrorMessage('Weather data not found for your location. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayErrorMessage('Error fetching weather data. Please try again later.');
        });
}

document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;

    if (!location) {
        displayErrorMessage('Please enter a location.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const latitude = data.coord.lat;
                const longitude = data.coord.lon;
                
                updateWeatherInfo(data);
                updateMap(latitude, longitude);
            } else {
                displayErrorMessage('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayErrorMessage('Error fetching weather data. Please try again later.');
        });
});