<template>
  <div>
    <div class="head">
      <van-nav-bar
        class="navbar"
        :title="cententList.community"
        left-arrow
        @click-left="toBack"
      />
      <van-swipe :autoplay="3000">
        <van-swipe-item
          class="itemPic"
          v-for="(item, index) in images"
          :key="index"
        >
          <!-- <img :v-lazy="`http://liufusong.top:8080${item}`" /> -->
          <img :src="`http://liufusong.top:8080${item}`" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="main">
      <div class="main-one">
        <p>{{ cententList.title }}</p>
        <span v-for="(item, index) in tags" :key="index">{{ item }}</span>
      </div>
      <div class="main-two">
        <div>
          <p>{{ cententList.price }}/月</p>
          <p>租金</p>
        </div>
        <div>
          <p>{{ cententList.roomType }}</p>
          <p>房型</p>
        </div>
        <div>
          <p>{{ cententList.size }}平米</p>
          <p>面积</p>
        </div>
      </div>
      <div class="main-three">
        <div>
          <p>装修 : <span>精装</span></p>
          <p>
            楼层 : <span>{{ cententList.floor }}</span>
          </p>
        </div>
        <div>
          <p>
            朝向 :
            <span v-for="(item, index) in oriented" :key="index">
              {{ item }}
            </span>
          </p>
          <p>住宅 : <span>普通住宅</span></p>
        </div>
      </div>
    </div>
    <div class="map">
      <div>
        <p>小区 : <span>天山星城</span></p>
      </div>
      <div class="map-pic"></div>
    </div>
    <div class="iconf">
      <div class="text">
        <p>房屋配置</p>
      </div>
      <van-grid :column-num="5">
        <van-grid-item
          v-show="supporting.includes(item.a)"
          v-for="(item, index) in iconList"
          :key="index"
        >
          <template #icon>
            <span :class="item.b"></span>
          </template>
          <template #text>
            <p>{{ item.a }}</p>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="description">
      <div class="text">
        <p>房源概述</p>
      </div>
      <div class="user">
        <div class="left">
          <div class="pic">
            <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
          </div>
          <div class="name">
            <p>王女士</p>
            <p>已认证房主</p>
          </div>
        </div>
        <div class="right">
          <button class="btn">发消息</button>
        </div>
      </div>
      <div class="decr">
        <p>{{ cententList.description }}</p>
      </div>
    </div>
    <div class="like">
      <div class="text">
        <p>猜你喜欢</p>
      </div>
      <div class="home">
        <div class="pic">
          <img src="http://liufusong.top:8080/img/message/1.png" alt="" />
        </div>
        <div class="txt">
          <b>安贞西里 3室1厅</b>
          <p>72.32㎡/南/北/低楼层</p>
          <button>随时看房</button>
          <span>45500元/月</span>
        </div>
      </div>
      <div class="home">
        <div class="pic">
          <img src="http://liufusong.top:8080/img/message/1.png" alt="" />
        </div>
        <div class="txt">
          <b>安贞西里 3室1厅</b>
          <p>72.32㎡/南/北/低楼层</p>
          <button>随时看房</button>
          <span>45500元/月</span>
        </div>
      </div>
      <div class="home">
        <div class="pic">
          <img src="http://liufusong.top:8080/img/message/1.png" alt="" />
        </div>
        <div class="txt">
          <b>安贞西里 3室1厅</b>
          <p>72.32㎡/南/北/低楼层</p>
          <button>随时看房</button>
          <span>45500元/月</span>
        </div>
      </div>
    </div>
    <div class="foot">
      <button @click="collBtn">
        <van-icon v-if="showBtn" name="star" color="#ff4f00" />
        <van-icon v-else name="star-o" />
        收藏
      </button>
      <!-- <button><van-icon name="star" color="#ff4f00" />收藏</button> -->
      <button>在线咨询</button>
      <button>电话预约</button>
    </div>
  </div>
</template>

