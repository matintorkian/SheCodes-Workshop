function searchCity(event) {
  event.preventDefault();
  let chosenCity = document.querySelector("#chosen-city");
  let heading = document.querySelector("h1");
  heading.innerHTML = chosenCity.value;
}

function convertCel(event) {
  event.preventDefault();
  let changeTemp = document.querySelector("#main-temp");
  let farenheit = 42;
  changeTemp.innerHTML = farenheit;
}

function convertFar(event) {
  event.preventDefault();
  let changeTemp = document.querySelector("#main-temp");
  let celcius = 12;
  changeTemp.innerHTML = celcius;
}

let currentTime = new Date();

let weekDays = ["Sun", "Mon", "Tue", "Wsd", "Thu", "Fri", "Sat"];
let day = weekDays[currentTime.getDay()];

let monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = monthList[currentTime.getMonth()];

let timePhrase = document.querySelector("#time");
timePhrase.innerHTML = `${day} ${month} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", searchCity);

let cel = document.querySelector("#cel");
cel.addEventListener("click", convertCel);

let far = document.querySelector("#far");
far.addEventListener("click", convertFar);
