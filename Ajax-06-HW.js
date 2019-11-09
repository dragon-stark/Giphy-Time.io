$(document).ready(function () {

  var topics = ["goats", "memes", "lifeHacks"]

  function displayGifButtons () {
    $(".gif-buttons").empty();
    for (var i = 0; i < topics.length; i++) {
      var createButton = $("<button>");
    }
  }

  function addNewButton () {
    $("#addGif").on("click", function () {
      var topics = $("#topicInput").val().trim()
      if (topics === "") {
        // Rejects empty buttons//
        return false;
      }
      topic.push(topics);
      displayGifButtons();
      return false;
    });
  }


  function displayGifs () {
    var goats = $(this).attr("data-name");
    console.log(goats)


    // Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=mcD2gwFTt1336mFt9p0QG0S2vGOMhqBP&tag=goats&rating=PG";


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      $(".gif-view").empty();
      // to show results from url
      var results = response.data;
      if (results === " ") {
        alert("oops, I'm blank")
      }
      for (var i = 0; i < results.length; i++) {
        // puts gifs into a div
        var gifDiv = $("<div1>");
        var gifRating = $("<p>").text("rating " + results[i].rating);
        gifDiv.append(gifRating);

        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_small_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
        gifImage.attr("data-animate", results[i].images.fixed_height_small_still.url);
        gifImage.attr("data-state", "still");
        gifImage.addClass("image");
        gifDiv.append(gifImage);
        $(".gif-view").prepend(gifDiv);
      }
    });
  }


  // API Gyphy key
  // mcD2gwFTt1336mFt9p0QG0S2vGOMhqBP

  displayGifButtons();
  addNewButton();
  // 3. When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY

  // place them on the page.

  // 4. When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif

  // should stop playing.

  // 5. Under every gif, display its rating(PG, G, so on).
  // * This data is provided by the GIPHY API.


  // * Only once you get images displaying with button presses should you move on to the next step.



  // 6. Add a form to your page takes the value from a user input box and adds it into your`topics` array.Then

  // function call that takes each topic in the array remakes the buttons on the page.



  // 7. Deploy your assignment to Github Pages.



  // 8. ** Rejoice ** !You just made something really cool.


  // ### Minimum Requirements

  // Attempt to complete homework assignment as described in instructions.If unable to complete certain portions,

  // pseudocode these portions to describe what remains to be completed.Adding a README.md as well as adding this

  // to your portfolio are required as well and more information can be found below.

  // - - -

  // ### Bonus Goals

  // 1. Ensure your app is fully mobile responsive.

  // 2. Allow users to request additional gifs to be added to the page.
  // * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

  // 3. List additional metadata(title, tags, etc) for each gif in a clean and readable format.

  // 4. Include a 1 - click download button for each gif, this should work across device types.

  // 5. Integrate this search with additional APIs such as OMDB, or Bands in Town.Be creative and build
  // proud to showcase in your portfolio

  // 6. Allow users to add their favorite gifs to a`favorites` section.
  // * This should persist even when they select or add a new topic.
  // * If you are looking for a major challenge, look into making this section persist even when the page is

  $(document).on("click", ".topics", displayGifs);
  $(document).on("click", ".image", function () {
    var state = $(this).attr('data-state');
    if (state === 'still') {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }
  });

});
