<template>
  <Order api="contractOrder" :params="{id: id}"></Order>
</template>
<script>
export default {
  computed: {
    id (){
      return this.$route.params.id;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
