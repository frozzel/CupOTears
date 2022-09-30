//Message Countdown, variables for Countdown//
let messages = ["Welcome to CupOTears.","Search your favorite", "coffee", "while you", "cry."];

let delay = 2000;

let coffeeMsg = document.getElementById("wordDisplay");
//Function for countdown//
messages.forEach(function(wordDisplay, i) {
  setTimeout(function() {
    coffeeMsg.innerHTML = wordDisplay;
  }, delay * i);
});
//End Countdown//

setTimeout(() => {
    wordDisplay = document.getElementById('wordDisplay');
  
    // 👇️ removes element from DOM
    wordDisplay.style.display = 'none';
    
    var searchBar = document.getElementById("searchbar");
    searchBar.removeAttribute("class","hidden");

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 10000); // 👈️ time in milliseconds
  
  