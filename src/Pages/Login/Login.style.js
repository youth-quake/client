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
  padding: 30px 10px;
  filter: blur(${props => props.loading ? css`1px` : css`0`});
`

export const Form = styled.div`
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
  height: 390px;
  box-sizing: border-box;
  margin: 5% 0;
  box-sizing: border-box;
  position: relative;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

export const Title = styled(TitleComponent)`
  text-align: center;
  font-weight: bold;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const Text = styled.p`
  text-align: center;
  padding: 12px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};  
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 30px;
  border: solid 1px ${Theme.colors.base_color};
  padding: 7px 10px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 3px;

  & > span > button {
    background: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
    padding: 12px;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    font-size: 16px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }

  & > button {
    box-shadow: unset !important;
    outline: none;
    font-weigth: normal;
    background: transparent;
  }

  & > button > span {
    background: transparent;
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    font-size: 16px;
    cursor: pointer;
    font-weight: normal !important;

    &:hover{
      opacity: 0.5;
    }
  }
  
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
