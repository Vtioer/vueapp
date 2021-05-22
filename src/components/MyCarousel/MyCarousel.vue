<template>
  <div class="carousel-panel" :style="{ height: height + 'px' }">
    <div
      class="control control-left"
      @click="handleControl('left')"
      v-if="direction == 'horizontal'"
    >
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="carousel-content">
      <slot></slot>
    </div>
    <div
      class="control control-right"
      @click="handleControl('right')"
      v-if="direction == 'horizontal'"
    >
      <i class="fa fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
import MyCarouselJs from "./MyCarousel.js";
export default MyCarouselJs;
</script>

<style lang="scss" scoped>
@import "./MyCarousel.scss";
</style>