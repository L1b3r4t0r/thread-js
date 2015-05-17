var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');

gulp.task('default', function(){
	var nm = gulp.src(['src/**/*.ts'])
	.pipe(ts({
		noImplicitAny: true,
		out: 'thread.js'
	}))
	.pipe(gulp.dest('dist'));
	
	var mn = gulp.src(['src/**/*.ts'])
	.pipe(ts({
		noImplicitAny: true,
		out: 'thread.min.js'
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
	
	return mn.js.pipe(gulp.dest('dest/')), nm.js.pipe(gulp.dest('dest/'));
});