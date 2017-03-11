$( document ).ready(function() {

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + constraintHere + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    	url: queryURL, 
    	method: 'GET'})
     .done(function(response) {


 		$("#addAnimal").on('click', function(){
    	var newAnimal = $("#animalInput").val().trim();
    	animalButtons.push(newAnimal);
     	$("#animalInput").val( " ");
     	$("#animals").empty();
      	for(var i = 0; i < animalButtons.length; i++) {
        	var newButton = $("<button>");
        	newButton.text(animalButtons[i]);
        	newButton.addClass("mybutton");
        	$("#animals").append(newButton);
        }
 		});
});