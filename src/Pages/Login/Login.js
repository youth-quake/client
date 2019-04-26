import React from 'react'
import { Button, Input, Anchor } from '../../components'
import { Logo, Form, Container, Content, ContentImage, Title, Text } from './Login.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import girl from '../../assets/img/girl.png'

const Login = ({
  value, 
  isVisible, 
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable
}) => (
  <Container>
    <Form>
    <Logo src={youthquake} />
      <Input placeholder='Login' />
      <Input type='password'placeholder='Senha' />
      <Button disable={isDisable}>Entrar</Button>
      <Anchor 
        text='Não tem sua conta ainda?'
        description='Cadastre-se'
        to='/cadastro' 
      />
  </Form>
  <Content>
      <div>
        <Title>Seja bem vindo ao Youthquake</Title>
        <Text>Lorem ITextsum is simTextly dummy text of the Textrinting and tyTextesetting industry. Lorem ITextsum has been the</Text>
      </div>
      <ContentImage src={girl} />
    </Content>
  </Container>
)

export default Login
