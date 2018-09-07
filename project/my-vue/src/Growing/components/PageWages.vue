<template>
  <div class="page-wages" v-show="pageStatus=='wages'" v-cloak>
      <div class="tab-bar">
        <cube-tab-bar v-model="selectedTabWagesLabel"
                      showSlider
                      :useTransition="disabled"
                      ref="tabWagesNav"
                      :data="tabWagesLabels">
        </cube-tab-bar>
      </div>
      <cube-slide
            ref="wagesSlide"
            :loop="loop"
            :initial-index="initialWages"
            :auto-play="autoPlay"
            :show-dots="showDots"
            :options="slideOptions"
            @scroll="scroll"
            @change="changePage"
          >
          <cube-slide-item>
            <ul class="wages-table wages-table__header">
              <li>日期</li>
              <li>金额</li>
              <li>到账周期</li>
              <li>状态</li>
            </ul>
            <cube-scroll 
              ref="wagesScrollOne" 
              :options="wagesScrollOptions" 
              :scroll-events="['scroll']" 
              @scroll="onScrollHandle" 
              @pulling-down="onPullingDown"
              @pulling-up="onPullingUP"
            >
              <template slot="pulldown" slot-scope="props">
                <div
                    v-if="props.pullDownRefresh"
                    class="cube-pulldown-wrapper"
                    :style="pullDownStyle">
                  <div class="pulldown-content">
                    <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
                    <template v-else>
                      <span v-if="props.isPullingDown">正在刷新数据中...</span>
                      <span v-else>更新成功</span>
                    </template>
                  </div>
                </div>
              </template>
              <ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul>
              <ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul>
              <ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul>
              <ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul>
              <ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul><ul class="wages-table wages-table__body">
                <li>18/09/05</li>
                <li>500</li>
                <li>3天</li>
                <li>已到账</li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <cube-slide-item>
            <ul>
              <li>日期</li>
              <li>金额</li>
              <li>到账周期</li>
              <li>状态</li>
            </ul>
            <cube-scroll ref="wagesScrollTwo">
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              2<br>
              233<br>
              2<br>
              2<br>
            </cube-scroll>
          </cube-slide-item>
      </cube-slide>
    </div>
</template>

<script>
export default {
  name:'PageWages',
  props: {
    pageStatus: String
  },
  data() {
    return {
      title: "大神等级说明",
      selectedTabIndexLabel: "等级标识",
      disabled: false,
      tabIndexLabels: [
        {
          label: "等级标识",
          index:0
        },
        {
          label: "工资说明",
          index:1
        },
        {
          label: "积分说明",
          index:2
        }
      ],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions:{
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      wagesScrollOptions: {
        directionLockThreshold: 0,
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        },
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: '更新成功',
            noMore: '没有更多数据...'
          }
        }
      },
      pullDownY: 0,
      pullDownStyle: '',
      opacityStyle: '',
      triggerSurpriseFlag: false,
      triggerSurprise: false,
      signDatas: [
        {
          no:1,
          fontColor: 0,
          wages: 0,
          xslv: 1,
          wagesDetail:{
            pw: 0,
            dl: 0,
            dzzq: 0
          }
        },
        {
          no:2,
          fontColor: 0,
          wages: 0,
          xslv: 1,
          wagesDetail:{
            pw: 0,
            dl: 0,
            dzzq: 0
          }
        },
        {
          no:3,
          fontColor: 0,
          wages: 0,
          xslv: 1,
          wagesDetail:{
            pw: 0,
            dl: 0,
            dzzq: 0
          }
        },
        {
          no:4,
          fontColor: 1,
          wages: 0,
          xslv: 1,
          wagesDetail:{
            pw: 0,
            dl: 0,
            dzzq: 0
          }
        },
        {
          no:5,
          fontColor: 1,
          wages: 1,
          xslv: 2,
          wagesDetail:{
            pw: 1,
            dl: 1,
            dzzq: 30
          }
        },
        {
          no:6,
          fontColor: 1,
          wages: 1,
          xslv: 2,
          wagesDetail:{
            pw: 3,
            dl: 3,
            dzzq: 25
          }
        },
        {
          no:7,
          fontColor: 1,
          wages: 1,
          xslv: 3,
          wagesDetail:{
            pw: 5,
            dl: 5,
            dzzq: 20
          }
        },
        {
          no:8,
          fontColor: 1,
          wages: 1,
          xslv: 3,
          wagesDetail:{
            pw: 7,
            dl: 7,
            dzzq: 20
          }
        },
        {
          no:9,
          fontColor: 1,
          wages: 1,
          xslv: 3,
          wagesDetail:{
            pw: 9,
            dl: 9,
            dzzq: 20
          }
        }
      ],
      selectedTabWagesLabel: '陪玩',
      tabWagesLabels: [
        {
          label: '陪玩',
          index: 0
        },
        {
          label: '悬赏',
          index: 1
        }
      ]
    };
  },
  computed: {
    initialIndex() {
      return this.tabIndexLabels.filter(item => item.label == this.selectedTabIndexLabel)[0].index;
    },
    initialWages() {
      return this.tabWagesLabels.filter(item => item.label == this.selectedTabWagesLabel)[0].index;
    },
    pullDownTip() {
      if (this.pullDownY <= 60) {
        return '下拉可以刷新'
      } else {
        return '松开立即刷新'
      }
    },
  },
  methods: {
    onScrollHandle(pos) {
      this.pullDownY = pos.y
      console.log(122)
      if (pos.y > 0) {
        this.pullDownStyle = `top:${pos.y}px`;
      }
    },
    onPullingDown() {
      setTimeout(() => {
        this.$refs.wagesScrollOne.forceUpdate()
      }, 1000)
    },
    onPullingUP() {
      setTimeout(() => {
        this.$refs.wagesScrollOne.forceUpdate()
      }, 1000)
    },
    onHistoryBack() {
      // TODO 用于app路由变化
      this.pageStatus == 'index' && (window.history.back());
      this.pageStatus == 'wages' && (this.pageStatus = 'index', this.title = '大神等级说明');
    },
    changePage (current) {
      console.log(current)
      if (this.pageStatus == 'index') {
        this.selectedTabIndexLabel = this.tabIndexLabels[current].label;
        return;
      }
      if (this.pageStatus == 'wages') {
        this.selectedTabWagesLabel = this.tabWagesLabels[current].label;
        return;
      }
    },
    scroll (pos) {
      let x = Math.abs(pos.x), tabItemWidth, slideScrollerWidth, deltaX;
      if (this.pageStatus == 'index') {
        tabItemWidth = this.$refs.tabIndexNav.$el.clientWidth;
        slideScrollerWidth = this.$refs.indexSlide.slide.scrollerWidth;
        deltaX = x / slideScrollerWidth * tabItemWidth;
        this.$refs.tabIndexNav.setSliderTransform(deltaX);
        return;
      }
      if (this.pageStatus == 'wages') {
        tabItemWidth = this.$refs.tabWagesNav.$el.clientWidth;
        slideScrollerWidth = this.$refs.wagesSlide.slide.scrollerWidth;
        deltaX = x / slideScrollerWidth * tabItemWidth;
        this.$refs.tabWagesNav.setSliderTransform(deltaX);
        return;
      }
    },
    onLookWages() {
      this.pageStatus = 'wages';
      this.title = '我的工资';
      setTimeout(()=>{
        this.$refs.wagesSlide.refresh();
        this.$refs.wagesScrollOne.refresh();
        this.$refs.wagesScrollTwo.refresh();
      },30)
    }
  }
}
</script>
