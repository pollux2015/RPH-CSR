<template>
  <div>
    <div v-transfer-dom>
      <previewer :list="viewlist" ref="previewer" :options="options"></previewer>
    </div>
    <group label-margin-right="2em" label-align="left">
      <cell title="申请人" :value="userInfo.name"></cell>
      <cell title="预约时间" :value="info.date"></cell>
      <cell title="类型" :value="info.type"></cell>
    </group>
    <Card>
      <div slot="content" style="padding: 15px;">
        <div style="color: #586C94">{{info.content}}</div>
        <div class="complain-img">
          <span class="previewer-demo-img" width="100" v-for="(img, index) in info.images" @click="show(info.images, index)"><img :src="img"></span>
        </div>
      </div>
    </Card>
    <Card>
      <div class="info-header weui-panel__hd" slot="header">
        <step v-model="info.step" v-if="info.steps">
          <step-item v-for="(step, index) in info.steps" :key="index" :title="step.name" :description="step.date"></step-item>
        </step>
      </div>
      <div slot="content">
        <timeline v-if="info.history">
          <timeline-item v-for="item in info.history">
            <h4 class="recent">{{item.title}}</h4>
            <p class="recent">{{item.date}}</p>
          </timeline-item>
        </timeline>
      </div>
    </Card>
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
import { Previewer, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  data() {
    return {
      viewlist: [],
      showPopup: false,
      types: {
        0: '家居损坏',
        1: '墙面损坏',
        2: '电器损坏'
      },
      info: {
        'id': '',
        'type': 0,
        'content': '',
        'date': '2017-08-09',
        'step': 1,
        'steps': null,
        'history': null
      },
      options: {
        getThumbBoundsFn(index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
        }
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    }
  },
  created() {
    this.$apis.complainInfo({
      id: this.$route.params.id
    }).then(res => {
      this.info = res.data;
    })
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
          name: 'complain'
        });
        this.$vux.toast.show({
          text: '保存成功'
        });
      })
    },
    show(list, index) {
      const list_ = []
      this.$lodash.forEach(list, (item) => {
        list_.push({
          src: item
        })
      })
      this.viewlist = list_;
      setTimeout(() => {
        this.$refs.previewer.show(index)

      })
    }
  }
}

</script>
<style scoped>
.header-item {
  font-size: 12px;
}

.header-item {
  font-size: 12px;
}

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

.info-header {
  padding: 15px;
}

.info-header a {
  color: rgba(74, 67, 43, 1.00);
}

.info-header .weui-grids:before,
.info-header .weui-grids:after {
  display: none;
}

.info-header .weui-grid:before {
  display: none;
}

.vux-timeline-item-content {
  padding: 0 0 1.5rem 1.3rem !important;
}

.vux-timeline-item-content * {

  color: #666;
  font-weight: normal;
}

.complain-img{
  padding-top: 10px;
}
.complain-img span {
  display: inline-block;
  width: 90px;
  height: 90px;
  overflow: hidden;
  background-color: #e5e1e1;
  border-radius: 2px;
  margin-right: 4px;
}

.complain-img img {
  width: 100%;
}

</style>
