import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import routes from './router'

const Body = styled.div`
 body{
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
 }
`

const App = () => (
  <Body>
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route path={route.path} exact={true} component={route.component} />
        )
        )}
      </Switch>
    </ BrowserRouter>
  </Body>
)

ReactDOM.render(<App />, document.getElementById('root'));
