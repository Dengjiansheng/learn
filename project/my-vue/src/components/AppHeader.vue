<template>
  <header>
    <a class="header-btn__back" href="javascript:;" @click="headerHistoryBack()"></a>
    <h1>{{title}}</h1>
    <a v-if="showReload" class="header-btn__reload" href="javascript:window.location.reload()"></a>
  </header>
</template>
<script>
export default {
  props: {
    title: String,
    showReload: Number
  },
  methods: {
    headerHistoryBack: function () {
      this.$emit('historyBack')
    }
  }
};
</script>

<style scoped>
header {
  position: relative;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: content-box;
  padding-top: 40px;
  height: 88px;
  color: #fff;
  text-align: center;
  font-size: 34px;
  line-height: 88px;
  background: url("data:image/png;base64,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")
    center/100% 100%;
}
.header-btn__back {
  position: absolute;
  top: 40px;
  left: 32px;
  bottom: 0;
  width: 25px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAtCAMAAABs3DDqAAAAS1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////+DmQsHAAAAGHRSTlMAmqGSjYqdlfbxOyEd4d0/6s6EQNe+fQllEMDbAAAAeElEQVQ4y9XRSQrAIBBEUTNqZjP3/U8akSIIpZtsJH/R0LxlqWjabHFoRWwKZEtBnQvK3NB8hP0YEmBkGmKwGBEQA4gBxBCQZgC5d/VwWwk7VeVu5anvAphHNxYRgAjgK0J6gekFJgDTCiBCGUn/mZokWRWv7i71AHVnGDSsyzdbAAAAAElFTkSuQmCC);
}
.header-btn__reload {
  position: absolute;
  top: 40px;
  right: 32px;
  bottom: 0;
  width: 46px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAmCAMAAACMNFloAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMABerOI+5n2/xe3yX249djVzEt7JZUJxYTB/r48+ixmouFHA8K0sW7q6ehdm1LRB+tcT56ECV7hwAAAYpJREFUOMuVleeSgkAQhEkSBAHJUTxzTtfv/2y3S+mp7K4W/Ydh6qvZoZjplRjZ+k5VUITq9mBLXyR7Kl6kevIn2h/eOWdwD4a+EJ5vKBA2lp2TczRrp4BokvHphJY2rPylNculBwQ8OqiBct/pVd47gDJm6ZkCjDj58YjwWje7UAHjzDv1bABq3klO2xpcaQow7TRuAidJoBNQBO/4tmwkoRrg0kmlczGeVsDHgWC/7KcHngCG1EMuoPXAIyB+vh1qXUhOBkQO4JDHqs3oADxx4afWNOHRyLREG7P5p1dzuhMmWt4X8ZPHblE6pnTLxyJ+Daol3ZNjiYfKo4BfUN5NaVjjKUMS8SsYaRvddF2/AgOd6CYJeSt9/2lJj5/2A0x74JqJKuvBX4Dog7cxE1rAFC7fsYrGbPfi1WaXI6fGMePRsyGgMu2ca7EtjTh1EpJ3GNP7paYXcHscAnA9xlINgQlk7aQqUazJBLX9JgTRJvt+HQyqx9TFfS4bS/46ENftMiwQLnecq+wPX44/4Q3Cyw0AAAAASUVORK5CYII=);
}
* {
  -webkit-tap-highlight-color: transparent;
}
.page {
  padding-top: 128px;
}
.header-btn__reload.reloadAnimate {
  -webkit-animation: reload 2s linear both;
  animation: reload 2s linear both;
}
@-webkit-keyframes reload {
  0% {
    -webkit-transform: rotate(0) translate3d(0, 0, 0);
    transform: rotate(0) translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: rotate(1080deg) translate3d(0, 0, 0);
    transform: rotate(1080deg) translate3d(0, 0, 0);
  }
}
@keyframes reload {
  0% {
    -webkit-transform: rotate(0) translate3d(0, 0, 0);
    transform: rotate(0) translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: rotate(1080deg) translate3d(0, 0, 0);
    transform: rotate(1080deg) translate3d(0, 0, 0);
  }
}
@media (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  header {
    padding-top: 88px;
  }
  .page {
    padding-top: 176px;
  }
  .header-btn__back,
  .header-btn__reload {
    top: 88px;
  }
}
</style>