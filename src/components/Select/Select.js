import styled from 'styled-components'

export const Select = styled.select`
  width: 100%;
  position: relative;
  padding: 10px;
  border-radius: ${props => props.theme.border_radius};
  outline: none;
  border: none;
  background: ${props => props.color};
  color: ${props => props.theme.base_color};
  font-weight: bold;
  font-size: ${props => props.theme.font_size};
  margin: 10px 0;
  ${props => props.disabled && 'cursor: not-allowed;'}
`


export const Option = styled.option`
width: 40%;
border-radius: 1rem;
background: ${props => props.color};
`