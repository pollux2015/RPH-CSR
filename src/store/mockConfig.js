import Mock from 'mockjs'
const Random = Mock.Random

Mock.mock(/\/user\/info/, {
  code: 1,
  data: {
    'id|+1': 1,
    'email': '@EMAIL',
    'name|1': ['张三', '李四'],
    'phone|1': ['186*****411', '139*****520'],
    'avatar|1': Random.dataImage('80x80', 'Hello')
  }
});
