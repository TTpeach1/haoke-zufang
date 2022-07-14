<template>
  <div>
    <van-nav-bar
      title="账号登陆"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
    />
    <van-form @submit="login" class="form">
      <van-field
        center
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        center
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 30px 16px">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登 陆</van-button
        >
      </div>
      <p class="text">还没有账号，去注册~</p>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async login() {
      const res = await login(this.username, this.password)
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
.form {
  margin-top: 40px;
  margin-bottom: 40px;
  .van-cell {
    margin-bottom: 20px;
    height: 120px;
    font-size: 34px;
  }
}
.login-btn {
  height: 100px;
  width: 690px;
  background-color: #21b97a;
  border: 0;
  font-size: 36px;
}
.text {
  text-align: center;
  font-size: 28px;
  color: #666;
}
</style>
