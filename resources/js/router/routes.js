
import Login from '../pages/auth/login'
import Home from '../pages/home'

export default [
  { path: '/', name: 'home', component: Home },
{ path: '/home', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
]