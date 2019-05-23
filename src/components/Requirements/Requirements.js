import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../Theme'

const Wrapper = styled.div`
  position: relative;
`

const Container = styled.div`
  min-width: 290px;
  font-family: ${Theme.font.font_family};
  visibility: ${props => props.visible ? css`visible` : css`hidden`};
  z-index: 100;
  left: 180px;
  top: -105px;
  position: absolute;
  padding: 20px;
  background: #FFFFFF;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: ${Theme.colors.base_color} solid 1px;
  box-shadow: 7px 2px 16px -11px rgba(0,0,0,0.75);

  &:after{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 21px 12px 0;
    border-color: transparent #FFFFFF;
    display: block;
    width: 0;
    z-index: 1;
    left: -21px;
    top: 60px;
  }
  
  &:before{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 21px 12px 0;
    border-color: transparent ${Theme.colors.base_color};
    display: block;
    width: 0;
    z-index: 0;
    left: -22px;
    top: 60px;
  }
`

const Title = styled.p`
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin: 8px 0;
`

const Requirement = styled.ul`
  display: flex;
  padding: 4px;
  align-items: center;
  list-style: none;
`

const Bullet = styled.span`
  border-radius: 50%;
  border: solid 1px;
  width: 6px;
  height: 6px;
  margin: 0 8px;
  border-color: ${Theme.colors.primary_color};
  background-color: ${props => props.truth ? Theme.colors.primary_color : Theme.colors.base_color};
`

const Text = styled.li`
  width: 200px;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin: 0 8px;
}
`

const Warning = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: ${Theme.colors.constrast_color};
  margin: 10px 0;
  font-weight: bold;
  font-family: ${Theme.font.font_family};
`

export const Requirements = props => {
  
  const {
    requirements,
    title,
    warning,
    visible,
    value,
    onChange
  } = props

  if (onChange) {
    onChange({
      valid: requirements.reduce((isValid, { validation }) => {
        if (isValid) {
          return validation(value)
        }

        return isValid
      }, true)
    })
  }

  return(
  <Wrapper>
    <Container visible={visible}>
      <Title>{title}</Title>
      {requirements.map(item => (
        <Requirement key={item.key}>
          <Bullet truth={item.validation(value)} />
          <Text>{item.text}</Text>
        </Requirement>
      )
      )}
      <Warning>
        {warning}
      </Warning>
    </Container>
  </Wrapper>
)}
