/**
 * html编译 ejs
 * @authors Your Name (you@example.org)
 * @date    2018-12-08 15:39:59
 * @version $Id$
 */

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const data = require('gulp-data');
const fs = require('fs');
const gutil = require('gulp-util');
const { path, version } = require('../config');
const moment = require('moment');
const times = moment().format('X');
const reload = require('./browser-sync').reload;

// global.json 全局数据，页面中直接通过属性名调用
const datas = JSON.parse(fs.readFileSync(`${path.src.templates}/global.json`));
gulp.task('html', () => {
	const version = datas.version
  gulp.src(path.src.html)
    .pipe(data((file) => {
      return Object.assign(datas, {
        local: path.src.templates,
        ext: '.html',
        version: `${version}?t=${times}` // 加上时间戳 防止缓存
      })
    }))
    .pipe(ejs().on('error', (err) => {
      gutil.log(err);
      this.emit('end');
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(reload({stream: true}))
});
