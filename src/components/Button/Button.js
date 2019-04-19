import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  position: relative;
  padding: 10px;
  margin: 10px;
  border-radius: ${props => props.theme.border_radius};
  outline: none;
  cursor: pointer;
  border: none;
  background: ${props => props.color};
  color: ${props => props.theme.base_color};
  font-weight: bold;
  font-family: comic sans;
  font-size: ${props => props.theme.font_size};
  margin: 10px 0;
  ${props => props.disabled && 'cursor: not-allowed;'}
`
