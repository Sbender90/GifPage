//  api key  (AK5yVQ1pQxyK1dlvIofEWgF8vz6bDa0u)

var examples = ["cheetah", "Bear", "Monkey", "Snake"]



var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=AK5yVQ1pQxyK1dlvIofEWgF8vz6bDa0u";

$.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    var results = response.data;

    for (var i = 0; i < resilts.length; i++) {
        var gifDiv = $("<div>");
        var rating = $("<p>").text("Rating: " + resilts[i].rating);
        var gifImage = $("<img>");

        gifImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.append(p);
        gifDiv.append(gifImage);

        $("#animals").prepend(gifDiv);
    }
  });