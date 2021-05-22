import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'
import VuePrototype from './initVueMethods/VuePrototype'
import customComps from '@/components';

Vue.use(customComps);
Vue.use(http);
VuePrototype(Vue);
Vue.config.productionTip = false;

const setHtmlFontSize = () => {
  const htmlDom = document.documentElement;
  const { width, height } = htmlDom.getBoundingClientRect();
  let htmlWidth = Math.min(width, height)
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
