import fetch from "node-fetch";

let apiKey = "a5408ceea6227de48ae58ce0db807b7e";
let lat = '40.7608';
let lon = '111.8910';

async function apiCall(apiKey, lat, lon) {

    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat + '&lon=' + lon + '&appid=' + apiKey);

    let data = await response.json();
    
    console.log(data);

    console.log("Feels Like: " + data.main.feels_like + ' K.');

    return;

}

apiCall(apiKey,lat,lon);