/*
 * @Descripttion: 文件说明
 * @version: 1.0
 * @Author: ZGHMVP
 * @Date: 2019-10-29 17:18:11
 * @LastEditors: ZGHMVP
 * @LastEditTime: 2019-10-30 10:14:49
 */
import Vue from 'vue';
import AppComponent from './App';

Vue.component('app-component', AppComponent);

interface Window {
  [key: string]: any;
}

const $vue = (window as Window).$vue = new Vue({
  el: '#app',
  render: (createElement) => {
    return createElement(AppComponent);
  },
});
