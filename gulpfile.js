var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');

//using the require function to load the gulp package into a gulp variable that can be used in the code
//standard practice for the variable name to match the package named

gulp.task('jsBrowserify', function(){
  return browserify({ entries: ['./js/pingpong-interface.js']})
    //call browserify function and instruct which files to browserify by passing in an object with a key 'entries'
    //'entries' corresponding value is an array of file names
    //we tell it to pull in front-end only (...-interface)
  .bundle()
  //a browserify process
  .pipe(source('app.js'))
  //create a new file called app.js
  .pipe(gulp.dest('./build/js'))
  //and put it in a new folder called build with a js folder inside of it
});

//calling the task method defined in the gulp package to create a task
//task method takes two arguments: string representing the name of the task AND function to run when we tell gulp to run this task; here the task just prints 'hello gulp' to the console

//BTW, the function above serves as a parameter for gulp.task so it's a CALLBACK function

//callback functions are executed at a particular time such as after a particular event completes
