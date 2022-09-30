//Message Countdown, variables for Countdown//
let messages = ["Welcome", "to", "CupOTears.","Search", "your", "favorite", "coffee", "drink", "while", "you", "cry."];

let delay = 1300;

let coffeeMsg = document.getElementById("wordDisplay");
//Function for countdown//
messages.forEach(function(wordDisplay, i) {
  setTimeout(function() {
    coffeeMsg.innerHTML = wordDisplay;
  }, delay * i);
});
//End Countdown//

