<template>
  <button
    :class="['my-button', bgcColorList.includes(type) ? type : 'primary']"
    :style="style"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
import MyButtonJs from "./MyButton.js";
export default MyButtonJs;
</script>

<style lang="scss" scoped>
@import "./MyButton.scss";
</style>