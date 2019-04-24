import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../Theme'

const Container = styled.div`
  position: absolute;
  background: #FAFAFA;
  border: 1px solid #FAFAFA;
  display: ${props => props.visible ? css`block` : css`none`};
  z-index: 100;
  font-family: ${Theme.font.font_family};
  padding: 20px;
  margin: 2px  0 10px 0;
  width: 290px;
  box-shadow: 7px 2px 16px -11px rgba(0,0,0,0.75);

  &:after, &:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(244, 244, 244, 0);
    border-bottom-color: #FAFAFA;
    border-width: 8px;
    margin-left: -8px;
  }

  &:before {
    border-color: rgba(0, 121, 194, 0);
    border-bottom-color: #FAFAFA;
    border-width: 9px;
    margin-left: -9px;
  }
`

const Title = styled.p`
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.5;
  letter-spacing: normal;
  margin: 8px 0;
`

const Requirement = styled.ul`
  display: flex;
  padding: 4px;
  align-items: center;
`

const Bullet = styled.span`
  border-radius: 50%;
  border-color: solid 1px;
  width: 8px;
  height: 8px;
  margin: 0 8px;
  border-color: ${props => props.truth ? Theme.colors.secondary_constrast_color : Theme.colors.base_color};
  background-color: ${props => props.truth ? Theme.colors.secondary_constrast_color : Theme.colors.base_color};
`

const Text = styled.li`
  width: 200px;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  margin-bottom: 4px;
  letter-spacing: normal;
}
`

const Warning = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.5;
  letter-spacing: normal;
  color: ${Theme.colors.constrast_color};
  margin: 10px 0;
  font-weight: bold;
  font-family: ${Theme.font.font_family};
`

export const Requirements = ({
  requirements,
  title,
  warning,
  visible,
  value
}) => (
  <Container visible={visible}>
    <Title>{title}</Title>
    {requirements.map(item => (
      <Requirement>
        <Bullet truth={item.validation(value)} />
        <Text>{item.text}</Text>
      </Requirement>
    )
    )}
    <Warning>
      {warning}
    </Warning>
  </Container >
)
