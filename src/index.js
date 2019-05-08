import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './router'

const Router = styled(BrowserRouter)`
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`

const App = () => (
  <Router>
    <Switch>
      {routes.map(route => (
        <Route key={route.key} path={route.path} exact={true} component={route.component} />
      )
      )}
    </Switch>
  </ Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
