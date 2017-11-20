//frontend
var Whatevs = require("./../js/sillyBackEndFile.js").thingy; //specify which
//property of exports we are interested in via 'require'
//uses dot notation to pull out Calculator in the thingy property and store it in a new variable called Whatevs
//Whatevs is uppercase bc it is an object constructor function

$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    event.preventDefault();

    var newNumber = $("#number").val();
    var simpleCalculator = new Whatevs("hot pink");
    var results = simpleCalculator.pingPong(newNumber);
    results.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
