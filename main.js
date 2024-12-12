document.getElementById('searchBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherResult = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherResult;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>Location not found.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>Error fetching weather data.</p>`;
        });
});
