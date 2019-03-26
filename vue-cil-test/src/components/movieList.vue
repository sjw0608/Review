<template>
  <div class="movie-list">
    <div class="movie-item" :id="item.id" v-for="item in moviesList" :key="item.id">
      <img :src="item.images.large || item.images.medium || item.images.small" alt>
      <van-rate v-model="item.rating.stars" :size="10" disabled disabled-color="#ffd21e"/>
      <span>{{item.rating.average}}</span>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import { Rate } from "vant";
export default {
  components: {
    Rate
  },
  props: {
    moviesList: Array
  }
};
</script>

<style lang='less'>
.movie-list {
  width: 100%;
  display: flex;
  //   flex: 1;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .movie-item {
    width: 30%;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
