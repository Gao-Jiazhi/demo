<template>
       <div class="container">
           <img class="img" src="../assets/1.png" alt="">
           <div class=" box one" @click="fun1"></div>
           <div class=" box two" @click="fun1"></div>
           <div class=" box there" @click="fun1"></div>
           <div class=" box four" @click="fun1"></div>
           <div class=" box five" @click="fun1"></div>
           <div class=" box six" @click="fun1"></div>
           <div class=" box seven" @click="fun1"></div>
           <div class=" box eight" @click="fun1"></div>
           <div class=" box nine" @click="fun1"></div>
           <div class=" box ten1" @click="fun1"></div>
           <div class=" box ten2" @click="fun1"></div>
           <div class=" box ten3" @click="fun1"></div>
           <div class=" box ten4" @click="fun1"></div>
           <div class=" box eleven" @click="fun1"></div>
           <div class=" box twelev" @click="fun1"></div>
           <el-dialog
             title=""
             :visible.sync="dialog1"
             width="85%"
             :modal-append-to-body="false"
             center>
             <test2></test2>
           </el-dialog>
       </div>

</template>

<script>
  import test2 from './test2.vue'
  export default{
    data(){
      return {
        dialog1: false
      }
    },
    methods:{
      fun1(){
        this.dialog1 = true
      }
    },
    components:{
      test2
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .container{
      width: 100vw;
      height: 60vh;
      margin-top: 220px;
  }
  body{
      position: relative;
      width: 100%;
  }
  .img{
      width: 100vw;
      height: 60vh;
  }
  .box{
      border: 1px solid red;
      position: absolute;
  }
  .one{
      width: 5vw;
      height: 10vh;
      left: 0vw;
      top: 50vh;
  }
  .two{
      width: 8vw;
      height: 14vh;
      left: 0vw;
      top: 34vh;
  }
  .there{
      width: 11vw;
      height: 18vh;
      left: 8vw;
      top: 26.5vh;
  }
  .four{
      width: 28vw;
      height: 15vh;
      left: 8vw;
      top: 45vh;
  }
  .five{
      width: 21.5vw;
      height: 32vh;
      left: 20vw;
      top: 7vh;
  }
  .six{
      width: 7.5vw;
      height: 49vh;
      left: 42vw;
      top: 0vh;
  }
  .seven{
      width: 6vw;
      height: 26vh;
      left: 50.5vw;
      top: 14vh;
  }
  .eight{
      width: 17vw;
      height: 14vh;
      left: 60vw;
      top: 22vh;
  }
  .nine{
      width: 18.5vw;
      height: 14.5vh;
      left: 66.5vw;
      top: 36.5vh;
  }
  .ten1{
      width: 11vw;
      height: 11vh;
      left: 78vw;
      top: 14vh;
      border-bottom: transparent;
  }
   .ten2{
      width: 10vw;
      height: 11vh;
      left: 78vw;
      top: 25vh;
      border-right: transparent;
      border-top: transparent;
  }
    .ten3{
      width: 9vw;
      height: 11vh;
      left: 89vw;
      top: 25vh;
      border-left: transparent;
      border-bottom: transparent;
  }
   .ten4{
      width: 10vw;
      height: 11vh;
      left: 88vw;
      top: 36vh;
      border-top: transparent;
  }
  .eleven{
      width: 2.5vw;
      height: 10vh;
      left: 98vw;
      top: 36.5vh;
  }
  /* .twelev{
      width: 3vw;
      height: 10vh;
      left: 85vw;
      top: 26vh;
  } */
</style>
