//  api key  (AK5yVQ1pQxyK1dlvIofEWgF8vz6bDa0u)

var animalsArr = ["cheetah", "Bear", "Monkey", "Snake"]


// api call click event
$(document).ready(function(){

// make call to giffy api
$("#gifButtons").on("click", ".gif-button", function() {
  // remove any existing gifs
  $("#animals").empty();


  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-animal') + "&api_key=AK5yVQ1pQxyK1dlvIofEWgF8vz6bDa0u&limit=10&rating=pg&";

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    //console.log(response);
    var results = response.data;

    // creating gif elements and appending to page
    for (var i = 0; i < results.length; i++) {
      //console.log(results[i].images);
        var $gifDiv = $("<div>");
        $gifDiv.addClass("gifs")
        var $p = $("<p>").text("Rating: " + results[i].rating);
        var $gifImage = $("<img>");

        $gifImage.attr("src", results[i].images.fixed_height_still.url);
        $gifImage.attr("data-state", "still")
        $gifImage.attr("data-animate", results[i].images.fixed_height.url)
        $gifImage.attr("data-still", results[i].images.fixed_height_still.url)

        $gifDiv.append($p, $gifImage);


        $("#animals").prepend($gifDiv);
    
    }

    
  });
});

// on page load render any value in the array
renderButtons();

// add more values to the animalsArr
$("#addAnimal").on("click", function(){
  var userInput = $("#animalInput").val().trim().toLowerCase();

  // on click of addAnimal 
  // get the value from animalInput

  // check if the value is in the animalsArr
    // if its not add it
      // animalsArr.push(value);
      // empty the gifButtons div
      // recreate buttons for each value in the array
    //else if its already there 
      //alert the user to input another animal 


  if(animalsArr.indexOf(userInput) === -1 && userInput.length > 0){
      // if bnoth are true add value to array
      animalsArr.push(userInput);

      // rerender the buttons that are created in the function
      renderButtons();

      // reset input 
      $("#animalInput").val("");

  }else{
    $("#alert").text("try another animal!");
  }
})

$("#animalInput").on("click", function(){
    $("#alert").text("");
})

// animate and non animate images
$("#animals").on("click", "img", function(){

    var state = $(this).attr("data-state");

    if(state === "still"){
      // change the src to the animate gif 
      $(this).attr("src", $(this).attr("data-animate"))
      // update state to animate
      $(this).attr("data-state", "animate");
    }else{
      // change the src to the still gif
       $(this).attr("src", $(this).attr("data-still")) 
      // update state to still
       $(this).attr("data-state", "still");
    }
})


});


function renderButtons(){
  // remove the exsiting buttons if any
  $("#gifButtons").empty();
  // make a funcrion that 
  
  // loop through the animalsArr
  //1 initiate, 2 evaluate, 3 block of code, 4 itterate
  for(var i = 0; i < animalsArr.length; i++){
     // creates html for each value in the animalsArr
     // <button data-animal="cheetah" class="gif-button">cheetah</button>
     var $newButtons = $("<button>");  
     $newButtons.addClass("gif-button btn btn-default");
     $newButtons.attr("data-animal",animalsArr[i])
     $newButtons.text(animalsArr[i]);
    // append each button to the gifButtons div
    $("#gifButtons").append($newButtons);
  } 
}
  

