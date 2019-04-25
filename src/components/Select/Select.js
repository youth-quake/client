import styled from 'styled-components'
import { Theme } from '../Theme'

export const Select = styled.select`
  width: 100%;
  position: relative;
  padding: 10px;
  border-radius: ${Theme.border_radius};
  outline: none;
  border: none;
  background: ${props => props.color};
  color: ${Theme.base_color};
  font-weight: bold;
  margin: 10px 0;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}
`


export const Option = styled.option`
  width: 40%;
  border-radius: 1rem;
  background: ${props => props.color};
`