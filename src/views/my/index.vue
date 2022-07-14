<template>
  <div>
    <h1>我的</h1>
    <router-view></router-view>
    <router-link to='/login'>去登陆</router-link>
  </div>
</template>

<script>
export default {
  name: 'HaokeZufangIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
