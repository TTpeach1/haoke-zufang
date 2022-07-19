<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="房屋管理"
      left-arrow
      @click-left="toBack"
    />
    <van-card
      v-for="item in list"
      :key="item.houseCode"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="`http://liufusong.top:8080${item.houseImg}`"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import { myHomeApi } from '@/api/user'
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      list: []
    }
  },
  async created() {
    const res = await myHomeApi()
    console.log(res)
    this.list = res.data.body
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
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>
