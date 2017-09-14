/**
 * api接口文档
 * 例: "login": "POST,/user/login",
 */
export default {
  // Common
  'login': 'POST,/admin/index/login',
  'logout': 'POST,/admin/index/logout',

  'userInfo': 'GET,/user/info',
  'msgList': 'GET,/msg/list',
  'famliyList': 'GET,/family/list',
  'familyDelete': 'POST,/family/delete',
  'familyInfo': 'GET,/family/info',
  'familyEdit': 'POST,/family/edit',
  'reportLost': 'POST,/report/lost',

  'orderList': 'GET,/order/list',

  'contractInfo': 'GET,/contract/info',
  'contractAtta': 'GET,/contract/atta',
  'contractOrder': 'GET,/contract/order',

  'checkoutInfo': 'GET,/checkout/info',
  'checkout': 'POST,/checkout/index',

};
