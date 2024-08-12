const apiId = "584be93958d203f862f6c0d024b9bc5b";
const city = document.getElementById("city");
const search = document.getElementById("icon");
const temp = document.getElementById("temp");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("_humidity");
const wind = document.getElementById("_wind-speed");
const imgsrc = document.getElementById("imgsrc");

search.addEventListener("click", () => {
  let location = "";
  location = city.value;
  getWeather(location, apiId, temp, cityName, humidity, wind);
  city.value = "";
});

const getWeather = async (location, apiId, temp, cityName, humidity, wind) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiId}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    temp.innerText = `${Math.round(data?.main.temp)}°C`;
    cityName.innerText = data?.name;
    humidity.innerText = `${data?.main.humidity}%`;
    wind.innerText = `${data?.wind.speed} km/h`;

    let imgsrc = document.getElementById("imgsrc");
    if (data?.main.humidity < 30) {
      imgsrc.src = "./images/clear-sun.png";
    } else if (data?.main.humidity < 50) {
      imgsrc.src = "./images/sun.png";
    } else if (data?.main.humidity < 70) {
      imgsrc.src = "./images/cloudy.png";
    } else {
      imgsrc.src = "./images/weather.png";
    }
    let lon = data?.coord.lon;
    let lat = data?.coord.lat;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric`
    );
    const forecast = await response.json();
    const arrayoflist = forecast.list;
    const weather = arrayoflist.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );
    console.log(weather);
    let list = document.querySelector("#forecast").children;

    for (let i = 0; i < 4; i++) {
      list[i].children[0].children[1].children[0].innerHTML = `${Math.round(
        weather[i + 1].main.temp
      )}°C`;
      list[i].children[0].children[1].children[1].innerHTML = data.name;
      list[i].children[1].children[0].children[1].children[0].innerHTML = `${
        weather[i + 1].main.humidity
      }%`;
      list[0].children[1].children[1].children[1].children[0].innerHTML = `${
        weather[i + 1].wind.speed
      } km/h`;

      let img = list[i].children[0].children[0].children[0];
      if (weather[i + 1].main.humidity < 30) {
        img.src = "./images/clear-sun.png";
      } else if (weather[i + 1].main.humidity < 50) {
        img.src = "./images/sun.png";
      } else if (weather[i + 1].main.humidity < 70) {
        img.src = "./images/cloudy.png";
      } else {
        img.src = "./images/weather.png";
      }
    }
  } catch (error) {
    console.log(`Unable to fetch data :: ${error.message}`);
  }
};

getWeather("Delhi", apiId, temp, cityName, humidity, wind);
