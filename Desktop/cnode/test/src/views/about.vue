<template>
  <div class="about">
    <headtop getclass="icon-xiangzuo" title="关于"></headtop>
    <div class="about-contain">
      <div class="about-contain-item">
        <div class="about-project">关于项目</div>
        <div class="about-tit">该项目是基于Cnodejs的api，采用vue.js重写的webapp。</div>
      </div>
      <div class="about-contain-item">
        <div class="about-project">源码地址</div>
        <div class="about-tit"><a href="https://github.com/shinygang/Vue-cnodejs">https://github.com/shinygang/Vue-cnodejs</a></div>
      </div>
      <div class="about-contain-item">
        <div class="about-project">意见反馈</div>
        <div class="about-tit"><a href="https://github.com/shinygang/Vue-cnodejs/issues">发表意见或者提需求</a></div>
      </div>
      <div class="about-contain-item">
        <div class="about-project">当前版本</div>
        <div class="about-tit">V2.0</div>
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
  data () {
    return {
    }
  },
  computed: {
    // alert(1)
  },
  methods: {
    // loading_wind
  }
}
</script>
<style lang="scss" scope>
.about-contain{
  margin-top: .8rem;
  background: #f7f7f7;
  height: 13rem;
  .about-contain-item{
    margin: 0 .3rem;
    border-bottom: 1px solid #d5dbdb;
    padding-bottom: .3rem;
    .about-project{
      padding: .3rem 0;
      font-size: .3rem;
      font-weight: 700;
      color: #0e0d0d;
    }
    .about-tit{
      font-size: .28rem;
      color: #323232;
      a{
        color: #42b983;
      }
    }
  }
}
</style>
