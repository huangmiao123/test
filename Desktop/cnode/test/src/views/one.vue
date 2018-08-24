<template>
  <div id="header2">
    <headtop getclass="icon-xiangzuo" title="内容详情页"></headtop>
    <div class="theme">
      <h2 class="topic-title">{{data.title}}</h2>
      <div class="author-info pr">
        <div class="author-info-l">
          <img :src="avatar_url"/>
          <div class="min">
            <i>dsfsjkfdhlgjdfdsfsjkfdhlgjdfdsfsjkfdhlgjdfdsfsjkfdhlgjdfdsfsjkfdhlgjdf</i>
            <p>发布于：5月前</p>
          </div>
        </div>
        <div class="author-info-r">
          <p>置顶</p>
          <i>{{data.visit_count}}次浏览</i>
        </div>
      </div>
      <div class="theme-contain" v-html="data.content"></div>
      <h3 class="topic-reply"><strong v-html="data.reply_count">data.reply_count</strong> 回复</h3>
      <ul class="reply-list">
        <li v-for="(items,index) in replies" :key="index">
          <div class="user-wrap">
            <!-- <a href="/one/two/:id" class=""><img :src="items.author.avatar_url" class="head"></a> -->
            <router-link :to='"/user/" + items.author.loginname' tag="a"><img :src="items.author.avatar_url" class="head"></router-link>
              <div class="min"><span>{{items.author.loginname}}</span><i>发布于:1月前</i></div>
          </div>
          <div class="right">
            <p><span class="iconfont icon-dianzan"></span><i>{{items.ups.length}}</i></p>
            <p><span class="iconfont icon-zhuanfa"></span></p>
          </div>
          <div class="reply-list-tit">
            <p v-html="items.content"></p>
          </div>
        </li>
      </ul>
    </div>
    <!-- {{$route.params.id}} -->
  </div>
</template>

<script>
import headtop from './headtop'
export default {
  components: {
    headtop
  },
  data () {
    return {
      data: '',
      avatar_url: '',
      replies: []
    }
  },
  methods: {
  },
  created () {
    const id = this.$route.params.id
    this.$http.get(`https://cnodejs.org/api/v1/topic/${id}`).then(response => {
      this.data = response.data.data
      this.avatar_url = this.data.author.avatar_url
      this.replies = this.data.replies
      // console.log(this.replies)
    }).catch(error => {
      console.log(error)
    })
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
.theme {
  margin-top: 1.1rem;
  .topic-title {
    // display:inline-block;
    padding:.1rem;
    margin: .2rem;
    font-size: .34rem;
    color: #2c3e50;
    line-height: 1.5;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  .author-info {
    margin: 0 .2rem;
    img{
      display: inline-block;
      width: .8rem;
      height: .8rem;
      margin-right: .15rem;
      border-radius: 50%;
      vertical-align: middle
    }
    .min {
      display: inline-block;
      vertical-align: middle;
      i{
        max-width: 4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block
      }
    }
    .author-info-r {
      position: absolute;
      right:0;
      top:0rem;
      p{
        text-align: center;
        background: #e74c3c;
        color:#fff;
        height: .5rem;
        line-height: .5rem;
        border-radius: .08rem;
        font-size:.28rem
      }
      i{
        font-size: .24rem
      }
    }
  }
  .theme-contain {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
    word-wrap: break-word;
    padding: .3rem;
    margin-top: .3rem;
    background: #fff;
    border-bottom: 1px solid #d4d4d4;
    .markdown-text{
      margin-bottom: 0;
      p {
        margin-top: 0;
        margin-bottom: 16px
      }
      a{
        color: #4078c0;
        text-decoration: none;
      }
      h2{
        padding-bottom: .3em;
        font-size: 1.75em;
        line-height: 1.225;
        border-bottom: 1px solid #eee;
      }
      hr {
        height: 4px;
        padding: 0;
        margin: 16px 0;
        background-color: #e7e7e7;
        border: 0 none;
      }
      blockquote {
        padding: 0 15px;
        color: #777;
        border-left: 4px solid #ddd;
      }
    }
  }
  .topic-reply{
    padding: 15px;
    border-bottom: 1px solid #d4d4d4;
    color: #2c3e50;
    font-size: 16px;
    line-height: 1.5;
    strong {
      color: #42b983;
    }
  }
  .reply-list{
    li{
      padding:.3rem;
      position: relative;
      border-bottom: 1px solid #e6e6e6;
      .user-wrap{
        margin-bottom:.3rem;
        a{
          width: .9rem;
          height: .9rem;
          margin-right:.2rem;
          display: inline-block;
          vertical-align: middle;
          img{
            display: block;
            width: 100%;
            height: 100%;
            border-radius: .15rem;
          }
        }
        .min{
          display: inline-block;
          height: .9rem;
          line-height: .45rem;
          vertical-align: middle;
          max-width: 4.5rem;
          overflow: hidden;
        }
      }
      .right{
        position: absolute;
        top: .3rem;
        right: 0;
        p{
          display: inline-block;
          span{
            font-size:.35rem;
            margin-right: .2rem;
          }
        }
      }
      .reply-list-tit{
        img{
          display: block;
          width: 100%;
        }
        a{
          color: #4078c0
        }
      }
    }
  }
}
</style>
