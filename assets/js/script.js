// the next two vars are being declared so that they can be dynamically manipulated via the DOM
var titleListEl = $("#titleList");
var headlinEl = $("#headline");
// the following 8 vars are used to dynamically populate the page with data from the first ajax call. Unfortunately, some of this had to be hard coded in this version but should work seamlessly when they are emptied and the ajax call has a new api key.
var titleArray = ["Tenet", "The Nest", "About Endlessness", "Alone", "The Secrets We Keep", "Infidel"];
var buttonIdArray = [];
var titlePosterArray = ["assets/images/tenet.jpg", "assets/images/TheNest.jpg", "assets/images/AboutEndlessness.jpg", "assets/images/Alone.png", "assets/images/thesecrets.jpg", "assets/images/infidel.jpg"];
var titleSynopsisArray = ["Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time", "Life for an entrepreneur and his American family begin to take a twisted turn after moving into an English country manor.", "With ABOUT ENDLESSNESS, Roy Andersson adds to his cinematic oeuvre with a reflection on human life in all its beauty and cruelty, its splendour and banality.", "A recently widowed traveler is kidnapped by a cold blooded killer, only to escape into the wilderness where she is forced to battle against the elements as her pursuer closes in on her.", "In post-WWII America, a woman, rebuilding her life in the suburbs with her husband, kidnaps her neighbor and seeks vengeance for the heinous war crimes she believes he committed against her.", "An American man, played by Jim Caviezel, is kidnapped after a friend invites him to Cairo to speak out about recent militant uprisings. His wife heads to the city after hearing the news, determined to get him back."];
var titleTrailerArray = [];
var selectedPoster = "";
var selectedSynopsis = "";
var selectedTrailer = "";
// the following 11 vars are being used to generate the page from the second API call, when it works. Currently only the hardcoded arrays and their corresponding empty strings are being used.
var cinemaArray = ["AMC Theatre", "Midtown Art Cinema", "AMC Phillips Plaza 14", "AMC DINE-IN Buckhead 6", "Alliance Theatre"];
var cinemaAddressArray = ["3101 Cobb Pkwy SE", "931 Monroe Dr NE", "3500 Peachtree Rd NE", "3340 Peachtree Rd NE", "1280 Peachtree St NE"];
var cinemaCityArray = [];
var cinemaStateArray = [];
var cinemaZipArray = [];
var cinemaDistanceArray = [];
var selectedAddress = "";
var selectedCity = "";
var selectedState = "";
var selectedZip = "";
var selectedDistance = "";
// the following 9 vars are being used to gether data from the third, and thankfully working, ajax call and then populating the page and setting data values to be got from a for loop. Only the lat and long of the cinema need hardcoding at this point.
var restaurantArray = [];
var cinemaLatArray = ["33.753746", "33.753746", "33.753746", "33.753746", "33.753746"];
var cinemaLongArray = ["-84.386330", "-84.386330", "-84.386330", "-84.386330", "-84.386330"];
var restaurantDistanceArray = [];
var restaurantImageArray = [];
var restaurantURLArray = [];
var selectedRestaurantDistance = "";
var selectedRestaurantImage = "";
var selectedRestaurantURL = "";
// var cors is being used to avoid a cors error when testing the page locally
var cors = "https://cors-anywhere.herokuapp.com/";
// the following var is using moment.js to store the current time in the format necessary for the ajax calls
var currentTime = moment().format("YYYY-MM-DDTHH:mm:ss") + "Z";
// the following five empty strings are being used to store the users choices and then display them at the time of our final page population
var selectedFilmName = "";
var selectedTheaterName = "";
var selectedRestaurantName = "";
var currentLat = "";
var currentLong = "";

// the following ajax and the for loop inside it have been commmented out and the arrays it will populate have been hard coded until a new api key is available, at which point the hardcoded arrays should be emptied and it should work perfectly


// var filmSettings = {
//     url: cors + "https://api-gate2.movieglu.com/filmsNowShowing/?",
//     method: "GET",
//     timeout: 0,
//     headers: {
//         "x-api-key": "1mdMjAni0T7GAJJn4GZdx2XjE6d58Wck1rYniiwX",
//         client: "STUD_140",
//         authorization: "",
//         territory: "US",
//         "api-version": "v200",
//         geolocation: "20.753746;-84.386330",
//         "device-datetime": currentTime,
//     },
// };

