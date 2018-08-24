<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import './assets/css/main.css'
import './assets/css/iconfont.css'
// import $ from './assets/js/jquery.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
    }
  },

  mounted () {
    console.log(this.getToken)
    // this.login({
    //   token: 1,
    //   user: 2
    // })
  },

  computed: {
    ...mapGetters([
      'getToken'
    ])
  },

  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>
<style lang="scss">
</style>
