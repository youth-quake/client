import React from 'react'
import { Button, Input, Anchor } from '../../components'
import { Logo, Form, Container, Content, ContentImage, Title, Text, LoginAlternative
, LogoAlternativeLogin, TextAccess, TextDecision, ScratchesLeft, ScratchesRight, DivDecision } from './Login.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import girl from '../../assets/img/girl.png'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png' 

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
      <LoginAlternative>
        <LogoAlternativeLogin src={google}/>
        <TextAccess>Iniciar a sessão com o Google</TextAccess>
      </LoginAlternative>
      <LoginAlternative>
        <LogoAlternativeLogin src={facebook}/>
        <TextAccess>Iniciar a sessão com o Facebook</TextAccess>
      </LoginAlternative>
      <DivDecision>
        <TextDecision><ScratchesLeft/>OU<ScratchesRight/></TextDecision>
      </DivDecision>
      <Input placeholder='Login'/>
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
        <Text>A solução para o gerenciamento de suas finanças e controle de gastos está aqui!
           Crie sua conta agora mesmo e comece a construção de seu futuro financeiro.  
        </Text>
      </div>
      <ContentImage src={girl} />
    </Content>
  </Container>
)

export default Login
