import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './router'

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route key={route.key} path={route.path} exact component={route.component} />
      )
      )}
    </Switch>
  </ BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
