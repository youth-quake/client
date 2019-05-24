import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Theme } from '../../components'

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0 0 20px;
`

export const Menu = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  background: ${props => props.color};
  font-family: ${Theme.font.font_family};
`

export const WrapperOptions = styled.div`
  display:flex;  
  align-items: center;

  & > a+a{
    margin-left: 14px; 
  }
`

export const Option = styled(Link)`
  height: 40px;
  padding: 10px 0;
  line-height: 2;
  text-decoration: ${props => props.currentRoute ? 'underline' : 'none'};
`