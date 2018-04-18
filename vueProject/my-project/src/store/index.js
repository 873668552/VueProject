import Vue from 'vue'
import store from 'vuex'

Vue.use(store)

// 引入必要模块
import stage from './stage'
const tar = new store.Store({
    stage
})

export default tar;