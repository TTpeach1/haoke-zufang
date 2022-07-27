<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <span class="iconfont icon-xiangzuojiantou" @click="toHome"></span>
      <div class="center">
        <button class="btn" @click="cityBtn">{{ Name ? Name : '北京' }}</button>
        <span class="iconfont icon-xiajiantou xia"></span>
        <span class="iconfont icon-sousuo sou"></span>
        <input class="right" type="text" placeholder="请输入小区或地址" />
      </div>
      <span class="iconfont icon-ditu"></span>
    </div>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="区域">内容 1</van-tab>
        <van-tab title="方式">内容 2</van-tab>
        <van-tab title="租金" class="three">
          <!-- @click="toContent(item.houseCode)" -->
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
        </van-tab>
        <van-tab title="筛选">内容 4</van-tab>
      </van-tabs>
    </div>

    <!-- 轮播 -->
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img class="image" :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe> -->
    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu> -->
  </div>
</template>

<script>
// import { getImgApi } from '@/api'
import { getCityValApi } from '@/api'
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      value: '',
      value1: '区域',
      active: 2,
      list: []
      // images: []
    }
  },
  created() {
    // this.getImg()
  },
  mounted() {
    this.getCityVal()
  },
  computed: {
    Name() {
      return this.$store.state.name
    }
  },
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
    },
    toHome() {
      this.$router.push('/layout/home')
    },
    async getCityVal() {
      try {
        const res = await getCityValApi(this.$store.state.id)
        console.log(res, '根据城市查询')
        this.list = res.data.body.list
      } catch (error) {
        console.log(error)
      }
    }
    // async getImg() {
    //   const res = await getImgApi()
    //   console.log(res)
    //   this.images = res.data.body
    //   console.log(this.images)
    // }
  }
}
</script>

<style lang="less" scoped>
.head {
  // position: absolute;
  // top: 30px;
  // z-index: 99;
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
// .van-swipe {
//   width: 100%;
//   height: 424px;
//   .image {
//     width: 100%;
//   }
// }
.main {
  .three {
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
  }
}
</style>
