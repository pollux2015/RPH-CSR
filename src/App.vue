<template>
  <div id="app" style="height: 100%;">
    <view-box ref="viewBox" :body-padding-top="46 +'px'" :body-padding-bottom="54 +'px'">
      <x-header slot="header" :left-options="{showBack: routeName !='home' }" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        {{metaName}}
      </x-header>
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item show-dot link="/msg">
          <i slot="icon" class="iconfont icon-interactive"></i>
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item link="/">
          <i slot="icon" class="iconfont icon-homepage"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item selected link="/mine">
          <i slot="icon" class="iconfont icon-addressbook"></i>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>
<script>
import { ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'app',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
  },
  data() {
    return {}
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    metaName() {
      return this.$store.getters.metaName;
    }
  }
}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

</style>
