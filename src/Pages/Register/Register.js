import React from 'react'
import { Title, Button, Input, Anchor, Password } from '../../components'
import { Form, Wrapper } from './Register.style'

const Register = () => (
  <Form>
    <Wrapper>
      <Title>Registre-se</Title>
      <Input placeholder='Apelido' />
      <Input placeholder='E-mail' />
      <Input placeholder='Telefone' />
      <Password placeholder='Senha' />
      <Button>Register</Button>
      <Anchor 
        text='Já possui uma conta?'
        description='Entre agora mesmo'
        to='/login'
      />
    </Wrapper>
  </Form>
)


export default Register
