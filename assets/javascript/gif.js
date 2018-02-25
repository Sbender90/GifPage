//  api key  (AK5yVQ1pQxyK1dlvIofEWgF8vz6bDa0u)

var examples = ["cheetah", "Bear", "Monkey", "Snake"]



$(".gif-button").on("click", function(event) {
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-animal') + "&api_key=AK5yVQ1pQxyK1dlvIofEWgF8vz6bDa0u&limit=10&rating=pg&";

  event.preventDefault();
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    var results = response.data;
    
    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var gifImage = $("<img>");

        gifImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.append(p);
        gifDiv.append(gifImage);

        $("#animals").prepend(gifDiv);
    
    }

    
  });

});
// var userInput = $('#animalInput').text();
$('#submitButton').on('click', function() {
  event.preventDefault();
    var userInput = $('#animalInput').val().trim();
    var newButtons = $("<button>");  
    newButtons.attr("userInput", newButtons);
    $('#newButtons').text(newButtons);
    
      $('#submitButton').attr(userInput);
      console.log(userInput);
      console.log(submitButton);
      

      


  


});
