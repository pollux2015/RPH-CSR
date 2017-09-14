<template>
  <div>
    <div class="img-col" v-for="(item, index) in list">
      <img style="width: 100%;" class="previewer-demo-img" :src="item.src" width="100" @click="show(index)">
    </div>
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options"></previewer>
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
      list: [],
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
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.$apis.contractAtta({
      id: this.id
    }).then(res => {
      const list_ = []
      this.$lodash.forEach(res.data, (item) => {
        list_.push({
          src: item
        })
      })
      this.list = list_;
    });
  },
  methods: {
    show(index) {
      this.$refs.previewer.show(index)
    }
  },
}

</script>
<style scoped>
.img-col {
  width: 80%;
  margin: 20px auto;
  background-color: #fff;
  padding: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
}

.img-col img {
  display: block;
}

</style>
