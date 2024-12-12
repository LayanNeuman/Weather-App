
document.querySelector('.search-btn').addEventListener('click', function() {
    const location = document.querySelector('.city-input').value; 
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.querySelector('.city-name').innerText = `Weather in ${data.name}`;
                document.querySelector('.temperature').innerText = `${data.main.temp}°C`;
                document.querySelector('.weather-description').innerText = data.weather[0].description;
                document.querySelector('.humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.querySelector('.wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`; 
                document.querySelector('.weather-result').innerHTML = '';
            } else {
                document.querySelector('.weather-result').innerHTML = `<p>Location not found.</p>`;
            }
        })
        .catch(error => {
            document.querySelector('.weather-result').innerHTML = `<p>Error fetching weather data.</p>`;
        });
});