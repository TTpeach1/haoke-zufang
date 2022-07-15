<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="收藏列表"
      left-arrow
      @click-left="toBack"
    />

    <van-card
      price="2.00"
      desc="描述信息"
      title="描述信息"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      list: []
    }
  },

  mounted() {
    const list = this.$route.query.collec
    console.log(list)
  },

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
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>
