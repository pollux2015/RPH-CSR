import Mock from 'mockjs'
const Random = Mock.Random
import aipurl from './apiurl';
import lodash from 'lodash'

// 循环生成表达式
let aipurl_ = {};
const url = lodash.forEach(aipurl, (item, key) => {
  let orgUrl = item.split(',')[1];
  let orgUrlAr = orgUrl.split('/');
  aipurl_[key] = RegExp(orgUrl);
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
    'wxname': 'POLLUX2017',
    'name|1': ['张晓明', '黄磊', '陈奕迅', '李四'],
    'phone|1': ['186*****411', '139*****520'],
    'nickname|1': ['一头小白菜', '追追'],
    'birth': '@date',
    'avatar|1': ['http://img5.imgtn.bdimg.com/it/u=1548619045,2820406340&fm=27&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=3669894204,967945959&fm=27&gp=0.jpg', 'http://img2.imgtn.bdimg.com/it/u=1457831063,3293502031&fm=27&gp=0.jpg'],
    'status|1': ['挂失中', '审核中'],
    'tips|3': ['该用户已申请挂失', '该用户已冻结于2018-08-09日']
  }
});

Mock.mock(aipurl_.familyEdit, {
  code: 1,
  msg: '编辑成功'
});

Mock.mock(aipurl_.reportLost, {
  code: 1,
  msg: '挂失成功'
});

// 缴费情况
Mock.mock(aipurl_.orderList, {
  code: 1,
  'data|5': [{
    'payway|1': [1, 2],
    'payway_|1': ['微信支付', '支付宝支付'],
    'price|1-100.1-2': 1,
    'title|1': [
      '水费账单',
      '电费账单',
      '物业费账单'
    ],
    'company|1': ['深圳市腾讯科技', '阿里巴巴', '深圳大学'],
    'status|1': [1, 0],
    'date|1': ['2017-9-14 11:11:12', '2017-9-13 11:11:12', '2017-9-12 11:11:12', '2017-9-14 11:11:12']
  }],
  page: {
    total: 20,
    page: 1,
    'cur|1-10': 5,
    pagesize: 3,
    pages: 10
  }
});


// 合同
Mock.mock(aipurl_.contractInfo, {
  code: 1,
  'data|2': [{
    id: '@id',
    'status|+1': [1, 0],
    tel: '10086',
    list: [{
      label: '项目',
      'value|1': ['伴山家园B345', '四海家园']
    }, {
      label: '起止时间',
      value: '2016-09-08至2017-09-08'
    }, {
      label: '付款方式',
      value: '付一压二'
    }, {
      label: '房屋押金',
      value: '5000元'
    }, {
      label: '管理费',
      value: '100元'
    }, {
      label: '物业管理',
      value: '中海物业管理公司'
    }, {
      label: '备注',
      value: '已申请钥匙一把'
    }]
  }]
});

Mock.mock(aipurl_.contractAtta, {
  code: 1,
  'data|2': [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505384821807&di=eca1a3f13554fa5c0c935e87cff8fff9&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F0065kURStw1es058eaeszj30kz0y0do4.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505384821806&di=66ca2ef2d0d6bad7b521f16e7fc86361&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20161110%2Fo%2F58A093BD3F2798DBF5EC10FA312B9998.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505384821806&di=66ca2ef2d0d6bad7b521f16e7fc86361&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20161110%2Fo%2F58A093BD3F2798DBF5EC10FA312B9998.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505384821806&di=66ca2ef2d0d6bad7b521f16e7fc86361&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20161110%2Fo%2F58A093BD3F2798DBF5EC10FA312B9998.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505384821806&di=66ca2ef2d0d6bad7b521f16e7fc86361&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20161110%2Fo%2F58A093BD3F2798DBF5EC10FA312B9998.jpeg',
  ]
});

Mock.mock(aipurl_.contractOrder, {
  code: 1,
  'title|1': ['伴山家园项目', '四海新城项目'],
  'data|5': [{
    'payway|1': [1, 2],
    'payway_|1': ['微信支付', '支付宝支付'],
    'price|1-100.1-2': 1,
    'title|1': [
      '水费账单',
      '电费账单',
      '物业费账单'
    ],
    'company|1': ['深圳市腾讯科技', '阿里巴巴', '深圳大学'],
    'status|1': [1, 0],
    'date|1': ['2017-9-14 11:11:12', '2017-9-13 11:11:12', '2017-9-12 11:11:12', '2017-9-14 11:11:12']
  }],
  page: {
    total: 20,
    page: 1,
    'cur|1-10': 5,
    pagesize: 3,
    pages: 10
  }
});

// 退房
Mock.mock(aipurl_.checkoutInfo, {
  code: 1,
  'data': {
    'id': '@id',
    'tel': '10086',
    'cost': '20000',
    'status|1': [0, 1],
    'status_': '已于2016-08-09日提交退房申请, 请耐心等待',
    'list': [{
      label: '项目',
      'value|1': ['伴山家园B345', '四海家园']
    }, {
      label: '起止时间',
      value: '2016-09-08至2017-09-08'
    }, {
      label: '付款方式',
      value: '付一压二'
    }, {
      label: '房屋押金',
      value: '5000元'
    }, {
      label: '管理费',
      value: '100元'
    }, {
      label: '物业管理',
      value: '中海物业管理公司'
    }, {
      label: '备注',
      value: '已申请钥匙一把'
    }]
  }
});

Mock.mock(aipurl_.checkout, {
  code: 1,
  msg: '申请成功'
});


// 退房
Mock.mock(aipurl_.reletInfo, {
  code: 1,
  'data': {
    'id': '@id',
    'tel': '10086',
    'cost': '20000',
    'status|+1': [0, 1],
    'status_': '已于2016-08-09日提交续租申请, 请耐心等待',
    'list': [{
      label: '项目',
      'value|1': ['伴山家园B345', '四海家园']
    }, {
      label: '起止时间',
      value: '2016-09-08至2017-09-08'
    }, {
      label: '付款方式',
      value: '付一压二'
    }, {
      label: '房屋押金',
      value: '5000元'
    }, {
      label: '管理费',
      value: '100元'
    }, {
      label: '物业管理',
      value: '中海物业管理公司'
    }, {
      label: '备注',
      value: '已申请钥匙一把'
    }]
  }
});

Mock.mock(aipurl_.contractRelet, {
  code: 1,
  msg: '申请成功'
});
