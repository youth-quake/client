import React from 'react'
import { Theme, Button as ButtonWithTheme } from '..'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  heigth: 90%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 10px 0;
`

const Content = styled.h2`
  padding: 20px 10px;
  font-weigth: bold;
  font-size: 18px;
  text-align: justify;
  margin: 10px;
  line-height: 1.3;
  padding: 30px;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const Button = styled(ButtonWithTheme)`
  width: 120px;
`

export const Article = ({ item, action }) => (
  <Container>
    <Content>{item.content}</Content>
    <a href={item.link}>{item.link}</a>
    <br />
    <Button backgroundColor={Theme.colors.secondary_color} onClick={action}>Entendi</Button>
  </Container>
)