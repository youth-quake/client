import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
`

export const Menu = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  background: ${props => props.color};
`

export const Option = styled(Link)`
  height: 40px;
  padding: 10px;
  line-height: 1.3;
  text-decoration: ${props => props.currentRoute ? 'underline' : 'none'};
`

export const Youthquake = styled(Option)`
  color: red;
`

export const WrapperOptions = styled.div`
  width: 75%;
  display:flex;
  float: rigth;
  heigth: 50px;
  background: ${props => props.color};
  justify-content: flex-end;
`

export const Container = styled.div`
  width: 75%;
  background: ${props => props.color};
`

export const Team = styled.div`
  background-color: #472F91;
  height: 100%;
  padding: 50px 10px;
  color: white;
  background: #472f91;
	background: -moz-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: -webkit-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: linear-gradient(to bottom, #472f91 1%, #2989d8 91%, #0079c2 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#472f91',
	endColorstr='#0079c2', GradientType=0);
`
