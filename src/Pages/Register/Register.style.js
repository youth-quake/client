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

export const Left = styled.div`
  height: 610px;
  width: 40%;
  float: left;
  display: flex;
`
export const Right = styled.div`
  margin-top: 70px;
  height: 500px;
  width: 55%;
  float: right;
  color: white;
  display: flex;
  justify-content: center;
  border-left: solid 1px rgba(235, 235, 235, 1);
`

export const TextP = styled.p`
font-size: 14px;
font-family: sans-serif;
text-align: center;
color: ${props => props.color};
`