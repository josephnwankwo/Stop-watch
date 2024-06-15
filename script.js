"use strict";
/**
 * Users should be able to start, stop and create laps
 * Laps should be cleared after the reset button as well as the timer
 * The highest lap should be highlighted red
 * The lowest lap should be highlighted green
 * Please read on setTimeout and setInterval and ensure your application is performant. To be submitted next class
 */

// Button
const lapButton = document.querySelector(".lap-button");
const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");

// Timer
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milSeconds = document.querySelector(".mil-seconds");

/* <script>
setInterval(displayHello, 100);

function displayHello() {
  document.getElementById("demo").innerHTML += "Hello";
}
*/

// Set timer...

function displayMilSeconds() {
  milSeconds.innerHTML++;
}

function startTimer() {
  // Add milseconds
  setInterval(displayMilSeconds, 10);

  // Add seconds
  if (milSeconds === 60) {
    seconds.innerHTML += 1;
  }

  // Add minutes
  if (milSeconds === 60) {
    seconds.innerHTML += milSeconds;
  }
}

function lapTimer() {}
function resetTimer() {}
function stopTimer() {}

function main() {
  // Users should be able to start
  startButton.addEventListener("click", startTimer);
  lapButton.addEventListener("click", lapTimer);
  resetButton.addEventListener("click", resetTimer);
  stopButton.addEventListener("click", stopTimer);
  //   alert("application is running");
}
main();
