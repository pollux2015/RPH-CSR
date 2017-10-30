<template>
  <div>
    <grid class="homeHeader">
      <grid-item class>
        <div class="header-item chartA">
          <div class="num"><countup :end-val="info.doorPower" class="demo1"></countup><span class="func-txt extr">%</span></div>
          <div class="func-txt txt">门锁电量</div>
        </div>
      </grid-item>
      <grid-item>
        <div class="header-item chartB">
          <div class="num"><countup :end-val="info.msgNumber" class="demo1"></countup><span class="func-txt extr">条</span></div>
          <div class="func-txt txt">消息通知</div>
        </div>
      </grid-item>
      <grid-item>
        <div class="header-item chartC">
          <div class="num"><countup :end-val="info.payNumber" class="demo1"></countup><span class="func-txt extr">项</span></div>
          <div class="func-txt txt">缴费情况</div>
        </div>
      </grid-item>
    </grid>
    <swiper v-model="swiperModel" class="swiper" :style="{'background-position': swiperModel == 1 ? 'right' : 'left'}" height="190px" dots-class="swiper-dot">
      <swiper-item class="swiper-item">
        <div class="swiper-tip swiper-tip-right">验证码开锁<i class="iconfont icon-enter"></i></div>
        <div class="btn-circle-outer" :class="{'btn-circle-spinner': unlockLoadding}" @click="unlockByWechat">
          <div class="btn-circle home-spinner sbtn-circle-spinner">
            <spinner v-show="unlockLoadding" type="ripple" size="60px"></spinner>
            <i  v-show="!unlockLoadding" class="icon iconfont icon-lock"></i>
          </div>
        </div>
      </swiper-item>
      <swiper-item class="swiper-item">
        <div class="swiper-tip swiper-tip-left"><i class="iconfont icon-return"></i>微信开锁</div>
        <div class="btn-getcode home-spinner" @click="getCode">获取验证码<spinner v-show="unlockLoadding"  type="ripple" style="margin-left: 5px;" size="34px"></spinner></div>
      </swiper-item>
    </swiper>
    <div class="user-header">
      <h3>{{userInfo.name}}</h3>
      <p>欢迎回家, 今天准备做什么?</p>
      <div class="family-group" @click="goRouter('family')">
        <div v-for="item in info.family" class="family-item">
          <img :src="item.avatar">
        </div>
      </div>
    </div>
    <grid :cols="3">
      <grid-item v-for="item in funclist">
        <div class="func-item" @click="goRouter(item.link)">
          <div class="func-icon">
            <i :class="['iconfont', 'icon-' + item.icon]"></i>
          </div>
          <div class="func-txt">{{item.title}}</div>
        </div>
      </grid-item>
    </grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doStart: false,
      info: {
        'doorPower': 0,
        'msgNumber': 0,
        'payNumber': 0,
        'family': []
      },
      swiperModel: 0,
      confirmClose: false,
      unlockLoadding: false,
      funclist: [{
        color: '#24AFFC',
        icon: 'decoration_fill',
        link: 'repair',
        title: '维修管理'
      }, {
        color: '#24AFFC',
        icon: 'customerservice_fill',
        link: 'complain',
        title: '投诉建议'
      }, {
        color: '#F75356',
        icon: 'financial_fill',
        link: 'order',
        title: '缴费情况'
      }, {
        color: '#FECB2F',
        icon: 'group_fill',
        link: 'family',
        title: '家庭成员'
      }, {
        color: '#24AFFC',
        icon: 'businesscard_fill',
        link: 'checkout',
        title: '申请退房'
      }, {
        color: '#24AFFC',
        icon: 'document_fill',
        link: 'contract',
        title: '合同租期'
      }],
    }
  },
  created(){
    this.$apis.homeData().then(res => {
      this.info = res.data;
    });
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    }
  },
  methods: {
    goRouter(name) {
      this.$router.push({
        name: name
      })
    },
    unlockByWechat() {
      const _this = this;
      this.$vux.confirm.show({
        title: '微信开锁',
        'closeOnConfirm': false,
        content: '确认马上开锁?',
        onShow(){
          _this.unlockLoadding = true;
        },
        onHide(){
          setTimeout(() => {
            _this.unlockLoadding = false;
          }, 1000)
        },
        onConfirm() {
          _this.$apis.unlockByWechat().then(res => {
            _this.$vux.confirm.hide();
            _this.$vux.toast.show({
              type: 'text',
              position: 'top',
              text: '开门成功'
            });
          })
        }
      })
    },
    getCode() {
      const _this = this;
      this.$vux.confirm.prompt('请输入验证码', {
        title: '验证码开锁',
        'closeOnConfirm': false,
        onShow() {
          _this.unlockLoadding = true;
          _this.$vux.confirm.setInputValue('')
          _this.$apis.getCode().then(res => {
            _this.$vux.toast.show({
              type: 'text',
              position: 'top',
              text: '验证码已发送至绑定手机号'
            });
          })
        },
        onHide(){
          setTimeout(() => {
            _this.unlockLoadding = false;
          }, 1000)
        },
        onConfirm(code) {
          if(!code){
            _this.$vux.toast.show({
              type: 'text',
              position: 'top',
              text: '请输入验证码'
            });
            return;
          }
          _this.$apis.unlockByCode({
            code
          }).then(res => {
            _this.$vux.confirm.hide();
            _this.$vux.toast.show({
              type: 'text',
              position: 'top',
              text: '开门成功'
            });
          })
        }
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  color: #424159;
}

.homeHeader .weui-grid {
  padding: 0
}

.header-item {
  padding: 25px 10px 45px;
  text-align: center;
}

.chartA,
.chartB,
.chartC {
  background-size: 100% auto;
  background-position: 0 bottom;
  background-repeat: no-repeat;
}

.chartA {
  background-image: url(../assets/chart1.png);
}

.chartB {
  background-image: url(../assets/chart2.png);
}

.chartC {
  background-image: url(../assets/chart3.png);
}

.swiper {
  transition: all 0.4s;
  background-image: url(../assets/home-bg.png);
}

.swiper-item {
  position: relative;
}

.swiper-item:after {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.8;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background-color: #44679C;
}

.swiper-tip {
  position: absolute;
  z-index: 10;
  top: 15px;
  color: #fff;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background-color: rgba(66, 65, 89, 0.4);
}

.swiper-tip .iconfont {

  font-size: 12px;
}

.swiper-tip-right {
  right: 0;
  padding: 2px 10px 2px 15px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.swiper-tip-right .iconfont {
  margin-left: 5px;
}

.swiper-tip-left .iconfont {
  margin-right: 5px;
}


.swiper-tip-left {
  left: 0;
  padding: 2px 15px 2px 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.swiper-dot .vux-icon-dot {
  background-color: #fff !important;
  opacity: 0.4;
}

.swiper-dot .vux-icon-dot.active {
  opacity: 1;
}

.header-item .num {
  position: relative;
  color: #424159;
  font-size: 40px;
}

.func-txt {
  font-size: 14px;
  color: #898A96;
}

.header-item .extr {
  position: absolute;
  font-size: 16px;
  font-weight: normal;
}


.btn-getcode {
  position: relative;
  z-index: 10;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  width: 200px;
  border-radius: 20px;
  color: #fff;
  margin: 75px auto;
  background-color: #09BB07;
  text-align: center;
}

.btn-circle-outer,
.btn-circle {
  z-index: 10;
  width: 80px;
  height: 80px;
  text-align: center;
  overflow: hidden;
  border-radius: 100%;
}

.btn-circle-outer {
  cursor: pointer;
  position: relative;
  margin: 53px auto;
  padding: 3px;
  border: 1px solid #fff;
}


.btn-circle {
  position: relative;
  line-height: 80px;
  font-size: 24px;
  color: #fff;
  /*background-color :rgba(255, 255, 255 , 0.5);*/
}


.btn-circle-spinner .vux-spinner{
  position: relative;
  z-index: 80;
  margin-top: -5px;
}

.home-spinner .vux-spinner{
  transition: all 0.4s;
  stroke: #fff;
  fill: #fff;
}

.btn-circle:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -30px;
  -webkit-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.4);
  filter: blur(10px);
}

.btn-circle .iconfont {
  transition: all 0.4s;
  font-size: 34px;
}

.func-item {
  text-align: center;
}

.func-icon {
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}

.func-icon .iconfont {
  font-size: 54px;
  color: #424159;
}

.user-header {
  position: relative;
  height: 45px;
  padding: 10px 20px;
  color: #fff;
  background-color: #6188B9;
  background-image: -webkit-linear-gradient(180deg, #6188B9, #325083);
}

.user-header h3 {
  font-size: 16px;
}

.user-header p {
  font-size: 14px;
}

.user-header .family-group {
  position: absolute;
  right: 22px;
  top: 12px;
}

.user-header .family-item {
  margin-right: -12px;
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 1);
}

.user-header .family-item img {
  width: 100%;
  height: 100%;
}

</style>
