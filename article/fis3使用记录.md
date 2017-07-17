# [fis3](http://fis.baidu.com/)使用记录
## 基础安装
1. 前提是`node`环境，并且不高于官方给的版本号
2. `cnpm or npm`安装到全局，不然无法得到命令
## 基础命令
1. 构建命令`fis3 relaese`
```
// 构建命令
// 不加`-d`参数默认被发布到内置`Web Server`的根目录下，此目录通过`fis3 server open`可以得到
fis3 release -d <path>
```
2. 内置`Web Server`
```
// 服务器开启
fis3 server start

// 服务器开启于指定端口
fis3 server start --port <int>
```
3. 文件监测，浏览器同步刷新
```
// 文件监测
fis release --watch

// 自动刷新
fis release --live

// 二者一起
fis release -wL

// 如果自动刷新没有效果，可以查看浏览器中 livereload.js 加载的路径，错了的话，在 fis-conf.js 添加 fis.config.set('livereload.hostname', 'xxx.xxx.xxx.xxx')
```
## 配置文件`fis-conf.js`
1. `css-sprite`
```
// 启用 fis-spriter-csssprites 插件
fs.match('::package', {
    spriter: fis.plugin('csssprites')
});

fs.match('*.css', {
    // 给匹配到的文件分配属性 useSprite
    useSprite: true
})
```
2. 文件指纹`md5`
```
fis.match('*', {
    useHash: true
})

// 自己会用到的配置，只有 fis3 release pro 才会启用 md5
fis.match('*', {
    useHash: false
});
fis.media('pro').match('*.{js, css, png, jpg}', {
    useHash: true
});
```
3. 查看文件分配到的属性`fis3 inspect`
```
fis3 inspect

fis3 inspect <media>
```
4. 压缩资源
```
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
```