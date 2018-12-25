/**
 * fonts编译
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 15:04:47
 * @version $Id$
 */
const gulp = require('gulp');
const path = require('../config').path;

gulp.task('fonts', () => {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dist.fonts))
});
