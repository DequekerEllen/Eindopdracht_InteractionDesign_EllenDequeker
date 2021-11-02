let url, response, locationUrl;

let locationNr = 31810;

var LightRain = function () {
  //clear out everything
  $('.rain').empty();

  var drops = '';
  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div>';

  clouds = '<div class="cloud x1"><div class="rain"></div></div>';
  clouds += '<div class="cloud x2" ><div class="rain"></div></div>';
  clouds += '<div class="cloud x3"><div class="rain"></div></div>';

  drops = '<div class="drops drops1"></div>';
  drops += '<div class="drops drops2"></div>';
  drops += '<div class="drops drops3"></div>';
  drops += '<div class="drops drops4"></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  $('.rain').append(drops);
  document.body.style.background = 'linear-gradient(to bottom, #aca7aa, #888286)';
};

var Cloudy = function () {
  //clear out everything

  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div>';

  clouds = ' <div class="cloud x1"></div></div>';
  clouds += '<div class="cloud x2" ></div></div>';
  clouds += '<div class="cloud x3"></div></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  document.body.style.background = 'linear-gradient(to bottom, #aca7aa, #888286)';
};

var Sunny = function () {
  //clear out everything

  var sunRays = '';
  var sunDiv = '<div class="sun"><div class="sunbeams"></div></div>';

  sunRays = '<div class="sunRay s1"></div></div>';
  sunRays += '<div class="sunRay s2"></div></div>';
  sunRays += '<div class="sunRay s3"></div></div>';
  sunRays += '<div class="sunRay s4"></div></div>';
  sunRays += '<div class="sunRay s5"></div></div>';
  sunRays += '<div class="sunRay s6"></div></div>';

  $('.weather').append(sunDiv);
  $('.sunbeams').append(sunRays);
  document.body.style.background = 'linear-gradient(to bottom, #dbd3d8, #e4e0e2)';
};

let showResultWeather = (queryResponse, queryL) => {
  console.log(queryResponse[0]);
  console.log(queryL);
  console.log(queryResponse[0].WeatherText);
  const temp = document.querySelector('.temp');
  let temperatuur = queryResponse[0].Temperature.Metric.Value;
  temp.innerHTML = `${temperatuur} °C`;

  if (queryResponse[0].WeatherText == 'Light rain') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    LightRain();
  }
  if (queryResponse[0].WeatherText == 'Cloudy') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Cloudy();
  }
  if (queryResponse[0].WeatherText == 'Sunny') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Sunny();
  }

  console.log(queryL.EnglishName);
  console.log(' ');
  const city = document.querySelector('.js-city');
  let cityName = queryL.EnglishName;
  city.innerHTML = `${cityName}`;
};

let showResultLocation = (queryResponse) => {
  console.log(queryResponse.EnglishName);
  const city = document.querySelector('.js-city');
  let cityName = queryResponse.EnglishName;
  city.innerHTML = `${cityName}`;
};

let getAPIWeather = async (location) => {
  let key = '0lmagZR3gu9O2bu19fD1nE0w7laTeRHZ';
  url = `https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${key}`;
  console.log(url);

  const request = await fetch(`${url}`);
  const result = await request.json();

  locationUrl = `https://dataservice.accuweather.com/locations/v1/${location}?apikey=${key}`;
  console.log(locationUrl);

  const requestL = await fetch(`${locationUrl}`);
  const resultL = await requestL.json();

  showResultWeather(result, resultL);
};

function click_btn() {
  const btn = document.querySelector('.js_next');
  btn.addEventListener('click', function () {
    console.log('geklikt');
    locationNr += 5;
    console.log(locationNr);
    getAPIWeather(locationNr);
    return locationNr;
  });

  const knop = document.querySelector('.js_previous');
  knop.addEventListener('click', function () {
    console.log('geklikt');
    locationNr -= 5;
    console.log(locationNr);
    getAPIWeather(locationNr);
    return locationNr;
  });
}

function setup() {
  getAPIWeather(locationNr);
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('**** Loaded ****');
  setup();
  click_btn();
  // LightRain();
});
