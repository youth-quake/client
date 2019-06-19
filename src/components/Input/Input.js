import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../Theme'
import { compose, withState } from 'recompose'

export const InputEditable = styled.input`
  position: relative;
  background: transparent;
  border: none;
  outline: none;
  color: #080808;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: default;'}

  &:focus {
    border-bottom: dotted 0.5px white;
  }
`

export const Input = styled.input`
  position: relative;
  padding: 7px;
  width: 320px;
  height: 30px;
  background: ${Theme.colors.base_color};
  border: none;
  font-size: 14px;
  font-family: sans-serif;
  color: #080808;
  border-radius: 3px;
  margin: 10px 0;
  outline: none;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}
`

export const Field = styled.input`
  background: transparent;
  border: none;
  font-size: 14px;
  color: #080808;
  padding: 5px 0;
  outline: none;
  ${props => props.disabled && 'cursor: not-allowed;'}
`

export const Wrapper = styled.div`
  position: relative;  
  display: flex;
  flex-flow: column;
  width: 320px;
  padding: 0;
  background: transparent;
  border-bottom: solid 1px ${Theme.colors.font_color};
  
  & > * {
    font-size: ${Theme.font.font_size};
    font-family: ${Theme.font.font_family};
  }
`

export const Label = styled.label`
  margin:  0  0 10px;
  color: ${Theme.colors.font_color};
  visibility: ${props => props.isKey ? css`visible` : css`hidden`};
`

const enhance = compose(
  withState('isVisible', 'setIsVisible', false),
  withState('value', 'setValue', ''),
  withState('isPlaceholder', 'setIsPlaceholder', '')
)

const Component = ({
  placeholder
}) => (
    <Wrapper>
      <Label isKey>Nome completo</Label>
      <Field placeholder={placeholder} disabled={false} />
    </Wrapper>
  )

export const ComponentField = enhance(Component)