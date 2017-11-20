//backend

function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(number){
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

exports.thingy = Calculator; //here is a property on the global object
//called thingy
//this Calculator blueprint is now converted into a MODULE
