$(document).ready(function ()
{

  var topics = ["goats", "memes", "lifeHacks"]

  function displayGifButtons ()
  {
    $(".gif-buttons").empty();
    for (var i = 0; i < topics.length; i++) {
      var createButton = $("<button>");
    }
  }
  console.log(createButton);
  function addNewButton ()
  {
    $("#addGif").on("click", function ()
    {
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
< !--buttons -->
    <div class="input-group-prepend">
      <button class="btn gif-buttons" id="container addGif" type="text">Happiness Search</div>
      <div class="container gif-view"></div>
      <input type="text" class="form-control-control" placeholder="" class="topics"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>
      <script src="Ajax-06-HW.js"> </script>
      function displayGifs ()
  {
    var topics = $(this).attr("data-name");
      console.log(topics)
  
  
      // queryURL for Giphy API
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=mcD2gwFTt1336mFt9p0QG0S2vGOMhqBP&tag=goats&rating=PG";
  
  
    $.ajax({
        url: queryURL,
      method: "GET"
    }).then(function (response)
    {
        console.log(response)
      $(".gif-view").empty();
      //  show results from url
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
  
    displayGifButtons();
    addNewButton();
  
  
    $(document).on("click", ".topics", displayGifs);
    $(document).on("click", ".image", function ()
  {
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
