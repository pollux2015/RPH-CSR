import Vue from 'vue';
import Vuex from 'vuex';
import apis from './apis';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// states
const state = {
  metaName: '公租房',
  metaShow: true,
  userInfo: {},
};

// getters
const getters = {
  metaName: state => state.metaName,
  metaVisible: state => state.metaShow,
  userInfo: state => state.userInfo,
};

// mutations
const mutations = {
  metaName(state, name) {
    state.metaName = name;
  },
  metaVisible(state, status) {
    state.metaShow = status;
  },
  userInfo(state, info) {
    state.userInfo = info;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  strict: debug
});
