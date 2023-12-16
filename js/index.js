function showLocalTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityElement = document.querySelector(".first-cities");
  let displayName = cityTimeZone.replace("_", " ").split("/")[1];
  cityElement.innerHTML = `
    <div class="city">
        <div class="left">
        <h2>${displayName}</h2>
        <p class="date">${moment().tz(cityTimeZone).format("MMMM Do, YYYY")}</p>
            </div>
            <p class="time">${moment()
              .tz(cityTimeZone)
              .format("h:mm:ss [<small>]A[</small>]")}</p></div>`;
}
setInterval(showLocalTime, 1000);

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", showLocalTime);

setInterval(function () {
  //Los angeles
  let losAngelesTime = document.querySelector("#los-angeles .time");
  let losAngelesDate = document.querySelector("#los-angeles .date");
  losAngelesDate.innerHTML = moment().format("MMMM Do, YYYY");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  //Paris
  let parisTime = document.querySelector("#paris .time");
  let parisDate = document.querySelector("#paris .date");
  parisDate.innerHTML = moment().format("MMMM Do, YYYY");
  parisTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");

  // Buenos Aires
  let buenosAiresTime = document.querySelector("#buenos-aires .time");
  let buenosAiresDate = document.querySelector("#buenos-aires .date");
  buenosAiresDate.innerHTML = moment().format("MMMM Do, YYYY");
  buenosAiresTime.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
