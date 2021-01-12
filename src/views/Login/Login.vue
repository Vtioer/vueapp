<template>
  <div class="user-login-page">
    <h3 class="login-text">LOGIN</h3>
    <div class="login-form">
      <MyInput
        v-model="userCode"
        :showAllBorder="true"
        :round="true"
        placeholder="请输入账号/用户名"
      ></MyInput>
      <MyInput
        type="password"
        v-model="userCode"
        :showAllBorder="true"
        :round="true"
        placeholder="请输入密码"
      ></MyInput>
      <MyButton :round="true" @click="handleLogin">登陆</MyButton>
    </div>
  </div>
</template>

<script>
import LoginJs from "./Login.js";
export default LoginJs;
</script>

<style lang="scss" scoped>
@import "./Login.scss";
</style>