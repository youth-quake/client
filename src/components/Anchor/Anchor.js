import styled from 'styled-components'

export const Anchor = styled.a`
  width: 100%;
  position: relative;
  padding: 10px;
  border-radius: ${props => props.theme.border_radius};
  outline: none;
  border: none;
  color: ${props => props.color};
  font-weight: bold;
  font-size: ${props => props.theme.font_size};
  ${props => props.disabled && 'cursor: not-allowed;'}
`
