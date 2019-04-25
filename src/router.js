import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/cadastro",
    component: Register
  }
]

export default routes