// $.ajax(filmSettings).done(function (response) {
    // for (i = 0; i < 6; i++) {
    //     titleArray.push(response.films[i].film_name);
    //     buttonIdArray.push(response.films[i].film_id);
    //     titlePosterArray.push(response.films[i].images.poster[1].medium.film_image)
    //     titleSynopsisArray.push(response.films[i].synopsis_long)
    //     titleTrailerArray.push(response.films[i].film_trailer)
       
    // }

    //the following for loop will dynamically populate the page with the film names gathered from the first api call 
    for (i = 0; i < titleArray.length; i++) {
        var listEl = $("<h6>");
        var titleButtonEl = $("<button>");
        titleButtonEl.attr("class", "card titleBtn");
        titleButtonEl.attr("type", "button");
        titleButtonEl.attr("id", i);
        titleButtonEl.text(titleArray[i]);
        listEl.append(titleButtonEl);
        titleListEl.append(listEl);
    }
// });



// the following event listener willempty the div and set the values of multiple vars relating to the selected film, including a movie poster and plot synopsis

$(document).on("click", ".titleBtn", function (event) {
    selectedFilmName = $(event.target).text();
    selectedFilmId = buttonIdArray[$(event.target).attr("id")];
    titleListEl.empty();
    headlinEl.text("Nearby Theaters");
    console.log(selectedFilmId);
    selectedPoster = titlePosterArray[$(event.target).attr("id")]
    selectedSynopsis = titleSynopsisArray[$(event.target).attr("id")]
    selectedTrailer = titleTrailerArray[$(event.target).attr("id")]


    // the following ajax and the for loop inside it have been commmented out and the arrays it will populate have been hard coded until a new api key is available, at which point the hardcoded arrays should be emptied and it should work perfectly


    // var closestSettings = {
    //     url:
    //         cors +
    //         "https://api-gate2.movieglu.com/closestShowing/?film_id=" +
    //         selectedFilmId,
    //     method: "GET",
    //     timeout: 0,
    //     headers: {
    //         "x-api-key": "1mdMjAni0T7GAJJn4GZdx2XjE6d58Wck1rYniiwX",
    //         client: "STUD_140",
    //         authorization: "Basic U1RVRF8xNDA6NjB1N3BtdGl6ZTRN",
    //         territory: "US",
    //         "api-version": "v200",
    //         geolocation: "33.753746;-84.386330",
    //         "device-datetime": currentTime,
    //     },
    // };

    // $.ajax(closestSettings).done(function (response) {
        // for (i = 0; i < 5; i++) {
        //     cinemaArray.push(response.cinemas[i].cinema_name);
        //     cinemaLatArray.push(response.cinemas[i].lat);
        //     cinemaLongArray.push(response.cinemas[i].lng);
        //     cinemaAddressArray.push(response.cinemas[i].address);
        //     cinemaCityArray.push(response.cinemas[i].city);
        //     cinemaStateArray.push(response.cinemas[i].state);
        //     cinemaZipArray.push(response.cinemas[i].postcode);
        //     cinemaDistanceArray.push(response.cinemas[i].distance);
        // }
       

        //the following for loop will populate the page with the nearby cinemas that are showing the selected film.
        for (i = 0; i < cinemaArray.length; i++) {
            var listEl = $("<h6>");
            var titleButtonEl = $("<button>");
            titleButtonEl.attr("class", "card theaterBtn");
            titleButtonEl.attr("type", "button");
            titleButtonEl.attr("id", i);
            titleButtonEl.text(cinemaArray[i]);
            listEl.append(titleButtonEl);
            titleListEl.append(listEl);
        }
    // });
});


