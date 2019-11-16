###### vue-chrome-ext-template
    基于vue与elementui的浏览器扩展模板ts版本(支持SCSS)
###### 安装与使用
上传时的开发环境 ubuntu 19.10 + node v10.15 + yarn
<br />
这里使用的是yarn进行插件管理，可参考 [yarn安装](https://yarn.bootcss.com/docs/install/#debian-stable)
```shell
git clone https://github.com/zghmvp/vue-chrome-ext-template.git
cd vue-chrome-ext-template
yarn install
npm run build-watch
```
###### 命令说明
    npm run build-watch 开发阶段用于测试、自动编译与重载插件
    npm run build 打包发布项目，打包后的文件在位于src/dist.zip

###### 参考
[vue-cli-plugin-chrome-ext](https://github.com/superoo7/vue-cli-plugin-chrome-ext)
<br/>
[Chrome-extension-vue-template](https://github.com/Mrli2016/Chrome-extension-vue-template)
