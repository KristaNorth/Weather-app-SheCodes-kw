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

function getForecast(city) {
  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

  function displayForecast(response) {
  console.log(response).data;
  

    let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
    let forecastHtml = "";
  
    days.forEach(function (day) {
forecastHtml = 
      forecastHtml +
` 
<div weather-forecast-day>
  <div class="weather-forecast-date">${day}</div>
  <div class="weather-forecast-icon">🌤️</div>
  <div weather-forecast-temperatures>
    <div weather-forecast-temperature><strong>13°</strong></div>
    <div weather-forecast-temperature>>6°</div>
  </div>
</div>
    
}
  )
    `
    ;

    forecastElement.innerHtml = forecastHtml;
  }
  
  let forecast = document.querySelector ("#forecast");

  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Paris");
 


