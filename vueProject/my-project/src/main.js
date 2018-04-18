// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 1 引用
import first from './components/first'
import './stylesheets/main.scss'
import 'animate.css'
import axios from 'axios'
import filter from './api/filter'

//mint-ui
import { Lazyload, InfiniteScroll} from 'mint-ui';
Vue.use(Lazyload);



Vue.use(InfiniteScroll);


Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
