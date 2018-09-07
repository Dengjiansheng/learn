<template>
  <div id="app">
    <AppHeader :title="title" @historyBack="onHistoryBack"></AppHeader>
    <PageIndex :pageStatus="pageStatus" @onLookWages="onLookWages"></PageIndex>
    <PageWages :pageStatus="pageStatus"></PageWages>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import PageIndex from "./components/PageIndex.vue";
import PageWages from "./components/PageWages.vue";
export default {
  name: "app",
  data() {
    return {
      title: "大神等级说明",
      pageStatus: 'index'
    };
  },
  components: {
    AppHeader,
    PageIndex,
    PageWages
  },
  methods: {
    onHistoryBack() {
      // TODO 用于app路由变化
      this.pageStatus == 'index' && (window.history.back());
      this.pageStatus == 'wages' && (this.pageStatus = 'index', this.title = '大神等级说明');
    },
    onLookWages() {
      this.pageStatus = 'wages';
      this.title = '我的工资';
      debugger;
      setTimeout(()=>{
        this.$children[2].$refs.wagesSlide.refresh();
        this.$children[2].$refs.wagesScrollOne.refresh();
        this.$children[2].$refs.wagesScrollTwo.refresh();
      },30)
    }
  }
};
</script>

<style lang="scss">
html,body{
  background:#2c2c32;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page-index,.page-wages{
  flex:1;
  display: flex;
  flex-direction: column;
}

