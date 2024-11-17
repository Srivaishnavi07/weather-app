const apiKey = '3abb853297540ffa7f5856b5e1a805bb';  // Replace with your API key

// Fetch weather data
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const iconCode = data.weather[0].icon;

                // Update HTML elements
                document.getElementById("cityName").innerText = `City: ${cityName}`;
                document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
                document.getElementById("description").innerText = `Description: ${description}`;
                document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
                document.getElementById("weatherIcon").innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`;
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data');
        });
}

// Event listener for button click
document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city");
    }
});
