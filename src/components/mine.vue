<template>
  <div class="mine">
    <panel :list="userInfo" type="1"></panel>
    <group>
      <cell :title="cellItem.title" :link="cellItem.link" v-for="(cellItem, index) in funsA" :key="index" is-link>
        <span slot="icon" class="cell-icon">
          <i class="iconfont"  :class="['iconfont', 'icon-' + cellItem.icon]" :style="{color: cellItem.color || '#444'}"></i>
        </span>
      </cell>
    </group>
    <group>
      <cell :title="cellItem.title" :link="cellItem.link" v-for="(cellItem, index) in funsB" :key="index" is-link>
        <span slot="icon" class="cell-icon">
          <i class="iconfont"  :class="['iconfont', 'icon-' + cellItem.icon]" :style="{color: cellItem.color || '#444'}"></i>
        </span>
      </cell>
    </group>
    <group>
      <cell :title="cellItem.title" :link="cellItem.link" v-for="(cellItem, index) in funsC" :key="index" is-link>
        <span slot="icon" class="cell-icon">
          <i class="iconfont"  :class="['iconfont', 'icon-' + cellItem.icon]" :style="{color: cellItem.color || '#444'}"></i>
        </span>
      </cell>
    </group>
    <group style="margin-bottom: 50px">
      <cell :title="cellItem.title" is-link v-for="(cellItem, index) in funsD" :key="index">
        <span slot="icon" class="cell-icon">
          <i class="iconfont"  :class="['iconfont', 'icon-' + cellItem.icon]" :style="{color: cellItem.color || '#444'}"></i>
        </span>
      </cell>
    </group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
      funsA: [{
        color: '#24AFFC',
        icon: 'interactive_fill',
        link: '/msg',
        title: '消息中心'
      }, {
        color: '#FECB2F',
        icon: 'group_fill',
        link: '/family',
        title: '家庭成员'
      }, {
        color: '#F75356',
        icon: 'financial_fill',
        link: '/order',
        title: '缴费情况'
      }],
      funsB: [{
        color: '#24AFFC',
        icon: 'decoration_fill',
        link: '/repair',
        title: '维修管理'
      }, {
        color: '#24AFFC',
        icon: 'customerservice_fill',
        link: '/complain',
        title: '投诉建议'
      }],
      funsC: [{
        color: '#24AFFC',
        icon: 'businesscard_fill',
        link: '/checkout',
        title: '申请退房'
      }, {
        color: '#24AFFC',
        icon: 'document_fill',
        link: '/contract',
        title: '合同租期'
      }],
      funsD: [{
        color: '#F75356',
        icon: 'offline_fill',
        title: '退出'
      }]
    }
  },
  computed: {
    userInfo() {
      const storInfo = this.$store.getters.userInfo;
      return [{
        title: storInfo.name,
        src: storInfo.avatar,
        desc: storInfo.phone
      }];
    }
  },
  created() {
    
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell-icon {
  display: inline-block;
  width: 26px;
  height: 26px;
  line-height: 26px;
  vertical-align: middle;
  text-align: center;
  margin-right: 5px;
}

.cell-icon .iconfont {
  font-size: 24px;
}

</style>
