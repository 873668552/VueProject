import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入必要模块
import zrpStor from './zrpvuex'
const store = new Vuex.Store({
    modules: {
        zrpStor
    }
})

export default store;