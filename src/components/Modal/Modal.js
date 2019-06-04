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
  width: 700px;
  background #fff;
  margin: 2% auto;
  border-radius: 3px;
  padding: 20px 20px 100px;
  display: flex;
  align-items: center;
  flex-flow: column;
  position: relative;
  overflow-y: auto;
  
  & > * {
    padding: 10px;
    margin: 10px auto;
    font-family: ${Theme.font.font_family}
  }

  & > h1 {
    font-weight: bold;
    font-size: 22px;
  }

  & > p {
    text-align: justify;
    font-size: 14px;
  }

  & > button {
    top: -10px;
    position: absolute;
    width: 40px;
    left: 700px;
    border-radius: 1px;
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
          backgroundColor={'red'}
          onClick={() => toggleModal()}
        >
          X
        </Button>
      </Content>
    </Container>
  )
}