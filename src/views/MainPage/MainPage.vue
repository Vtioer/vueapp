<template>
  <MyLoadmore
    :topMethod="handleRefresh"
    :bottomMethod="handleLoadMore"
    :bottomAllLoaded="false"
  >
    <div class="main-page">
      <section class="quick-channel">
        <div class="channel-item first-row">
          <div
            class="first-col"
            :style="{
              background: `url(${hotolImgUrl}) no-repeat bottom right/73px auto`,
            }"
          >
            <span>酒店</span>
          </div>
          <div
            class="second-col"
            :style="{
              background: `url(${homestayImaUrl}) no-repeat bottom left/73px auto`,
            }"
          >
            <span>名宿·客栈</span>
          </div>
          <div
            class="last-special-col"
            :style="{
              background: `url(${explosionImaUrl}) no-repeat bottom right/100% auto`,
            }"
          >
            <span>特价·爆款</span>
          </div>
        </div>
        <div class="channel-item second-row">
          <div
            class="first-col"
            :style="{
              background: `url(${airplaneImaUrl}) no-repeat bottom right/100% auto`,
            }"
          >
            <span>机票</span>
          </div>
          <div
            class="second-col"
            :style="{
              background: `url(${airplaneImaUrl2}) no-repeat bottom right/100% auto`,
            }"
          >
            <span>火车票</span>
          </div>
          <div class="third-col">
            <span>汽车·船票</span>
          </div>
          <div class="last-col">
            <span>专车·租车</span>
          </div>
        </div>
        <div class="channel-item last-row">
          <div
            class="first-col"
            :style="{
              background: `url(${travelImaUrl}) no-repeat bottom right/100% auto`,
            }"
          >
            <span>旅游</span>
          </div>
          <div
            class="second-col"
            :style="{
              background: `url(${travelImaUrl2}) no-repeat bottom right/100% auto`,
            }"
          >
            <span>私家团</span>
          </div>
          <div class="third-col">
            <span>邮轮游</span>
          </div>
          <div class="last-col">
            <span>定制游</span>
          </div>
        </div>
      </section>
      <section class="special-sale-featured">
        <div class="special-sale-featured-item">
          <div class="title">
            <span class="special-sale">特卖直播</span>
            <span class="live-broadcast">特价好货直播中</span>
          </div>
          <div class="live-content">
            <img
              src="https://dimg04.c-ctrip.com/images/0703h120008l650b72D9D.jpg?proc=limitsize/s_66539,CEC6"
              alt=""
            />
          </div>
          <p class="live-desc">¥1200</p>
        </div>
        <div class="special-sale-featured-item">
          <div class="title">
            <p class="featured">精选榜</p>
            <p class="flagship-store">星球号旗舰店</p>
          </div>
          <div class="special-featured">
            <div class="special-item">
              <img
                class="img-item"
                src="https://dimg04.c-ctrip.com/images/02057120008ezz59649C5_D_280_280_R5.jpg"
              />
              <p>乐园酒店榜</p>
            </div>
            <div class="featured-item">
              <img
                class="img-item"
                src="https://dimg04.c-ctrip.com/images/0203b120008kt651t76ED_D_280_280_R5.jpg"
              />
              <p>百星首发</p>
            </div>
          </div>
        </div>
      </section>
      <section class="carousel-wrap">
        <MyCarousel :height="100">
          <img
            src="https://dimg04.c-ctrip.com/images/0zg62120008nvm6eiB1AC.jpg"
            alt=""
          />
          <img
            src="https://dimg04.c-ctrip.com/images/0zg5j120008g0tkrf3FAD.jpg"
            alt=""
          />
          <img
            src="https://dimg04.c-ctrip.com/images/0zg3p120008nymw8fB32D.jpg"
            alt=""
          />
        </MyCarousel>
      </section>

      <section class="more-scenic">
        <MyWaterfallsFlow :list="scenicList"></MyWaterfallsFlow>
      </section>
    </div>
  </MyLoadmore>
</template>

<script>
import MainPageJs from "./MainPage.js";
export default MainPageJs;
</script>

<style lang="scss" scoped>
@import "./MainPage.scss";
</style>