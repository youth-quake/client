import styled from 'styled-components'
import { Theme } from '../Theme'

export const InputEditable = styled.input`
  position: relative;
  background: transparent;
  border: none;
  outline: none;
  color: #080808;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: default;'}
  ${props => !props.editable && 'border-bottom: solid 1px;'}
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
