import Vue from 'vue'
import Router from 'vue-router'
//首页Home Header banner main footer 放里面
import Home from '../components/lslcommons/Home/Home.vue'
import Regist from '../components/zrpcomp/logAndRegist/person.vue'
import Assortment from '../components/zrpcomp/listcomp/list.vue'
import Main from '../components/lslcommons/Assortment/Mains.vue'
import Shop from '../components/lslcommons/Assortment/Shoop.vue'
import Order from '../components/lslcommons/Assortment/Order.vue'
import NotFound from '../components/lslcommons/Main/NotFound.vue'
import product from '../components/lslcommons/Assortment/Product.vue'
import log from '../components/zrpcomp/logAndRegist/sonComp/body/log.vue'
import info from '../components/zrpcomp/logAndRegist/sonComp/body/info.vue'
import reg from '../components/zrpcomp/logAndRegist/sonComp/body/reg.vue'
Vue.use(Router)

let router = new Router({
  routes: [{ //路由表
      path: '/',
      name: 'Home', //给路由起名
      component: Home, //我们要渲染的组件
      redirect: 'main', //默认渲染main组件
      children: [{
          path: 'main',
          name: 'Main',
          component: Main
        },
        // 列表组件
        {
          path: 'classify',
          name: 'Assortment',
          component: Assortment
        },
        {
          path: 'shopping', //二级路由不用加/
          name: 'Shop',
          component: Shop
        },
        {
          path: 'order', //二级路由不用加/
          name: 'Order',
          component: Order
        },

      ]
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist,
      redirect: '/regist/info',
      children:[
        {
          path:'log',
          name:'log',
          component:log
        },
        {
          path:'reg',
          name:'reg',
          component:reg
        },
        {
          path:'info',
          name:'info',
          component:info
        }
      ]
    },
    {
      path: '/product', //二级路由不用加/
      name: 'product',
      component: product
    },
    {
      path: '**',
      component: NotFound
    }
  ]
})
export default router
