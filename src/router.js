import { Home, Login, Register, Profile, Dashboard } from './Pages'

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
    key: 4,
    path: "/perfil",
    component: Profile
  },
  {
    key: 4,
    path: "/dashboard",
    component: Dashboard
  }
]

export default routes
