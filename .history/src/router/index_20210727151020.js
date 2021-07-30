import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/Books.vue')
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/book/:slug',
      name: 'book',
      component: () => import('../views/Book.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/Checkout.vue'),
      meta: { auth: true }
    },
    {
      path: '/payment',
      name: 'payment',
      component: 
    },
  ],
})

router.beforeEach((to, from, next) => {
  //jika routing mera auth-nya maka
  if (to.matched.some(record => record.meta.auth)) {
    //jika user adalah guest
    if(store.getters['auth/guest']){
      //tampilkan pesan bahwa harus login dulu
      store.dispatch('alert/set', {
        status : true,
        text : 'Login first',
        color : 'error',
      })
      store.dispatch('setPrevUrl', to.path)
      //tampilkan form login
      store.dispatch('dialog/setComponent', 'login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
