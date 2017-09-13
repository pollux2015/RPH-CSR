// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import Iconfont from './fonts/iconfont.css'
import store from './store/index';

// lodash
import Lodash from 'lodash';
Object.defineProperty(Vue.prototype, '$lodash', {
  get: function get() {
    return Lodash;
  }
});

// routers
import Routes from './router/index'
const router = Routes;

// apis
import Apis from './store/apis.js'
Vue.use(Apis);

// import Scroll from 'vue-mugen-scroll'
import InfiniteLoading from './components/basic/srcoller';

import {Panel, Group, Cell, XButton } from 'vux'
Vue.component('Panel', Panel);
Vue.component('Group', Group);
Vue.component('Cell', Cell);
Vue.component('XButton', XButton);
Vue.component('InfiniteLoading', InfiniteLoading);



FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
