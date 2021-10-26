let url, response, data;

let showResult = (queryResponse) => {
  console.log(queryResponse);
  const temp = document.querySelector('.temp');
  const city = document.querySelector('.js-city');

  let cityName = queryResponse.city.name;
  let temperatuur = queryResponse.list[0].main.temp;
//   console.log(temp);

  temp.innerHTML = `${temperatuur}`;
  city.innerHTML = `${cityName}`;
};

let getAPI = async (lat, lon) => {
  let key = '9339325000688c95767d10f8748d3510';
  url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=nl&cnt=1`;
  console.log(url);

  const request = await fetch(`${url}`);
  const reusult = await request.json();
  console.log(reusult);

  showResult(reusult);
};

function nextCity() {
  getAPI(50.8027841, 3.2097454);
}

function prevCity() {
  getAPI(50.8027841, 3.2097454);
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('**** Loaded ****');
  nextCity();
});
