<template>
  <div class="login">
    <headtop getclass="icon-xiangzuo" title="登录" loginshow="loginshow"></headtop>
    <div class="login-contain">
        <div class="item-form login-item cf">
          <span>账号</span>
          <input type="text" placeholder="请输入账号或手机号" v-model="formName.user"/>
           <!-- @blur="inputBlur('user',formName.user)" -->
        </div>
        <div class="item-form login-item cf pr">
          <span>密码</span>
          <input type="password" placeholder="请输入密码" v-model="formName.password"/>
           <!-- @blur="inputBlur('password',formName.password)" -->
          <i class="iconfont icon-yanjing-bi"></i>
        </div>
        <div class="login-btn" @click="submitForm('formName')" v-bind:disabled="formName.beDisabled">登录</div>
        <div class="form-footer cf">
          <a class="fl">注册新账号</a>
          <a class="fr">忘记密码？</a>
        </div>
        <div class="login-other pr">
          <div class="login-other-title">第三方登录</div>
          <i></i>
        </div>
        <div class="login-othder-wrap flex">
          <a class="flex1" href="#"><i class="iconfont icon-weixin"></i></a>
          <a class="flex1" href="#"><i class="iconfont icon-qq"></i></a>
          <a class="flex1" href="#"><i class="iconfont icon-weibo"></i></a>
        </div>
    </div>
  </div>
</template>
<script>
import headtop from './headtop'
export default {
  components: {
    headtop
  },
  props: [
    'token'
  ],
  data () {
    return {
      formName: {
        user: '',
        password: '',
        beDisabled: true
      }
    }
  },
  created () {
    console.log(this.$route.fullPath)
  },
  computed: {
    // alert(1)
  },
  methods: {
    submitForm: function (formName) {
      var user = this.formName.username
      var password = this.formName.password
      const url = '/apiv1/mber/login.html'
      this.$http.post(url, {
        // 传递参数 capt和pid
        params: {
          appid: '1'
        }
      }).then(response => {
        this.objitem1 = response.data.data
        this.token = 1
        console.log(this.token)
        console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      })
      console.log(user, password)
    }
  }
}
</script>
<style lang="scss" scope>
.login-contain{
  margin-top:1rem;
  border-top: 1px solid #e6e6e6;
  .item-form{
    height: 1rem;
    font-size: .32rem;
    color: #323232;
    padding: 0 .4rem;
    border-bottom: 1px solid #e6e6e6;
    background: #fff;
    span{
      float: left;
      display: block;
      height: 1rem;
      line-height: 1rem;
    }
    input{
      float: left;
      box-sizing: border-box;
      display:block;
      height: 1rem;
      line-height: 1rem;
      width: 5.4rem;
      padding-left: .3rem
    }
    input::-webkit-input-placeholder {
      color: #aab2bd;
      font-size: .28rem;
    }
    .icon-yanjing-bi{
      font-size: .4rem;
      text-align: center;
      display: block;
      width: .5rem;
      height: 1rem;
      line-height: 1rem;
      color: #999;
      position: absolute;
      top:0;
      right: .4rem;
    }
  }
  .login-btn{
    font-size: .32rem;
    height: .96rem;
    line-height: .96rem;background: #bfbfbf;
    color: #fff;
    text-align: center;
    margin: .8rem .25rem 0;
    border-radius: .1rem
  }
  .form-footer{
    margin: .56rem .25rem;
    a{
      color: #999;
      font-size: .32rem;
    }
  }
  .login-other{
    margin-top:1.8rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    .login-other-title{
      font-size: .32rem;
      color: #999;
      text-align: center;
      position: relative;
      z-index: 10;
      display: inline-block;
      background: #fff;
      padding: 0 .3rem
    }
    i{
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      width: 7.5rem;
      height: 1px;
      transform: translate(-50%,-50%);
      border-bottom: 1px solid #dcdcdc;
    }
  }
  .login-othder-wrap{
    margin-top:.6rem;
    text-align: center;
    a{
      padding: .2rem 0;
      .iconfont{
        font-size: 1.2rem;
        &.icon-weixin{
          color: #19d100;
        }
        &.icon-qq{
          color: #12b7f5;
        }
        &.icon-weibo{
          color: #e6162d;
        }
      }
    }
  }
}
</style>
