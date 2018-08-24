<template>
  <div class="loading" v-if="show">
    <div class="loading-wind">
        <div class="loading-content">
            <i class="iconfont loading icon-loading"></i>
            <span>数据加载中....</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: ['show'],
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
.loading-wind {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%
}
.loading-wind .loading-content {
  position: absolute;
  left: 50%;
  top: 18%;
  transform: translate(-50%, -50%);
  -ms-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  padding: .26rem .3rem;
  border-radius: .1rem;
  font-size: .22rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, .7);
  -webkit-border-radius: .1rem;
  -moz-border-radius: .1rem;
  -ms-border-radius: .1rem;
  -o-border-radius: .1rem
}

.iconfont.loading {
  color: #fff;
  font-size: .4rem;
  display: block;
  -webkit-animation: loading-loop .8s linear infinite;
  animation: loading-loop .8s linear infinite
}

@keyframes loading-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0)
}
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
}
}

@-webkit-keyframes loading-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0)
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg)
  }
}

@-moz-keyframes loading-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0)
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

@-ms-keyframes loading-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0)
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg)
  }
}

@-o-keyframes loading-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0)
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg)
  }
}
</style>
