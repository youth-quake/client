import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const routes = [
	{
		path: "/login",
		component: Login
	},
	{
		path: "/cadastro",
		component: Register
	}
]
