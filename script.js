// API_KEY for maps api
//  city name
//  we need weather.main
//  we need main.temp + temp_min + temp_max

getWeatherData = (city) => {
  const URL =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`);
  return URL.then((response) => {
    return response.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((response) => {
    showWeatherData(response)
  }).catch((error) => {
    return
  })

}

showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('temp').innerText = Math.round(weatherData.main.temp)
  document.getElementById('min-temp').innerText = Math.round(weatherData.main.temp_min)
  document.getElementById('max-temp').innerText = Math.round(weatherData.main.temp_max)
}

