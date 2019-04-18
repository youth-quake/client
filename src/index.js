import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './router'

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route path={route.path} exact={true} component={route.component} />
      )
      )}
    </Switch>
  </ BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));