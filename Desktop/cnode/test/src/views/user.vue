<template>
  <div id="header3">
    <headtop getclass="icon-xiangzuo" title="用户信息"></headtop>
    <div class="user-info">
      <img :src="data.avatar_url"/>
      <p class="user-info-name">{{data.loginname}}</p>
      <div class="user-info-cf cf">
        <div class="time fl">{{time}}</div>
        <div class="integral fr">积分：<i>{{data.score}}</i></div>
      </div>
    </div>
    <!-- tab切换 -->
    <ul class="user-tabs flex">
      <li class="flex1" v-for="(itemss,index) in tabs" :key="index" @click="change(index)" :class="{on : index == number}">{{itemss}}</li>
      <!-- <li class="flex1">最新发布</li> -->
    </ul>
    <div class="user-tabs-wrap">
      <ul v-for="(items,indexs) in tabContentss" :key="indexs" v-show="indexs == number">
        <li class="cf" v-for="(itemli,index) in usertabstitle" :key="index"><a href="#">
          <img class="fl" :src="itemli.author.avatar_url"/>
          <div class="right">
            <div class="title">{{itemli.title}}</div>
            <div class="cf"><p class="fl">{{itemli.author.loginname}}</p><p class="fr">1天前</p></div>
          </div>
        </a></li>
      </ul>
    </div>
    <!-- 下面的不算  tab切换 -->
    <!-- <ul class="flex tabss">
        <li class="flex1" v-for="(item,inde) in tabss" :class="{'active' : inde == num}" :key="inde" @click="tab(inde)">{{item}}</li>
    </ul>
    <div class="tabcon">
        <div v-for="(itemCon,inde) in tabContents" :key="inde" v-show=" inde == num">{{itemCon}}</div>
    </div> -->
      <!-- <p>{{$route.params.id}}</p> -->
    <loading :show="show"></loading>
  </div>
</template>

<script>
// import index_js from './../router/index.js'
import headtop from './headtop'
import loading from './loading'
export default {
  components: {
    loading,
    headtop
  },
  data () {
    return {
      data: '',
      time: '',
      tabs: ['最近回复', '最新发布'],
      tabContentss: ['1', '2'],
      usertabstitle: [],
      tabss: ['最近回复', '最新发布'],
      number: 0,
      num: 1
    }
  },
  created () {
    const loginname = this.$route.params.id
    // console.log(loginname)
    this.show = true
    this.$http.get(`https://cnodejs.org/api/v1/user/${loginname}`).then(response => {
      this.show = false
      this.data = response.data.data
      this.time = this.formatDate(response.data.data.create_at)
      this.usertabstitle = response.data.data.recent_replies
      // console.log(this.usertabstitle)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    formatDate: function (val) {
      var value = new Date(val)
      var year = value.getFullYear()
      var month = this.padDate(value.getMonth() + 1)
      var day = this.padDate(value.getDate())
      var hour = this.padDate(value.getHours())
      var minutes = this.padDate(value.getMinutes())
      var seconds = this.padDate(value.getSeconds())
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
    },
    padDate: function (va) {
      va = va < 10 ? '0' + va : va
      return va
    },
    change (index) {
      this.number = index
      // alert(1)
      const loginname = this.$route.params.id
      if (index === 0) {
        this.show = true
        this.$http.get(`https://cnodejs.org/api/v1/user/${loginname}`).then(response => {
          this.show = false
          this.usertabstitle = response.data.data.recent_replies
          // console.log(this.usertabstitle)
        }).catch(error => {
          console.log(error)
        })
        return false
      }
      if (index === 1) {
        // this.items == this.data.recent_replies
        // const loginname = this.$route.params.id
        this.show = true
        this.$http.get(`https://cnodejs.org/api/v1/user/${loginname}`).then(response => {
          this.show = false
          this.usertabstitle = response.data.data.recent_topics
          // console.log(this.usertabstitle)
        }).catch(error => {
          console.log(error)
        })
        return false
        // console.log(this.data.recent_replies)
      }
    },
    tab (inde) {
      this.num = inde
    }
  }
}
</script>

<style lang="scss" scope>
.header1 {
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
  }

  a:nth-child(2) {
    left: initial;
    right: 0;
    i {
      color: #42b983;
    }
  }
}
.user-info{
  padding: .3rem;
  background: #e7e7e7;
  margin-top: .8rem;
  img{
    display: block;
    border-radius: 50%;
    margin: 0 auto;
  }
  p{
    text-align: center;
    padding: .1rem 0;
  }
  .user-info-cf{
    margin-top: .2rem;
    .integral{
      color: #80bd01;
    }
  }
}
.user-tabs{
  li{
    float: left;
    width: 50%;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    color: #222;
    font-size: .32rem;
    border-bottom: 1px solid #eee;
    &.on {
      border-bottom: 2px solid red;
      color: red;
    }
    &:nth-child(1) {
      border-right: 1px solid #eee
    }
  }
}
.user-tabs-wrap{
  li{
    a{
      display: block;
      padding: .3rem;
      border-bottom: 1px solid #eee;
      img{
        display: block;
        width: .9rem;
        height: .9rem;
      }
      .right{
        color:#222;
        font-size: .32rem;
        font-weight: 700;
        padding-left: 1.2rem;
        .title{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .cf{
          font-weight: 500;
          color: #626262;
          font-size: .3rem;
          margin-top:.1rem;
          .fr{
            color: #80bd01;
          }
        }
      }
    }
  }
}
</style>
