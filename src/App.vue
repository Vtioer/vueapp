<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view v-if="isRouterAlive" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reloadApp: this.reloadApp,
    };
  },
  data() {
    return {
      transitionName: "slide-left",
      isRouterAlive: true,
    };
  },
  watch: {
    $route(to, from) {
      this.$router.isBack = to.meta.index < from.meta.index;
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      let isBack = this.$router.isBack;
      console.log(isBack);
      if (isBack) {
        //设置动画名称
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    },
  },
  methods: {
    reloadApp() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
@import "./global.scss";
</style>
