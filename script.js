let url, response, locationUrl;

let locationNr = 31810;

var Rain = function () {
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
  document.body.style.background = 'linear-gradient(to bottom, #9a9696, #6f6f6f)';
};

var Cloudy = function () {
  //clear out everything

  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div>';

  clouds = ' <div class="cloud x1"></div>';
  clouds += '<div class="cloud x2" ></div>';
  clouds += '<div class="cloud x3"></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  document.body.style.background = 'linear-gradient(to bottom, #aca7aa, #888286)';
};

var Sunny = function () {
  //clear out everything

  var sunny = '';
  var sunny = '<div class="svg-contain"><svg version="1.1" class="clear-sky-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72.3 52.6" style="enable-background:new 0 0 72.3 52.6;" xml:space="preserve"><g><path class="sun" d="M50.8,25.7c0,7.9-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4S50.8,17.8,50.8,25.7z"/><path  class="line big-path line-1" d="M54.5,25.8h6"/><path class="line big-path line-2" d="M12.4,25.8h6"/><path class="line big-path line-3" d="M36.5,44.3v6"/><path class="line big-path line-4" d="M36.5,8.2v-6"/><path class="line big-path line-5" d="M23,38.8l-4.8,4.8"/><path class="line big-path line-6" d="M54.9,8.9L50,13.8"/><path class="line big-path line-7" d="M50,38.8l4.4,4.4"/><path class="line big-path line-8" d="M18.8,9.6l4.2,4.2"/></g></svg></div>';

  $('.weather').append(sunny);
  document.body.style.background = 'linear-gradient(to bottom, #dbd3d8, #e4e0e2)';
};

var PartlySunny = function () {
  var cloud = '';
  var cloudsDiv = '<div class="clouds"></div>';

  cloud = ' <div class="cloud x1"></div>';

  var sunny = '';
  var sunny = '<div class="svg-contain"><svg version="1.1" class="clear-sky-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72.3 52.6" style="enable-background:new 0 0 72.3 52.6;" xml:space="preserve"><g><path class="sun" d="M50.8,25.7c0,7.9-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4S50.8,17.8,50.8,25.7z"/><path  class="line big-path line-1" d="M54.5,25.8h6"/><path class="line big-path line-2" d="M12.4,25.8h6"/><path class="line big-path line-3" d="M36.5,44.3v6"/><path class="line big-path line-4" d="M36.5,8.2v-6"/><path class="line big-path line-5" d="M23,38.8l-4.8,4.8"/><path class="line big-path line-6" d="M54.9,8.9L50,13.8"/><path class="line big-path line-7" d="M50,38.8l4.4,4.4"/><path class="line big-path line-8" d="M18.8,9.6l4.2,4.2"/></g></svg></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(cloud);
  $('.cloud').append(sunny);
  document.querySelector('.clear-sky-svg').style.top = '-100px';
  document.querySelector('.clear-sky-svg').style.width = '90%';
  document.querySelector('.clear-sky-svg').style.left = '-50px';
  document.body.style.background = 'linear-gradient(to bottom, #c0babe, #c3bec0)';
};

var MostlyCloudy = function () {
  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div>';

  clouds = ' <div class="cloud x1"></div>';

  var sunny = '';
  var sunny = '<div class="svg-contain"><svg version="1.1" class="clear-sky-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72.3 52.6" style="enable-background:new 0 0 72.3 52.6;" xml:space="preserve"><g><path class="sun" d="M50.8,25.7c0,7.9-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4S50.8,17.8,50.8,25.7z"/><path  class="line big-path line-1" d="M54.5,25.8h6"/><path class="line big-path line-2" d="M12.4,25.8h6"/><path class="line big-path line-3" d="M36.5,44.3v6"/><path class="line big-path line-4" d="M36.5,8.2v-6"/><path class="line big-path line-5" d="M23,38.8l-4.8,4.8"/><path class="line big-path line-6" d="M54.9,8.9L50,13.8"/><path class="line big-path line-7" d="M50,38.8l4.4,4.4"/><path class="line big-path line-8" d="M18.8,9.6l4.2,4.2"/></g></svg></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  $('.cloud').append(sunny);

  clouds = '<div class="cloud x2"></div>';
  clouds += '<div class="cloud x3"></div>';
  $('.clouds').append(clouds);

  document.querySelector('.clear-sky-svg').style.top = '-80px';
  document.querySelector('.clear-sky-svg').style.left = '-20px';
  document.querySelector('.clear-sky-svg').style.width = '90%';
  document.querySelector('.x2').style.top = '60px';
  document.querySelector('.x3').style.top = '-40px';

  document.body.style.background = 'linear-gradient(to bottom, #a39da1, #9c9799)';
};

var Snow = function () {
  //clear out everything
  $('.snow').empty();

  var snowflakes = '';
  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div> ';

  clouds = '<div class="cloud x1"><div class="snow"></div></div>';
  clouds += '<div class="cloud x2" ><div class="snow"></div></div>';
  clouds += '<div class="cloud x3"><div class="snow"></div></div>';

  snowflakes = '<div class="snowflakes snowflake1"></div>';
  snowflakes += '<div class="snowflakes snowflake2"></div>';
  snowflakes += '<div class="snowflakes snowflake3"></div>';
  snowflakes += '<div class="snowflakes snowflake4"></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  $('.snow').append(snowflakes);
  document.body.style.background = 'linear-gradient(to bottom, #cbcaca, #a2a0a2)';
};

var Fog = function () {
  //clear out everything
  $('.fog').empty();

  var foglines = '';
  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div> ';

  clouds = '<div class="cloud x1"><div class="fog"></div></div>';

  foglines = '<div class="foglines fogline1"></div>';
  foglines += '<div class="foglines fogline2"></div>';
  foglines += '<div class="foglines fogline3"></div>';
  foglines += '<div class="foglines fogline4"></div>';
  foglines += '<div class="foglines fogline5"></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  $('.fog').append(foglines);
  document.body.style.background = 'linear-gradient(to bottom, #a8a8a8, #878587)';
};

let showResultWeather = (queryResponse, queryL) => {
  console.log(queryResponse[0]);
  console.log(queryL);
  console.log(queryResponse[0].WeatherText);

  // Temperatuur in °C
  const temp = document.querySelector('.temp');
  let temperatuur = queryResponse[0].Temperature.Metric.Value;
  temperatuur = Math.round(temperatuur, 0);
  temp.innerHTML = `${temperatuur} °C`;

  // Verschillende soorten weersomstandigheden
  if (queryResponse[0].WeatherText == 'Light rain') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Rain();
  }
  if (queryResponse[0].WeatherText == 'Showers') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Rain();
  }
  if (queryResponse[0].WeatherText == 'Rain') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Rain();
  }
  if (queryResponse[0].WeatherText == 'Snow') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Snow();
  }
  if (queryResponse[0].WeatherText == 'Cloudy') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Cloudy();
  }
  if (queryResponse[0].WeatherText == 'Mostly cloudy') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    MostlyCloudy();
  }
  if (queryResponse[0].WeatherText == 'Partly sunny') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    PartlySunny();
  }
  if (queryResponse[0].WeatherText == 'Mostly sunny') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    PartlySunny();
  }
  if (queryResponse[0].WeatherText == 'Sunny') {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    Sunny();
  }

  // Naam van de stad weergeven
  console.log(queryL.EnglishName);
  const city = document.querySelector('.js-city');
  const country = document.querySelector('.js-country');
  let countryName = queryL.Country.EnglishName;
  let cityName = queryL.EnglishName;
  city.innerHTML = `${cityName}`;
  country.innerHTML = `${countryName}`;
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

// Veranderen van stad
function click_btn() {
  const btn = document.querySelector('.js_next');
  btn.addEventListener('click', function () {
    console.log('Next clicked');
    locationNr += 3;
    console.log(locationNr);
    getAPIWeather(locationNr);
    return locationNr;
  });

  const knop = document.querySelector('.js_previous');
  knop.addEventListener('click', function () {
    console.log('Previous clicked');
    locationNr -= 3;
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
});
