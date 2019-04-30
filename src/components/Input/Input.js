import styled, {css} from 'styled-components'
import { Theme } from '../Theme'

export const Input = styled.input`
  position: relative;
  padding: 7px;
  width: 320px;
  height: 30px;
  margin: 5px;
  flex-basis: auto;
  background: ${Theme.colors.base_color};
  border: none;
  font-size: 14px;
  font-family: sans-serif;
  color: #080808;
  margin: 10px 0;
  outline: none;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}

  ${props => props.editable && css`
    background: transparent;
    border: none;
    outline: none;
    font-size: 18px;
  `}
`