// the following event listener will empty the div and set the values of multiple vars related to the selected cinema
$(document).on("click", ".theaterBtn", function (event) {
    titleListEl.empty();
    headlinEl.text("Nearest Restaurants");
    console.log("test")
    selectedTheaterId = cinemaLatArray[$(event.target).attr("id")] + "," + cinemaLongArray[$(event.target).attr("id")];
    selectedTheaterName = $(event.target).text();
    selectedAddress = cinemaAddressArray[$(event.target).attr("id")]
    selectedCity = cinemaCityArray[$(event.target).attr("id")]
    selectedState = cinemaStateArray[$(event.target).attr("id")]
    selectedZip = cinemaZipArray[$(event.target).attr("id")]
    selectedDistance = cinemaDistanceArray[$(event.target).attr("id")]
    latLongArray = selectedTheaterId.split(",");
    var yelpSettings = {
        url:
            cors +
            "https://api.yelp.com/v3/businesses/search?latitude=" +
            latLongArray[0] +
            "&longitude=" +
            latLongArray[1],
        method: "GET",
        headers: {
            authorization:
                "Bearer qItHfBqMcXSXkVpMIcSF71I2KbHwRJ-rxNbzAQGIHcPc-OHxM0V-xAedcHX55dgcgoxi_VEKSgbC9RBnQjdAqDQDgvbo_lENXqYxeGhD6GV_KLJHPCKKYznDY1diX3Yx",
        },
    };
        // the following ajax call will gather data from the yelp fusion api and store that data in empty arrays. Those values will be iterated over in a for loop and store restaurant data to be gathered in the last page display
    $.ajax(yelpSettings).done(function (yelpResponse) {
        console.log(yelpResponse);
        for (i = 0; i < 10; i++) {
            restaurantArray.push(yelpResponse.businesses[i].name);
            restaurantDistanceArray.push(yelpResponse.businesses[i].distance);
            restaurantImageArray.push(yelpResponse.businesses[i].image_url);
            restaurantURLArray.push(yelpResponse.businesses[i].url);
           
        }
        console.log(restaurantArray);
        for (i = 0; i < restaurantArray.length; i++) {
            var listEl = $("<h6>");
            var titleButtonEl = $("<button>");
            titleButtonEl.attr("class", "card restaurantBtn");
            titleButtonEl.attr("type", "button");
            titleButtonEl.attr("id", i);
            titleButtonEl.text(restaurantArray[i]);
            listEl.append(titleButtonEl);
            titleListEl.append(listEl);
        }
    });
});

// this final event listener will empty the div and then populate the page with the user selections as well as stored data relating to each selection
$(document).on("click", ".restaurantBtn", function (event) {
    selectedRestaurantName = $(event.target).text();
    selectedRestaurantDistance = restaurantDistanceArray[$(event.target).attr("id")];
    selectedRestaurantImage = restaurantImageArray[$(event.target).attr("id")];
    selectedRestaurantURL = restaurantURLArray[$(event.target).attr("id")];
    console.log(selectedRestaurantDistance);
    console.log(selectedRestaurantImage);
    console.log(selectedRestaurantURL);
    var x = document.createElement("BR");
    titleListEl.empty();
    headlinEl.text("Your Picks");
    console.log(selectedFilmName);
    console.log(selectedTheaterName);
    console.log(selectedRestaurantName);
    var filmEl = $("<h6>");
    var finalFilm = $("<div>");
    var ptag = $("<p>");
    var posterEl = $("<img>")
    finalFilm.attr("class", "card endPage");
    posterEl.attr("src", selectedPoster)
    posterEl.attr("class", "poster");
    ptag.text(selectedSynopsis);
    ptag.attr("class", "synopsis")
    filmEl.append(finalFilm);
    filmEl.append(ptag);
    filmEl.append(posterEl)

    x;
    var cinEl = $("<h6>");
    var finalCin = $("<div>");
    var cinAddressEl = $("<p>");
    // finalCin.attr("class", "card endPage");
    // finalCin.text("Playing at " + selectedTheaterName);
    cinAddressEl.text(selectedAddress)
    finalFilm.text("You're seeing " + selectedFilmName + ", playing at " + selectedTheaterName);
    cinAddressEl.text("(Address: " + selectedAddress);
    cinEl.append(finalCin);

    x;
    var restEl = $("<h6>");
    var finalRest = $("<div>");
    var restaurantLinkEl = $("<a>");
    var restaurantImageEl = $("<img>");
    var restaurantDistanceEl = $("<p>");
    var selectedDistanceMile = selectedRestaurantDistance * 0.000621
    var milesAway = selectedDistanceMile.toFixed(1);
    finalRest.attr("class", "card endPage");
    finalRest.text("Enjoy your dinner at " + selectedRestaurantName + "!");
    restaurantLinkEl.attr("href", selectedRestaurantURL)
    restaurantLinkEl.text("Yelp page: " + selectedRestaurantName)
    restaurantImageEl.attr("src", selectedRestaurantImage)
    restaurantImageEl.attr("class", "restImg")
    restaurantDistanceEl.attr("class", "distance");
    restaurantDistanceEl.text(selectedRestaurantName + " is " + milesAway + " miles away from " + selectedTheaterName + ".")
    restEl.append(finalRest);
    restEl.append(restaurantLinkEl)
    restEl.append(restaurantDistanceEl)
    restEl.append(restaurantImageEl)
    titleListEl.append(filmEl, cinEl, restEl);




});


