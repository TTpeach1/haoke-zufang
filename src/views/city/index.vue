<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="城市列表"
      left-arrow
      @click-left="toBack"
    />
    <van-index-bar>
      <van-index-anchor index="当前城市" />
      <van-cell title="北京" />

      <van-index-anchor index="热门城市" />
      <van-cell
        v-for="(item, index) in hotCity"
        :key="index"
        :title="item.label"
        @click="getCityName(item.label)"
      />
    </van-index-bar>
    <van-index-bar>
      <van-index-anchor
        v-for="(item, index) in firstName"
        :key="index"
        :index="index"
      >
        <!-- 三元判断是否有值 -->
        <span class="indexWord">{{ item.length == 0 ? '' : index }}</span>
        <van-cell
          v-for="(citem, cindex) in item"
          :key="cindex"
          :title="citem"
          @click="getCityName(citem)"
        />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityApi, getHotCityApi, getCityIdApi } from '@/api'
import pinyin from 'js-pinyin'
// pinyin.setOptions({ checkPolyphone: false, charCase: 0 })
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {
      hotCity: [],
      city: [],
      firstName: {},
      name: '',
      cityId: '',
      FirstPin: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  created() {
    this.getHotCity()
    this.getCity()
  },
  mounted() {},

  methods: {
    toBack() {
      this.$router.back()
    },
    async getCity() {
      try {
        const res = await getCityApi()
        console.log(res)
        this.city = res.data.body
        // 处理城市列表数据
        const cityNameList = []
        for (const p in this.city) {
          cityNameList.push(this.city[p].label)
        }
        const firstName = {}
        this.FirstPin.forEach((item) => {
          firstName[item] = []
          cityNameList.forEach((el) => {
            const first = pinyin.getFullChars(el).substring(0, 1)
            if (first === item) {
              firstName[item].push(el)
            }
          })
        })

        this.firstName = firstName
        console.log(this.firstName)
      } catch (error) {
        console.log(error)
      }
    },
    async getHotCity() {
      try {
        const res1 = await getHotCityApi()
        console.log(res1)
        this.hotCity = res1.data.body
      } catch (error) {
        console.log(error)
      }
    },
    getCityName(name) {
      // this.$router.push({
      //   path: '/layout/find',
      //   query: { name: name }
      // })
      this.$store.commit('cunName', name)
      this.getCityId(name)
      this.$router.push({
        path: '/layout/home',
        query: {
          id: this.cityId
        }
      })
    },
    async getCityId(id) {
      try {
        // const name = this.$store.state.name
        // console.log(name)
        const res = await getCityIdApi(id)
        console.log(res, id, '城市id')
        this.cityId = res.data.body.label
      } catch (error) {
        console.log(error)
      }
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
:deep(.van-index-anchor) {
  color: #999;
  font-size: 28px;
}
:deep(.van-cell__title) {
  font-size: 34px;
}
</style>
