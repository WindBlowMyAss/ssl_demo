import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/element.js'
// import './assets/fonts/iconfont.css'

//导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = 'http://43.143.0.76:8889/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
