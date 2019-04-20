import React from 'react'
import { Theme, Button, Input, Anchor, Password } from '../../components'
import { Link } from 'react-router-dom'
import { Body, FieldsetForm, NameYQ, TextP, Right, Wrapper } from './Login.style'
import LogoIcon from '../../images/daindia.png'
import UserIcon from '../../images/avatar.png'
import tempBack from '../../images/temp_back.png'

const Login = (props => {
  const {
    data
  } = props

  return (
    <Body>
      <Right>
        <Wrapper>
          <FieldsetForm>
          <legend align={'center'}><img src={LogoIcon} width={'100px'} height={'100px'} /></legend>
          <NameYQ>Youthquake</NameYQ>
          <Input color={Theme.base_color} data={data} placeholder={'E-mail ou username'} />
          <Password color={Theme.base_color} placeholder={'Senha'} type={'password'} />
          <Button color={Theme.secondary_color} style={{color: 'white'}}>Sign-in</Button>
          <TextP color={Theme.primary_color}>Não possui uma conta?<Link to="/cadastro" style={{textDecoration: 'none'}}>
          <Anchor color={Theme.primary_color}>Registre-se!</Anchor></Link></TextP>
          </FieldsetForm>
        </Wrapper>
      </Right>
    </Body>
  )
})

export default Login
