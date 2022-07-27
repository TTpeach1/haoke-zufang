<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <span class="iconfont icon-xiangzuojiantou"></span>
      <div class="center">
        <button class="btn" @click="cityBtn">{{ Name ? Name : '北京' }}</button>
        <span class="iconfont icon-xiajiantou xia"></span>
        <span class="iconfont icon-sousuo sou"></span>
        <input class="right" type="text" placeholder="请输入小区或地址" />
      </div>
      <span class="iconfont icon-ditu"></span>
    </div>

    <!-- 轮播 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img class="image" :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>
    <!-- 四个按钮部分 -->
    <div class="honmBtn">
      <ul>
        <li @click="toFind">
          <img src="../../assets/img/all.png" alt="" />
          <p>整租</p>
        </li>
        <li @click="toFind">
          <img src="../../assets/img/each.png" alt="" />
          <p>合租</p>
        </li>
        <li>
          <img src="../../assets/img/local.png" alt="" />
          <p>地图找房</p>
        </li>
        <li @click="toRent">
          <img src="../../assets/img/rent.png" alt="" />
          <p>去出租</p>
        </li>
      </ul>
    </div>
    <div class="group">
      <div class="text">
        <p>租房小组</p>
        <p>更多</p>
      </div>
      <div class="content">
        <van-grid direction="horizontal" :column-num="2">
          <van-grid-item v-for="item in groupList" :key="item.id">
            <template #default>
              <div class="default">
                <img :src="`http://115.159.87.220:8080${item.imgSrc}`" alt="" />
                <div class="default-text">
                  <p>{{ item.title }}</p>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { getImgApi, getGroupApi } from '@/api'
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      value: '',
      value1: '区域',
      images: [],
      groupList: []
    }
  },
  created() {
    this.getImg()
  },
  mounted() {
    this.getGroup()
  },
  computed: {
    Name() {
      return this.$store.state.name
    },
    nameId() {
      // return this.$route.query.id
      return this.$store.state.id
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
      // console.log(123)
      this.$router.push('/city')
    },
    toFind() {
      this.$router.push('/layout/find')
    },
    toRent() {
      this.$router.push('/toRent')
    },
    async getImg() {
      const res = await getImgApi()
      // console.log(res)
      this.images = res.data.body
      console.log(this.images, '轮播图片')
    },
    async getGroup() {
      try {
        const res = await getGroupApi(this.nameId)
        console.log(res, '租房小组')
        this.groupList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
//头部导航
.head {
  position: absolute;
  top: 30px;
  z-index: 99;
  height: 100px;
  display: flex;
  align-items: center;
  // background-color: #21b97a;
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
//轮播
.van-swipe {
  width: 100%;
  height: 424px;
  .image {
    width: 100%;
  }
}
//按钮
.honmBtn {
  ul {
    display: flex;
    height: 242px;
    li {
      flex: 1;
      padding: 25px 0;
      text-align: center;
      img {
        width: 120px;
        height: 120px;
      }
      p {
        font-size: 28px;
        margin-top: 18px;
      }
    }
  }
}
//租房小组
.group {
  height: 440px;
  padding: 0 20px;
  background-color: #f6f5f6;
  :deep(.van-grid-item__content) {
    padding: 20px 5px;
    margin: 0 10px;
  }
  .text {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    p:nth-child(1) {
      font-weight: 700;
    }
  }
  .content {
    .default {
      display: flex;
      align-items: center;
      margin: 5px 0;
      img {
        width: 100px;
        height: 100px;
      }
      .default-text {
        display: flex;
        flex-direction: column;
        p {
          font-size: 28px;
          margin: 7px 40px;
        }
      }
    }
  }
}
</style>
