//backend

console.log("hello?")

function Calculator(skinName) {
  this.skin = skinName;
  //property is named skin
  //eventually, users will create a new object (instance) of Calculator every time they choose a new skin (i.e., "hot pink" or "retro green")
}

Calculator.prototype.pingPong = function(number){
  //method that can be called on new instances of the Calculator constructor
  var output = [];
  for (var i = 0; i < number; i++); {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
}

module.exports = Calculator;
//this is how you store the Calculator declaration into a module
//(above is in browserify format "module.exports", different from epicodus lesson)
//the object Calculator constructor function is now converted into a MODULE
//module is a big ol' gian JS global object
