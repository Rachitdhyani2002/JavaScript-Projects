const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={d3142fca35f27c310d71b12378d9fb7f}&units=metric";

async function checkWeather(){
    const resp = await fetch(apiUrl);
    var data = await resp.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/hr";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
}
checkWeather();