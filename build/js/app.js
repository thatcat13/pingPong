(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//frontend
var Whatevs = require("./../js/pingpong.js"); //specify which
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

},{"./../js/pingpong.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
