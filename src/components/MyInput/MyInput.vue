<template>
  <div class="my-input-wrapper">
    <div class="label" v-if="label">
      {{ label }}
    </div>
    <input
      ref="input"
      :type="type"
      :style="style"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :placeholder="placeholder"
      class="my-input-item"
    />
  </div>
</template>

<script>
import MyInputJs from "./MyInput.js";
export default MyInputJs;
</script>

<style lang="scss" scoped>
@import "./MyInput.scss";
</style>