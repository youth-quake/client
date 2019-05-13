import React from 'react'
import styled, { css } from 'styled-components'
import { Theme, Button } from '../../components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.4);
  display: ${props => props.showModal ? css`block` : css`none`};
`

export const Content = styled.div`
  width: 600px;
  height: 300px;
  background #fff;
  margin: 10% auto;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-flow: column;
  position: relative;

  & > * {
    padding: 12px;
    margin: 10px auto;
    font-family: ${Theme.font.font_family}
  }

  & > h1 {
    font-weight: bold;
    font-size: 18px;
  }

  & > p {
    text-align: justify;
    font-size: 14px;
  }

  & > button {
    bottom: 40px;
    position: absolute;
    width: 100px;
  }
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
        <h1>{title}</h1>
        <p>{text}</p>
        <Form editable={false} />
        <Button 
          backgroundColor={Theme.colors.secondary_color}
          onClick={() => toggleModal()}
        >
          Entendi
        </Button>
      </Content>
    </Container>
  )
}