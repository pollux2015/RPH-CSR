/**
 * api接口文档
 * 例: "login": "POST,/user/login",
 */
export default {
  // Common
  'login': 'POST,/admin/index/login',
  'logout': 'POST,/admin/index/logout',
  'menus': 'GET,/admin/index/menu',
  'modifyPasswd': 'POST,/union/index/modifyPasswd',

  'course': 'GET,/admin/course_package/index', // 分页获取课程
  'courseToppicIndex': 'GET,/admin/course_topic/index', // 分页获取课程专题
  'courseTopEdit': 'POST,/admin/course_topic/edit', // 编辑某个课程专题
  'courseTopStatus': 'POST,/admin/course_topic/editStatus', // 编辑某个课程专题状态
  'courseTopSort': 'POST,/admin/course_topic/editSort', // 编辑某个课程专题排序
  'courseTopList': 'GET,/admin/course_topic/courseList', // 获取课程专题下的所有课程
  'courseTopicInfo': 'GET,/admin/course_topic/info',

  'coursePayList': 'GET,/admin/course/payList',
  'courseSetPrice': 'POST,/admin/course/setPrice',
  'courseInfo': 'POST,/admin/course/info',
  'orderIndex': 'GET,/admin/order/index', // 订单记录

  'coursePackage': 'GET,/admin/course_package/index', // 分页获取课
  'setCoursePackage': 'POST,/admin/course_package/setRecommend', // 编辑某个课程包的推荐状态
  'editRecommendSort': 'POST,/admin/course_package/editRecommendSort', //设置推荐课程包排序


  'enrollIndex': 'GET,/admin/enroll/index',
  'enrollDelete':'POST,/admin/enroll/delete',

  //Slider
  'adminSlider': 'GET,/admin/slider/index', 
  'adminSliderInfo': 'GET,/admin/slider/info', //轮播详情
  'adminSliderCreate': 'POST,/admin/slider/create', //创建轮播
  'adminSliderEdit': 'POST,/admin/slider/edit', //修改轮播
  'adminSliderStatus': 'POST,/admin/slider/status', //修改显示状态
  'adminSliderDelete': 'POST,/admin/slider/delete', //删除信息
  'adminSliderOrder': 'POST,/admin/slider/order', //排序

};
