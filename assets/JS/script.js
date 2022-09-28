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
////////////// ^^^^^^^^^ Need to adjust Dom based on search////////





getSearch()
////////////onclick listeners////////////

// $('#form-search').on("click", getSearch);  /// id in html needs to match this///