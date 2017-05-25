import index from '../views/index'
import second from '../views/second.vue'

const routes = [
  {
    name: 'index',
    path: '/index',
    component: index
  },
  {
    name: 'second',
    path: '/second',
    component: second
  }
]

export default routes
