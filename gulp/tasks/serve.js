const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('src/source/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('src/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('build/*.html').on('change', server.reload);

  return cb()
};
