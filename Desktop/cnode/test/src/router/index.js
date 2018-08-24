import Vue from 'vue'
import Router from 'vue-router'
import one from '../views/one.vue'
import header from '../views/header.vue'
import user from '../views/user.vue'
import about from '../views/about.vue'
import login from '../views/login.vue'
import xiaoxi from '../views/xiaoxi.vue'
import changelogin from '../views/changelogin.vue'
import store from '../store'

Vue.use(Router)
// 引入组件
const router =  new Router({
  // mode: 'history',
  routes: [
    // { path: '/one/:id', component: Promotion, props: { newsletterPopup: false } },
    // mode: 'history',
    {
      path: '*',
      redirect: '/list/all'
    },
    {
      path: '/list/:id',
      name: 'header',
      component: header
    },
    {
      path: '/one/:id',
      name: 'one',
      component: one
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: xiaoxi
    },
    {
      path: '/changelogin',
      name: 'changelogin',
      component: changelogin,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
})


// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
      alert(0)
    } else {
      console.log('该页面需要登陆')
      alert(2)
      next({
        path: '/login'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
