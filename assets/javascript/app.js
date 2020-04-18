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

    $(document).on("click",".topic", function () {
    // $(".topic").on("click", function () {
        clicked = $(this).attr("data-name");
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

    // Create Buttons from Array
    function newButtons() {

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



    // New Animal Listener

    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Convert user's input to lower case and assign to a variable
        var usrInput = $("#add_button").val().toLowerCase();

        if (usrInput === "") {
            alert("A entry is required!");

        } else if (arrTopics.includes(usrInput)) {

            alert("A button for this animal already exists!");

        } 
         else {
            // Append user input to array in lower case
            arrTopics.push(usrInput);
            // Reset the form field
            $("#add_button").val('');
            // Recreate buttons from the array
            newButtons();
        }

    });


    var createRow = function (response) {

        var cntImage=0;

        for (i = 0; i < response.data.length; i++) {

            var iURL = response.data[i].images.fixed_height_still.url;
            var sURL = response.data[i].images.fixed_height_still.url;
            var aURL = response.data[i].images.fixed_height_downsampled.url;

            var iRow = $("<p>");
            var image = "<img src='" + iURL + "' data-still='" + sURL + "' data-animate='" + aURL + "' data-state='still' class='gif'>";
            var caption = "<figcaption>Rating: " + response.data[i].rating + "</figcaption>"

            // Prepend concatenated row to the HTML
            iRow.append(image, caption);
            console.log(iRow);
            $("#images").prepend(iRow);
        };

    }



    // Clicked Gif Listener

    $(document).on("click", ".gif", function () {

        //  $(".gif").on("click", function () {
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

    $("#exitgame").click(function () {

        alert("Goodbye!");
        window.location.href = 'https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html';
        })
})