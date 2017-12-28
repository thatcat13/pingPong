var gulp = require("gulp");
var concat = require('gulp-concat');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

//using the require function to load the gulp package into a gulp variable that can be used in the code
//standard practice for the variable name to match the package named

//concat task
gulp.task('concatInterface', function(){
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  //calls the concat function (created with require above) passing in the name of the file we want to create
  .pipe(gulp.dest('./tmp'));
  //temporary b/c allConcat.js will not be used in the browser--first we have to broswerify it to pull in any modules it uses
});

//broswerify task
gulp.task('jsBrowserify', ['concatInterface'], function(){
  return browserify({ entries: ['./tmp/allConcat.js']})
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

//minify task
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

//now we run gulp minifyScripts and it'll run jsBrowserify, which will run concatInterface
