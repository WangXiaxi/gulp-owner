/**
 * gulp 配置项
 * @authors wangxiaoxing (995107408@qq.com)
 * @date    2018-12-08 10:19:20
 * @version $Id$
 */

const baseSrc = './src'; // 开放目录夹
const basePro = './dist'; // 生产目录夹
const baseRes = `${baseSrc}/resources`; // 开发 css 等 
const baseCon = `${basePro}/content`; // dist css 等

module.exports = {
  path: {
    src: {
      baseUrl: baseSrc,
      css: [`${baseRes}/sass/*.scss`, `${baseRes}/sass/*.css`], // 编写sass目录
      image: `${baseRes}/images/**/**`,
      js: `${baseRes}/js/**/**`,
      fonts: `${baseRes}/fonts/**/**`,
      html: `${baseSrc}/templates/**/*.html`,
      templates: `${baseSrc}/templates`
    },
    dist: {
      baseUrl: basePro,
      css: `${baseCon}/css`, // 生成目录
      image: `${baseCon}/images`,
      js: `${baseCon}/js`,
      fonts: `${baseCon}/fonts`,
      html: basePro
    }
  },
  version: '0.1', // 现在用的是global中的version
  devServer: { // 端口代理等配置
    port: 4000,
    server: {
      baseDir: basePro,
      /* 代理配置 */ // 测试环境
      proxy: {
        '/api': {
          target: 'http://192.168.173.75',
          changeOrigin: true
        },
        '/group1': {
          target: 'http://192.168.173.75',
          changeOrigin: true
        }
      }
    }
  }
}