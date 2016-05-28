// include gulp
var gulp = require('gulp'); 
var del = require('del');

// include plug-ins
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// default gulp task
gulp.task('default', ['clean', 'scripts'], function() {
  // watch for JS
  gulp.watch(['./assets/scripts/source/**/*.js'], function() {
    gulp.run('clean', 'scripts');
  });
});

// clean distribution
gulp.task('clean', function() {
    del(['./assets/scripts/dist/*']);
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./assets/scripts/source/app/*.js'])
    .pipe(browserify({
      debug: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/scripts/dist/'));
});