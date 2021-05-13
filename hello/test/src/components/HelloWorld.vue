<template>
<div class="data-view">
  <!-- <div>可以展示组件</div> -->
<dv-full-screen-container>
      <top-header />
   <!-- <el-row>
    <router-link to="/test1">
        <el-button type="primary">小定修</el-button>
    </router-link>
  <el-button type="primary">大定修</el-button>
</el-row> -->
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <router-link to="/test1">
   <el-menu-item index="1">小定修</el-menu-item>
  </router-link>
   <el-menu-item index="2">大定修</el-menu-item>
</el-menu>
 <div class="main-content">
        <div class="block-left-right-content">

            <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart  style="margin-bottom:30px"/>
          <top-right-cmp />
              <scroll-board />
            </div>
              <machine-btn />
          </div>
        </div>
      </div>
</dv-full-screen-container>
</div>

</template>

<script>
import topHeader from './topHeader'
import RankingBoard from './rankingBoard'
import RoseChart from './roseChart'
import ScrollBoard from './scrollBoard'
import TopRightCmp from './TopRightCmp'
import MachineBtn from './MachineBtn'

export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  components:{
    topHeader,
    RoseChart,
    RankingBoard,
    ScrollBoard,
    TopRightCmp,
    MachineBtn
  },
  methods: {
    openapp(){
      window.location = 'mycoolapp://empid=10000';
    },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
   .data-view{
     height: 100%;
     width: 100%;
   }
  
  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    box-sizing: border-box;
    padding-left: 280px;
  }

  .block-top-content {
    width: 60%;
    padding-right: 20px;
    height: 90%;
    display: flex;
    margin-bottom: 50px;
    // flex-direction: column;
  // justify-content: space-around;
  margin-right: 20px;
    flex-flow: wrap;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
    // border: 1px solid red;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    color: thistle;
    :hover{
      // background-color: green;
      li{
        background-color: slateblue;
      }
    }
  }
  
  .el-menu--horizontal > .el-menu-item.is-active[data-v-469af010]{
    color: pink;
  }
  .el-menu-demo{
    height: 30px;
    background-color: #07153A;
    li{
      height: 30px;
      line-height: 30px;
    }
  }
</style>
