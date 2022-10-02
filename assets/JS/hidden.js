// //Message Countdown, variables for Countdown//
let messages = ["Welcome to CupOTears.","Search your favorite coffee", "while you cry."];

 let delay = 2000;

 let coffeeMsg = document.getElementById("wordDisplay");
 //Function for countdown//
 messages.forEach(function(wordDisplay, i) {
  setTimeout(function() {
  coffeeMsg.innerHTML = wordDisplay;
   }, delay * i);
 });
// //End Countdown//

 setTimeout(() => {
    wordDisplay = document.getElementById('wordDisplay',[2]);
  
//     // 👇️ removes element from DOM
   wordDisplay.style.display = 'none';

//     // 👇️ hides element (still takes up space on page)
     box.style.visibility = 'hidden';
       }, 22000); // 👈️ time in milliseconds
  



       window.onload=fadeout;
           
       function fadeout() {
  var fade = document.getElementById("wordDisplay");
    
  var intervalID = setInterval(function () {
        
      if (!fade.style.opacity) {
          fade.style.opacity = 1;
      }
        
        
      if (fade.style.opacity > 0) {
          fade.style.opacity -= 0.009;
      } 
        
      else {
          clearInterval(intervalID);
      }
        
  }, 200);
}
     