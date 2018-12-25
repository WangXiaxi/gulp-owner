/**
 * sass编译
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 10:19:20
 * @version $Id$
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');    //重命名
const path = require('../config').path;
const reload = require('./browser-sync').reload;

gulp.task('css', () => { // dev
  return gulp.src(path.src.css)
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))  // 生成css前缀
    // .pipe(rename({dirname: ''}))			
    // .pipe(rename({ suffix: '.min' }))        // 重命名压缩的文件
    .pipe(gulp.dest(path.dist.css))    // 生成路径： 注意--gulp.dest()在压缩前先执行一次生成未压缩的css文件，否则只有一个css压缩文件
    .pipe(reload({stream: true}))
});

gulp.task('css_build', () => { // build
  return gulp.src(path.src.css)
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))  // 生成css前缀
    .pipe(cleanCss())
    .pipe(gulp.dest(path.dist.css))
    .pipe(reload({stream: true}))
});
