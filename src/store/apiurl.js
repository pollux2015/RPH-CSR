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

  // 家庭成员
  'famliyList': 'GET,/family/list',
  'familyDelete': 'POST,/family/delete',
  'familyInfo': 'GET,/family/info',
  'familyEdit': 'POST,/family/edit',
  'reportLost': 'POST,/report/lost',
  
  // 缴费
  'orderList': 'GET,/order/list',
  
  // 合同
  'contractInfo': 'GET,/contract/info',
  'contractAtta': 'GET,/contract/atta',
  'contractOrder': 'GET,/contract/order',
  
  // 退房
  'checkoutInfo': 'GET,/checkout/info',
  'checkout': 'POST,/checkout/index',
  
  // 续租
  'reletInfo': 'POST,/relet/info',
  'contractRelet': 'POST,/relet/contractRelet'

};
