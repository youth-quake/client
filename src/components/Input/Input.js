import styled from 'styled-components'
import { Theme } from '../Theme'

export const Input = styled.input`
  position: relative;
  padding: 12px;
  width: 100%;
  flex-basis: auto;
  background: ${Theme.colors.base_color};
  border: none;
  font-size: 14px;
  color: #080808;
  margin: 10px 0;
  outline: none;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}
`

