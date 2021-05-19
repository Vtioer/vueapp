import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import HomePage from '@/views/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/HomePage',
    meta: {
      index: 30,
      auth: true,
      keepAlive: false
    },
    children: [
      {
        path: '/HomePage',
        name: 'HomePage',
        component: HomePage,
        meta: {
          index: 30,
          auth: true,
          keepAlive: false
        },
      },
    ]

  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      index: 0,
      auth: false,
      keepAlive: false
    }
  },
]

const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.auth)) {//判断是否需要登录
    // 判断是否已登陆
    if (!localStorage.getItem('Token')) {
      next();
    } else {
      next({ path: "/Login" });
    }
  } else {
    next()
  }
})

export default router
