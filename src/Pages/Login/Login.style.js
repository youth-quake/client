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
export const Left = styled.div`
  height: 630px;
  width: 60%;
  float: left;
  background-color: #472F91;
  color: white;
  background: #472f91;
	background: -moz-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: -webkit-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: linear-gradient(to bottom, #472f91 1%, #2989d8 91%, #0079c2 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#472f91',
	endColorstr='#0079c2', GradientType=0);
`
