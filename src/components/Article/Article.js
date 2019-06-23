import React from 'react'
import { Theme, Button as ButtonWithTheme } from '..'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  heigth: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`

const Content = styled.h2`
  padding: 10px;
  font-weigth: bold;
  font-size: 18px;
  text-align: justify;
  margin: 10px 0;
  line-height: 1.3;
  padding: 30px;
`

const Button = styled(ButtonWithTheme)`
  width: 120px;
`

export const Article = ({ item, action }) => (
  <Container>
    <Content>{item.content}</Content>
    <Button backgroundColor={Theme.colors.secondary_color} onClick={action}>Entendi</Button>
  </Container>
)