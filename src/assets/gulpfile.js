var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify-css'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer');

// Minify CSS
gulp.task('minify-css', function() {
  gulp.src('css/*.scss')
  	.pipe(plumber())
  	.pipe(sass())
    .pipe(minify({keepBreaks:true}))
    .pipe(gulp.dest('css/'))
});

// Watchdog
gulp.task('watch', function(){
	gulp.watch('css/*.scss', ['minify-css']);
});

// Set default Gulp command
gulp.task('default', ['watch']);