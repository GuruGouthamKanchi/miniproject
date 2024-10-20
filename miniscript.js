const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const APIid = "f55db5be4f26d895bc5dbe6a9fcd1ab8"

const city_name = document.querySelector("#city_name");
const temp = document.querySelector("#temp");
const weather_icon = document.querySelector("#weather_icon");
const wspeed = document.querySelector("#wspeed");
const huidity = document.querySelector("#huidity");
const search_ipt = document.querySelector("#search_ipt");
const search_icon = document.querySelector("#search_icon");

async function checkweather(city) {
    
    const response = await fetch(APIurl + city + `&appid=${APIid}`); 
    const data = await response.json();
    console.log(data);
    temp.innerHTML = Math.round(data.main.temp)+"°C";  
    wspeed.innerHTML = data.wind.speed + "km/h";  
    huidity.innerHTML = data.main.humidity + "%"; 
    city_name.innerHTML = data.name;    
    
    if( data.weather[0].main == "Clear"){
        weather_icons.src = "wimg/clear-sky.png"
    }
    else if( data.weather[0].main == "Rain"){
        weather_icons.src = "wimg/rain.png";
    }
    else if( data.weather[0].main == "Thunderstorm"){
        weather_icons.src = "wimg/lighting.png";
    }
    else if( data.weather[0].main == "Drizzle"){
        weather_icons.src = "wimg/drizzle.png";
    }
    else if( data.weather[0].main == "Haze"){
        weather_icons.src = "wimg/fog.png";
    }
    else if( data.weather[0].main == "Snow"){
        weather_icons.src = "wimg/car.png";
    }
    else{
        weather_icons.src = "cloudy.png";
    }

}
search_icon.addEventListener("click",()=>{
    checkweather(search_ipt.value);
})