<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left",
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
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 0.28rem;
  overflow: hidden;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.3s;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
