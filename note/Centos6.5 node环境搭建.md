# Centos6.5 node环境搭建

#### 安装`nvm`
1. 到[nvm](https://github.com/creationix/nvm)安装最新的版本
2. `export NVM_DIR="$HOME/.nvm"`
3. `[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm`
4. `export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node`更改mirror，但是有可能更改后安装失败，原因还母鸡,所以在使用这个方式更改mirror前，可以使用`NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install node`测试下，可以的话应该就行了

#### 安装`node`
1. `nvm install node|version`
2. 多个`node`使用`nvm use`来切换

#### 安装`cnpm`
直连国外的服务器比较慢，可以改用taobao的mirror`npm install -g cnpm --registry=https://registry.npm.taobao.org`

#### 安装`browser-sync`
1. `cnpm install -g browser-sync`
2. `browser-sync`的简单使用`browser-sync start --server`