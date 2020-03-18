/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

 // city name
 // we need weather.main
 // we need main.temp + temp_min + temp_max

getWeatherData = (city) => {
  const URL =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`);
  //HINT: Use template literals to create a url with input and an API key
  return URL.then((response) => {
    return response.json();
  })
}
  // URL.then(response => response.json())
  // .then((data) => {
  //   // let cityName = city
  //   // let weatherMain = data.weather[0].main
  //   // let weatherTemp = Math.round(data.main.temp)
  //   // let weatherTempMin = Math.round(data.main.temp_min)
  //   // let weatherTempMax = Math.round(data.main.temp_max)
  //   console.log(data)
  // })
  //CODE GOES HERE

// getWeatherData('munich')

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//   });

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response) => {
    showWeatherData(response)
  }).catch((error) => {
    return
  })

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('temp').innerText = Math.round(weatherData.main.temp)
  document.getElementById('min-temp').innerText = Math.round(weatherData.main.temp_min)
  document.getElementById('max-temp').innerText = Math.round(weatherData.main.temp_max)

}

