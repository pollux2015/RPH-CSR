import Mock from 'mockjs'
const Random = Mock.Random
import aipurl from './apiurl';
import lodash from 'lodash'

// 循环生成表达式
let aipurl_ = {};
const url = lodash.forEach(aipurl, (item, key) => {
  let orgUrl = item.split(',')[1];
  let orgUrlAr = orgUrl.split('/');
  aipurl_[key] = RegExp(orgUrlAr.join('\/'));  
});

// 静态变量
const CUR_DATE = Mock.mock('@date');

// 用户详情
Mock.mock(aipurl_.userInfo, {
  code: 1,
  data: {
    'id|+1': 1,
    'email': '@EMAIL',
    'name|1': ['张三', '李四'],
    'phone|1': ['186*****411', '139*****520'],
    'avatar|1': Random.dataImage('80x80', 'Hello')
  }
});

// 消息列表
Mock.mock(/\/msg\/list/, {
  code: 1,
  'data|5': [{
    'date': CUR_DATE,
    'list|1-2': [{
      'scope|1': [1,2,3],
      'title|1': [
        '电费账单题型', 
        '水费账单题型', 
        '物业费账单题型', 
      ],
      'desc|1': [
        '新增#电费账单#42.00元,请于'+ CUR_DATE +'日24时前完成支付.', 
        '新增#物业账单#100.00元,请于'+ CUR_DATE +'时前完成支付.', 
        '新增#电费账单#82.00元,请于'+ CUR_DATE +'时前完成支付.', 
        '您的维修申请已经通过('+CUR_DATE+')'+',请保持手机畅通, 我们将及时与您联系', 
      ]
    },{
      'scope|1': [1,2,3],
      'title|1': [
        '电费账单题型', 
        '水费账单题型', 
        '物业费账单题型', 
      ],
      'desc|1': [
        '新增#电费账单#42.00元,请于'+ CUR_DATE +'日24时前完成支付.', 
        '新增#物业账单#100.00元,请于'+ CUR_DATE +'时前完成支付.', 
        '新增#电费账单#82.00元,请于'+ CUR_DATE +'时前完成支付.', 
        '您的维修申请已经通过('+CUR_DATE+')'+',请保持手机畅通, 我们将及时与您联系', 
      ]
    }]
  }],
  page: {
    total: 20,
    page: 1,
    'cur|1-10': 5,
    pagesize: 3,
    pages: 10
  }
});
