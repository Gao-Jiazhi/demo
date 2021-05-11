<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
    'num' (newval){
      if(newval === 2){
        // cordova.plugins.notification.local.schedule({
        //     title: 'My first notification'+event.data,
        //     text: 'Thats pretty easy...'+event.data,
        //     foreground: true
        // });
      }
    }
  },
  data(){
    return {
      num:0
    }
  },
  mounted() {
      var ws = new WebSocket('ws://192.168.1.192:8888/');
      ws.onmessage = function(event) {
        // cordova.plugins.notification.local.schedule({
        //     title: 'My first notification'+event.data,
        //     text: 'Thats pretty easy...'+event.data,
        //     foreground: true
        // });
        this.num = event.data
        alert("111111")
        console.log('Count is: ' + event.data);
      };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
