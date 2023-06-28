// API_KEY=de132fe935c26a26398ddf183a005be0
// api = https://api.openweathermap.org/data/2.5/weather?q=Lagos&APPID=de132fe935c26a26398ddf183a005be0

// icon url = //http://openweathermap.org/img/wn/{code}@2x.png

const searchForm = document.querySelector(".search_form");
const searchBox = document.querySelector(".search_box");
const tempValue = document.querySelector(".temp_value");
const tempDescription = document.querySelector(".temp_desc");
const speed = document.querySelector(".speed");
const state = document.querySelector(".state");

const weather_images = document.querySelectorAll(".weather-img");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  getWeatherData(searchBox.value);
  console.log(getWeatherData(searchBox.value));
});

async function getWeatherData(stateName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${stateName}&APPID=de132fe935c26a26398ddf183a005be0`
    );

    if (response.ok == true) {
      const data = await response.json();
      console.log(data);
      const { description } = data.weather[0];
      const { icon } = data.weather[0];
      const {
        wind: { speed: windSpeed },
      } = data;
      const { name } = data;
      const {
        main: { temp },
      } = data;

      state.textContent = name;
      speed.textContent = windSpeed;
      tempValue.textContent = temp;
      tempDescription.textContent = description;
      weather_images.forEach((img) => {
        img.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${icon}@2x.png`
        );
      });
    }
  } catch (e) {
    console.log(e);
  }
}
