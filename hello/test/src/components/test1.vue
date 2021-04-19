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
           <div class=" box ten" @click="fun1"></div>
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
  .container{
      width: 80vw;
      height: 44vh;
      /* border: 1px solid black; */
      margin: 200px auto;
  }
  body{
      position: relative;
      width: 100%;
  }
  .img{
      width: 80vw;
      height: 44vh;
  }
  .box{
      border: 1px solid red;
      position: absolute;
  }
  .one{
      width: 3vw;
      height: 10vh;
      left: 10vw;
      top: 27vh;
  }
  .two{
      width: 5vw;
      height: 11vh;
      left: 17vw;
      top: 22vh;
  }
  .there{
      width: 21.5vw;
      height: 10vh;
      left: 16vw;
      top: 33.5vh;
  }
  .four{
      width: 16vw;
      height: 21vh;
      left: 26vw;
      top: 7vh;
  }
  .five{
      width: 5vw;
      height: 22vh;
      left: 43vw;
      top: 2vh;
  }
  .six{
      width: 4.5vw;
      height: 8vh;
      left: 43vw;
      top: 28vh;
  }
  .seven{
      width: 5vw;
      height: 17vh;
      left: 50vw;
      top: 11vh;
  }
  .eight{
      width: 3vw;
      height: 13vh;
      left: 58vw;
      top: 17vh;
  }
  .nine{
      width: 3vw;
      height: 8vh;
      left: 65vw;
      top: 18.5vh;
  }
  .ten{
      width: 3vw;
      height: 9vh;
      left: 72vw;
      top: 14vh;
  }
  .eleven{
      width: 14.5vw;
      height: 9.5vh;
      left: 62.5vw;
      top: 27.5vh;
  }
  .twelev{
      width: 3vw;
      height: 10vh;
      left: 85vw;
      top: 26vh;
  }
</style>
