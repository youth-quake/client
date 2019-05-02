import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'

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
  },
  {
    path: "/perfil",
    component: Profile
  }
]

export default routes
