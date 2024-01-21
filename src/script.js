function handleCitySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleCitySearch);
