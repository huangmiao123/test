// 先导入并注册vuex，再导出一个vuex实例，这个实例在state中定义了count属性，其作用是用来计数的，然后在mutations中定义了两个方法，
// increment是对count进行加1处理， decrement是对count进行减1处理。
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     // changelogin:state => state.count ++,
//     // decrement:state => state.count --
//   }
// })

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录

const state = {
  user: 234242,
  token: 1313131
}
const mutations = {
  // 将token保存到sessionStorage里，token表示登录状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  // 获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  }
}

// 改变转态
const actions = {
  login ({ commit }, data) {
    commit('SET_TOKEN', data.token)
    commit('GET_USER', data.user)
  }
}

// 获取状态
const getters = {
  getToken (state) {
    return state.token
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})








