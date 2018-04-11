import Vue from 'vue'
import Router from 'vue-router'
//首页Home Header banner main footer 放里面
import Home from '../components/lslcommons/Home/Home.vue'

Vue.use(Router)

let router = new Router({
  routes: [{//路由表
    path: '/',
    name: 'Home',//给路由起名
    component: Home //我们要渲染的组件
  }]
})
export default router