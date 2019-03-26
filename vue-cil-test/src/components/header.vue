<template>
  <div>
    <van-nav-bar title="豆瓣"/>
  </div>
</template>

<script>
import { NavBar, Toast } from "vant";
export default {
  components: {
    NavBar
  },
  methods: {
    // onClickLeft() {
    //   Toast("返回");
    // }
  }
};
</script>

<style>
.van-nav-bar {
  background-color: #176fd7 !important;
  color: #ffffff !important;
}
</style>
