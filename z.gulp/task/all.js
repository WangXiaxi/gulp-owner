const gulp = require('gulp');
const clean = require('gulp-clean');
const runSequence = require('gulp-run-sequence');
const path = require('../config').path;

gulp.task('clean', () => {
  return gulp.src(path.dist.baseUrl)
    .pipe(clean());
});

gulp.task('dev', () => {
  runSequence('clean', 'css', 'image', 'fonts', 'js', 'html', 'browser', 'watch');
});

gulp.task('build', () => {
  runSequence('clean', 'css_build', 'image', 'fonts', 'js_build', 'html', 'browser', 'watch');
});
