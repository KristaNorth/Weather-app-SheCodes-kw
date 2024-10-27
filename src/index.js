function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
    
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML =formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML = `<img src="${response.data.condition.icon.url}" class="weather-app-icon"/>`;
}

getForecast(response.data.city);
    
   function formatDate(date) {
      let day = date.getDay();
      let minutes = date.getMinutes();
      let hours = date.getHours();
      let days ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
      
      }

      let day = days.[date.getDay()];
  
      if (minutes < 10) {
        minutes = `0$(minutes)`;
      }
  
      return `${day} ${hours}: ${minutes}`;
  
  function searchCity(city) {
    //separation of concerns(do one thing and do it well in functions)
   let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(refreshWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
  }  

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

function getForecast(city) {
  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

  function displayForecast(response) {
  console.log(response.data);

    let forecastHtml = "";

response.data.daily.forEach(function (day, index) {
  if (index < 5) {
forecastHtml = 
      forecastHtml +
` 
<div weather-forecast-day>
  <div class="weather-forecast-date">${formatDay(day.time)}</div>
<div >
  <img src="${day.condition.icon.url}" class="weather-forecast-icon"/>
</div>
  <div weather-forecast-temperatures>
    <div weather-forecast-temperature><strong>${Math.round(day.temperature.maximum)}°</strong></div>
    <div weather-forecast-temperature>>${Math.round(day.temperature.minimum)}°</div>
  </div>
</div>
    
}
  )
    `
    ;
  }

    forecastElement.innerHtml = forecastHtml;
  }
  
  let forecast = document.querySelector ("#forecast");

  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Toronto");
 


