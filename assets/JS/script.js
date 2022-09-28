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


async function sendApiRequest(){
    let APP_ID  = "02c0a468"
    let APP_KEY = "6f7f5bcc04cea5899844a678b604fc04"
    let response = await fetch("https://api.edamam.com/api/nutrition-details");
    console.log(response)
}

function useApiData(data){
    
}
////////////// ^^^^^^^^^ Need to adjust Dom based on search////////





getSearch()
////////////onclick listeners////////////

// $('#form-search').on("click", getSearch);  /// id in html needs to match this///