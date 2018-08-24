<template>
  <div id="header">
    <headtop getclass="icon-caidan" :title="title"></headtop>
    <ul class="all-item">
      <li v-for="(items, index) in objitem1" :key="index" :class="{'on' : items.good == false}">
        <router-link :to='"/one/" + items.id' tag="a">
          <div class="all-item-art"><i class="br5">置顶</i><span> {{items.title}} </span></div>
          <div class="all-item-wrap pr">
            <img :src="items.author.avatar_url">
            <div class="all-wrap-art">
              <div class="cf top">
                <p class="fl name">{{items.id}}</p>
                <p class="fr"><b>{{items.visit_count}}</b>/<i>16945</i></p>
              </div>
              <div class="cf">
                <p class="fl time">{{items.visit_count}}</p>
                <p class="fr">26分钟前</p>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <loading :show="show"></loading>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import $ from 'jquery'
import loading from './loading'
import headtop from './headtop'
export default {
  components: {
    loading,
    headtop
  },
  props: [
    // 'items.author.avatar_url'
  ],
  data () {
    return {
      objitem1: [],
      show: false,
      activeColor: 'red',
      fontSize: 30,
      title: '全部'
    }
  },
  created () {
    let url = 'https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all&mdrender=true'
    this.$http.get(url).then(response => {
      this.objitem1 = response.data.data
      // console.log(response.data.data)
      // console.log(response.data.data.author.avatar_url)
    }).catch(error => {
      console.log(error)
    })
    let page = 1
    let flag = true
    $(window).scroll(() => {
      if (!flag) return false
      if ($(document).height() - $(window).scrollTop() - $(window).height() < 200) {
        flag = false
        page++
        this.show = true
        this.$http.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=20&tab=all&mdrender=true`, {
          // 传递参数 capt和pid
          params: {
            capt: 'capt',
            pid: 'pid'
          }
        }).then(response => {
          this.objitem1 = this.objitem1.concat(response.data.data)
          // console.log(response.data.data)
          flag = true
          this.show = false
        }).catch(error => {
          console.log(error)
          flag = true
          this.show = false
        })
      }
    })
  },
  watch: {
    $route: {
      handler: function (val, oldval) {
        this.show = true
        let url = 'https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=' + val.params.id + '&mdrender=true'
        this.$http.get(url).then(response => {
          // console.log(val.params.id)
          if (val.params.id === 'all') {
            this.title = '全部'
          } else if (val.params.id === 'good') {
            this.title = '精华'
          } else if (val.params.id === 'share') {
            this.title = '分享'
          } else if (val.params.id === 'ask') {
            this.title = '问答'
          } else if (val.params.id === 'job') {
            this.title = '招聘'
          }
          this.objitem1 = response.data.data
          // console.log(this.title)
          this.show = false
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scope>
.all-item {
  margin-top: 0.8rem;
  font-size: 0.3rem;
  text-align: left;
  a {
    display: block;
    padding: 10px 15px;
    border-bottom: 1px solid #d5dbdb;
    .all-item-art {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      i {
        display: inline-block;
        margin-right: 0.1rem;
        text-align: center;
        background: #e74c3c;
        width: 0.7rem;
        height: 0.45rem;
        line-height: 0.45rem;
        color: #fff;
        font-size: 0.22rem;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .all-item-wrap {
      color: #34495e;
      font-size: 0.24rem;
      margin: 0.15rem 0;
      img {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .all-wrap-art {
      padding-left: 1rem;
      .top {
        margin-bottom: 0.1rem;
        .name {
          max-width: 4rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        b {
          color: #42b983;
          margin-right: 0.05rem;
        }
        i {
          margin-left: 0.05rem;
        }
      }
    }
  }
}
.yanran{position: fixed;top:0;z-index: 221;text-align: center;width:100%;max-width:750px ;}
</style>
