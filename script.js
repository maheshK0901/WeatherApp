const apikey = "ee148d2af95f84eef43916d02626cb33";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apikey);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        const data = await response.json();

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + "Km/h";
        
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/dirzzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else{
            weatherIcon.src = "images/clear.png";
        }

        document.querySelector(".weather").style.display = "block";
    }
    
}
searchButton.addEventListener("click", ()=> {
    checkWeather(searchInput.value);
})

