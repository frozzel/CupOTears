/////////////Varibles//////////////////







////////// Api Call ///////////////////

function getSearch(coffeeDrink){
    var URLAPI ='https://api.sampleapis.com/coffee/hot';
    $.ajax({
        url:URLAPI,
        method: "GET"
    }).then(function(response){
        console.log(response);
        // var CoffeeImage =response[1].image;
        // $(image).html('<img src='+CoffeeImage+'>');
        // console.log(image)
        $(title).html(response[1].title)
        $(description).html(response[1].description)
        $(ingredients).html(response[1].ingredients)
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


getSearch()
////////////onclick listeners////////////

// $('#form-search').on("click", getSearch);  /// id in html needs to match this///