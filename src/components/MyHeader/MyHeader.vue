<template>
  <div class="my-header">
    <div slot="left">
      <i class="fa fa-chevron-left" @click="handleBack" v-if="showBack"></i>
    </div>
    <slot></slot>
    <div slot="right"></div>
  </div>
</template>

<script>
import MyHeaderJs from "./MyHeader.js";
export default MyHeaderJs;
</script>

<style lang="scss" scoped>
@import "./MyHeader.scss";
</style>