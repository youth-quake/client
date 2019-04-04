import React from 'react'
import ReactDOM from 'react-dom'
import { routes } from './router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const RouteWithSubRoutes = route => {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	)
}

const RouteConfigExample = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">cadastro</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  )
}

ReactDOM.render(<RouteConfigExample />, document.getElementById('root'));