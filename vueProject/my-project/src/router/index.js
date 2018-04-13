import Vue from 'vue'
import Router from 'vue-router'
//首页Home Header banner main footer 放里面
import Home from '../components/lslcommons/Home/Home.vue'
import Regist from '../components/lslcommons/Assortment/Personal.vue'
// import Assortment from '../components/lslcommons/Assortment/Assortment.vue'
import Assortment from '../components/zrpcomp/listcomp/list.vue'
import Main from '../components/lslcommons/Assortment/Mains.vue' 
import Shop from '../components/lslcommons/Assortment/Shoop.vue'
import Order from '../components/lslcommons/Assortment/Order.vue'
import NotFound from '../components/lslcommons/Main/NotFound.vue'
Vue.use(Router)

let router = new Router({
  routes: [{ //路由表
      path: '/',
      name: 'Home', //给路由起名
      component: Home ,//我们要渲染的组件
      redirect:'main',//默认渲染main组件
      children:[
        {
          path:'main',
          name:'Main',
          component:Main
        },
        // 列表组件
        {
          path:'classify',
          name:'Assortment',
          component:Assortment
        },
        {
          path:'shopping',//二级路由不用加/
          name:'Shop',
          component:Shop
        },
        {
          path:'order',//二级路由不用加/
          name:'Order',
          component:Order
        }
      ]
    },
    {
      path:'/regist',
      name:'Regist',
      component:Regist
    },
    {
      path:'**',
      component:NotFound
    }
  ]
})
export default router
