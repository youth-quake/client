import React from 'react'
import { Theme, Button, Input, Anchor, Password } from 'afrodite'
import { Link } from 'react-router-dom'
import { Body, Left, Right, Wrapper } from './Login.style'

const Login = (props => {
  const {
    data
  } = props

  return (
    <Body>
      <Left />
      <Right>
        <Wrapper>
          <h3>Youthquake</h3>
          <Input color={Theme.base_color} data={data} placeholder={'Digite seu login'} />
          <Password color={Theme.base_color} placeholder={'Digite sua senha'} />
          <Button color={Theme.secondary_color}>Sign-in</Button>
          <p>Não tem sua conta ainda? <Link to="/register"><Anchor>Cadastre-se</Anchor></Link></p>
        </Wrapper>
      </Right>
    </Body>
  )
})

export default Login
