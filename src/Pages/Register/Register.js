import React from 'react'
import { Theme, Button, Input, Anchor, Password } from '../../components'
import styled from 'styled-components'
import {Link } from "react-router-dom";


const Body = styled.body`
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
`

const Wrapper = styled.div`
  width: 300px;
  margin: 15% auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const Right = styled.div`
  height: 610px;
  width: 40%;
  float: right;
  display: flex;
`
const Left = styled.div`
  height: 630px;
  width: 60%;
  float: left;
  background-color: #472F91;
  color: white;
  background: #472f91;
	background: -moz-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: -webkit-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: linear-gradient(to bottom, #472f91 1%, #2989d8 91%, #0079c2 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#472f91',
	endColorstr='#0079c2', GradientType=0);
`

const Register = (props => {
  const {
    data
  } = props

  return (
    <Body>
      <Left/>
    <Right>
      <Wrapper>
        <h3>Registre-se</h3>
        <Input color={Theme.base_color} data={data} placeholder={'Digite seu username'} />
        <Input color={Theme.base_color} data={data} placeholder={'Digite seu e-mail'} />
        <Input color={Theme.base_color} data={data} placeholder={'Digite seu telefone'} />
        <Password color={Theme.base_color} placeholder={'Digite sua senha'} />
        <Password color={Theme.base_color} placeholder={'Repita sua senha'} />
        <Button color={Theme.base_color}>Register</Button>
        <p>Já possui uma conta? <Link to="/login"><Anchor>Entre agora mesmo</Anchor></Link></p>
      </Wrapper>
    </Right>
    </Body>
  )
})

export default Register
