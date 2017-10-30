<template>
  <div>
    <group label-margin-right="2em" label-align="left">
      <cell title="申请人" :value="userInfo.name"></cell>
      <datetime title="预约时间" v-model="info.date"></datetime>
      <cell title="选择类型" :value="types[info.type]" is-link @click.native="showPopup=true"></cell>
      <x-textarea v-model="info.content" :max="100" :required="true" placeholder="请输入内容" :height="120" :rows="8" :cols="30"></x-textarea>
      <div style="margin:20px 10px">
        <x-button type="primary" :disabled="info.content.length < 10" @click.native="saveForm">提交</x-button>
      </div>
    </group>
    <div>
      <popup v-model="showPopup" class="checker-popup">
        <div style="padding:10px 10px 40px 10px;">
          <p style="padding: 5px 5px 5px 2px;color:#888;">选择类型</p>
          <checker v-model="info.type" default-item-class="demo4-item" selected-item-class="demo4-item-selected" disabled-item-class="demo4-item-disabled">
            <checker-item v-for="(type, key) in types" :value="key" :key="key" @on-item-click="onItemClick"> {{type}} </checker-item>
          </checker>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPopup: false,
      types: {
        0: '家居损坏',
        1: '墙面损坏',
        2: '电器损坏'
      },
      info: {
        type: 0,
        content: '',
        date: '2017-08-09'
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    }
  },
  methods: {
    onItemClick(value, disabled) {
      if (!this.disabled) {
        this.showPopup = false
      }
    },
    saveForm() {
      if (!this.info.content) {
        return false;
      }
      this.$apis.familyEdit(this.info).then(res => {
        this.$router.push({
          name: 'repair'
        });
        this.$vux.toast.show({
          text: '保存成功'
        });
      })
    }
  }
}

</script>
<style scoped>
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}

.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}

.demo4-item-disabled {
  color: #999;
}

</style>
