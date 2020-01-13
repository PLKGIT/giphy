/*
    JavaScript and jQuery Code for Giphy App
*/

// Set Global Variables
// Create buttons from array
// On button click, request 10 random images from Giphy API and display on page
// On image click, change status from still-to-animate or vice versa
// On submit click, add new topic to array and recreate buttons


$(document).ready(function () {

    // Set Global Variables

    var arrTopics = ['goat', 'cat', 'deer', 'dog', 'donkey', 'bird', 'snake', 'monkey', 'whale', 'lion', 'fox', 'tiger', 'bear', 'fish', 'butterfly', 'cow', 'rabbit'];


    // Logic


     // Clicked Gif Listener

     $(".gif").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        console.log(state);
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    // Create Buttons from Array
    function createButtons() {

        // Deleting the buttons prior to adding new buttons
        $("#buttons").empty();

        // Looping through the array of movies
        for (var i = 0; i < arrTopics.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class
            a.addClass("btn btn-outline-info btn-lg m-1 topic");
            // Adding a data-attribute with a value of the movie at index i
            a.attr("data-name", arrTopics[i]);
            // Providing the button's text with a value of the movie at index i
            a.text(arrTopics[i]);
            // Adding the button to the HTML
            $("#buttons").append(a);
        }
    }

    createButtons();


    // Retrieve images from Giphy based on topic button clicked
    $(".topic").on("click", function () {
        var clicked = $(this).attr("data-name");
        console.log(clicked);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Nc3eXj6dFPCoPEPYadwqOusNVwHez7SN&q=" + clicked + "&limit=10&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            createRow(response)
        });

        // console.log(queryURL);

    });


    // New Animal Listener
    $("#new_animal").on("click", function () {
        // Append user input to array in lower case
        var usrInput = $("#add_button").val().toLowerCase();

        if (usrInput === "") {
            alert("A name is required!");
        } else {
            // console.log(usrInput);
            arrTopics.push(usrInput);
            // Reset the form field
            $("#add_button").val('');
            // Recreate buttons from the array
            createButtons();

        }

    });


    var createRow = function (response) {

        for (i = 0; i < response.data.length; i++) {

            var iURL = response.data[i].images.fixed_height_still.url;
            var sURL = response.data[i].images.fixed_height_still.url;
            var aURL = response.data[i].images.fixed_height_downsampled.url;

            var tRow = $("<p>");
            var rating = "Rating: " + response.data[i].rating + "&nbsp";
            var image = "<img src='" + iURL + "' data-still='" + sURL + "' data-animate='" + aURL + "' data-state='still' class='gif'>";

            // Prepend concatenated row to the table
            tRow.append(rating, image);
            console.log(tRow);
            $("#images").prepend(tRow);
        };

    }

})

