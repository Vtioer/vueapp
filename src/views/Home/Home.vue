<template>
  <div class="home">
    <div class="container">
      <router-view />
    </div>
    <ul class="tabbar-menu">
      <li
        :class="[activeIndex == index ? 'isActive' : '']"
        v-for="(item, index) in menuList"
        :key="index"
        @click="handleClick(index, item.pathName)"
      >
        <i :class="['menu-icon', item.iconClass]"></i>
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeJs from "./Home.js";
export default HomeJs;
</script>
<style lang="scss" scoped>
@import "./Home.scss";
</style>
