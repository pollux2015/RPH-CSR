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
Mock.mock(aipurl_.msgList, {
  code: 1,
  'data|5': [{
    'date': CUR_DATE,
    'list|1-2': [{
      'scope|1': [1, 2, 3],
      'title|1': [
        '电费账单题型',
        '水费账单题型',
        '物业费账单题型',
      ],
      'desc|1': [
        '新增#电费账单#42.00元,请于' + CUR_DATE + '日24时前完成支付.',
        '新增#物业账单#100.00元,请于' + CUR_DATE + '时前完成支付.',
        '新增#电费账单#82.00元,请于' + CUR_DATE + '时前完成支付.',
        '您的维修申请已经通过(' + CUR_DATE + ')' + ',请保持手机畅通, 我们将及时与您联系',
      ]
    }, {
      'scope|1': [1, 2, 3],
      'title|1': [
        '电费账单题型',
        '水费账单题型',
        '物业费账单题型',
      ],
      'desc|1': [
        '新增#电费账单#42.00元,请于' + CUR_DATE + '日24时前完成支付.',
        '新增#物业账单#100.00元,请于' + CUR_DATE + '时前完成支付.',
        '新增#电费账单#82.00元,请于' + CUR_DATE + '时前完成支付.',
        '您的维修申请已经通过(' + CUR_DATE + ')' + ',请保持手机畅通, 我们将及时与您联系',
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

// 家庭成员
Mock.mock(aipurl_.famliyList, {
  code: 1,
  'data|3': [{
    'id|+1': [1, 2, 3, 4],
    'name|1': ['张晓明', '黄磊', '陈奕迅', '李四'],
    'phone|1': ['186*****411', '139*****520'],
    'avatar|1': ['http://img5.imgtn.bdimg.com/it/u=1548619045,2820406340&fm=27&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=3669894204,967945959&fm=27&gp=0.jpg', 'http://img2.imgtn.bdimg.com/it/u=1457831063,3293502031&fm=27&gp=0.jpg'],
    'status|1': ['挂失中', '审核中']
  }]
});

Mock.mock(aipurl_.familyDelete, {
  code: 1,
  msg: '删除成功'
});

Mock.mock(aipurl_.familyInfo, {
  code: 1,
  data: {
    'id|+1': [1, 2, 3, 4],
    'name|1': ['张晓明', '黄磊', '陈奕迅', '李四'],
    'phone|1': ['186*****411', '139*****520'],
    'nike|1': ['一头小白菜', '追追'],
    'avatar|1': ['http://img5.imgtn.bdimg.com/it/u=1548619045,2820406340&fm=27&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=3669894204,967945959&fm=27&gp=0.jpg', 'http://img2.imgtn.bdimg.com/it/u=1457831063,3293502031&fm=27&gp=0.jpg'],
    'status|1': ['挂失中', '审核中'],
    'tip|1': ['该用户已于2018-08-09日申请']

  }
});


