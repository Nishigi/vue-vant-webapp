import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 外页
const Home = () => import('@/views/home/Home.vue')
const Cate = () => import('@/views/cate/Cate.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const User = () => import('@/views/user/User.vue')
const Login = () => import('@/views/user/Login.vue')
const Register = () => import('@/views/user/Register.vue')

const GoodDetail = () => import('@/views/home/GoodDetail.vue')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/home', components: { alive: Home } },
    { path: '/cate', component: Cate },
    { path: '/good/detail/:id', component: GoodDetail },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/cart', component: Cart, meta: { auth: true } },
    { path: '/user', components: { alive: User }, meta: { auth: true } },
    { path: '/*', redirect: '/home' },
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  const isLogin = localStorage.getItem('token')
  if (to.meta.auth) {
    if (isLogin) {
      next()
    }
    else next('/login')
  }
  else {
    next()
  }
})

// router.beforeResolve
// router.afterEach

export default router
