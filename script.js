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

  clouds = ' <div class="cloud x1"></div>';
  clouds += '<div class="cloud x2" ></div>';
  clouds += '<div class="cloud x3"></div>';

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

var PartlySunny = function () {
  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div>';

  cloud = ' <div class="cloud x1"></div>';

  var sunRays = '';
  var sunDiv = '<div class="sun"><div class="sunbeams"></div></div>';

  sunRays = '<div class="sunRay s1"></div></div>';
  sunRays += '<div class="sunRay s2"></div></div>';
  sunRays += '<div class="sunRay s3"></div></div>';
  sunRays += '<div class="sunRay s4"></div></div>';
  sunRays += '<div class="sunRay s5"></div></div>';
  sunRays += '<div class="sunRay s6"></div></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(cloud);
  $('.cloud').append(sunDiv);
  $('.sunbeams').append(sunRays);
  document.querySelector('.sun').style.top = '-70px';
  document.querySelector('.sun').style.left = '-50px';
  document.body.style.background = 'linear-gradient(to bottom, #dbd3d8, #e4e0e2)';
};

var MostlyCloudy = function () {
  var clouds = '';
  var cloudsDiv = '<div class="clouds"></div>';

  clouds = ' <div class="cloud x1"></div>';

  var sunRays = '';
  var sunDiv = '<div class="sun"><div class="sunbeams"></div></div>';

  sunRays = '<div class="sunRay s1"></div></div>';
  sunRays += '<div class="sunRay s2"></div></div>';
  sunRays += '<div class="sunRay s3"></div></div>';
  sunRays += '<div class="sunRay s4"></div></div>';
  sunRays += '<div class="sunRay s5"></div></div>';
  sunRays += '<div class="sunRay s6"></div></div>';

  $('.weather').append(cloudsDiv);
  $('.clouds').append(clouds);
  $('.cloud').append(sunDiv);
  $('.sunbeams').append(sunRays);

  clouds = '<div class="cloud x2"></div>';
  $('.clouds').append(clouds);
  clouds = '<div class="cloud x3"></div>';
  $('.clouds').append(clouds);

  document.querySelector('.sun').style.top = '-70px';
  document.querySelector('.sun').style.left = '-50px';
  document.querySelector('.x2').style.top = '60px';
  document.querySelector('.x3').style.top = '-40px';

  document.body.style.background = 'linear-gradient(to bottom, #dbd3d8, #e4e0e2)';
};

var Snow = function () {
  //clear out everything
  $('.snow').empty();

  var drops = '';
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
  document.body.style.background = 'linear-gradient(to bottom, #aca7aa, #888286)';
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
  if ((queryResponse[0].WeatherText == 'Light rain', 'Showers', 'Rain')) {
    const weather = document.querySelector('.weather');
    weather.innerHTML = '';
    LightRain();
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
  Snow();
  click_btn();
});
