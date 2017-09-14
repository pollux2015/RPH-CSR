<template>
<div style="margin-bottom: 40px;">
  <div class="contract" v-for="contract in contractList">
    <div class="contract-status" :class="{active: contract.status >0}">
      {{contract.status <=0 ? '合同已结束' : '合同进行中'}}
      <span class="contract-id">{{contract.id}}</span>
    </div>
  	<group style="margin-top:0;">
      <CellBox v-for="(cellItem, index) in contract.list">
      	<span class="cell-label">{{cellItem.label}}:</span> <span class="cell-value">{{cellItem.value}}</span>
      </CellBox>
      <CellBox>
        
      </CellBox>
    </group>
    <div class="line-after" style="background: #fff;">
      <div class="weui-form-preview__ft">
        <a :href="'tel:'+contract.tel" class="weui-form-preview__btn weui-form-preview__btn_default">联系物业</a>
        <a :href="'#contract/atta/'+ contract.id" class="weui-form-preview__btn weui-form-preview__btn_primary">电子合同</a>
        <a :href="'#contract/order/'+ contract.id" class="weui-form-preview__btn weui-form-preview__btn_primary">查看账单</a>
      </div>
    </div>
    <div style="margin: 20px 10px" v-if="contract.status > 0">
      <x-button type="warn" plain>申请续租</x-button>
    </div>
  </div>
  </div>
</template>
<script>
import { FormPreview, CellBox } from 'vux'
export default {
  components: {
    FormPreview,
    CellBox
  },
  data() {
    return {
      contractList: [],
    }
  },
  created() {
    this.$apis.contractInfo().then(res => {
      this.contractList = res.data
    })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contract .weui-cells {
  margin-top: 0;
}

.contract .cell-label{
	padding-right: 10px;
	min-width: 80px;
	text-align: justify;
}
.contract-id{
  font-size: 12px;
  color: #888;
  display: none;
  /*float: right;*/
}
.contract .cell-value{
	color: #888;
}
.contract-status{
  padding:5px 10px;
  line-height: 24px;
  color: #999;
}

.contract-status.active{
  color: #0BB20C;
}
</style>
