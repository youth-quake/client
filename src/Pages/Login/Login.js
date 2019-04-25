import React from 'react'
import { Title, Button, Input, Anchor } from '../../components'
import { Form, Wrapper } from './Login.style'

const Login = ({
  value, 
  isVisible, 
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable
}) => (
  <Form>
    <Wrapper>
      <Title>Youthquake</Title>
      <Input placeholder='Login' />
      <Input type='password'placeholder='Senha' />
      <Button disable={isDisable}>Login</Button>
      <Anchor 
        text='Não tem sua conta ainda?'
        description='Cadastre-se'
        to='/cadastro'
      />
    </Wrapper>
  </Form>
)

export default Login
