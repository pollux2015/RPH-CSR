<template>
  <div class="order">
    <div class="sticky-header" v-if="title">
      {{title}}
    </div>
    <div v-for="orderItem in orderList">
      <div class="moment-outer">
        <span class="moment">{{moment(orderItem.date) + '前'}}</span>
      </div>
      <div class="order-item">
        <div class="order-title line-after">
          <span class="order-title-icon">
          <i class="iconfont icon-zhifubao" v-if="orderItem.payway == 1"></i>
          <i class="iconfont icon-weixinzhifu" v-if="orderItem.payway == 2"></i>
        </span> {{orderItem.payway_ + '-' + orderItem.title}}
        </div>
        <div class="order-price line-after line-after-dot">
          <p>支付金额</p>
          <strong>￥{{orderItem.price}}</strong>
        </div>
        <div class="order-info">
          <span class="label">收款方:</span>
          <span>{{orderItem.company}}</span>
        </div>
        <div class="order-info">
          <span class="label">交易状态:</span>
          <span v-if="orderItem.status == 1" style="color:#09BB07">支付成功, 对方收款</span>
          <span v-if="orderItem.status == 0" style="color:#f74c31">支付失败</span>
        </div>
        <div class="order-info">
          <span class="label">交易时间:</span>
          <span>{{orderItem.date}}</span>
        </div>
      </div>
    </div>
    <LoadMore :api="api" v-model="orderList" @fetch="orderChange" :params="params"></LoadMore>
  </div>
</template>
<script>
import moment from 'moment';
import {Sticky } from 'vux'
moment.locale('zh-cn');
export default {
  components: {
    Sticky
  },
  props: {
    offset: {
      type: Number,
      default: 46
    },
    params: {
      type: Object
    },
    api: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: '',
      orderList: []
    }
  },
  methods: {
    moment(date) {
      return moment(date, "YYYYMMDD").fromNow('LLLL');
    },
    orderChange(res){
      this.title = res.title;
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sticky-header{
  font-size: 16px;
  color: #fff;
  background-color: rgba(0,0,0,0.6);
  padding: 5px 15px;
}
.moment-outer {
  text-align: center;
  padding: 10px;
}

.moment {
  color: #fff;
  padding: 2px 15px;
  display: inline-block;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #CECECE;
  font-size: 12px;
}

.order-item {
  background-color: #fff;
  margin: 0 10px 15px;
  padding-bottom: 20px;
  border-radius: 4px;
  /*box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2);*/
}

.order-title {
  padding: 10px 15px;
  font-size: 18px;
}

.order-price {
  padding: 38px 0 25px;
  margin: 0 15px;
  text-align: center;
  margin-bottom: 10px;
}

.order-price p {
  color: #999;
}

.order-price strong {
  font-size: 32px;
  font-weight: normal;
}

.order-info {
  padding: 2px 15px;
  font-size: 14px;
}

.order-info .label {
  display: inline-block;
  width: 80px;
  color: #999;
}

.order-title-icon {
  position: relative;
  height: 20px;
  padding-right: 34px
}

.order-title-icon .iconfont {
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 24px;
  color: #1FC622;
}

.order-title-icon .icon-zhifubao {
  color: #1FB4EE;
}



</style>
