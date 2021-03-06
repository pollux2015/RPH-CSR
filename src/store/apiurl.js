/**
 * api接口文档
 * 例: "login": "POST,/user/login",
 */
export default {
  // Common
  'login': 'POST,/admin/index/login',
  'logout': 'POST,/admin/index/logout',
  'unlockByWechat': 'POST,/admin/getCode',
  'unlockByCode': 'POST,/admin/unlockByCode',
  'getCode': 'get,/admin/getCode',
  'homeData': 'get,/admin/homeData',

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
  'contractRelet': 'POST,/relet/contractRelet',

  // 维修
  'repairList': 'POST,/relet/repairList',
  'repairInfo': 'GET,/relet/repairInfo',
  'repairSave': 'POST,/relet/repairSave',

  // 投诉
  'complainList': 'POST,/relet/complainList',
  'complainInfo': 'GET,/relet/complainInfo',
  'complainSave': 'POST,/relet/complainSave',

};
