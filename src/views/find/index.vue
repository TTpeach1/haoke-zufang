<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <span class="iconfont icon-xiangzuojiantou"></span>
      <div class="center">
        <button class="btn" @click="cityBtn">北京</button>
        <span class="iconfont icon-xiajiantou xia"></span>
        <span class="iconfont icon-sousuo sou"></span>
        <input class="right" type="text" placeholder="请输入小区或地址" />
      </div>
      <span class="iconfont icon-ditu"></span>
    </div>
    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu> -->
  </div>
</template>

<script>
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      value: '',
      value1: '区域'
    }
  },

  mounted() {},

  methods: {
    toBack() {
      this.$router.back()
    },
    city() {
      console.log(123)
    },
    cityBtn() {
      console.log(123)
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #21b97a;
  .center {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    height: 70px;
    background-color: #fff;
    font-size: 28px;
    .xia {
      position: absolute;
      font-size: 24px;
      left: 45px;
      color: rgb(152, 146, 146);
    }
    .sou {
      position: absolute;
      font-size: 36px;
      left: 130px;
      color: rgb(152, 146, 146);
    }
    .btn {
      background-color: #fff;
      border: none;
    }

    .right {
      margin-left: 120px;
      width: 350px;
      height: 60px;
      border: 0;
    }
  }
  .iconfont {
    color: #fff;
    font-size: 40px;
    margin: 0 25px;
  }
}
</style>
