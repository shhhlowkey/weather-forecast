function refreshData(response) {
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#current-city");
  let humidityElement = document.querySelector("#humidity-result");
  let windElement = document.querySelector("#wind-result");
  let temperature = response.data.temperature.current;
  let iconElement = document.querySelector("#conditions-icon");
  let conditionsElement = document.querySelector("#condition-description");
  let date = new Date(response.data.time * 1000);
  let dateElement = document.querySelector("#date");
 
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  conditionsElement.innerHTML = response.data.condition.description;
  iconElement.innerHTML = `
    <img
      src="${response.data.condition.icon_url}"
      alt="${response.data.condition.icon}"
    />
  `;
  dateElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let currentDateElement = document.querySelector("#dateTime");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let hour = date.getHours();

  return `${day}, ${date.getDate()} ${month} </br> ${hour}:${date.getMinutes()}`;
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
