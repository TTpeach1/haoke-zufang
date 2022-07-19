<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="城市列表"
      left-arrow
      @click-left="toBack"
    />
  </div>
</template>

<script>
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    toBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 36px;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
</style>
