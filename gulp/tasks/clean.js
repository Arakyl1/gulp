const del = require('del');

// Полностью удаляем папку dist

module.exports = function clean(cb) {
  return del('build/**').then(() => {
    cb()
  })
};
