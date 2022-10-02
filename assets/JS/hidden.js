//Message Countdown, variables for Countdown//
let messages = ["Welcome to Cup O' Tears.", "Search your favorite coffee", "while you cry."];
let delay = 2000;
let coffeeMsg = document.getElementById("wordDisplay");

//Function for countdown//
messages.forEach(function (wordDisplay, i) {
  setTimeout(function () {
    coffeeMsg.innerHTML = wordDisplay;
  }, delay * i);
});
// //End Countdown//

setTimeout(() => {
  wordDisplay = document.getElementById('wordDisplay', [2]);
  //👇️ removes element from DOM
  wordDisplay.style.display = 'none';

  //👇️ hides element (still takes up space on page)
  wordDisplay.style.visibility = 'hidden';
}, 15000); // 👈️ time in milliseconds

window.onload = fadeout;

//wordDisplay fadeout
function fadeout() {
  var fade = document.getElementById("wordDisplay");
  var intervalID = setInterval(function () {

    if (!fade.style.opacity) {
      fade.style.opacity = 1;
    } else if (fade.style.opacity > 0) {
      fade.style.opacity -= 0.015;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}