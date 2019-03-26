<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item class="iconfont icon-shouye" to="/home">首页</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-sousuo" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-icon03" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang='less' scoped>
.iconfont {
  font-size: 20px;
}
</style>
