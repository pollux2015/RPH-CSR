<template>
  <InfiniteLoading :style="{'margin-bottom': marginBottom +'px'}" :on-infinite="fetchData" ref="infiniteLoading">
    <span slot="no-results">
      暂无数据
    </span>
    <span slot="no-more">
      <divider>我是有底线的</divider>
    </span>
    <span slot="spinner">
      <div style="padding: 10px">
        <inline-loading></inline-loading>
        <span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;加载中</span>
    </div>
    </span>
  </InfiniteLoading>
</template>
<script>
import { Divider, InlineLoading } from 'vux'
import InfiniteLoading from 'vue-infinite-loading';
export default {
  components: {
    InfiniteLoading,
    Divider,
    InlineLoading
  },
  props: {
    value: {
      type: Array
    },
    api: {
      type: String,
      required: true
    },
    params: {
      type: Object
    },
    marginBottom: {
      type: Number,
      default: 54
    },
  },
  data() {
    return {
      pagesize: 10, // 每页显示
      page: {}, // 分页
      list: [],
    }
  },
  created() {
  },
  methods: {
    fetchData() {
      // 默认参数
      let defaultParams = {
        page: this.page.cur + 1 || 1,
        pagesize: this.pagesize
      };

      const params_ = this.$lodash.assign(defaultParams, this.params);
      if (params_.page >= this.page.pages) {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
      }
      this.$apis[this.api](params_).then(res => {
        this.page = res.page || {};
        this.$emit("input", this.value.concat(res.data));
        setTimeout(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        }, 600);
      })
    }
  }
}

</script>
<style scoped>


</style>
