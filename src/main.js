// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
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
import LoadMore from './components/basic/loadmore';
import Order from './components/basic/order';
Vue.component('LoadMore', LoadMore);
Vue.component('Order', Order);

import {Panel, Group, Cell, XButton, Checker, CheckerItem, Flexbox, FlexboxItem, ToastPlugin, Actionsheet, Selector, PopupPicker, Datetime, XNumber, XInput, ChinaAddressData, XAddress, XTextarea, XSwitch, ConfirmPlugin, Alert, Grid, GridItem, Swiper, SwiperItem, Card, Popup , Timeline, TimelineItem, Step, StepItem} from 'vux'
Vue.component('Panel', Panel);
Vue.component('Group', Group);
Vue.component('Cell', Cell);
Vue.component('XButton', XButton);
Vue.component('Checker', Checker);
Vue.component('CheckerItem', CheckerItem);
Vue.component('Flexbox', Flexbox);
Vue.component('FlexboxItem', FlexboxItem);
Vue.component('Actionsheet', Actionsheet);
Vue.component('Selector', Selector);
Vue.component('PopupPicker', PopupPicker);
Vue.component('Datetime', Datetime);
Vue.component('ChinaAddressData', ChinaAddressData);
Vue.component('XAddress', XAddress);
Vue.component('XTextarea', XTextarea);
Vue.component('XSwitch', XSwitch);
Vue.component('XInput', XInput);
Vue.component('Grid', Grid);
Vue.component('GridItem', GridItem);
Vue.component('Alert', Alert);
Vue.component('Swiper', Swiper);
Vue.component('SwiperItem', SwiperItem);
Vue.component('Card', Card);
Vue.component('Popup', Popup);
Vue.component('Timeline', Timeline);
Vue.component('TimelineItem', TimelineItem);
Vue.component('Step', Step);
Vue.component('StepItem', StepItem);
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)


FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
