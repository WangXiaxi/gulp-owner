/**
 * 实时编译刷新监听
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 10:19:20
 * @version $Id$
 */
const gulp = require('gulp');
const borwserSync = require('browser-sync').create();
const proxy = require('http-proxy-middleware');

const serverConfig = require('../config').devServer;
const proxyConfig = serverConfig.server.proxy;

delete serverConfig.server.proxy;

let proxyArray;

if(proxyConfig) {
  proxyArray = Object.keys(proxyConfig).map(url => {
    const config = proxyConfig[url];
    return proxy(url, config);
  })
  serverConfig.server.middleware = [...proxyArray];
}

gulp.task('browser', () => {
  borwserSync.init(serverConfig);
});

module.exports = borwserSync
