import styled from 'styled-components'
import { Theme } from '../Theme'

export const Title = styled.h3`
  position: relative;
  width: 100%;
  border: none;
  margin: 10px 0;
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}
`
