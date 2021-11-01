let url, response, locationUrl;

let locationNr = 31810;

var LightRain = function () {
  //clear out everything
  $('.rain').empty();

  var druppelsVak = 0;
  var drops = '';
  var clouds = '';

  while (druppelsVak < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randomNrLeft = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    druppelsVak += randomNrLeft;
    //add in a new raindrop with various randomizations to certain CSS properties

    clouds = '<div class="cloud x1"><div class="rain"></div></div>';
    clouds += '<div class="cloud x2" ><div class="rain"></div></div>';
    clouds += '<div class="cloud x3"><div class="rain"></div></div>';

    drops += '<div class="drop" style="left: ' + druppelsVak + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 1.' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.' + randoHundo + 's;"></div></div>';
  }
  $('.clouds').append(clouds);
  $('.rain').append(drops);
};

var Cloudy = function () {
  //clear out everything

  var clouds = '';

  clouds = '<div class="cloud x1"></div></div>';
  clouds += '<div class="cloud x2" ></div></div>';
  clouds += '<div class="cloud x3"></div></div>';

  $('.clouds').append(clouds);
};

let showResultWeather = (queryResponse, queryL) => {
  console.log(queryResponse[0]);
  console.log(queryL);
  console.log(queryResponse[0].WeatherText);
  const temp = document.querySelector('.temp');
  let temperatuur = queryResponse[0].Temperature.Metric.Value;
  temp.innerHTML = `${temperatuur} °C`;

  if (queryResponse[0].WeatherText == 'Light rain') {
    const clouds = document.querySelector('.clouds');
    clouds.innerHTML = '';
    document.body.style.background = 'linear-gradient(to bottom, #aca7aa, #888286)';
    LightRain();
  }
  if (queryResponse[0].WeatherText == 'Cloudy') {
    const clouds = document.querySelector('.clouds');
    clouds.innerHTML = '';
    document.body.style.background = 'linear-gradient(to bottom, #aca7aa, #888286)';

    Cloudy();
  }
  if (queryResponse[0].WeatherText == 'Sunny') {
    const clouds = document.querySelector('.clouds');
    clouds.innerHTML = '';
    document.body.style.background = 'linear-gradient(to bottom, #dbd3d8, #e4e0e2)';
    // Sunny();
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
  url = `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${key}`;
  console.log(url);

  const request = await fetch(`${url}`);
  const result = await request.json();

  locationUrl = `http://dataservice.accuweather.com/locations/v1/${location}?apikey=${key}`;
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
});
