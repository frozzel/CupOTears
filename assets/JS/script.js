var navBar = $(".nav-link")
var searchBar = $("#search-button")
var searchHistory = $(".container-fluid")
var coffeeImg = $("#coffee-pic")
var coffeeInfo = $("#description")
var ingredients = $("#ingredients")
var SearchInp;

// begin autocomplete section 
var availableDrinks = ['Black', 'Latte', 'Cappuccino', 'Americano', 'Espresso', 'Doppio', 'Cortado', 'Red Eye', 'Galão', 'Lungo', 'Macchiato', 'Mocha', 'Ristretto', 'Flat White', 'Affogato', 'Café au Lait', 'Irish', 'Guayoyo', 'Cortadito', 'Aguapanela Coffee'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }

  var reg = new RegExp(input, "i")
  return availableDrinks.filter(function (term) {
    if (term.match(reg)) {
      return term;
    }
  });
}

function showResults(value) {
  result = document.getElementById("result");
  result.innerHTML = '';
  var list = '';
  var terms = autocompleteMatch(value);
  var notFound = 'Never heard of that one. Try again!'

  if (terms.length > 0) {
    for (i = 0; i < terms.length; i++) {
      list += '<li>' + terms[i] + '</li>';
    }
    result.innerHTML = list;
  } else {
    result.innerHTML = notFound;
  } 

  function autoFill() {
    q.value = this.textContent;
    q.focus();
  }

  for(i=0;i<=result.childElementCount-1;i++) {
    result.children[i].addEventListener("click",autoFill);
  }
}
// end autocomplete section

// begin coffee notes section
if (localStorage["notes-text"]) {
  var notesText = localStorage["notes-text"];
  document.getElementById("notes-text").value = notesText;
} else {
  document.getElementById("notes-text").placeholder = "What's on your mind?";
}

document.getElementById("save-button").addEventListener("click", function () {
  var notesText = document.getElementById("notes-text").value;
  localStorage.setItem("notes-text", notesText);
}, false);
// end coffee notes section

// begin API section

// coffee info API
function getSearch(coffeeDrink) {
  var URLAPI = 'https://api.sampleapis.com/coffee/hot';
  $.ajax({
    url: URLAPI,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    SearchInp = coffeeDrink
    //var CoffeeImage =response[1].image;
    //$(image).html('<img src='+CoffeeImage+'>');
    var coffee = response.find(el => el.title.toLowerCase() === coffeeDrink.toLowerCase());
    $("#coffee-pic").attr('src', coffee.image);
    // console.log(image)
    $(title).html(coffee.title);
    $(description).html(coffee.description);
    //since ingredients are an array used the join to separate with a comma and space
    $(ingredients).html(coffee.ingredients.join(', '));

    $(image).parent().parent().css("display", "flex");
    getNuts()
  })
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c978dd31b1msh40737d18773c28ap1b2ec9jsn3a7dc7a1361d',
    'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
  }
};

// nutritional info API
function getNuts() {
  fetch('https://nutritionix-api.p.rapidapi.com/v1_1/search/' + SearchInp + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_sugars', options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    $(fat).html(data.hits[1].fields.nf_total_fat)
    $(calories).html(data.hits[1].fields.nf_calories)
    $(sugars).html(data.hits[1].fields.nf_sugars)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .then((result) => {console.log('Success:', result)
    // .catch(err => console.error(err));
    console.log(data)
  })

}
// end API section

// begin search function
$("#search-button").click(e => getSearch($(e.target).prev().val())).prev().keypress(function (e) {
  if (e.which == 13) {   // key 13 is the enter key
    $("#search-button").click();
    console.log("return");
    return false;
  }
});;
// end search function
