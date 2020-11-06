const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Работа со скриптами
const jsFile = [
  './src/js/main.js',
  './src/js/**/*.js'
]  

module.exports = function script() {
  return gulp.src(jsFile)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
};
