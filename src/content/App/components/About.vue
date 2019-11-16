<template>
  <article itemprop="text">
    <h3>安装与使用</h3>
    <p>上传时的开发环境 ubuntu 19.10 + node v10.15 + yarn</p>
    <p>
      这里使用的是yarn进行插件管理，可参考
      <a href="https://yarn.bootcss.com/docs/install/#debian-stable">yarn安装</a>
    </p>
    <div class="code">
      <p>git clone https://github.com/zghmvp/vue-chrome-ext-template.git</p>
      <p>cd vue-chrome-ext-template</p>
      <p>yarn install</p>
      <p>npm run build-watch</p>
    </div>
    <hr />

    <h3>命令说明</h3>
    <div class="code">
      <p>npm run build-watch 开发阶段用于测试、自动编译与重载插件</p>
      <p>npm run build 打包发布项目，打包后的文件在位于src/dist.zip</p>
    </div>
    <hr />
    <h3>参考</h3>
    <p>
      <a href="https://github.com/superoo7/vue-cli-plugin-chrome-ext">vue-cli-plugin-chrome-ext</a>
    </p>
    <p>
      <a href="https://github.com/Mrli2016/Chrome-extension-vue-template">Chrome-extension-vue-template</a>
    </p>
  </article>
</template>


<style lang="scss" scoped>
h3{
  font-size: 16px;
  margin-bottom: 15px;
}
p{
  line-height: 1.8;
}
.code {
  margin: 15px 0;
  padding: 15px;
  background-color: #eee;
}
</style>