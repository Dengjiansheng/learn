<template>
   <div class="page-index" v-show="pageStatus=='index'">
    <cube-tab-bar v-model="selectedTabLabel"
                  showSlider
                  :useTransition="disabled"
                  ref="tabIndexNav"
                  :data="tabIndexLabels">
    </cube-tab-bar>
    <div class="growing-user">
      <div class="user-detail">
        <p><i class="godLevel godLevel-1"></i><span>莉莉安</span></p>
        <a href="javascript:;" @click="lookWages">查看工资</a>
      </div>
      <div class="user-level">
        <p class="user-level__show user-level__show-lv2" :style="{width: 1300/2999 * 100 + '%'}"></p>
        <p class="user-level__text">Lv.2</p>
        <p class="user-level__val">1300/2999</p>
      </div>
    </div>
    <div class="tab-container">
      <cube-slide
          ref="indexSlide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
        <!-- 关注 -->
        <cube-slide-item>
          <cube-scroll :options="scrollOptions" :datas="signDatas">
            <div class="growing-itemDetail growing-itemDetail--sign">
              <h2>等级标志</h2>
              <div class="growing-itemDetail__table">
                <ul>
                  <li>等级</li>
                  <li>等级标志</li>
                  <li>字体颜色</li>
                  <li>工资</li>
                  <li>悬赏等级</li>
                </ul>
                <ul v-for="(item, index) in signDatas" :key="index">
                  <li>{{item.no}}</li>
                  <li><i class="godLevel" :class="'godLevel-' + item.no"></i></li>
                  <li><i :class="{on: item.fontColor == 1, off: item.fontColor==0}"></i></li>
                  <li><i :class="{on: item.wages == 1, off: item.wages==0}"></i></li>
                  <li>{{item.xslv}}级</li>
                </ul>
              </div>
            </div>
          </cube-scroll>
        </cube-slide-item>
        <cube-slide-item>
          <cube-scroll :options="scrollOptions">
            <div class="growing-itemDetail growing-itemDetail--wages">
              <h2>工资说明</h2>
              <div class="growing-itemDetail__table">
                <ul>
                  <li>等级</li>
                  <li>陪玩</li>
                  <li>代练</li>
                  <li>到账周期</li>
                </ul>
                <ul v-for="(item, index) in signDatas" :key="index">
                  <li>{{item.no}}</li>
                  <li><i v-if="item.wagesDetail.pw==0" :class="{off: item.wagesDetail.pw==0}"></i><span v-if="item.wagesDetail.pw > 0">{{item.wagesDetail.pw}}%</span></li>
                  <li><i v-if="item.wagesDetail.dl==0" :class="{off: item.wagesDetail.dl==0}"></i><span v-if="item.wagesDetail.dl > 0">{{item.wagesDetail.dl}}%</span></li>
                  <li><i v-if="item.wagesDetail.dzzq==0" :class="{off: item.wagesDetail.dzzq==0}"></i><span v-if="item.wagesDetail.dzzq > 0">D+{{item.wagesDetail.dzzq}}天</span></li>
                </ul>
              </div>
            </div>
          </cube-scroll>
        </cube-slide-item>
        <cube-slide-item>
          <cube-scroll :options="scrollOptions">
            <div class="growing-itemDetail growing-itemDetail--points">
              <h2>积分说明</h2>
              <div class="points-item">
                <h3>积分累加途径</h3>
                <p>1.在线陪玩订单——积分 = 钻石 * 1.2</p>
                <p>2.离线陪玩订单——积分 = 钻石 * 1.1</p>
                <p>3.悬赏大厅订单——积分 = 钻石 * 1</p>
              </div>
              <div class="points-item">
                <h3>积分惩罚机制</h3>
                <p>1.悬赏大厅&ensp;不按时传首图或传错首图&ensp;&ensp;<b>-500积分</b></p>
                <p>2.悬赏大厅&ensp;超时违约&ensp;&ensp;<b>-1000积分</b></p>
                <p>3.悬赏大厅&ensp;接错单子&ensp;&ensp;<b>-200积分</b></p>
                <p>4.悬赏大厅&ensp;连跪或不按订单要求，导致用户退单&ensp;&ensp;<b>-5000积分</b></p>
                <p>5.关闭离线订单&ensp;&ensp;<b>-500积分</b></p>
                <p>6.用户投诉属实&ensp;&ensp;<b>-1000积分</b></p>
              </div>
              <div class="points-item">
                <h3>备注说明</h3>
                <p>1.积分累加途径与惩罚机制，会不定期调整，以实际公布为准</p>
                <p>2.不允许采取刷单来增加成长积分，一经查实，小浪将会取消大神成长等级</p>
              </div>
            </div>
          </cube-scroll>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageStatus: String
  },
  data () {
    return {
      selectedTabLabel: "等级标识",
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
        directionLockThreshold: 0
      },
      scrollOptions: {
        directionLockThreshold: 0
      },
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
      ]
    }
  },
  computed: {
    initialIndex() {
      return this.tabIndexLabels.filter(item => item.label == this.selectedTabLabel)[0].index;
    }
  },
  methods: {
    lookWages(){
      this.$emit('onLookWages')
    },
    changePage (current) {
        this.selectedTabLabel = this.tabIndexLabels[current].label;
        return;
    },
    scroll (pos) {
      const x = Math.abs(pos.x);
      const tabItemWidth = this.$refs.tabIndexNav.$el.clientWidth;
      const slideScrollerWidth = this.$refs.indexSlide.slide.scrollerWidth;
      const deltaX = x / slideScrollerWidth * tabItemWidth;
      this.$refs.tabIndexNav.setSliderTransform(deltaX);
    },
  }
}
</script>
