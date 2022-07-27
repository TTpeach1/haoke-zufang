<template>
  <div>
    <!-- 已登录 -->
    <template v-if="this.$store.state.user">
      <div class="my">
        <div class="my-title">
          <img
            class="title-pic"
            src="http://liufusong.top:8080/img/avatar.png"
            alt=""
          />
          <div class="title-centers">
            <div class="title-center-head">
              <img
                class="title-icon"
                src="http://liufusong.top:8080/img/profile/avatar.png"
                alt=""
              />
            </div>
            <div class="title-center-foot">
              <p class="title-center-text">用户123456</p>
              <button @click="toOut" class="toLogin-btn">退出</button>
              <p class="title-center-texts">编辑个人资料</p>
            </div>
          </div>
        </div>
        <div class="my-contents">
          <van-grid :column-num="3">
            <van-grid-item icon="star-o" text="我的收藏" @click="favorite" />
            <van-grid-item icon="wap-home-o" text="我的出租" @click="myhome" />
            <van-grid-item icon="clock-o" text="看房记录" />
            <van-grid-item icon="vip-card-o" text="成为房主" />
            <van-grid-item icon="user-o" text="个人资料" />
            <van-grid-item icon="service-o" text="联系我们" />
            <!-- icon-prefix -->
          </van-grid>
        </div>
        <div class="my-foot">
          <img
            class="foot-pic"
            src="http://liufusong.top:8080/img/profile/join.png"
            alt=""
          />
        </div>
      </div>
    </template>
    <!-- 未登录 -->
    <template v-else>
      <div class="my">
        <div class="my-title">
          <img
            class="title-pic"
            src="http://liufusong.top:8080/img/profile/bg.png"
            alt=""
          />
          <div class="title-center">
            <div class="title-center-head">
              <img
                class="title-icon"
                src="http://liufusong.top:8080/img/profile/avatar.png"
                alt=""
              />
            </div>
            <div class="title-center-foot">
              <p class="title-center-text">游客</p>
              <button @click="toLogin" class="toLogin-btn">去登陆</button>
            </div>
          </div>
        </div>
        <div class="my-content">
          <van-grid :column-num="3">
            <van-grid-item icon="star-o" text="我的收藏" @click="api" />
            <van-grid-item icon="wap-home-o" text="我的出租" @click="api" />
            <van-grid-item icon="clock-o" text="看房记录" @click="api" />
            <van-grid-item icon="vip-card-o" text="成为房主" @click="api" />
            <van-grid-item icon="user-o" text="个人资料" @click="api" />
            <van-grid-item icon="service-o" text="联系我们" @click="api" />
            <!-- icon-prefix -->
          </van-grid>
        </div>
        <div class="my-foot">
          <img
            class="foot-pic"
            src="http://liufusong.top:8080/img/profile/join.png"
            alt=""
          />
        </div>
      </div>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
// import { myCollectionApi } from '@/api/user'
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    toOut() {
      this.$store.commit('setUser', '')
    },
    api() {
      this.$router.push('/login')
    },
    favorite() {
      // console.log(this)
      // const res = await myCollectionApi()
      // console.log(res)
      this.$router.push('/mycollection')
    },
    myhome() {
      console.log(111)
      this.$router.push('/myhome')
      // this.$router.push('/myCollection')
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  text-align: center;
}
.my-title {
  position: relative;
  height: 600px;
  .title-pic {
    width: 100%;
  }
  .title-center {
    position: absolute;
    top: 270px;
    left: 55px;
    width: 640px;
    height: 330px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    .title-center-head {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -70px;
      left: 250px;
      width: 140px;
      height: 140px;
      background-color: #f5f5f5;
      border-radius: 50%;
      box-shadow: 0 2px 2px #bdbdbd;
      .title-icon {
        width: 120px;
        height: 120px;
      }
    }
    .title-center-foot {
      text-align: center;
      .title-center-text {
        font-size: 26px;
        margin-top: 110px;
      }
      .toLogin-btn {
        font-size: 26px;
        height: 60px;
        line-height: 60px;
        padding: 0 30px;
        color: #fff;
        background-color: #21b97a;
        border-radius: 5px;
        border: 0;
      }
    }
  }
  //已登录+s
  .title-centers {
    position: absolute;
    top: 320px;
    left: 55px;
    width: 640px;
    height: 380px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    .title-center-head {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -70px;
      left: 250px;
      width: 140px;
      height: 140px;
      background-color: #f5f5f5;
      border-radius: 50%;
      box-shadow: 0 2px 2px #bdbdbd;
      .title-icon {
        width: 120px;
        height: 120px;
      }
    }
    .title-center-foot {
      text-align: center;
      .title-center-text {
        font-size: 26px;
        margin-top: 125px;
      }
      .title-center-texts {
        font-size: 24px;
        color: #999;
      }
      .toLogin-btn {
        font-size: 26px;
        height: 60px;
        line-height: 60px;
        padding: 0 30px;
        color: #fff;
        background-color: #21b97a;
        border-radius: 40px;
        border: 0;
      }
    }
  }
}
.my-content {
  margin-top: 20px;
}
//已登录+s
.my-contents {
  margin-top: 120px;
}
.my-foot {
  margin: 30px;
  .foot-pic {
    width: 99%;
  }
}
</style>
