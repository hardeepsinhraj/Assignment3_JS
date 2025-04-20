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


}
