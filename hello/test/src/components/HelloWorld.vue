<template>
<div class="data-view">
  <!-- <div>可以展示组件</div> -->
<dv-full-screen-container>
      <top-header />
   <el-row>
    <router-link to="/test1">
        <el-button type="primary">小定修</el-button>
    </router-link>
  <el-button type="primary">大定修</el-button>
</el-row>
 <div class="main-content">
        <div class="block-left-right-content">

            <div class="block-top-bottom-content">
            <div class="block-top-content">
          <ranking-board style="margin-right:20px" />
              <rose-chart />
              <scroll-board />
            </div>
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

export default {
  data () {
    return {

    }
  },
  components:{
    topHeader,
    RoseChart,
    RankingBoard,
    ScrollBoard,
  },
  methods: {
    openapp(){
      window.location = 'mycoolapp://empid=10000';
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
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    padding-right: 20px;
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }

</style>
