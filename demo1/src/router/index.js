import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import newIndent from '@/view/newIndent/newIndent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newIndent',
      name: 'newIndent',
      component: newIndent
    }
  ]
})
