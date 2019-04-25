import styled from 'styled-components'

export const Body = styled.body`
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
`

export const Wrapper = styled.div`
  width: 300px;
  margin: 15% auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const Right = styled.div`
  height: 610px;
  width: 40%;
  float: right;
  display: flex;
`

export const FieldsetForm = styled.fieldset`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  border: 2px solid rgba(235, 235, 235, 1);
  margin-right: 30%;
  display: flex;
  align-items: center;
  justify-content: center; 
`

export const NameYQ = styled.h1`
font-size: 23px;
text-align: center;
font-weight: bold;
margin: 10px 0;
font-family: sans-serif;
`

export const TextP = styled.p`
font-size: 14px;
font-family: sans-serif;
text-align: center;
color: ${props => props.color};
`

export const BackBlue = styled.div`
  width: 150px;
  height: 100px;
  background-color: #472F91;
`
