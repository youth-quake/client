import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Theme } from '../../components'

export const Spot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 650px;
  height: 600px;
  box-sizing: border-box;
  background: transparent;
`

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
  font-size: 18px;
  display: flex;
  align-items: center;

  & > button {
    width: 120px;
    color: ${Theme.colors.secondary_color};
  }
`

export const Youthquake = styled.img`
  width: 200px;
  height: 72px;
`

export const Presentation = styled.div`
  position: relative;
  background: #FFF;
  border-radius: .4em;
 
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-top-color: #FFF;
    border-bottom: 0;
    margin-left: -100px;
    margin-bottom: -100px;
    z-index: 999;
  }
`

export const Wrapper = styled.div`
  width: 35%;
  padding: 50px 0;

  & > h1 {
    color: ${Theme.colors.secondary_color};
  }
`

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  word-wrap: break-word;
  font-family: ${Theme.font.font_family};
  line-height: 1.3;
  padding: 10px 0;
  margin: 2px 0;
`

export const Subtitle = styled.h3`
  font-size: 20px;
  font-family: ${Theme.font.font_family};
  line-height: 1.3;
  padding: 10px 0;
  margin: 2px 0;
`

export const Animation = styled.img`
  padding: 0;
  width: 100%;
  height: 100%;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`

export const Project = styled.div`
  background-color: ${Theme.colors.secondary_color};
  padding: 50px 0;
`

export const Content = styled.div`
  padding: 50px 0;
  display: flex;
  flex-flow: column;
  justify-content: center;

  & > h1, h3 {
    text-align: center;
    color: #FFF;
  }
`

export const Experience = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`

export const Screen = styled.div`
  width: 45%;
  heigth: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #FFF;

  & > p {
    margin: 10px 0 0;
    padding: 20px 0;
    font-size: 18px;
    font-family: ${Theme.font.font_family};
  }

  & > img {
    width: 100%;
    height: 350px;
  }
`

export const Final = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  & > img  {
    width: 300px;
    heigth: 300px;

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
  }
`