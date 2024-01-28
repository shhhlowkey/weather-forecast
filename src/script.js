function refreshData(response) {
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#current-city");
  let humidityElement = document.querySelector("#humidity-result");
  let windElement = document.querySelector("#wind-result");
  let temperature = response.data.temperature.current;

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

function apiCitySearch(city) {
  let apiKey = "6a97550f4fc033e330d0ot4a7bb681ab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshData);
}

function handleCitySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");

  apiCitySearch(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleCitySearch);

apiCitySearch("Brisbane");
