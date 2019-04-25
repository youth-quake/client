import React from 'react'
import { Theme, Button, Input, Anchor, Password } from '../../components'
import { Body, Wrapper, Right, Left, TextP } from './Register.style'
import {Link } from "react-router-dom";
import Logo from '../../images/porkinYQ1.png'
import Girl from '../../images/girl_money1.png'


const Register = (props => {
  const {
    data,
    showConsoleLog
  } = props


  return (
    <Body>
      <Right>
          <img src={Girl} width={'220px'} height={'400px'} style={{position:'relative', top:'18%'}}/>
      </Right>
      <Left>
        <Wrapper>
          <img src={Logo} style={{marginBottom: '10px'}}></img>
          <Input color={Theme.base_color} data={data} placeholder={'Nome completo'} />
          <Input color={Theme.base_color} data={data} placeholder={'Nome de usuário (apelido)'} />
          <Input color={Theme.base_color} data={data} placeholder={'E-mail'} />
          <Input color={Theme.base_color} placeholder={'Confirme seu e-mail'} />
          <Password color={Theme.base_color} placeholder={'Senha'} type={'password'} />
          <Button onClick={showConsoleLog} color={Theme.secondary_color} style={{color: 'white'}}>Cadastrar</Button>
          <TextP color={Theme.primary_color}>Já possui uma conta?<Link to="/login" style={{textDecoration: 'none'}}>
          <Anchor color={Theme.primary_color}>Entre agora mesmo</Anchor></Link></TextP>
        </Wrapper>
      </Left>
    </Body>
  )
})

export default Register
