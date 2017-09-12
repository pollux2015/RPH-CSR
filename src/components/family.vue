<template>
  <div class="mine">
    <group :title="'共位家庭成员' + familyInfo.count">
      <cell :title="cellItem.name" v-for="(cellItem, index) in familyInfo.list" :inline-desc='cellItem.phone' :key="index" is-link>
        <span slot="icon" class="cell-icon">
        	<img :src="cellItem.src">
      	</span>
      </cell>
    </group>
    <checklist :title="'共位家庭成员' + familyInfo.count" required :options="familyInfo.list" v-model="familyCheck" @on-change="change">
    </checklist>
    <div style="margin:20px 10px">
      <x-button type="primary" plain link="BACK">添加成员</x-button>
      <x-button type="warn" plain link="BACK">删除成员</x-button>
    </div>
  </div>
</template>
<script>
import { Checklist } from 'vux'
import lodash from 'lodash'
export default {
	components: {
		Checklist
	},
  data() {
    return {
    	familyCheck: [],
      familyInfo: {
        count: '3',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          name: '张晓明',
          phone: '139****1024'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          name: '刘诗诗',
          phone: '186****2411'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          name: '张权',
          phone: '150****7810'
        }]
      }
    }
  },
  computed:{
		checklist (){
			lodash.forEach(familyInfo.list, (item) => {

			});
		}
  },
  created() {
    // console.log(this.$methods.api())
  },
  methods:{
		change(){}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell-icon {
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  text-align: center;
  margin-right: 10px;
}

.cell-icon .iconfont {
  font-size: 24px;
}

</style>
