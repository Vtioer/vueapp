<template>
  <section class="loadmore" ref="loadmore">
    <section class="loadmore-content" ref="list" :style="style">
      <section class="loading" :style="topMsgStyle" v-if="topLoading">
        <svg
          t="1622703217812"
          class="loading-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4470"
          width="26"
          height="26"
        >
          <path
            d="M508 294.8c-21.5 0-39-17.5-39-39V105.5c0-21.5 17.5-39 39-39s39 17.5 39 39v150.3c0 21.5-17.5 39-39 39zM380.4 330.2c-13.5 0-26.6-7-33.8-19.5l-75.1-130.1c-10.8-18.7-4.4-42.5 14.3-53.3 18.7-10.8 42.5-4.4 53.3 14.3l75.1 130.1c10.8 18.7 4.4 42.5-14.3 53.3-6.2 3.5-12.9 5.2-19.5 5.2zM287.5 424.7c-6.6 0-13.3-1.7-19.5-5.2l-130.1-75.1c-18.7-10.8-25-34.6-14.3-53.3 10.8-18.7 34.6-25 53.3-14.3L307 351.9c18.7 10.8 25 34.6 14.3 53.3-7.2 12.5-20.3 19.5-33.8 19.5zM254.5 552.9H104.2c-21.5 0-39-17.5-39-39s17.5-39 39-39h150.3c21.5 0 39 17.5 39 39s-17.5 39-39 39zM159.8 755.6c-13.5 0-26.6-7-33.8-19.5-10.8-18.7-4.4-42.5 14.3-53.3l130.1-75.1c18.7-10.8 42.5-4.4 53.3 14.3 10.8 18.7 4.4 42.5-14.3 53.3l-130.1 75.1c-6.2 3.5-12.9 5.2-19.5 5.2zM309.2 903.4c-6.6 0-13.3-1.7-19.5-5.2-18.7-10.8-25-34.6-14.3-53.3l75.1-130.1c10.8-18.7 34.6-25 53.3-14.3 18.7 10.8 25 34.6 14.3 53.3L343 883.9c-7.2 12.5-20.3 19.5-33.8 19.5zM512.6 956.6c-21.5 0-39-17.5-39-39V767.4c0-21.5 17.5-39 39-39s39 17.5 39 39v150.3c0 21.5-17.5 38.9-39 38.9zM715.3 901.1c-13.5 0-26.6-7-33.8-19.5l-75.1-130.1c-10.8-18.7-4.4-42.5 14.3-53.3 18.7-10.8 42.5-4.4 53.3 14.3l75.1 130.1c10.8 18.7 4.4 42.5-14.3 53.3-6.1 3.5-12.9 5.2-19.5 5.2zM863 751.6c-6.6 0-13.3-1.7-19.5-5.2l-130.1-75.1c-18.7-10.8-25-34.6-14.3-53.3 10.8-18.7 34.6-25 53.3-14.3l130.1 75.1c18.7 10.8 25 34.6 14.3 53.3-7.2 12.5-20.3 19.5-33.8 19.5zM916.3 548.3H766.1c-21.5 0-39-17.5-39-39s17.5-39 39-39h150.3c21.5 0 39 17.5 39 39s-17.5 39-39.1 39zM730.7 420.7c-13.5 0-26.6-7-33.8-19.5-10.8-18.7-4.4-42.5 14.3-53.3l130.1-75.1c18.7-10.8 42.5-4.4 53.3 14.3 10.8 18.7 4.4 42.5-14.3 53.3l-130.1 75.1c-6.2 3.5-12.9 5.2-19.5 5.2zM636.1 327.9c-6.6 0-13.3-1.7-19.5-5.2-18.7-10.8-25-34.6-14.3-53.3l75.1-130.1c10.8-18.7 34.6-25 53.3-14.3 18.7 10.8 25 34.6 14.3 53.3l-75.1 130.1c-7.2 12.5-20.3 19.5-33.8 19.5z"
            fill="#2c3e50"
            p-id="4471"
          ></path>
        </svg>
        <span class="loading-text">{{ topLoadingText }}</span>
      </section>
      <section
        class="pull"
        :style="topMsgStyle"
        v-if="topPull"
        v-html="topPullText"
      ></section>
      <section
        class="drop"
        :style="topMsgStyle"
        v-if="topDrop"
        v-html="topDropText"
      ></section>
      <slot></slot>
      <section
        v-if="bottomDrop"
        class="drop"
        :style="{
          bottom: `-${tipmsgHeight}px`,
          lineHeight: `${tipmsgHeight}px`,
        }"
        v-html="bottomDropText"
      ></section>
      <section
        v-if="bottomPull && !bottomDrop && !bottomLoading && !bottomAllLoaded"
        class="pull"
        :style="bottomMsgStyle"
        v-html="bottomPullText"
      ></section>
      <section
        v-if="bottomLoading"
        class="loading"
        :style="isFirstLoad ? centerMsgStyle : bottomMsgStyle"
      >
        <svg
          t="1622703217812"
          class="loading-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4470"
          width="26"
          height="26"
        >
          <path
            d="M508 294.8c-21.5 0-39-17.5-39-39V105.5c0-21.5 17.5-39 39-39s39 17.5 39 39v150.3c0 21.5-17.5 39-39 39zM380.4 330.2c-13.5 0-26.6-7-33.8-19.5l-75.1-130.1c-10.8-18.7-4.4-42.5 14.3-53.3 18.7-10.8 42.5-4.4 53.3 14.3l75.1 130.1c10.8 18.7 4.4 42.5-14.3 53.3-6.2 3.5-12.9 5.2-19.5 5.2zM287.5 424.7c-6.6 0-13.3-1.7-19.5-5.2l-130.1-75.1c-18.7-10.8-25-34.6-14.3-53.3 10.8-18.7 34.6-25 53.3-14.3L307 351.9c18.7 10.8 25 34.6 14.3 53.3-7.2 12.5-20.3 19.5-33.8 19.5zM254.5 552.9H104.2c-21.5 0-39-17.5-39-39s17.5-39 39-39h150.3c21.5 0 39 17.5 39 39s-17.5 39-39 39zM159.8 755.6c-13.5 0-26.6-7-33.8-19.5-10.8-18.7-4.4-42.5 14.3-53.3l130.1-75.1c18.7-10.8 42.5-4.4 53.3 14.3 10.8 18.7 4.4 42.5-14.3 53.3l-130.1 75.1c-6.2 3.5-12.9 5.2-19.5 5.2zM309.2 903.4c-6.6 0-13.3-1.7-19.5-5.2-18.7-10.8-25-34.6-14.3-53.3l75.1-130.1c10.8-18.7 34.6-25 53.3-14.3 18.7 10.8 25 34.6 14.3 53.3L343 883.9c-7.2 12.5-20.3 19.5-33.8 19.5zM512.6 956.6c-21.5 0-39-17.5-39-39V767.4c0-21.5 17.5-39 39-39s39 17.5 39 39v150.3c0 21.5-17.5 38.9-39 38.9zM715.3 901.1c-13.5 0-26.6-7-33.8-19.5l-75.1-130.1c-10.8-18.7-4.4-42.5 14.3-53.3 18.7-10.8 42.5-4.4 53.3 14.3l75.1 130.1c10.8 18.7 4.4 42.5-14.3 53.3-6.1 3.5-12.9 5.2-19.5 5.2zM863 751.6c-6.6 0-13.3-1.7-19.5-5.2l-130.1-75.1c-18.7-10.8-25-34.6-14.3-53.3 10.8-18.7 34.6-25 53.3-14.3l130.1 75.1c18.7 10.8 25 34.6 14.3 53.3-7.2 12.5-20.3 19.5-33.8 19.5zM916.3 548.3H766.1c-21.5 0-39-17.5-39-39s17.5-39 39-39h150.3c21.5 0 39 17.5 39 39s-17.5 39-39.1 39zM730.7 420.7c-13.5 0-26.6-7-33.8-19.5-10.8-18.7-4.4-42.5 14.3-53.3l130.1-75.1c18.7-10.8 42.5-4.4 53.3 14.3 10.8 18.7 4.4 42.5-14.3 53.3l-130.1 75.1c-6.2 3.5-12.9 5.2-19.5 5.2zM636.1 327.9c-6.6 0-13.3-1.7-19.5-5.2-18.7-10.8-25-34.6-14.3-53.3l75.1-130.1c10.8-18.7 34.6-25 53.3-14.3 18.7 10.8 25 34.6 14.3 53.3l-75.1 130.1c-7.2 12.5-20.3 19.5-33.8 19.5z"
            fill="#2c3e50"
            p-id="4471"
          ></path>
        </svg>
        <span class="loading-text">{{ bottomLoadingText }}</span>
      </section>
      <section
        v-if="bottomAllLoaded"
        class="loading all-loaded-text"
        :style="bottomMsgStyle"
        v-html="bottomAllLoadedText"
      ></section>
    </section>

    <button class="loadmore-btn" @click="toTop">
      <svg
        t="1622704117824"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="11684"
        width="24"
        height="24"
      >
        <path
          d="M176.442548 161.367201l671.114904 0 0 87.866187-671.114904 0 0-87.866187Z"
          p-id="11685"
          fill="#4e6ef2"
        ></path>
        <path
          d="M562.948369 862.632799 463.180108 862.632799 463.180108 427.634544 320.117808 569.036018 256.157078 505.075287 512 249.232364 767.841899 505.075287 703.882192 569.036018 561.41341 430.704462Z"
          p-id="11686"
          fill="#4e6ef2"
        ></path>
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  name: "Myloadmore",
  data() {
    return {
      style: {},
      direction: "",
      touchstart: "touchstart",
      touchmove: "touchmove",
      touchend: "touchend",
      loadmore: null,
      loadmoreHeight: 0,
      list: null,
      dY: 0,
      mY: 0,
      bottomLoading: true,
      bottomPull: false,
      bottomDrop: false,
      topLoading: false,
      topPull: false,
      topDrop: false,
      topOn: false,
      bottomOn: false,
      scrollOn: true,
      scrollTop: 0,
      isFirstLoad: true,
    };
  },
  computed: {
    isMobile() {
      return /Mobile/gi.test(window.navigator.userAgent);
    },
    topMsgStyle() {
      return {
        top: `-${this.tipmsgHeight}px`,
        lineHeight: `${this.tipmsgHeight}px`,
      };
    },
    bottomMsgStyle() {
      return {
        bottom: `-${this.tipmsgHeight}px`,
        lineHeight: `${this.tipmsgHeight}px`,
      };
    },
    centerMsgStyle() {
      return {
        top: `${(this.loadmoreHeight - this.tipmsgHeight) / 2}px`,
        lineHeight: `${this.tipmsgHeight}px`,
      };
    },
  },
  props: {
    tipmsgHeight: {
      type: Number,
      default: 40,
      validater: (val) => {
        return val >= 40 && val <= 70;
      },
    },
    // 提前触发到底事件的高度，默认到底触发（手机端建议默认此参数）
    earlyTrigger: {
      type: Number,
      validater(v) {
        return v >= 0;
      },
      default: 0,
    },
    // 手指移动距离和组件滚动之间的比率
    distanceIndex: {
      type: Number,
      default: 3,
    },
    // 更新完，设置此参数不再触发 topMethod 方法
    topAllLoaded: {
      type: Boolean,
      default: false,
    },
    // 下拉刷新的高度
    topDistance: {
      type: Number,
      validater(v) {
        return v >= 40;
      },
      default: 40,
    },
    // 上拉加载的高度
    bottomDistance: {
      type: Number,
      validater(v) {
        return v >= 40;
      },
      default: 40,
    },
    // 加载完，设置此参数不再触发 bottomMethod 方法
    bottomAllLoaded: {
      type: Boolean,
      default: false,
      require: true,
    },
    // 是否自动填充内容
    autoFill: {
      type: Boolean,
      default: true,
    },
    // 下拉刷新提示内容，可传入HTML
    topPullText: {
      type: String,
      default: "↓ 下拉刷新",
    },
    // 下拉刷新到达指定高度提示内容，可传入HTML
    topDropText: {
      type: String,
      default: "释放更新",
    },
    // 下拉更新中提示内容，可传入HTML
    topLoadingText: {
      tye: String,
      default: "更新中...",
    },
    // 上拉加载提示内容，可传入HTML
    bottomPullText: {
      type: String,
      default: "↑ 上拉加载",
    },
    // 上拉加载到达指定高度提示内容，可传入HTML
    bottomDropText: {
      type: String,
      default: "释放更新",
    },
    // 上拉加载中提示内容，可传入HTML
    bottomLoadingText: {
      type: String,
      default: "加载中...",
    },
    /**
     * 下拉刷新，触发方法
     * 此函数如果返回的是一个promise则不需要调用onBottomLoadedSuccess
     * 如果为普通函数则需要在父组件中数据加载完毕后手动调用onBottomLoadedSuccess
     */
    topMethod: {
      type: Function,
      default: () => {},
    },
    /**
     * 上拉加载，触发方法
     * 此函数如果返回的是一个promise则不需要调用onTopLoadedSuccess
     * 如果为普通函数则需要在父组件中数据加载完毕后手动调用onTopLoadedSuccess
     */
    bottomMethod: {
      type: Function,
      default: () => {},
    },
    // 数据是否加载完毕
    bottomAllLoadedText: {
      type: String,
      default: "加载完毕",
    },
  },
  methods: {
    toTop() {
      let scrollTop = this.$refs.loadmore.scrollTop;
      const time = 10;
      const scrollDistance = scrollTop / time;

      let timer = setInterval(() => {
        if (scrollTop <= 0) {
          clearInterval(timer);
          scrollTop = 0;
          this.scrollTop = 0;
        }
        scrollTop -= scrollDistance;
        this.$refs.loadmore.scrollTop = scrollTop;
      }, time);
    },
    //偏移元素
    deviationElement(distance, isAnimation) {
      this.style = (isAnimation && {
        transform: `translate3d(0, ${distance}px, 0)`,
        transition: "transform .3s ease",
      }) || {
        transform: `translate3d(0, ${distance}px, 0)`,
      };
    },
    //底部加载完成后调用，关闭加载状态
    onBottomLoadedSuccess() {
      this.bottomLoading = this.bottomDrop = false;
      if (this.bottomAllLoaded) {
        this.bottomPull = false;
      } else {
        this.bottomPull = true;
      }
      this.autoLoad();
      this.deviationElement(0, true);
    },
    //顶部加载完成后调用，关闭加载状态
    onTopLoadedSuccess() {
      this.topLoading = this.topDrop = this.topPull = false;
      if (this.bottomAllLoaded) {
        this.bottomPull = false;
      } else {
        this.bottomPull = true;
      }
      this.autoLoad();
      this.deviationElement(0, true);
    },
    //手指（鼠标按键）抬起
    removeEv() {
      //上拉释放
      if (this.direction == "up") {
        if (this.bottomDrop) {
          this.deviationElement(-40, true);
          setTimeout(() => {
            this.bottomDrop = false;
            if (this.bottomAllLoaded) this.bottomPull = false;
            this.bottomLoading = true;
            this.isFirstLoad = false;
            let pms = this.bottomMethod();

            if (pms instanceof Promise) {
              pms.then(this.onBottomLoadedSuccess);
            } else {
              this.bottomMethod();
            }
          }, 300);
        } else {
          this.deviationElement(0, true);
          setTimeout(() => {
            this.bottomLoading = this.bottomDrop = false;
            if (this.bottomAllLoaded) this.bottomPull = false;
          }, 300);
        }
      } else if (this.direction == "down") {
        //下拉释放
        if (this.topDrop) {
          this.deviationElement(40, true);
          setTimeout(() => {
            this.topDrop = this.topPull = this.bottomPull = false;
            this.topLoading = true;
            let pms = this.topMethod();

            if (pms instanceof Promise) {
              pms.then(this.onTopLoadedSuccess);
            } else {
              this.topMethod();
            }
          }, 300);
        } else {
          this.deviationElement(0, true);
          setTimeout(() => {
            this.topLoading = this.topDrop = this.topPull = false;
          }, 300);
        }
      }
      this.loadmore.removeEventListener(this.touchmove, this.moveEv);
      this.loadmore.removeEventListener(this.touchend, this.removeEv);
    },
    //手指（鼠标）按下事件
    startEv(e) {
      e = e || window.event;
      this.dY = (this.isMobile && e.touches[0].pageY) || e.pageY;
      this.topOn = this.bottomOn = true;
      this.loadmore.addEventListener(this.touchmove, this.moveEv);
      this.loadmore.addEventListener(this.touchend, this.removeEv);
    },
    //手指（鼠标按住拖动）滑动事件
    moveEv(ev) {
      ev = ev || window.event;
      this.mY = (this.isMobile && ev.touches[0].pageY) || ev.pageY;
      let sT = this.loadmore.scrollTop,
        prevent = false,
        h = this.loadmore.clientHeight - this.list.scrollHeight;
      //下拉更新
      if (this.mY - this.dY > 0) {
        this.direction = "down";
        if (sT <= 0) {
          prevent = true;
          if (this.topOn) {
            this.topOn = false;
            this.dY = this.mY;
          }
          let top = (this.mY - this.dY) / this.distanceIndex;
          this.deviationElement(top);
          if (top > 0 && top < this.topDistance && !this.topAllLoaded) {
            this.topLoading = this.topDrop = false;
            this.topPull = true;
            this.$emit("topStatusChange");
          } else if (top > this.topDistance && !this.topAllLoaded) {
            this.topLoading = this.topPull = false;
            this.topDrop = true;
          }
        }
      } else {
        //上拉加载
        this.direction = "up";

        if (this.bottomAllLoaded) return;

        if (Math.abs(Math.abs(h) - sT) < this.tipmsgHeight + 10) {
          prevent = true;
          if (this.bottomOn) {
            this.bottomOn = false;
            this.dY = this.mY;
            this.$emit("bottomStatusChange");
          }
          let bottom = (this.mY - this.dY) / this.distanceIndex,
            absBottom = Math.abs(bottom);
          this.deviationElement(bottom);
          if (
            absBottom > 0 &&
            absBottom < this.bottomDistance &&
            !this.bottomAllLoaded
          ) {
            this.bottomLoading = this.bottomDrop = false;
            this.bottomPull = true;
          } else if (absBottom > this.bottomDistance && !this.bottomAllLoaded) {
            this.bottomLoading = false;
            if (this.bottomAllLoaded) this.bottomPull = false;
            this.bottomDrop = true;
          }
        }
      }
      eval.cancelable && prevent && ev.preventDefault();
    },
    //scorll 监听事件
    scrollEv() {
      let sH = this.list.scrollHeight,
        cH = this.loadmore.clientHeight,
        top = this.loadmore.scrollTop;
      if (sH - cH - this.earlyTrigger <= top && this.scrollOn) {
        this.scrollOn = false;
        this.$emit("bottomStatusChange");
      }
    },
    autoLoad() {
      this.$nextTick(() => {
        if (
          this.loadmore.clientHeight > this.list.scrollHeight &&
          this.autoFill &&
          !this.bottomAllLoaded
        ) {
          this.bottomLoading = true;
          let pms = this.bottomMethod();

          if (pms instanceof Promise) {
            pms.then(this.onBottomLoadedSuccess);
          } else {
            this.bottomMethod();
          }
        } else {
          this.bottomLoading = false;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.isMobile) {
        this.touchstart = "mousedown";
        this.touchmove = "mousemove";
        this.touchend = "mouseup";
      }
      this.loadmore = this.$refs.loadmore;
      this.loadmoreHeight = this.loadmore.getBoundingClientRect().height;
      this.list = this.$refs.list;
      //自动填充
      this.autoLoad();

      !this.earlyTrigger &&
        this.loadmore.addEventListener(this.touchstart, this.startEv);
      this.earlyTrigger &&
        this.loadmore.addEventListener("scroll", this.scrollEv);
    });
  },
  deactivated() {
    !this.earlyTrigger &&
      this.loadmore.removeEventListener(this.touchstart, this.startEv);
    this.earlyTrigger &&
      this.loadmore.removeEventListener("scroll", this.scrollEv);
  },
};
</script>

<style lang="scss" scoped>
.loadmore {
  overflow-y: auto;
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  user-select: none;
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading-icon {
    animation: rotate 1.5s linear infinite;
  }
  .loading-text {
    margin-left: 10px;
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(359deg);
    }
  }
  @-o-keyframes rotate {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(359deg);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .loadmore-content {
    backface-visibility: hidden;
    transform-style: preserve-3d;
    position: relative;
  }
  .loading,
  .pull,
  .drop {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: -1;
    font-size: 16px;
  }
  .loadmore-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
    outline: none;
    width: 38px;
    height: 38px;
    font-weight: 900;
    text-align: center;
    line-height: 0px;
    background-color: inherit;
    border-radius: 50%;
    background-color: rgba($color: #fff, $alpha: 0.9);
    box-shadow: 0 0 12px 0px rgba($color: #000000, $alpha: 0.2);
  }
}
</style>