<template>
  <div style="margin-bottom: 40px;">
    <div class="contract">
      <div class="contract-status" v-if="contract.status > 0">
        {{contract.status_}}
      </div>
      <form-preview header-label="应付费用" :header-value="'¥'+contract.cost" :body-items="contract.list"></form-preview>
      <div class="line-after" style="background: #fff;">
        <div class="weui-form-preview__ft">
          <a v-if="contract.tel" :href="'tel:'+contract.tel" class="weui-form-preview__btn weui-form-preview__btn_primary">联系物业</a>
          <!-- <a :href="'#contract/atta/'+ contract.id" class="weui-form-preview__btn weui-form-preview__btn_primary">电子合同</a> -->
          <!-- <a :href="'#contract/order/'+ contract.id" class="weui-form-preview__btn weui-form-preview__btn_primary">查看账单</a> -->
        </div>
      </div>
      <div style="margin: 20px 10px" v-if="contract.status <= 0">
        <x-button type="warn" plain @click.native="relet">确定续租</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { FormPreview } from 'vux'
export default {
  components: {
    FormPreview
  },
  data() {
    return {
      contract: {},
    }
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$apis.reletInfo().then(res => {
        this.contract = res.data
      })
    },
    relet() {
      this.$apis.contractRelet({
        id: this.contract.id
      }).then(res => {
        this.$vux.toast.show({
          text: '申请成功'
        });
        this.getInfo();
      });
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contract-status {
  padding: 5px 10px;
  line-height: 24px;
  font-size: 14px;
  color: #0BB20C;
}

</style>