<script>
import {
  getCententApi,
  getFavoritesApi,
  delFavoritesApi,
  isFavoritesApi
} from '@/api'
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      showBtn: '',
      houseId: this.$route.query.id,
      cententList: {},
      images: [], // 轮播图
      tags: [], // 近地铁
      oriented: [], // 朝向
      iconList: [
        { a: '衣柜', b: 'iconfont icon-yigui-hui' },
        { a: '洗衣机', b: 'iconfont icon-xiyiji' },
        { a: '空调', b: 'iconfont icon-kongtiao' },
        { a: '天然气', b: 'iconfont icon-tianranqi' },
        { a: '冰箱', b: 'iconfont icon-bingxiang' },
        { a: '暖气', b: 'iconfont icon-nuanqi' },
        { a: '电视', b: 'iconfont icon-dianshi' },
        { a: '热水器', b: 'iconfont icon-haofangtuo400iconfont2reshuiqi' },
        { a: '宽带', b: 'iconfont icon-kuandai' },
        { a: '沙发', b: 'iconfont icon-shafa' }
      ], // 默认的配置数组
      supporting: [] // 接受的配置数组
    }
  },

  mounted() {
    // this.toto()
    this.getCentent()
    this.isFavorites()
  },

  methods: {
    // 测试收藏列表传的值
    // toto() {
    //   console.log(this.houseId)
    // },
    async isFavorites() {
      const res = await isFavoritesApi(this.houseId)
      console.log(res, '是否收藏')
      this.showBtn = res.data.body.isFavorite
    },
    toBack() {
      this.$router.back()
    },
    // 获取房屋详细信息
    async getCentent() {
      try {
        const id = this.houseId
        const res = await getCententApi(id)
        console.log(res)
        this.cententList = res.data.body
        this.images = res.data.body.houseImg
        this.tags = res.data.body.tags
        this.oriented = res.data.body.oriented
        this.supporting = res.data.body.supporting
      } catch (error) {
        console.log(error)
      }
    },
    // 收藏按钮
    collBtn() {
      this.showBtn = !this.showBtn
      if (this.showBtn) {
        const res = getFavoritesApi(this.houseId)
        console.log(res, '添加收藏')
      } else {
        const res = delFavoritesApi(this.houseId)
        console.log(res, '删除收藏')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  .navbar {
    background-color: #21b97a;
    :deep(.van-nav-bar__title) {
      color: #fff;
      font-size: 32px;
    }
    :deep(.van-nav-bar__arrow) {
      color: #fff;
    }
  }
  .itemPic {
    width: 100%;
    height: 500px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.main {
  height: 532px;
  padding: 30px 30px 0 30px;
  border-bottom: 30px solid #f6f5f6;
  .main-one {
    border-bottom: 5px solid #f6f5f6;
    padding-bottom: 20px;
    p {
      font-size: 32px;
    }
    span {
      width: 92px;
      height: 40px;
      background-color: #e1f5f8;
      color: #39becd;
      font-size: 24px;
    }
  }
  .main-two {
    padding: 30px 0;
    display: flex;
    border-bottom: 5px solid #f6f5f6;
    // justify-content: center;
    // align-items: center;
    div {
      flex: 1;
      text-align: center;
      color: red;
      font-size: 36px;
      p {
        margin: 5px;
        font-weight: 700;
      }
      p:nth-child(2) {
        color: #999;
        font-size: 28px;
      }
    }
  }
  .main-three {
    display: flex;
    div {
      flex: 1;
      // padding-left: 30px;
      p {
        font-size: 28px;
        color: #999;
        span {
          color: black;
          font-weight: 700;
        }
      }
    }
  }
}
.map {
  .map-pic {
    background-color: hotpink;
    width: 100%;
    height: 300px;
  }
  p {
    padding: 0 30px;
    font-size: 28px;
    color: #999;
    span {
      color: black;
      font-weight: 700;
    }
  }
}
.iconf {
  border-bottom: 30px solid #f6f5f6;
  .text {
    border-bottom: 10px solid #f6f5f6;
    p {
      padding: 0 30px;
      font-size: 30px;
    }
  }
  :deep(.van-grid-item__content) {
    font-size: 28px;
    p {
      margin: 10px 0;
    }
    .iconfont {
      font-size: 48px;
    }
  }
}
.description {
  padding: 0 30px;
  border-bottom: 30px solid #f6f5f6;
  .text {
    border-bottom: 10px solid #f6f5f6;
    p {
      font-size: 30px;
    }
  }
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0 0;
    .left {
      display: flex;
      img {
        width: 100px;
        height: 100px;
      }
      .name {
        p {
          font-size: 28px;
          color: #333;
          margin: 10px 25px;
        }
        p:nth-child(2) {
          color: red;
        }
      }
    }
    .right {
      .btn {
        width: 150px;
        height: 60px;
        font-size: 28px;
        color: #33be85;
        border: 1px solid #33be85;
        background-color: #fff;
        border-radius: 3px;
        padding: 6px 30px;
      }
    }
  }
  .decr {
    p {
      font-size: 28px;
      color: #333;
    }
  }
}
.like {
  padding: 0 30px 50px;
  border-bottom: 30px solid #f6f5f6;
  .text {
    border-bottom: 5px solid #f6f5f6;
    p {
      font-size: 30px;
    }
  }
  .home {
    display: flex;
    padding: 30px 0;
    .pic {
      img {
        width: 200px;
        height: 160px;
      }
    }
    .txt {
      position: relative;
      b {
        margin: 0 20px;
        font-size: 30px;
      }
      p {
        margin: 0 20px;
        font-size: 24px;
        color: #afb2b3;
      }
      button {
        position: absolute;
        top: 90px;
        left: 20px;
        font-size: 28px;
        background-color: #e1f5f8;
        color: #33be85;
        border: 0;
      }
      span {
        position: absolute;
        top: 130px;
        left: 20px;
        color: red;
        font-size: 32px;
      }
    }
  }
}
.foot {
  position: fixed;
  bottom: 0;
  display: flex;
  padding-bottom: 1px;
  button {
    width: 250px;
    height: 90px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-size: 34px;
    color: #999;
  }
  button:nth-child(3) {
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
