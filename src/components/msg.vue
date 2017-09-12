<template>
  <div class="mine">
    <panel type="5" :key="msgGroup.date" v-for="msgGroup in msgList" :list="msgGroup.list" :header="msgGroup.date">
    	<div slot="src">321</div>
    </panel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgList: [{
        date: '2017年08月09日',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '水费账单提醒',
          desc: '新增#水费账单#42.00元,请于2017-07-08日24时钱完成支付.'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '电费账单提醒',
          desc: '新增#电费账单#42.00元,请于2017-07-08日24时钱完成支付.'
        }]
      },{
        date: '2017年08月11日',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '水费账单提醒',
          desc: '新增#水费账单#42.00元,请于2017-07-08日24时钱完成支付.'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '电费账单提醒',
          desc: '新增#电费账单#42.00元,请于2017-07-08日24时钱完成支付.'
        }]
      }]
    }
  },
  created() {
    // console.log(this.$methods.api())
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
