// get current date
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

// get running clock
let clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
