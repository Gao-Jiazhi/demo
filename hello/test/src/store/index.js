import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
const store = new Vuex.Store({
    state:{
        allUserName:[{
            name:'小明',
            pass:1
        },{
            name:'小李',
            pass:2
        },{
            name:'小红',
            pass:3
        },{
            name:'小桃',
            pass:4
        }]
    }
});
 
export default store;