.page-wages{
  .tab-bar{
    padding:0 32px;
    background-color: #3e414a;
  }
  .cube-tab-bar-slider{
    width:343px !important;
    left:0px;
  }
  .cube-slide-item{
    display: flex;
    flex-direction: column;
  }
  .cube-slide{
    flex:1;
  }
}
.cube{
  &-tab{
    color:#fff;
    font-size:28px;
    &_active{
      color:#617fd6;
    }
    &-bar{
      height:70px;
      background:#3e414a;
      &-slider{
        height:4px;
        border-radius: 2px;
        background-color:#617fd6;
        width:110px !important;
        left:70px;
      }
    }
  }
}
i.godLevel{
  vertical-align: middle;
  display: inline-block;
  width:52px;
  height:26px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &-1{
    background-image: url(../assets/Growing/user-01.png);
  }
  &-2{
    background-image: url(../assets/Growing/user-02.png);
  }
  &-3{
    background-image: url(../assets/Growing/user-03.png);
  }
  &-4{
    background-image: url(../assets/Growing/user-04.png);
  }
  &-5{
    background-image: url(../assets/Growing/user-05.png);
  }
  &-6{
    background-image: url(../assets/Growing/user-06.png);
  }
  &-7{
    background-image: url(../assets/Growing/user-07.png);
  }
  &-8{
    background-image: url(../assets/Growing/user-08.png);
  }
  &-9{
    background-image: url(../assets/Growing/user-09.png);
  }
}
i.on,i.off{
  display: inline-block;
  width:26px;
  height: 26px;
  background-size: 26px;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
}
i.on{
  background-image: url(../assets/Growing/icon-gou.png)
}
i.off{
  background-image: url(../assets/Growing/icon-cha.png)
}
.user-detail{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-bottom:10px;
  font-size:26px;
  color:#fff;
  i{
    margin-right:13px;
  }
  i,span{
    vertical-align: middle;
  }
  a{
    color:#617fd6;
    font-size: 24px;
    padding-right:20px;
    background:url(../assets/Growing/icon-jiantou.png) center right/9px no-repeat;
  }
}
.user-level{
  position:relative;
  height:30px;
  border-radius: 30px;
  background-color:#3b3c44;
  &__text{
    position:relative;
    z-index: 2;
    float: left;
    text-align: left;
    text-indent:22px;
    line-height: 30px;
    height:30px;
    font-size:22px;
    color:#fff;
  }
  &__val{
    position:relative;
    z-index: 2;
    float:right;
    color:#565863;
    font-size:20px;
    line-height: 30px;
    height:30px;
    padding-right:28px;
  }
  &__show{
    z-index: 1;
    position:absolute;
    left:0;
    top:0;
    border-radius: 30px;
    height:30px;
    text-align: center;
    &-lv1{
      background-color:#617fd6;
    }
    &-lv2{
      background-color:#3195eb;
    }
    &-lv3{
      background-color:#1978c9;
    }
    &-lv4{
      background-color:#14c1ab;
    }
    &-lv5{
      background-color:#3aa471;
    }
    &-lv6{
      background-color:#19874a;
    }
    &-lv7{
      background-color:#ede736;
    }
    &-lv8{
      background-color:#ea9b33;
    }
    &-lv9{
      background-color:#f43737;
    }
  }
}
.growing{
  &-user{
    padding:20px 32px 32px;
    background:#2c2c32;
    border-bottom:20px solid #242429;
  }
  &-itemDetail{
    h2{
      color:#999999;
      font-size:24px;
      height:68px;
      line-height:70px;
      border-bottom:2px solid #43434d;
      padding-left:74px;
      background-size: 30px;
      background-position: center left 32px;
      background-repeat: no-repeat;
    }
    &__table{
      padding:30px 32px;
      ul{
        text-align: center;
        width:100%;
        justify-content: space-between;
        display: flex;
        margin-bottom:4px;
        li{
          height: 56px;
          line-height: 56px;
          box-sizing: border-box;
          background:#3b3c44;
          margin-right:4px;
          color:#fff;
          font-size:24px;
          &:last-of-type{
            margin-right: 0;
          }
        }
        &:nth-child(1){
          color:#c5c5c5;
          font-size:24px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          overflow: hidden;
          li{
            background:#565863;
          }
        }
        &:last-child{
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          overflow: hidden;
        }
      }
    }
    &--sign{
      h2{
        background-image: url(../assets/Growing/icon-dengji.png);
      }
      .growing-itemDetail__table{
        ul{
          li{
            &:nth-of-type(1){
              width:106px;
            }
            &:nth-of-type(2){
              flex:1;
            }
            &:nth-of-type(3){
              flex:1;
            }
            &:nth-of-type(4){
              width:92px;
            }
            &:nth-of-type(5){
              flex:1;
            }
          }
        }
      }
    }
    &--wages{
      h2{
        background-image: url(../assets/Growing/icon-dengji.png);
      }
      .growing-itemDetail__table{
        ul{
          li{
            &:nth-of-type(1){
              width:106px;
            }
            &:nth-of-type(2){
              flex:1;
            }
            &:nth-of-type(3){
              flex:1;
            }
            &:nth-of-type(4){
              flex:1;
            }
          }
        }
      }
    }
    &--points{
      h2{
        background-image: url(../assets/Growing/icon-jifen.png);
      }
    }
  }
}
.tab-container{
  flex:1;
  overflow: hidden;
  position:relative;
}
.points-item{
  padding:30px 32px;
  font-size:24px;
  border-bottom:20px solid #242429;
  &:last-child{
    border-bottom: none;
  }
  h3{
    color:#fff;
    border-left:4px solid #617fd6;
    padding-left:15px;
    margin-bottom:20px;
  }
  p{
    color:#999999;
    line-height: 1.5;
    white-space: pre-wrap;
    text-align: justify;
    b{
      color:#617fd6;
    }
  }
}
.wages-table{
  display: flex;
  padding:0 32px;
  font-size:26px;
  &__header{
    border-top:2px solid #545863;
    height:58px;
    line-height:58px;
    background:#3e414a;
    color:#999999;
  }
  &__body{
    height:85px;
    line-height:85px;
    border-bottom:1px solid #43434d;
    color:#fff;
  }
  li{
    flex:1;
    text-align: center;
  }
}

// 下拉刷新
.cube-pulldown{
  position: absolute;
  top: -40px;
  width:100%;
  left:0;
  font-size:14PX;
  color:#616161;
}
.cube-pullup-wrapper .before-trigger, .cube-loading{
  font-size:14PX;
  color:#616161;
}
</style>
