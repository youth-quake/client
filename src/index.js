import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './router'

export const Body = createGlobalStyle`
 body{
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  padding: 10px;
 }
`
const App = () => (
  <div>
    <Body />
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route path={route.path} exact={true} component={route.component} />
        )
        )}
      </Switch>
    </ BrowserRouter>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
