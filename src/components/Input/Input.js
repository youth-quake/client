import styled from 'styled-components'

export const Input = styled.input`
  position: relative;
  padding: 15px;
  width: 100%;
  background: ${props => props.color};
  border: none;
  font-size: 14px;
  color: #080808;
  margin: 10px 0;
  ${props => props.disabled && 'cursor: not-allowed;'}
`

