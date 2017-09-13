<template>
  <div class="mine">
    <group v-if="!isDelete" :title="'共位家庭成员' + familyList.length">
      <cell :title="cellItem.name" v-for="(cellItem, index) in familyList" :inline-desc='cellItem.phone' :key="index" :islink="true" :link="'/family/' + cellItem.id">
        <span slot="icon" class="cell-icon">
          <img :src="cellItem.avatar">
        </span>
        <span slot="child" style="color: #E64340;">
          {{cellItem.status}}
        </span>
      </cell>
    </group>
    <checker v-if="isDelete" type="checkbox" v-model="familyCheck" selected-item-class="checker-item-selected">
      <div class="weui-cells__title">共位家庭成员4</div>
      <div class="weui-cells">
        <checker-item class="weui-cell" v-for="(cellItem, index) in familyList" :ref="'checker_' + cellItem.id" :value="cellItem.id" :key="cellItem.id">
          <div class="weui-cell__hd">
            <span class="cell-icon"> <img :src="cellItem.avatar"> </span>
          </div>
          <div class="vux-cell-bd vux-cell-primary">
            <p>
              <label class="vux-label">{{cellItem.name}}</label>
            </p>
            <span class="vux-label-desc">{{cellItem.phone}}</span>
          </div>
          <div class="weui-cell__ft">
            <div class="checker-circle"></div>
          </div>
        </checker-item>
      </div>
    </checker>
    <actionsheet v-model="actionsheet" show-cancel :menus="actionsheetMenus" @on-click-menu-delete="deleteFamily">
      <p slot="header">确定删除?</p>
    </actionsheet>
    <div style="margin:20px 10px">
      <x-button type="primary" plain v-if="!isDelete" link="/family/add">添加成员</x-button>
      <x-button type="warn" plain v-if="!isDelete" @click.native="toggleDelete">删除成员</x-button>
      <flexbox>
        <flexbox-item>
          <x-button type="default" v-if="isDelete" @click.native="toggleDelete">取消</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" v-if="isDelete" @click.native="alertDelete">确认</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
import { Checklist } from 'vux'
export default {
  components: {
    Checklist
  },
  data() {
    return {
      familyCheck: [],
      familyList: [],
      isDelete: false,
      actionsheet: false,
      actionsheetMenus: {
        delete: '<span style="color:red">删除</span>'
      }
    }
  },
  computed: {},
  created() {
    this.getFamily();
  },
  methods: {
    toggleDelete() {
      this.isDelete = !this.isDelete;
      this.familyCheck = [];
    },
    getFamily() {
      this.$apis.famliyList().then(res => {
        this.familyList = res.data;
      })
    },
    alertDelete() {
      if (this.familyCheck.length <= 0) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请选择成员',
        });
        return;
      };
      this.actionsheet = true;
    },
    deleteFamily() {
      this.$apis.familyDelete().then(res => {
        this.$vux.toast.show({
          text: '删除成功',
        });
        this.isDelete = false;
        this.familyCheck = [];
        this.getFamily();
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

.vux-checker-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.checker-circle {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 100%;
}

.checker-item-selected .checker-circle {
  border-color: #1dae1c;
}

.checker-item-selected .checker-circle:before {
  content: '';
  display: block;
  height: 12px;
  width: 12px;
  background-color: #1dae1c;
  border-radius: 100%;
  margin: 6px;
}

</style>
