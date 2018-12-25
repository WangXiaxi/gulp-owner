/**
 * 监听实时刷新
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 16:49:47
 * @version $Id$
 */
const gulp = require('gulp');
const { css, image, js, fonts, templates } = require('../config').path.src;
const watch = require('gulp-watch');

gulp.task('watch', () => {
	gulp.watch(`${templates}/**/*.*`, ['html']);
  gulp.watch(css, ['css']);
  gulp.watch(js, ['js']);
  gulp.watch(image, ['image']);
  gulp.watch(fonts, ['fonts']);
})
