//frontend
var Whatevs = require("./../js/sillyBackEndFile.js"); //specify which
//property of exports we are interested in via 'require'
//store it in a new variable called Whatevs
//Whatevs is uppercase bc it is an object constructor function

$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    //for now, ping pong form will trigger instantiating a new Calculator object
    //and have skin property hard-coded to hot pink
    event.preventDefault();

    var newNumber = $("#number").val();
    var simpleCalculator = new Whatevs("hot pink");
    //need to create a Calculator object here so that the pingPong **method** can be called on it
    var results = simpleCalculator.pingPong(newNumber);
    //passed newNumber variable into pingPong method = array of output
    results.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
