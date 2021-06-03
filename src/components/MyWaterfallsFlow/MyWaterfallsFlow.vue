<template>
  <div class="waterfull">
    <div class="v-waterfall-content clearfix" id="v-waterfall">
      <div
        v-for="(img, index) in waterfallList"
        :key="index"
        class="v-waterfall-item"
        :style="{
          top: img.top + 'px',
          left: img.left + 'px',
          width: imgWidth + 'px',
          height: img.height,
        }"
      >
        <img :src="img.src" alt=""/>
        <p class="title">
          {{ img.title }}
        </p>
        <p class="subtitle">
          {{ img.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>



<script>
import MyWaterfallsFlowJs from "./MyWaterfallsFlow.js";
export default MyWaterfallsFlowJs;
</script>

<style lang="scss" scoped>
@import "./MyWaterfallsFlow.scss";
</style>