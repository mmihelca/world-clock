function updateTime() {
  //Los angeles
  let losAngelesTime = document.querySelector("#los-angeles .time");
  let losAngelesDate = document.querySelector("#los-angeles .date");
  losAngelesDate.innerHTML = moment().format("MMMM Do, YYYY");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss A");

  //Sydney
  let sydneyTime = document.querySelector("#sydney .time");
  let sydneyDate = document.querySelector("#sydney .date");
  sydneyDate.innerHTML = moment().format("MMMM Do, YYYY");
  sydneyTime.innerHTML = moment().tz("Australia/Sydney").format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
