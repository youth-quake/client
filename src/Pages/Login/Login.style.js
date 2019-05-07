import styled, { css } from 'styled-components'
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
  margin: 0 auto;
  padding: 15px;
`

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  height: 450px;
  box-sizing: border-box;
`

export const Title = styled(TitleComponent)`
  text-align: center;
  box-sizing: border-box;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const Text = styled.p`
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 30px;
  border: solid 1px ${Theme.colors.base_color};
  padding: 7px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 3px;
  // box-shadow: 7px 2px 16px -11px rgba(0,0,0,0.75);
`

export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 4px 0;
  float: left;
`

export const Separator = styled.div`
  display: flex;
  width: 340px;
  height: 30px;
  align-items: center;
  justify-content: center;
  flex-flow: row;
`

export const Scratches = styled.div`
  border: solid 1px ${Theme.colors.font_color};
  width: 42%;
`


