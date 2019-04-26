import styled, {css} from 'styled-components'
import { Theme } from '../Theme'

export const Button = styled.button`
  width: 330px;
  position: relative;
  padding: 10px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  background: ${Theme.colors.secondary_color};
  color: ${Theme.colors.base_color};
  font-weight: bold;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  margin: 10px 0;
  ${props => props.disabled && (
    css`
    cursor: not-allowed;
    background: ${Theme.colors.font_color};` 
  )}   
`
