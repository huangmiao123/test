<template>
  <div class="login">
    <headtop getclass="icon-xiangzuo" title="消息"></headtop>
    <div class="login-contain">
        <p>消息</p>
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
  created () {
    // console.log(this.$route.fullPath)
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
.login-contain{
  margin-top:1rem;
}
</style>
