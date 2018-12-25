/**
 * image编译
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 10:19:20
 * @version $Id$
 */
const gulp = require('gulp');
const imagemin  = require('gulp-imagemin');
const pngcrush   = require('imagemin-pngcrush'); // png
const cache = require('gulp-cache'); // 变动的图片进行压缩
const path = require('../config').path;
const reload = require('./browser-sync').reload;

gulp.task('image', () => {
  return gulp.src(path.src.image)
    .pipe(cache(imagemin({ // 已压缩的无需重复压缩
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    })))
    .pipe(gulp.dest(path.dist.image))
    .pipe(reload({stream: true}))
});
