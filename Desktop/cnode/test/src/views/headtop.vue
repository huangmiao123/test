<template>
  <div class="headtop">
    <div class="page-cover" :class="{active:pagecovers}" @click="pagecover"></div>
    <div class="header cf">
      <a href="javascript:void(0)" @click="changeClick"><i class="iconfont" :class="getclass"></i></a>
      <!-- <router-link tag="a" to="/list/login"><i class="iconfont icon-feiji"></i></router-link> -->
      <a href="javascript:void(0)" :class="loginshow" @click="changelogin"><i class="iconfont icon-feiji"></i></a>
      <span>{{title}}</span>
    </div>
    <transition name="fade">
      <div class="sideBar" v-if="sideBarshow">
        <div class="slidebar-login">登录</div>
        <div class="slidebar-list">
          <!-- <router-link tag="a" to="/list/all"><i class="iconfont icon-quanbu"></i>全部</router-link> -->
          <a @click="changePage('/list/all')"><i class="iconfont icon-quanbu"></i>全部</a>
          <a @click="changePage('/list/good')"><i class="iconfont icon-dianzan"></i>精华</a>
          <a @click="changePage('/list/share')"><i class="iconfont icon-fenxiang2"></i>分享</a>
          <a @click="changePage('/list/ask')"><i class="iconfont icon-wenda"></i>问答</a>
          <a @click="changePage('/list/job')"><i class="iconfont icon-zhaopinqiatan"></i>招聘</a>
          <a @click="changePage('/xiaoxi')"><i class="iconfont icon-xiaoxi"></i>消息</a>
          <a @click="changePage('/about')"><i class="iconfont icon-iconset0103"></i>关于</a>
        </div>
      </div>
    </transition>
    <!-- <router-view></router-view> -->
    <!-- <loading :show="show"></loading> -->
  </div>
</template>

<script>
// import loading from './loading'
// import $ from 'jquery'
// import { mapState } from 'vuex'
export default {
  components: {
    // loading
  },
  props: [
    'getclass',
    'title',
    'loginshow'
  ],
  data () {
    return {
      sideBarshow: false,
      pagecovers: false,
      objitem1: []
    }
  },
  methods: {
    pagecover () {
      this.sideBarshow = false
      this.pagecovers = false
      document.getElementsByTagName('html')[0].style.height = 'auto'
      document.getElementsByTagName('html')[0].style.overflowY = 'visible'
    },
    changePage (params) {
      console.log(this.$router, params)
      this.$router.push({
        path: params
      })
      this.sideBarshow = false
      this.pagecovers = false
      document.getElementsByTagName('html')[0].style.height = 'auto'
      document.getElementsByTagName('html')[0].style.overflowY = 'visible'
    },
    changeClick () {
      if (this.getclass === 'icon-caidan') {
        this.sideBarshow = true
        this.pagecovers = true
        document.getElementsByTagName('html')[0].style.height = '100%'
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
      } else {
        this.$router.go(-1)
      }
    },
    changelogin () {
      // this.$store.commit('changelogin')
      // console.log(this.$store.commit('changelogin'))
      this.$router.push({path: '/changelogin'})
      // this.$router.push({path: '/xiaoxi'})
    }
  },
  created () {
    // let url = 'https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all&mdrender=true'
    // this.$http.get(url).then(response => {
    //   this.objitem1 = response.data.data
    //   console.log(response.data.data)
    //   // console.log(response.data.data)
    //   // console.log(response.data.data.author.avatar_url)
    // }).catch(error => {
    //   console.log(error)
    // })
  }
}
</script>
<style lang="scss" scope>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 750px;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  border-bottom: 1px solid #e6e6e6;
  z-index: 1;
  background: #fff;
  text-align: center;
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2rem;
    height: 0.8rem;
    text-align: center;
    i {
      font-size: 0.4rem;
    }
    &:nth-child(2) {
      left: initial;
      right: 0;
      i {
        color: #42b983;
      }
    }
    &.loginshow{
      display: none;
    }
  }
}
.page-cover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.4);
  z-index: 7;
  display: none;
}
.page-cover.active{
  display: block
}
.sideBar {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 4rem;
  background-color: #fff;
  color: #313131;
  z-index: 8;
  overflow-y: scroll;
  .slidebar-login{
    height: 1.2rem;
    line-height: 1.2rem;
    margin:0 .3rem;
    font-size:.32rem;
    color: #222;
    border-bottom: 1px solid #eee;
    &::before{
      content: '';
      display: inline-block;
      width: .45rem;
      height: .45rem;
      background: url(../assets/images/download.png) no-repeat center;
      background-size: 100% 100%;
      vertical-align: middle;
      margin-right:.1rem;
    }
  }
}
.slidebar-list {
  padding: .3rem 0;
  a{
    display: block;
    margin: 0 .2rem;
    padding: .15rem .2rem;
    font-weight: 700;
    font-size: .28rem;
    &:nth-child(5){
      border-bottom: 1px solid #eee;
    }
    i{
      display: inline-block;
      margin-right: .6rem
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: transform .4s ease;
}
.fade-enter, .fade-leave-to {
  transform: translate3d(-4rem, 0, 0);
}
</style>
