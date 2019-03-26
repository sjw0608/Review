<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from "@/components/header.vue";
import VFooter from "@/components/footer.vue";
export default {
  components: {
    VHeader,
    VFooter
  }
};
</script>

<style lang="less">
.van-tabbar-item {
  .van-tabbar-item__text {
    font-size: 14px;
  }
}
</style>
