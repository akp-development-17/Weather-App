const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ce2472e645msh5b49b949cac8899p182986jsn9d55b64fdd15",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
const getWeather2 = (sundargarh) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sundargarh",
    options
    )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      
      cloud_pct3.innerHTML = response.cloud_pct;
      temp3.innerHTML = response.temp;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      max_temp3.innerHTML = response.max_temp;
      min_temp3.innerHTML = response.min_temp;
      sunrise3.innerHTML = response.sunrise;
      sunset3.innerHTML = response.sunset;
      wind_degrees3.innerHTML = response.wind_degrees;
      wind_speed3.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
  };
  getWeather2(sundargarh.value)

  const getWeather3 = (kolkata) => {
    cityname.innerHTML = city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct4.innerHTML = response.cloud_pct;
        temp4.innerHTML = response.temp;
        feels_like4.innerHTML = response.feels_like;
        humidity4.innerHTML = response.humidity;
        max_temp4.innerHTML = response.max_temp;
        min_temp4.innerHTML = response.min_temp;
        sunrise4.innerHTML = response.sunrise;
        sunset4.innerHTML = response.sunset;
        wind_degrees4.innerHTML = response.wind_degrees;
        wind_speed4.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };
getWeather3(kolkata.value)

const getWeather4 = (bengaluru) => {
    cityname.innerHTML = city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct5.innerHTML = response.cloud_pct;
        temp5.innerHTML = response.temp;
        feels_like5.innerHTML = response.feels_like;
        humidity5.innerHTML = response.humidity;
        max_temp5.innerHTML = response.max_temp;
        min_temp5.innerHTML = response.min_temp;
        sunrise5.innerHTML = response.sunrise;
        sunset5.innerHTML = response.sunset;
        wind_degrees5.innerHTML = response.wind_degrees;
        wind_speed5.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };
getWeather4(bengaluru.value)

  const getWeather5 = (bhubaneshwar) => {
    cityname.innerHTML = city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneshwar",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct6.innerHTML = response.cloud_pct;
        temp6.innerHTML = response.temp;
        feels_like6.innerHTML = response.feels_like;
        humidity6.innerHTML = response.humidity;
        max_temp6.innerHTML = response.max_temp;
        min_temp6.innerHTML = response.min_temp;
        sunrise6.innerHTML = response.sunrise;
        sunset6.innerHTML = response.sunset;
        wind_degrees6.innerHTML = response.wind_degrees;
        wind_speed6.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };
getWeather5(bhubaneshwar.value)

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

