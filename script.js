let url, response, locationUrl;

let locationNr = 31810;

// const weather = {
//   LocalObservationDateTime: '2021-10-27T12:13:00+02:00',
//   EpochTime: 1635329580,
//   WeatherText: 'Mostly cloudy',
//   WeatherIcon: 6,
//   HasPrecipitation: false,
//   PrecipitationType: null,
//   IsDayTime: true,
//   Temperature: {
//     Metric: {
//       Value: 13.5,
//       Unit: 'C',
//       UnitType: 17,
//     },
//     Imperial: {
//       Value: 56.0,
//       Unit: 'F',
//       UnitType: 18,
//     },
//   },
//   MobileLink: 'http://www.accuweather.com/en/be/kortrijk/31810/current-weather/31810?lang=en-us',
//   Link: 'http://www.accuweather.com/en/be/kortrijk/31810/current-weather/31810?lang=en-us',
// };

// const Kortrijk = {
//   Version: 1,
//   Key: '31810',
//   Type: 'City',
//   Rank: 43,
//   LocalizedName: 'Kortrijk',
//   EnglishName: 'Kortrijk',
//   PrimaryPostalCode: '',
//   Region: {
//     ID: 'EUR',
//     LocalizedName: 'Europe',
//     EnglishName: 'Europe',
//   },
//   Country: {
//     ID: 'BE',
//     LocalizedName: 'Belgium',
//     EnglishName: 'Belgium',
//   },
//   AdministrativeArea: {
//     ID: 'VWV',
//     LocalizedName: 'West Flanders',
//     EnglishName: 'West Flanders',
//     Level: 1,
//     LocalizedType: 'Province',
//     EnglishType: 'Province',
//     CountryID: 'BE',
//   },
//   TimeZone: {
//     Code: 'CEST',
//     Name: 'Europe/Brussels',
//     GmtOffset: 2.0,
//     IsDaylightSaving: true,
//     NextOffsetChange: '2021-10-31T01:00:00Z',
//   },
//   GeoPosition: {
//     Latitude: 50.826,
//     Longitude: 3.264,
//     Elevation: {
//       Metric: {
//         Value: 13.0,
//         Unit: 'm',
//         UnitType: 5,
//       },
//       Imperial: {
//         Value: 42.0,
//         Unit: 'ft',
//         UnitType: 0,
//       },
//     },
//   },
//   IsAlias: false,
//   SupplementalAdminAreas: [],
//   DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'ForecastConfidence', 'FutureRadar', 'MinuteCast', 'Radar'],
// };

let showResultWeather = (queryResponse) => {
  console.log(queryResponse[0].WeatherText);
  const temp = document.querySelector('.temp');
  let temperatuur = queryResponse[0].Temperature.Metric.Value;
  //   console.log(temp);
  temp.innerHTML = `${temperatuur}`;

  // console.log(queryResponse.WeatherText);

  // const temp = document.querySelector('.temp');

  // let temperatuur = queryResponse.Temperature;
  // //   console.log(temp);

  // temp.innerHTML = `${temperatuur}`;
};

let showResultLocation = (queryResponse) => {
  console.log(queryResponse.EnglishName);
  const city = document.querySelector('.js-city');
  let cityName = queryResponse.EnglishName;
  city.innerHTML = `${cityName}`;

  // console.log(queryResponse.Name);

  // const city = document.querySelector('.js-city');

  // let cityName = queryResponse.Name;

  // city.innerHTML = `${cityName}`;
};

let getAPIWeather = async (location) => {
  let key = '0lmagZR3gu9O2bu19fD1nE0w7laTeRHZ';
  url = `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${key}`;

  console.log(url);

  const request = await fetch(`${url}`);
  const result = await request.json();

  showResultWeather(result);
};

let getAPILocation = async (location) => {
  let key = '0lmagZR3gu9O2bu19fD1nE0w7laTeRHZ';
  locationUrl = `http://dataservice.accuweather.com/locations/v1/${location}?apikey=${key}`;
  console.log(locationUrl);

  const request = await fetch(`${locationUrl}`);
  const result = await request.json();

  showResultLocation(result);
};

function click_btn() {
  const btn = document.querySelector('.js_next');
  console.log(btn);
  btn.addEventListener('click', function () {
    console.log('geklikt');
    locationNr += 1;
    console.log(locationNr);
    getAPIWeather(locationNr);
    getAPILocation(locationNr);
    return locationNr;
  });
  const knop = document.querySelector('.js_previous');
  console.log(knop);
  knop.addEventListener('click', function () {
    console.log('geklikt');
    locationNr -= 1;
    console.log(locationNr);
    getAPIWeather(locationNr);
    getAPILocation(locationNr);
    return locationNr;
  });
}

function setup() {
  getAPIWeather(locationNr);
  getAPILocation(locationNr);
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('**** Loaded ****');
  setup();
  click_btn();
});
