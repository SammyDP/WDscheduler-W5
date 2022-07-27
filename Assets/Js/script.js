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

// for loop, change all timeblock check each block, target class for array
var hourAry = document.querySelector(".hour");
var currTime = moment().hour();

$(hourAry).each(function name(params) {});

// function clockCheck() {
//   var timeBlk = document.querySelector("#hr9");
//   var currTime = moment().hour();
//   console.log(currTime);
//   console.log(timeBlk.dataset.value);
//   if (currTime < timeBlk) {
//     timeBlk.addClass(".past");
//     timeBlk.removeClass(".present");
//     timeBlk.removeClass(".future");
//   } else if (currTime === timeBlk) {
//     timeBlk.addClass(".past");
//     timeBlk.removeClass(".present");
//     timeBlk.removeClass(".future");
//   } else {
//     timeBlk.addClass(".past");
//     timeBlk.removeClass(".presnt");
//     timeBlk.removeClass(".future");
//   }
// }
// clockCheck();

// save button
// -----------
// var saveBtn = document.querySelector(".saveBtn");
// var work = localStorage.getItem(time, text) || 0;

// function saveWork() {
//   saveBtn.addEventListener("click", () => {
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");
//     localStorage.setItem(time, text);
//     // data recall (localStorage.getItem(time, text))
//   });
// }
