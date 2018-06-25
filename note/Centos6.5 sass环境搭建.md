# Centos6.5 sass环境搭建

#### 安装`ruby`
1. `openssl version` 查看 `OpenSSL` 是否存在，没有的话可以执行 `yum install openssl openssl-devel`
2. [ruby](http://www.ruby-lang.org/zh_cn/)下载最新稳定版并解压
3. `cd ruby-x.x.x`
4. `./configure`假如第8步出现问题，无法`require openssl`的话，得`--with-openssl-dir= openssl的安装文件夹`
5. `make && make install`
6. `ruby -v` 假如没有的话
7. 将 `ruby` 命令集加入系统环境变量 `echo "PATH=$PATH:/usr/local/bin;export PATH" >> /etc/profile` `source /etc/profile`
8. `gem sources --a https://gems.ruby-china.org/ --r https://rubygems.org/`
#### 删除源码安装的东西
`make uninstall`

#### 安装`sass&compass`
1. `gem install sass && gem install compass`安装
2. `sass -v && compass -v`查看安装是否成功

#### 在项目中使用`compass`
> 看`config.rb`配置文件行事
```
require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"
sourcemap = true

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

```


