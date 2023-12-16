function showLocalTime(event) {
  let cityElement = document.querySelector(".city");
  let cityTimeZone = event.target.value;
  let displayName = cityTimeZone.replace("_", " ").split("/")[1];
  cityElement.innerHTML = `
    <div class="left">
    <h2>${displayName}</h2>
    <p class="date">${moment().tz(cityTimeZone).format("MMMM Do, YYYY")}</p>
        </div>
        <p class="time">${moment().tz(cityTimeZone).format("h:mm:ss A")}</p>`;
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", showLocalTime);

showLocalTime({ target: { value: "Europe/London" } });
