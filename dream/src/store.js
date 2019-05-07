import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        uid:'',//openid,
        actions:'',//准备购买的信息
        pinfo:'',//梦想池信息
    },
    mutations:{
        uid(state,payload){
            state.uid = payload;
        },
        actions(state,payload){
            state.actions = payload
        },
        poolInfo(state,payload){
            state.pinfo = payload
        }
    }
}) 