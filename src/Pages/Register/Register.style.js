import styled, {css} from 'styled-components'
import { Title as TitleComponent, Theme } from '../../components'
import { Link } from 'react-router-dom'

export const To = styled(Link)`
  text-decoration: none;
  color: ${Theme.colors.base_color};
  ${props => props.disabled && (
    css`
    cursor: not-allowed;
  `)} 
`

export const Container = styled.div`
  display: flex;
  margin: 2% auto;
`

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 50px;
  margin: 0 10%;
`

export const Logo = styled.img`
  width: 310px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 10px;
`

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border-left: solid 1px ${Theme.colors.font_color};
  padding: 0 35px;
`

export const ContentImage = styled.img`
  width: auto;
  height: 500px;
  box-sizing: border-box;
  margin: 5% 0;
  box-sizing: border-box;
`

export const Title = styled(TitleComponent)`
  text-align: center;
  box-sizing: border-box;
  font-family: ${Theme.font.font_family};
`

export const Text = styled.p`
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`
