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
      <!-- 小区名称 -->
      <van-cell title="小区名称" is-link value="请输入小区名称" />
      <!-- 租 金 -->
      <van-field
        v-model="rental"
        center
        label="租 金"
        placeholder="请输入租金/月"
      >
        <template #button> ￥/月 </template>
      </van-field>
      <!-- 建筑面积 -->
      <van-field
        v-model="acreage"
        center
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #button> ㎡ </template>
      </van-field>
      <!-- 户 型 -->
      <van-cell title="户 型" is-link :value="model" @click="showModel" />
      <van-popup v-model="isModel" position="bottom" :style="{ height: '40%' }">
        <van-picker
          show-toolbar
          :columns="columnsModel"
          @confirm="ConfirmModel"
          @cancel="onCancel"
        />
      </van-popup>
      <!-- 所在楼层 -->
      <van-cell title="所在楼层" is-link :value="floor" @click="showFloor" />
      <van-popup v-model="isFloor" position="bottom" :style="{ height: '40%' }">
        <van-picker
          show-toolbar
          :columns="columnsFloor"
          @confirm="ConfirmFloor"
          @cancel="onCancel"
        />
      </van-popup>
      <!-- 朝 向 -->
      <van-cell title="朝 向" is-link :value="toward" @click="showToward" />
      <van-popup
        v-model="isToward"
        position="bottom"
        :style="{ height: '40%' }"
      >
        <van-picker
          show-toolbar
          :columns="columnsToward"
          @confirm="ConfirmToward"
          @cancel="onCancel"
        />
      </van-popup>
      <!-- 房屋标题 -->
      <van-cell value="房屋标题" />
      <van-cell-group>
        <van-field
          v-model="homeTitle"
          placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
        />
      </van-cell-group>
      <!-- 房屋图像 -->
      <van-cell value="房屋图像" />
      <van-uploader :after-read="afterRead" />
      <van-cell value="房屋配置" />
      <van-grid :column-num="5">
        <van-grid-item
          :class="{ color: isIcon.includes(item.a) }"
          v-for="(item, index) in iconList"
          :key="index"
          @click="getIcon(item.a)"
        >
          <template #icon>
            <span :class="item.b"></span>
          </template>
          <template #text>
            <p>{{ item.a }}</p>
          </template>
        </van-grid-item>
      </van-grid>
      <!-- 房屋描述 -->
      <van-cell value="房屋描述" />
      <van-cell-group class="homeValue">
        <van-field v-model="desrcibe" placeholder="请输入房屋描述信息" />
      </van-cell-group>
    </div>
    <div class="foot">
      <button>取消</button>
      <button class="btn" @click="sentHome">提交</button>
    </div>
  </div>
</template>

<script>
import { sentHomeApi } from '@/api'
export default {
  name: 'HaokeZufangIndex',
  data() {
    return {
      model: '', // 户型
      isModel: false, // 户型弹出层
      columnsModel: ['一室', '二室', '三室', '四室', '四室+'],
      floor: '', // 所在楼层
      isFloor: false, // 所在楼层弹出层
      columnsFloor: ['高楼层', '中楼层', '低楼层'],
      toward: '', // 朝向
      isToward: false, // 朝向弹出层
      columnsToward: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'],
      rental: '', // 租金
      acreage: '', // 面积
      homeTitle: '', // 房屋标题
      desrcibe: '', // 房屋描述
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
      ],
      oriented: [
        {
          label: '东',
          value: 'ORIEN|141b98bf-1ad0-11e3'
        },
        {
          label: '南',
          value: 'ORIEN|61e99445-e95e-7f37'
        },
        {
          label: '东南',
          value: 'ORIEN|dfb1b36b-e0d1-0977'
        },
        {
          label: '北',
          value: 'ORIEN|caa6f80b-b764-c2df'
        },
        {
          label: '西北',
          value: 'ORIEN|80795f1a-e32f-feb9'
        },
        {
          label: '西',
          value: 'ORIEN|103fb3aa-e8b4-de0e'
        },
        {
          label: '东北',
          value: 'ORIEN|67ac2205-7e0f-c057'
        },
        {
          label: '西南',
          value: 'ORIEN|2354e89e-3918-9cef'
        }
      ],
      roomType: [
        {
          label: '三室',
          value: 'ROOM|20903ae0-c7bc-f2e2'
        },
        {
          label: '四室',
          value: 'ROOM|ce2a5daa-811d-2f49'
        },
        {
          label: '一室',
          value: 'ROOM|d4a692e4-a177-37fd'
        },
        {
          label: '二室',
          value: 'ROOM|d1a00384-5801-d5cd'
        },
        {
          label: '四室+',
          value: 'ROOM|2731c38c-5b19-ff7f'
        }
      ],
      isIcon: []
    }
  },

  mounted() {},
  computed: {
    homeDate() {
      return {
        title: this.homeTitle, // 房屋标题
        description: this.desrcibe, // 房屋描述
        houseImg: '',
        oriented: this.newOriented, // 朝向
        supporting: this.newSupporting, // 配置
        price: this.rental,
        roomType: this.newRoomType, // 户型
        size: this.acreage,
        floor: this.newFloor,
        community: '' // 小区名称
      }
    }, // 房源信息
    newFloor() {
      if (this.floor === '高楼层') {
        return 'FLOOR|1'
      } else if (this.floor === '中楼层') {
        return 'FLOOR|2'
      } else {
        return 'FLOOR|3'
      }
    },
    newOriented() {
      const index = this.oriented.findIndex(
        (item) => item.label === this.toward
      )
      return this.oriented[index].value
    },
    newRoomType() {
      const index = this.roomType.findIndex((item) => item.label === this.model)
      return this.roomType[index].value
    },
    newSupporting() {
      return this.isIcon.join('|')
    }
  },
  methods: {
    showModel() {
      this.isModel = true
    },
    ConfirmModel(val) {
      // console.log(val)
      this.model = val
      this.isModel = false
    },
    showFloor() {
      this.isFloor = true
    },
    ConfirmFloor(val) {
      // console.log(val)
      this.floor = val
      this.isFloor = false
    },
    showToward() {
      this.isToward = true
    },
    ConfirmToward(val) {
      // console.log(val)
      this.toward = val
      this.isToward = false
    },
    // 弹出层取消按钮
    onCancel() {
      this.isModel = false
      this.isFloor = false
      this.isToward = false
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    toBack() {
      this.$router.back()
    },
    // 提交房源信息
    async sentHome() {
      try {
        const res = await sentHomeApi(this.homeDate)
        console.log(res, '房源信息')
      } catch (error) {
        console.log(error)
      }
    },
    // 配置按钮点击事件
    getIcon(val) {
      if (!this.isIcon.includes(val)) {
        this.isIcon.push(val)
      } else {
        const index = this.isIcon.findIndex((item) => item === val)
        this.isIcon.splice(index, 1)
      }
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
    z-index: 99;
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
:deep(.van-grid-item__content) {
  font-size: 28px;
  p {
    margin: 10px 0;
  }
  .iconfont {
    font-size: 48px;
  }
}
.homeValue {
  height: 300px;
}
.color {
  color: #21b97a;
}
</style>
