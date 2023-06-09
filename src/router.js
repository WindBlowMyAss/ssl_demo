import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from './components/MyLogin.vue'
import MyHome from './components/MyHome.vue'

Vue.use(Router)

const router = new Router({
    routes:[  
        {path: '/', redirect: './login'},
        {path: '/login', component: MyLogin},
        {path: '/home', component: MyHome}
    ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    if(to.path === '/login') return next()

    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('./login')
    next()
})
export default router