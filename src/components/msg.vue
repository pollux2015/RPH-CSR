<template>
  <div class="mine" style="height:100px;">
    <panel type="5" :key="msgGroup.date" v-for="msgGroup in msgList" :list="msgGroup.list" :header="msgGroup.date">
      <div slot="src"></div>
    </panel>
     <LoadMore api="msgList" v-model="msgList" :params="{name: 1, cid: 2}"></LoadMore>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatars: {
        '1': 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        '2': 'http://placeholder.qiniudn.com/60x60/3cc51f/222',
        '3': 'http://placeholder.qiniudn.com/60x60/3cc51f/fd0000',
        'other': 'http://placeholder.qiniudn.com/60x60/3cc51f/fd0000',
      },
      msgList: []
    }
  },
  watch: {
    msgList(){
      this.$lodash.forEach(this.msgList, (group) => {
        this.$lodash.forEach(group.list || [], (item) => {
          item.src = this.avatars[item.scope];
        });
      });
    }
  },
  methods:{
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
