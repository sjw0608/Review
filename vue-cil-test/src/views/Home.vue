<template>
  <div class="home">
    <div class="hot">
      <div class="title">
        {{hotCity}}
        <span class="iconfont icon-hot"></span>
      </div>
      <movie-list :moviesList="hotList"></movie-list>
    </div>
  </div>
</template>

<script>
import movieList from "@/components/movieList";
import { mapState } from "vuex";
export default {
  components: {
    movieList
  },
  data() {
    return {};
  },
  created() {
    this.getHot();
    console.log(this.$store.state.hotCity);
  },
  computed: {
    ...mapState({
      hotCity: "hotCity",
      hotList: "hotList"
    })
  },
  methods: {
    getHot() {
      this.$store.dispatch("hot");
    }
  }
};
</script>

<style lang='less' scoped>
.home {
  padding: 10px;
  .title {
    font-size: 18px;
    .icon-hot {
      color: red;
    }
  }
}
</style>
