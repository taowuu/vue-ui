import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SelectorView from '../views/SelectorView.vue'
import EditableTableView from '../views/EditableTableView.vue'

const routes = [
  {
    path: '/',
    name: 'selector',
    component: SelectorView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/editable-table',
    name: 'editable-table',
    component: EditableTableView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
