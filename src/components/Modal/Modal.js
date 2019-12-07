import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.4);
  display: ${props => props.showModal ? css`block` : css`none`};
`

export const Content = styled.div`
  width: calc(100vw - 45vw);
  height: calc(100vh - 12vh);
  background #fff;
  margin: 1.5% auto;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-flow: column;
  position: relative;
  
  & > * {
    font-family: ${Theme.font.font_family}
  }
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 22px;
  padding: 10px;
`

const Subtitle = styled.h3`
  text-align: justify;
  font-size: 14px;
`

const Button = styled.button`
  position: absolute;
  width: 40px;
  top: 0;
  right: 0;
  padding: 10px;
  outline: none;
  border: none;
  background: red;
  color: white;
  font-weigth: bold;
  border-radius: 3px;
`

export const Modal = ({ 
  friends, 
  ...props 
}) => {

  const {
   showModal,
   title,
   text,
   toggleModal,
   Form
  } = props

  return (
    <Container showModal={showModal}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{text}</Subtitle>
        <Form editable={false} />
        <Button 
          backgroundColor={'red'}
          onClick={() => toggleModal()}
        >
          X
        </Button>
      </Content>
    </Container>
  )
}