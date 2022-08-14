 const API_KEY = 'da6c2654d1ed3735a9cc518b8aa940ca'
 
 function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("You live in", lat , log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
   });
 }
 function onGeoError(){
    alert("Can't find you. No wather for you.")
 }

 navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);