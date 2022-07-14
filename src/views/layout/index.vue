<template>
  <div>
    <h1>layout</h1>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to='/layout/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/layout/find' icon="search">找房</van-tabbar-item>
      <van-tabbar-item to='/layout/news' icon="newspaper-o">咨询</van-tabbar-item>
      <van-tabbar-item to='/layout/my' icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      active: 0
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
