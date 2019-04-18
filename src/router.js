import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'

const routes = [
  {
    id: 0,
    path: "/login",
    component: Login
  },
  {
    id: 1,
    path: "/cadastro",
    component: Register
  }
]

export default routes
