<template>
  <div class="mine">
    <div class="marquee-outer" v-if="info.tips && info.tips.length">
      <marquee>
        <marquee-item v-for="i in info.tips" :key="i" class="align-middle">{{i}}</marquee-item>
      </marquee>
    </div>
    <group v-if="isEdit" label-width="4.5em" label-margin-right="2em" label-align="left">
      <cell title="头像" value="value" is-link>
        <img :src="info.avatar" style="width: 40px; height: 40px;">
      </cell>
      <cell title="微信绑定" :value="info.wxname"></cell>
    </group>
    <group label-margin-right="2em" label-align="left">
      <x-input title="名称" v-model="info.name" text-align="right" :show-clear="false" :required="true"></x-input>
      <x-input title="昵称" v-model="info.nickname" text-align="right" :show-clear="false"></x-input>
      <x-input title="手机号码" v-model="info.phone" text-align="right" :required="true" :show-clear="false" is-type="china-mobile"></x-input>
      <datetime title="出生日期" v-model="info.birth"></datetime>
    </group>
    <div style="margin:20px 10px">
      <x-button type="primary" @click.native="saveForm">保存</x-button>
      <x-button v-if="isEdit" type="warn" @click.native="confirmLost">挂失</x-button>
    </div>
  </div>
</template>
<script>
import { Marquee, MarqueeItem } from 'vux'
export default {
  components: {
    Marquee, MarqueeItem
  },
  data() {
    return {
      familyCheck: [],
      info: {},
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    isEdit() {
      return this.id > 0;
    }
  },
  created() {
    if (this.isEdit) {
      this.getFamilyInfo();
    }
  },
  methods: {
    getFamilyInfo() {
      this.$apis.familyInfo({
        id: this.id
      }).then(res => {
        this.info = res.data;
      })
    },
    confirmLost() {
      const _this = this
      this.$vux.confirm.prompt('请输入手机验证码', {
        title: '确认挂失' + this.info.name + '?',
        onConfirm: (msg) => {
          this.$apis.reportLost().then(res => {
            this.$vux.toast.show({
              text: '挂失成功',
            });
            this.getFamilyInfo();
          });
        }
      })
    },
    saveForm() {
      if (!this.info.name || !this.info.nickname || !this.info.phone || !this.info.birth) {
        return false;
      }
      let params = this.$lodash.assignIn({ id: this.id }, this.info);
      this.$apis.familyEdit(params).then(res => {
        this.$router.push({
          name: 'family'
        });
        this.$vux.toast.show({
          text: '保存成功'
        });
      })
    },
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell-icon {
  display: inline-block;
  width: 60px;
  height: 60px;
  overflow: hidden;
  vertical-align: middle;
  text-align: center;
  margin-right: 10px;
}

.cell-icon img {
  width: 100%;
}

.marquee-outer{
  padding: 5px 0;
  text-align: center;
  background-color: #FDD047;
  color: #352a0a;
}

</style>
