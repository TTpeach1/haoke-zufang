<template>
  <div class="main">
    <div class="mainVal">
      <van-nav-bar
        class="navbar"
        title="发布房源"
        left-arrow
        @click-left="toBack"
      />
      <van-cell value="房源信息" />
      <van-cell title="小区名称" is-link value="请输入小区名称" />
      <van-field
        v-model="sms1"
        center
        label="租 金"
        placeholder="请输入租金/月"
      >
        <template #button> ￥/月 </template>
      </van-field>
      <van-field
        v-model="sms2"
        center
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #button> ㎡ </template>
      </van-field>
      <van-cell title="户 型" is-link value="请选择" @click="showModel" />
      <van-popup v-model="Model" position="bottom" :style="{ height: '40%' }">
        <van-picker
          show-toolbar
          :columns="columnsModel"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>
      <van-cell title="所在楼层" is-link value="请选择" @click="showFloor" />
      <van-popup v-model="Floor" position="bottom" :style="{ height: '40%' }">
        <van-picker
          show-toolbar
          :columns="columnsFloor"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>
      <van-cell title="朝 向" is-link value="请选择" @click="showToward" />
      <van-popup v-model="Toward" position="bottom" :style="{ height: '40%' }">
        <van-picker
          show-toolbar
          :columns="columnsToward"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>
      <van-cell value="房屋标题" />
      <van-cell-group>
        <van-field
          v-model="value1"
          placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
        />
      </van-cell-group>
      <van-cell value="房屋图像" />
      <van-uploader :after-read="afterRead" />
      <van-cell value="房屋配置" />
      <ul>
        <li>
          <span class="iconfont icon-yigui-hui"></span>
          <p>衣柜</p>
        </li>
        <li>
          <span class="iconfont icon-xiyiji"></span>
          <p>洗衣机</p>
        </li>
        <li>
          <span class="iconfont icon-kongtiao"></span>
          <p>空调</p>
        </li>
        <li>
          <span class="iconfont icon-tianranqi"></span>
          <p>天然气</p>
        </li>
        <li>
          <span class="iconfont icon-bingxiang"></span>
          <p>冰箱</p>
        </li>
      </ul>
      <ul>
        <li>
          <span class="iconfont icon-nuanqi"></span>
          <p>暖气</p>
        </li>
        <li>
          <span class="iconfont icon-dianshi"></span>
          <p>电视</p>
        </li>
        <li>
          <span class="iconfont icon-haofangtuo400iconfont2reshuiqi"></span>
          <p>热水器</p>
        </li>
        <li>
          <span class="iconfont icon-kuandai"></span>
          <p>宽带</p>
        </li>
        <li>
          <span class="iconfont icon-shafa"></span>
          <p>沙发</p>
        </li>
      </ul>
      <van-cell value="房屋描述" />
      <van-cell-group class="homeValue">
        <van-field v-model="value2" placeholder="请输入房屋描述信息" />
      </van-cell-group>
    </div>
    <div class="foot">
      <button>取消</button>
      <button class="btn">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      Model: false,
      columnsModel: ['一室', '二室', '三室', '四室', '四室+'],
      Floor: false,
      columnsFloor: ['高楼层', '中楼层', '低楼层'],
      Toward: false,
      columnsToward: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'],
      sms1: '',
      sms2: '',
      value1: '',
      value2: ''
    }
  },

  mounted() {},

  methods: {
    showModel() {
      this.Model = true
    },
    showFloor() {
      this.Floor = true
    },
    showToward() {
      this.Toward = true
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    toBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  background-color: #f6f5f6;
  padding-bottom: 140px;
  .mainVal {
    background-color: #fff;
  }
  .foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    button {
      width: 50%;
      height: 90px;
      border: 0;
      font-size: 30px;
      background-color: #fff;
      color: #21b97a;
    }
    .btn {
      background-color: #21b97a;
      color: #fff;
    }
  }
}
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
ul {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    margin-top: 20px;
    .iconfont {
      font-size: 50px;
    }
    p {
      font-size: 28px;
      margin-top: 10px;
    }
  }
}
.homeValue {
  height: 300px;
}
</style>
