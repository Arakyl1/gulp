const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');


const style = [
  './src/source/style.scss',
  './src/source/*.scss'
]   

// Работаем со стилями

module.exports = function styles() {
  return gulp.src(style)
    .pipe(concat('style.scss'))
    .pipe(plumber())
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(scss())
    .pipe(autoprefixer({
      overrideBrowserslist:  [ "last 4 version" ],
      cascade: false}))
      .pipe(gulpif(argv.prod, cleanCSS({
        debug: true,
        compatibility: '*'
      }, details => {})))
    .pipe(gulpif(!argv.prod, sourcemaps.write()))
    .pipe(gulp.dest('build/css'))
};
