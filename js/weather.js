//elements
const storeCity = document.querySelector(".store");
const storedInput = localStorage.getItem('textinput');
const todaysDate = document.querySelector(".date");
const todaysLocation = document.querySelector(".place");
const todaysTemp = document.querySelector(".temp");
const todaysIcon = document.querySelector(".weatherIcon");
const todaysWeather = document.querySelector(".weather");
const todaysDay = document.querySelector(".day");
//5day 1
const nextTemp1 = document.querySelector(".temp1");
const nextIcon1 = document.querySelector(".weatherIcon1");
const nextWeather1 = document.querySelector(".weather1");
const nextDay1 = document.querySelector(".day1");
//5day 2
const nextTemp2 = document.querySelector(".temp2");
const nextIcon2 = document.querySelector(".weatherIcon2");
const nextWeather2 = document.querySelector(".weather2");
const nextDay2 = document.querySelector(".day2");
//5day 3
const nextTemp3 = document.querySelector(".temp3");
const nextIcon3 = document.querySelector(".weatherIcon3");
const nextWeather3 = document.querySelector(".weather3");
const nextDay3 = document.querySelector(".day3");
//5day 4
const nextTemp4 = document.querySelector(".temp4");
const nextIcon4 = document.querySelector(".weatherIcon4");
const nextWeather4 = document.querySelector(".weather4");
const nextDay4 = document.querySelector(".day4");
//5day 5
const nextTemp5 = document.querySelector(".temp5");
const nextIcon5 = document.querySelector(".weatherIcon5");
const nextWeather5 = document.querySelector(".weather5");
const nextDay5 = document.querySelector(".day5");

const weather = {};
//const weather5Day = {};

//kelvin
const kelvin = 273;
//api key 
let key = "d0251efd2e0e756bb6de755c9003270b";


storeCity.innerHTML = "Previous Search was: " + storedInput;
const userInput = document.querySelector('.input');
userInput.addEventListener('keypress', setQuery);
const saveToStorage = () => {
    localStorage.setItem('textinput', userInput.value);
}
if(storeCity) {
    userInput.value = storedInput;
}
userInput.addEventListener('keypress', saveToStorage);
function setQuery(event) {
    if (event.keyCode == 13) {
        getWeather(userInput.value);
        getWeatherForcast(userInput.value);
        console.log(userInput);
        
    }
}
console.log(localStorage);

function getWeather(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetch(api)
    .then(function(response) {
        let data = response.json();
        console.log(data);
        return data;
    })
    .then(function(data){
        weather.temperature = Math.floor((data.main.temp - kelvin)*(9/5)+32);
        weather.discription = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.date = data.dt;
    })
    .then(function() {
        displayWeather();
    });

}
function getWeatherForcast(city) {
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

    fetch(api)
    .then(function(response) {
        let data = response.json();
        console.log(data);
        return data;
    })
    .then(function(weatherData) {
        
        let dailyForecast = weatherData.list;

        fiveDayData(dailyForecast);
    })

}
function displayWeather() {
    todaysTemp.innerHTML = `${weather.temperature}&#176; F`;
    todaysIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconId}@2x.png" alt="">`;
    todaysWeather.innerHTML = weather.discription;
    todaysLocation.innerHTML = `Location: ${weather.city}`;
    let date = new Date(weather.date * 1000);
    let month = date.getMonth() +1;
    let day = date.getDate();
    let year = date.getFullYear();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let dayOfWeek = days[date.getDay()];
    todaysDate.innerHTML = `Date: ${month}/${day}/${year}`;
    todaysDay.innerHTML = dayOfWeek;
}

function fiveDayData(forecast) {
    //const currentWeather = forecast[0].weather[0];
    

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    //firstday 
    let dateData1 = forecast[8].dt *1000;
    let newDate1 = new Date(dateData1);
    console.log(newDate1)
    let day1 = days[newDate1.getDay()];
    nextDay1.innerHTML = day1;
    nextTemp1.innerHTML = `${Math.floor((forecast[8].main.temp - kelvin)*(9/5)+32)}&#176; F`;
    nextIcon1.innerHTML = `<img src="http://openweathermap.org/img/wn/${forecast[8].weather[0].icon}@2x.png" alt="">`
    nextWeather1.innerHTML = `${forecast[8].weather[0].description}`;
    //day2 
    let dateData2 = forecast[16].dt *1000;
    let newDate2 = new Date(dateData2);
    console.log(newDate2)
    let day2 = days[newDate2.getDay()];
    nextDay2.innerHTML = day2;
    nextTemp2.innerHTML = `${Math.floor((forecast[16].main.temp - kelvin)*(9/5)+32)}&#176; F`;
    nextIcon2.innerHTML = `<img src="http://openweathermap.org/img/wn/${forecast[16].weather[0].icon}@2x.png" alt="">`
    nextWeather2.innerHTML = `${forecast[16].weather[0].description}`;
    //day3 
    let dateData3 = forecast[24].dt *1000;
    let newDate3 = new Date(dateData3);
    console.log(newDate3)
    let day3 = days[newDate3.getDay()];
    nextDay3.innerHTML = day3;
    nextTemp3.innerHTML = `${Math.floor((forecast[24].main.temp - kelvin)*(9/5)+32)}&#176; F`;
    nextIcon3.innerHTML = `<img src="http://openweathermap.org/img/wn/${forecast[24].weather[0].icon}@2x.png" alt="">`
    nextWeather3.innerHTML = `${forecast[24].weather[0].description}`;
    //day4 
    let dateData4 = forecast[32].dt *1000;
    let newDate4 = new Date(dateData4);
    console.log(newDate4)
    let day4 = days[newDate4.getDay()];
    nextDay4.innerHTML = day4;
    nextTemp4.innerHTML = `${Math.floor((forecast[32].main.temp - kelvin)*(9/5)+32)}&#176; F`;
    nextIcon4.innerHTML = `<img src="http://openweathermap.org/img/wn/${forecast[32].weather[0].icon}@2x.png" alt="">`
    nextWeather4.innerHTML = `${forecast[32].weather[0].description}`;
    //day5 
    let dateData5 = forecast[39].dt *1000;
    let newDate5 = new Date(dateData5);
    console.log(newDate5)
    let day5 = days[newDate5.getDay()];
    nextDay5.innerHTML = day5;
    nextTemp5.innerHTML = `${Math.floor((forecast[39].main.temp - kelvin)*(9/5)+32)}&#176; F`;
    nextIcon5.innerHTML = `<img src="http://openweathermap.org/img/wn/${forecast[3].weather[0].icon}@2x.png" alt="">`
    nextWeather5.innerHTML = `${forecast[39].weather[0].description}`;
}