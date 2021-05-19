<template>
  <div class="tab-slider">
    <div class="tab-wrapper" v-if="type === 'tabbar'">
      <ul
        class="tab-title"
        :style="{ border: `1px solid ${background}`, color }"
      >
        <div
          class="slider-block"
          :style="{
            backgroundColor: background,
            width: `${(1 / tabTitleList.length) * 100}%`,
            left,
            transition: `left ${duration}ms ease`,
          }"
        ></div>

        <li
          class="tab-control"
          :style="{ color: activeIndex == index ? activeColor : '' }"
          v-for="(item, index) in tabTitleList"
          :key="index"
          @click="clickTab($event, item, index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <ul
      v-else
      class="navbar-slider"
      ref="navbar"
      :style="{ backgroundColor: background, color: activeColor }"
    >
      <li
        :class="[activeIndex == index ? 'active-nav' : '']"
        v-for="(item, index) in tabTitleList"
        :key="index"
        @click="clickTab($event, item, index)"
      >
        {{ item }}
      </li>

      <li class="empt-nav"></li>
    </ul>
    <slot name="top"></slot>
    <div class="tab-content">
      <default-slot></default-slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "MyNavtab",
  components: {
    "default-slot": {
      render(h) {
        const parent = this.$parent;

        const slotsLength = parent.$slots.default.length;

        const style = {
          width: `${100 / slotsLength}%`,

          height: "100%",

          overflow: "hidden",
        };

        let activeIndex = parent.activeIndex;

        if (parent.tabTitleList.length != slotsLength) {
          return;
        }

        return h(
          "div",

          {
            class: {
              "tab-bg": true,
            },
            style: {
              width: parent.tabTitleList.length * 100 + "%",
              transform: `translate3d(${
                -activeIndex * this.clientWidth
              }px,0px,0px)`,
              transition: `transform ${parent.duration}ms ease`,
            },
            ref: "slotBoxRef",
            on: {
              touchstart: parent.touchStart,
              touchmove: parent.touchMove,
              touchend: parent.touchEnd,
            },
          },
          parent.$slots.default.map((item, index) => {
            /**
             * 初始加载页面时候只加载一个子页面(避免带宽和性能浪费)
             * 切换tab时再加载对应的子页面
             * 切换过的子页面会有缓存
             * 如果不需要缓存功能可以通过设置“keep-alive”为false
             */
            if (
              item &&
              this.$parent.renderSlotList.includes(index) &&
              (parent.keepAlive || activeIndex == index)
            ) {
              return h("div", { style }, [item]);
            } else {
              return h("div", { style });
            }
          })
        );
      },

      data() {
        return {
          clientWidth: 0,
        };
      },
      created() {
        this.$parent.renderSlotList.push(this.$parent.activeIndex);
      },
      mounted() {
        let parent = this.$parent;
        if (parent.tabTitleList.length != parent.$slots.default.length) {
          return;
        }
        /**
         * 当页面显示的不是第一个时旋转屏幕，会出现页面left出错，导致页面布局错乱
         */
        let timeout = null;
        this.clientWidth = document.body.clientWidth;
        window.addEventListener(
          "resize",
          () => {
            let slotBoxRef = this.$refs.slotBoxRef;
            if (slotBoxRef && slotBoxRef.style) {
              this.clientWidth = document.body.clientWidth;
              // 屏幕大小在变化期间去除动画效果
              slotBoxRef.style.transition = "";
              // 屏幕大小在变化结束后去加上动画效果
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                clearTimeout(timeout);
                slotBoxRef.style.transition = `transform ${parent.duration}ms ease`;
              });
            }
          },
          false
        );
      },
    },
  },

  props: {
    tabTitleList: {
      type: Array,
      default: () => [],
      required: true,
    },
    type: {
      type: String,
      default: "tabbar",
      validator: function (val) {
        return ["tabbar", "navbar"].indexOf(val) !== -1;
      },
    },
    color: {
      type: String,
      default: "#4e6ef2",
    },
    activeColor: {
      type: String,
      default: "#fff",
    },
    background: {
      type: String,
      default: "#4e6ef2",
    },
    // 动画时间
    duration: {
      type: Number,
      default: 300,
      required: false,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    // 是否启用滑动页面切换
    isTouchSwiper: {
      type: Boolean,
      default: true,
    },
    // 是否开启缓存
    "keep-alive": {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
      touchStartY: 0,
      touchEndY: 0,
      left: 0,
      renderSlotList: [],
      scrollWidth: 0,
    };
  },
  created() {
    if (this.tabTitleList.length != this.$slots.default.length) {
      console.error(
        "tabar title list length not equal to default slot list length!"
      );
      return;
    }
    this.init();
  },
  methods: {
    init() {
      if (typeof this.defaultIndex != "number") {
        this.defaultIndex = 0;
      }
      this.activeIndex =
        this.defaultIndex > this.tabTitleList.length - 1
          ? this.tabTitleList.length - 1
          : this.defaultIndex;
      this.left = (this.activeIndex / this.tabTitleList.length) * 100 + "%";
    },

    // 点击切换tab
    clickTab(event, item, index) {
      // 检测点击同一个
      if (this.activeIndex == index) return;
      if (this.$refs.navbar) {
        let navbarDom = this.$refs.navbar;
        let navbarStyle = navbarDom.getBoundingClientRect();
        let clickPositonX = event.clientX;
        // 如果点击的tab在屏幕中属于第一个或者最后一个则滚动显示剩下的
        if (navbarStyle.right - clickPositonX < 80) {
          let scrollLeft = navbarDom.scrollLeft + 80;
          navbarDom.scrollLeft = scrollLeft;
        } else if (clickPositonX - navbarStyle.left < 80) {
          let scrollLeft = navbarDom.scrollLeft - 80;
          navbarDom.scrollLeft = scrollLeft;
        }
      }
      let renderSlotList = this.renderSlotList;
      if (renderSlotList.indexOf(index) == -1) {
        renderSlotList.push(index);
      }
      this.activeIndex = index;
      this.left = (index / this.tabTitleList.length) * 100 + "%";
      this.$emit("changeTab", index);
    },
    // 拖动开始时
    touchStart(e) {
      if (!this.isTouchSwiper || this.type === "navbar") return;

      this.touchStartX = e.changedTouches[0].pageX;

      this.touchStartY = e.changedTouches[0].pageY;
    },

    // 拖动时

    touchMove(e) {
      e.stopPropagation();
    },
    // 拖动结束时
    touchEnd(e) {
      if (!this.isTouchSwiper || this.type === "navbar") return;
      this.touchEndX = e.changedTouches[0].pageX;
      this.touchEndY = e.changedTouches[0].pageY;
      let count = this.tabTitleList.length - 1;
      // const touchTime = this.touchEndTime - this.touchStartTime;
      let direction = this.getDirection(
        this.touchStartX,
        this.touchStartY,
        this.touchEndX,
        this.touchEndY
      );
      if (direction === 3) {
        // 向左滑动
        if (this.activeIndex < count) {
          this.activeIndex++;
        }
      } else if (direction === 4) {
        // 向右滑动
        if (this.activeIndex > 0) {
          this.activeIndex--;
        }
      }

      let renderSlotList = this.renderSlotList;

      if (renderSlotList.indexOf(this.activeIndex) == -1) {
        renderSlotList.push(this.activeIndex);
      }

      this.$emit("changeTab", this.activeIndex);
      this.left = (this.activeIndex / this.tabTitleList.length) * 100 + "%";
    },

    // 移动端滑动角度
    getAngle(angx, angy) {
      return (Math.atan2(angy, angx) * 180) / Math.PI;
    },
    // 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    getDirection(startx, starty, endx, endy) {
      let angx = endx - startx;
      let angy = endy - starty;
      let result = 0;
      // 如果滑动距离太短
      if (Math.abs(angx) < 20 && Math.abs(angy) < 20) {
        return result;
      }

      let angle = this.getAngle(angx, angy);

      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if (
        (angle >= 135 && angle <= 180) ||
        (angle >= -180 && angle < -135)
      ) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }
      return result;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab-slider {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tab-wrapper {
  flex: none;
  height: 28px;
  width: 76%;
  margin: 10px auto;
  .tab-title {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 21px;
    overflow: hidden;
    & > .tab-control {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      border: none !important;
      z-index: 10;
      border-right: 1px solid #4e6ef2 !important;
      &:last-child {
        border: none !important;
      }
    }
  }
  .slider-block {
    position: absolute;
    top: 0;
    height: 100%;
  }
}

.navbar-slider {
  width: 100%;
  height: 30px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  transition: all 300ms ease;
  scrollbar-width: none; /*Firefox*/
  -ms-overflow-style: none; /*IE10+*/
  &::-webkit-scrollbar {
    display: none; /*ChromeSafari*/
  }
  li {
    flex: none;
    height: 86%;
    font-size: 16px;
    font-weight: bold;
    list-style: none;
    margin-left: 20px;
  }

  .empt-nav {
    height: 100%;
    width: 1px;
  }

  .active-nav {
    border-bottom: 3px solid #fff;
    font-size: 18px;
    font-weight: bold;
  }
}

.tab-content {
  flex: auto;
  position: relative;

  & > .tab-bg {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
.tab-slider {
  flex: 1;
  height: 100%;
}
</style>