import styled from 'styled-components'
import { Theme } from '../Theme'

export const Select = styled.select`
  width: 345px;
  padding: 10px;
  border-radius: ${Theme.border_radius};
  outline: none;
  border: none;
  background: ${props => props.backgroundColor};
  color: ${Theme.base_color};
  font-weight: bold;
  margin: 10px 0;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}
  
  & > option {
    border: none;
    outline: none;
  } 
`
