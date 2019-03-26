<template>
  <div>
    <h5>搜索页面{{num}}====={{name}}</h5>
    <button @click="add">点我</button>
    
    <button @click="$store.dispatch('addAction')">点我Action</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  // computed: {
  //   num() {
  //     return this.$store.state.num;
  //   }
  // }

  // computed: mapState({
  //   num: state => state.num,
  //   name: state => state.name
  // })

  computed: {
    count() {
      return 20;
    },
    ...mapState({
      num: state => state.num,
      name: state => state.name
    })
  },
  methods: {
    ...mapMutations({
      add: "add"
    })
    // ...mapActions({
    //   addAction: "addAction"
    // })
  }
};
</script>

<style>
</style>
