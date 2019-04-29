import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const routes = [
  {
    key: 1,
    path: "/",
    component: Home
  },
  {
    key: 2,
    path: "/login",
    component: Login
  },
  {
    key: 3,
    path: "/cadastro",
    component: Register
  }
]

export default routes
