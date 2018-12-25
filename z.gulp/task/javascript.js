/**
 * js编译
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 15:04:47
 * @version $Id$
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const path = require('../config').path;
const reload = require('./browser-sync').reload;

gulp.task('js', () => {
  return gulp.src(path.src.js)
    .pipe(plumber({
    	errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(gulp.dest(path.dist.js))
    .pipe(reload({stream: true}))
});

gulp.task('js_build', () => {
  return gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(gulp.dest(path.dist.js))
    .pipe(reload({stream: true}))
});
