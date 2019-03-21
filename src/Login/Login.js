import React from 'react'
import { Theme, Button, Input, Anchor } from 'afrodite'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 300px;
  margin: 15% auto;
  margin: 20% auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const Login = (props => {
  const {
    data
  } = props

  return (
    <Wrapper>
      <Input color={Theme.base_color} data={data} placeholder={'Digite seu login'} />
      <Input color={Theme.base_color} placeholder={'Digite sua senha'} />
      <Button color={Theme.secondary_color}>Entrar</Button>
      <p>Não tem sua conta ainda? <Anchor>Cadastre-se</Anchor></p>
    </Wrapper>
  )
})
