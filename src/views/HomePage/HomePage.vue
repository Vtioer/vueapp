<template>
  <div class="home-page">
    <header class="top-search-wrap">
      <div class="top-search">
        <i class="fa fa-search"></i>
        <input type="text" :placeholder="placeholder" />
        <i class="fa fa-map"></i>
      </div>
    </header>
    <div class="container">
      <MyNavtab
        type="navbar"
        :tabTitleList="[
          '首页',
          '魔都探味',
          '周边',
          '自驾游',
          '直播',
          '博物馆',
          '潮酷玩法',
          '网红打卡',
          '海岛',
          '古镇',
          '亲自时光',
          '温泉',
          '建筑',
          '国家公园',
        ]"
      >
        <MainPage />
        <div>魔都探味</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
        <div>周边</div>
      </MyNavtab>
    </div>
  </div>
</template>

<script>
import HomePageJs from "./HomePage.js";
export default HomePageJs;
</script>

<style lang="scss" scoped>
@import "./HomePage.scss";
</style>