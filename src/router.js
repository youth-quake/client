import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'

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
  },
  {
    path: "/perfil",
    component: Profile
  }
]

export default routes
