const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

// Минификация и оптимизация изображений

module.exports = function imageMinify() {
  return gulp.src(
    ['src/img/**/*.{gif,png,jpg,svg,webp}',
    '!src/img/sprite/**/*']
  )
    .pipe(buffer())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({
        quality: 70,
        progressive: true
      }),
      imagemin.optipng({optimizationLevel: 15}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('build/img/'))
};
