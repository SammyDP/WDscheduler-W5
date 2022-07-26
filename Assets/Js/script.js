// get current date
// ----------------
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

// get running clock
// -----------------
let clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// clock checker
// -------------
var hr9 = document.querySelector("#hr9");
var hr10 = document.querySelector("#hr10");
var hr11 = document.querySelector("#hr11");
var hr12 = document.querySelector("#hr12");
var hr1 = document.querySelector("#hr1");
var hr2 = document.querySelector("#hr2");
var hr3 = document.querySelector("#hr3");
var hr4 = document.querySelector("#hr4");
var hr5 = document.querySelector("#hr5");

// if/else-if/else to check time and change "past, present, future"
function clockCheck() {
  var timeBlk = document.getAttribute("data-value");
  var currTime = moment().hour();

  if (currTime < timeBlk) {
    timeBlk.addClass(".past");
    timeBlk.removeClass(".present");
    timeBlk.removeClass(".future");
  } else if (currTime === timeBlk) {
    timeBlk.addClass(".past");
    timeBlk.removeClass(".present");
    timeBlk.removeClass(".future");
  } else {
    timeBlk.addClass(".past");
    timeBlk.removeClass(".presnt");
    timeBlk.removeClass(".future");
  }
  clockCheck();
}

// save button
// -----------
var saveBtn = document.querySelector(".saveBtn");
var work = localStorage.getItem(time, text) || 0;

function saveWork() {
  saveBtn.addEventListener("click", () => {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    // data recall (localStorage.getItem(time, text))
  });
}
