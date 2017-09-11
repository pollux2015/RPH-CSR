import axios from 'axios'
import qs from 'qs'
import apiurl from './apiurl'
import store from './index'
import config from '../config.js'

let apis = {};

// 配置axios实例
let ainstance = axios.create({
  baseURL: config.basicUrl,
  timeout: 30000,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: true, // default
  // `onDownloadProgress` allows handling of progress events for downloads
  transformRequest: function(data) {
    return data;
  },
  validateStatus: function(status) {
    if (status >= 200 && status < 300) {
      return status >= 200 && status < 300; // default
    } else {
      iView.Message.error('请求错误（' + status + ")，请尝试刷新网页。");
    }
  },

  // headers: {'X-Requested-With': 'XMLHttpRequest'},
  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string, an ArrayBuffer, FormData, or a Stream
  // transformRequest: [function (data) {
  //   // Do whatever you want to transform the data
  //
  //   return data;
  // }],
  //
  // // `transformResponse` allows changes to the response data to be made before
  // // it is passed to then/catch
  // transformResponse: [function (data) {
  //   // Do whatever you want to transform the data
  //
  //   return data;
  // }]
});

ainstance.interceptors.request.use(function(config) {
  return config;
}, function(err) {
  return Promise.reject(err);
});


// 遍历api.url配置实例
for (let i in apiurl) {
  let parmas = apiurl[i].split(','),
    url = parmas[1],
    method = parmas[0] ? parmas[0].toUpperCase() : 'GET',
    curInstance;

  apis[i] = (parmas) => {
    parmas = parmas || {};
    const method_ = method.toLowerCase();
    if (method === 'POST' || method === 'PUT' || method == 'PATCH') {
      curInstance = ainstance[method_](url, qs.stringify(parmas));
    } else {
      curInstance = ainstance[method_](url, {
        params: parmas
      });
    }

    return curInstance.then((response) => {
      if (typeof response.data !== 'object') {
        return Promise.reject({
          code: 'DATAERROR',
          msg: '获取数据失败'
        });
      }

      // 如果返回code不为1, 则请求异常 [未登录, 没有权限]
      if (response.data.code != 1) {
        return Promise.reject(response.data);
      }

      return response.data;
    }).catch((result) => {
      store.commit('upError', result);
      let errorMsg = '';
      if (result.code == 401) { // 未登录
        location.href = '#/login';
      } else if (result.code == 403) {
        location.href = '#/error';
      } else if (result.code == 'ECONNABORTED') {
        errorMsg = '请求超时，请检查网络链接并尝试刷新网页。';
      } else if (result.code == 'DATAERROR') {
        errorMsg = '获取数据失败';
      } else {
        errorMsg = '获取数据失败';
      }
      if (!parmas.noErrorMsg) {
        iView.Message.error(result.msg || errorMsg);
      }
      return Promise.reject(result);
    });
  };
}

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  Object.defineProperty(Vue.prototype, '$apis', {
    get: function get() {
      return apis;
    }
  });

}

var inBrowser = typeof window !== 'undefined';
apis.install = install;

if (inBrowser && window.Vue) {
  window.Vue.use(apis);
}

export default apis;
