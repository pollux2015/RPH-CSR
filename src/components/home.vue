<template>
  <div>
    <grid>
      <grid-item>
        <div class="header-item">
          <div class="num">78<span class="func-txt extr">%</span></div>
          <div class="func-txt txt">门锁电量</div>
        </div>
      </grid-item>
      <grid-item>
        <div class="header-item">
          <div class="num">3<span class="func-txt extr">条</span></div>
          <div class="func-txt txt">消息通知</div>
        </div>
      </grid-item>
      <grid-item>
        <div class="header-item">
          <div class="num">6<span class="func-txt extr">项</span></div>
          <div class="func-txt txt">缴费情况</div>
        </div>
      </grid-item>
    </grid>
    <swiper v-model="swiperModel" class="swiper" :style="{'background-position': swiperModel == 1 ? 'right' : 'left'}" height="190px" dots-class="swiper-dot">
      <swiper-item class="swiper-item">
        <div class="swiper-tip swiper-tip-right">验证码开锁<i class="iconfont icon-enter"></i></div>
        <div class="btn-circle-outer">
          <div class="btn-circle">
            <i class="icon iconfont icon-lock"></i>
          </div>
        </div>
      </swiper-item>
      <swiper-item class="swiper-item">
        <div class="swiper-tip swiper-tip-left"><i class="iconfont icon-return"></i>微信开锁</div>
        <div class="btn-getcode">获取验证码</div>
      </swiper-item>
    </swiper>
    <div class="user-header">
      <h3>张晓明</h3>
      <p>欢迎回家, 今天准备做什么?</p>
      <div class="family-group">
        <div class="family-item"></div>
        <div class="family-item"></div>
        <div class="family-item"></div>
      </div>
    </div>
    <grid>
      <grid-item>
        <div class="func-item">
          <div class="func-icon">
            <i class="iconfont icon-shake"></i>
          </div>
          <div class="func-txt">挂失服务</div>
        </div>
      </grid-item>
      <grid-item>
        <div class="func-item">
          <div class="func-icon">
            <i class="iconfont icon-decoration_fill"></i>
          </div>
          <div class="func-txt">维修服务</div>
        </div>
      </grid-item>
      <grid-item>
        <div class="func-item">
          <div class="func-icon">
            <i class="iconfont icon-customerservice_fill"></i>
          </div>
          <div class="func-txt">投诉建议</div>
        </div>
      </grid-item>
    </grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperModel: 0,
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  color: #424159;
}

.header-item {
  text-align: center;
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
  right: 0;
  font-size: 16px;
  right: 4px;
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
