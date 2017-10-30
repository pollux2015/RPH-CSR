<template>
  <div>
    <div v-transfer-dom>
      <previewer :list="viewlist" ref="previewer" :options="options"></previewer>
    </div>
    <div class="func-fixed" @click="goAdd()">
      <div class="icon"><i class="iconfont icon-decoration_fill"></i></div>
      <span class="txt">发起维修</span>
    </div>
    <card v-for="item in repairList" :footer="{title: '查看详情', link:'/repair/' + item.id}">
      <div slot="header" class="weui-panel__hd">
        <span class="repair-date">{{item.start_time}}</span>
        <span class="repair-status" :class="{'repair-status-error': item.status_code == 0}">{{item.status}}</span>
      </div>
      <div slot="content" class="card-padding">
        <div class="repair-content">{{item.content}}</div>
        <div class="repair-img">
          <span class="previewer-demo-img" width="100" v-for="(img, index) in item.images" @click="show(item.images, index)"><img :src="img"></span>
        </div>
      </div>
    </card>
    <LoadMore api="repairList" v-model="repairList"></LoadMore>
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
      repairList: [],
      viewlist: [],
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  },
  methods: {
    goAdd() {
      this.$router.push({
        name: 'repair.add'
      })
    },
    goInfo(id) {
      this.$router.push({
        name: 'family.info',
        params: {
          id
        }
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
.card-padding {
  padding: 15px;
}

.repair-content {
  padding-bottom: 10px;
}

.repair-img span {
  display: inline-block;
  width: 45px;
  height: 45px;
  overflow: hidden;
  background-color: #e5e1e1;
  border-radius: 2px;
  margin-right: 4px;
}

.repair-img img {
  width: 100%;
}

.repair-date {
  float: right;
}

.repair-status {
  padding: 4px 8px;
  /*background-color: #09BB07;*/
  color: #09BB07;
  border-radius: 2px;
  margin-top: -5px;
}

.repair-status:before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #09BB07;
  border-radius: 100%;
  margin-right: 6px;
}

.repair-status-error {
  color: #F5545A;
}

.repair-status-error:before {
  background-color: #F5545A;
}

.func-fixed {
  position: fixed;
  right: 15px;
  bottom: 100px;
  z-index: 9;
  background-color: rgba(26, 173, 25, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  text-align: center;
  width: 70px;
  height: 70px;
  font-size: 12px;
}

.func-fixed .icon {

  height: 45px;
  line-height: 45px;
}

.func-fixed .txt {
  display: block;
  height: 25px;
  line-height: 25px;
}

.func-fixed .iconfont {
  position: relative;
  top: 4px;
  left: -2px;
  font-size: 45px;
}

</style>
