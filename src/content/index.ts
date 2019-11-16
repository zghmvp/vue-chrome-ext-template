/*
 * @Descripttion: 文件说明
 * @version: 1.0
 * @Author: ZGHMVP
 * @Date: 2019-10-29 17:44:59
 * @LastEditors: ZGHMVP
 * @LastEditTime: 2019-10-30 10:12:21
 */
import Vue from 'vue';
import './element-ui-config';
import AppComponent from './App';

Vue.component('app-component', AppComponent);

interface Window {
  [key: string]: any;
}

// 通过Chrome插件的API加载字体文件
(function insertElementIcons() {
  const elementIcons = document.createElement('style');
  elementIcons.type = 'text/css';
  elementIcons.textContent = `
        @font-face {
            font-family: "element-icons";
            src: url('${ (window as Window).chrome.extension.getURL('fonts/element-icons.woff')}') format('woff'),
            url('${ (window as Window).chrome.extension.getURL('fonts/element-icons.ttf ')}') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        }
    `;
  document.head.appendChild(elementIcons);
})();

// 在页面末尾中插入 #app 元素
const elApp = document.createElement('div');
elApp.id = 'njxpAPP';
document.body.appendChild(elApp);

const $vue = (window as Window).$vue = new Vue({
  el: '#njxpAPP',
  render: (createElement) => {
    return createElement(AppComponent);
  },
});
