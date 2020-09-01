import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// This is where all the routes are defined
const routes = [
  {
    path: '/',
    name: 'Home',
    // Importing the Home.vue web page from the component import above
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // This is known as lazy loading, meaning it only loads the code for this router
    // when you need it
    // the /* comment */ below is a magic comment, this is used to name the additional or
    // special .js file when it is loaded.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // This is known as lazy loading, meaning it only loads the code for this router
    // when you need it
    // the /* comment */ below is a magic comment, this is used to name the additional or
    // special .js file when it is loaded.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // This is known as lazy loading, meaning it only loads the code for this router
    // when you need it
    // the /* comment */ below is a magic comment, this is used to name the additional or
    // special .js file when it is loaded.
    component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing.vue')
  }
]

const router = new VueRouter({
  // Here we can change the class of the route-link active navigation
  linkExactActiveClass: 'active-nav',
  routes
})

export default router
