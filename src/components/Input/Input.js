import styled from 'styled-components'

export const Input = styled.input`
  position: relative;
  padding: 15px;
  width: 90%;
  background: ${props => props.color};
  border: none;
  font-size: 14px;
  font-family: sans-serif;
  color: #080808;
  margin: 10px 0;
  ${props => props.disabled && 'cursor: not-allowed;'}
`

