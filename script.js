const apiKey = "2851d3ff427f3086d8608426f3611a4e"; // Your API key for OpenWeatherMap
const weatherResult = document.getElementById("weatherResult");
const cityInput = document.getElementById("cityInput");

function getWeather() {
  const city = cityInput.value.trim(); // Get the city name from the input field
  
  // Check if a city name was entered
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  // Construct the URL with the city and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Perform the fetch request to get weather data from the API
  fetch(url)
    .then((response) => {
      // Check if the response is OK, otherwise throw an error
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      // Check if the response contains the expected data structure
      if (!data.weather || !data.main) {
        weatherResult.innerHTML = `<p>Unexpected API response structure.</p>`;
        return;
      }

      // Extract relevant weather information from the API response
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Display the weather information 
      weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Weather:</strong> ${weatherDescription}</p>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
    })
    .catch((error) => {
      // Handle errors (e.g., city not found, network issues)
      weatherResult.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
      console.error("Error fetching weather data:", error);
    });
}
