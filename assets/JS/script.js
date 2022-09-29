/////////////Varibles//////////////////
var navBar = $(".nav-link")
var searchBar = $("#search-button")
var searchHistory = $(".container-fluid")
var coffeeImg = $("#coffee-pic")
var description = $("#description")
var ingredients = $("#ingredients")




////////// Api Call ///////////////////

function getSearch(coffeeDrink){
    var URLAPI ='https://api.sampleapis.com/coffee/hot';
    $.ajax({
        url:URLAPI,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
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
    })
}

//Second API for Nutritional Facts//

////////////// ^^^^^^^^^ Need to adjust Dom based on search////////
////////// Test new Api NutritionIX /////////////


////// ^^^^^ check readme links ///////// example search "item_name,item_id,brand_name,nf_calories,nf_total_fat" //// 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ddebcb2ceamsh1919faa5a84d055p10d063jsneee465e9522e',
		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
	}
};

fetch('https://nutritionix-api.p.rapidapi.com/v1_1/search/cappuccino?fields=item_name%2Cnf_calories%2Cnf_total_fat%2Citem_description', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// this function is for the search event using the search button or hitting enter
$("#search-button").click(e => getSearch($(e.target).prev().val())).prev().keypress(function (e) {
   // key  13 is the enter button
    if (e.which == 13) {
      $("#search-button").click();
      console.log ("return");
      return false;    //<---- Add this line
    }
  });;
////////////onclick listeners////////////

// $('#form-search').on("click", getSearch);  /// id in html needs to match this///