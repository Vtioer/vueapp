<template>
  <div class="uploader">
    <div class="upload-img-selector" @click="handleOpen">
      <i class="fa fa-plus fa-lg"></i>

      <input
        ref="input"
        type="file"
        :multiple="multiple"
        :accept="accept"
        @change="handleChange"
        hidden
      />
    </div>

    <transition-group tag="div" class="img-list" name="fade">
      <div class="img-box" v-for="(url, index) in imgList" :key="url + index">
        <img :src="url" alt="" />

        <i class="fa fa-times-circle" @click="handleDelete(index)"></i>
      </div>
    </transition-group>
  </div>
</template>

<script>
import MyUploaderJs from "./MyUploader.js";
export default MyUploaderJs;
</script>

<style lang="scss" scoped>
@import "./MyUploader.scss";
</style>