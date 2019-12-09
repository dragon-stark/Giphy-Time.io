$(document).ready(function ()
{
  var topics = ["crazy animals", "cute animals", "funny animals", "cuddly pets", "hilarious critters"];


  function displayButtons (buttonDisplay, addClass, gifArea)
  {
    // clear buttons for additional searches
    $(gifArea).empty();

    for (i = 0; i < buttonDisplay.length; i++) {
      // create a new button div
      var topicButton = $("<button>")
      topicButton.addClass(addClass);
      topicButton.attr("data-type", buttonDisplay[i]);
      //display button text
      topicButton.text(buttonDisplay[i]);
      $(gifArea).append(topicButton);
    }
  }
  //create user input button
  $(document).on("click", ".topic-button", function ()
  {
    $("#gifs").empty();
    $(".topic-button").removeClass("active");
    $(this).addClass("active");

    var animalSearch = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalSearch + "&api_key=bUIuVv7Z1l0tbdmZdiZncvKAssw3gWKc&limit=10&rating=PG-13"

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response)
      {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='topic-item'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var animated = results[i].images.fixed_width.url;
          var still = results[i].images.fixed_width_still.url;

          var topicImage = $("<img>");
          topicImage.attr("src", still);
          topicImage.attr("data-still", still);
          topicImage.attr("data-animate", animated);
          topicImage.attr("data-state", "still");
          topicImage.addClass("topic-image");
          gifDiv.append(p);
          gifDiv.prepend(topicImage);

          $("#gifs").append(gifDiv);
        }
      });
  });
  //Play on click
  $(document).on("click", ".topic-image", function ()
  {
    console.log(this);
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  // on.click topic additions
  $("#submitButton").on("click", function (event)
  {
    event.preventDefault();
    var newTopic = $("#addTopic").eq(0).val();
    topics.push(newTopic);
    displayButtons(topics, "topic-button", "#topic-buttons"
    )
  });
  displayButtons(topics, "topic-button", "#topic-buttons");
});