import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import mine from '@/components/Mine'
import msg from '@/components/Msg'
import family from '@/components/family'
import familyEdit from '@/components/family.edit'
import order from '@/components/order'
import repair from '@/components/repair'
import repairAdd from '@/components/repair.add'
import repairInfo from '@/components/repair.info'
import complainAdd from '@/components/complain.add'
import complainEdit from '@/components/complain.edit'
import complain from '@/components/complain'
import checkout from '@/components/checkout'
import relet from '@/components/relet'
import contract from '@/components/contract'
import contractAtta from '@/components/contract.atta'
import contractOrder from '@/components/contract.order'
import store from '../store/index';
Vue.use(Router)

const routerAssitant = new Router({
  routes: [{
      path: '/',
      name: 'home',
      meta: { title: '首页' },
      component: home
    },
    {
      path: '/msg',
      name: 'msg',
      meta: { title: '消息中心' },
      component: msg
    },
    {
      path: '/mine',
      name: 'mine',
      meta: { title: '个人中心' },
      component: mine
    },
    {
      path: '/family',
      name: 'family',
      meta: { title: '家庭成员' },
      component: family
    },
    {
      path: '/family/:id',
      name: 'family.info',
      meta: { title: '编辑成员' },
      component: familyEdit
    },
    {
      path: '/family/add',
      name: 'family.add',
      meta: { title: '添加成员' },
      component: familyEdit
    },
    {
      path: '/order',
      name: 'order',
      meta: { title: '缴费情况' },
      component: order
    },
    {
      path: '/repair',
      name: 'repair',
      meta: { title: '维修管理' },
      component: repair
    },
    {
      path: '/repair/add',
      name: 'repair.add',
      meta: { title: '发起维修' },
      component: repairAdd
    },
    {
      path: '/repair/:id',
      name: 'repair.info',
      meta: { title: '详情' },
      component: repairInfo
    },
    {
      path: '/complain',
      name: 'complain',
      meta: { title: '投诉建议' },
      component: complain
    },
    {
      path: '/complain/add',
      name: 'complain.add',
      meta: { title: '发起投诉' },
      component: complainAdd
    },
    {
      path: '/complain/:id',
      name: 'complain.info',
      meta: { title: '投诉详情' },
      component: complainEdit
    },
    {
      path: '/checkout',
      name: 'checkout',
      meta: { title: '申请退房' },
      component: checkout
    },
    {
      path: '/relet',
      name: 'relet',
      meta: { title: '申请续租' },
      component: relet
    },
    {
      path: '/contract',
      name: 'contract',
      meta: { title: '合同租期' },
      component: contract
    },
    {
      path: '/contract/atta/:id',
      name: 'contract.atta',
      meta: { title: '电子合同' },
      component: contractAtta
    },
    {
      path: '/contract/order/:id',
      name: 'contract.order',
      meta: { title: '查看账单' },
      component: contractOrder
    }
  ]
});

// 路由进入与退出
routerAssitant.beforeEach((to, from, next) => {
  const metaName = to.meta.title;
  document.title = metaName;
  store.commit('metaName', metaName);
  next();
});

routerAssitant.afterEach(() => {
  window.scrollTo(0, 0);
});

export default routerAssitant;
