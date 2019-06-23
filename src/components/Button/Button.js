import styled, {css} from 'styled-components'
import { Theme } from '../Theme'

export const Button = styled.button`
  width: 330px;
  position: relative;
  padding: 10px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  background: ${props => props.backgroundColor};
  color: ${Theme.colors.base_color};
  font-weight: bold;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  margin: 10px 0;
  
  ${props => props.disabled && (
    css`
    cursor: not-allowed;
    background: transparent;
    color: ${Theme.colors.secondary_color};
    border: solid 1px ${Theme.colors.secondary_color};
  `
  )}
  
  ${props => !props.disabled && css`
    &:hover{
      opacity: 0.5;
    }  
  `}
`
