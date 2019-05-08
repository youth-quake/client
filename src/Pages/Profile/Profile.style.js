import styled  from 'styled-components'
import { Theme } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
`

export const BackgroundProfile = styled.div`
  height: 250px;
  background: ${Theme.colors.secondary_color};
  margin-bottom: 18%;
`

export const WrapperGrid = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  padding: 100px 20px 0;
  
  & > div {
    margin: 0 20px;
  }
`

export const GridLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 80px 10px 0;

  & > button {
    width: 100px;
    border-radius: 5px;
    width: 200px;
  }
`
export const Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: ${Theme.colors.base_color};
  position: relative;
`

export const ImageProfile = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const MessageWrapper = styled.div`
  width: 650px; 
  left: 320px;
  top: 330px;
  position: absolute;
  padding: 20px;
  background: ${Theme.colors.secondary_base_color};
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: ${Theme.colors.secondary_base_color} solid 1px;
  box-shadow: 7px 2px 16px -11px rgba(0,0,0,0.75);

  &:after{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 21px 12px 0;
    border-color: transparent ${Theme.colors.secondary_base_color};
    display: block;
    width: 0;
    z-index: 1;
    left: -21px;
    top: 60px;
  }
  
  &:before{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 21px 12px 0;
    border-color: transparent rgba(255,255,255,0.75);
    display: block;
    width: 0;
    z-index: 0;
    left: -22px;
    top: 60px;
  }
`

export const TitleMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const About = styled.textarea`
  font-size: 15px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
  border: none;
  outline: none;
  resize: none;
  background: transparent;
`

export const GridRight = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
  position: relative;
  width: 500px;
  top: -50px;

  & > div {
    margin: 0 0 10px;
  }
`

export const Information = styled.div`
  width: 300px;

  & > input {
    font-size: 24px;
    font-weight: bold;
    color: ${Theme.colors.base_color};
  }
`

export const Wrapper = styled.p`
  display: flex;

  & > input {
    padding: 15px 0;
    font-size: 18px;
    margin: 0 10px 0 0;
    width: 150px;
    text-align: left;
    color: ${Theme.colors.base_color};
    box-sizing: border-box;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  padding: 40px 100px;
  
  & > div {
    margin: 0 100px;
  }
`

export const Content = styled.div` 
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 0 0 30px;

  & > div {
    margin: 0 20px;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: strech;
  flex-flow: column;
  list-style: none;
  padding: 10px;

  & > li {
    font-size: 17px;
    border-bottom: solid 2px ${Theme.colors.secondary_constrast_color};
    margin: 2px 0;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.secondary_constrast_color};
  }
`

export const Item = styled.li`
  padding: 10px;
  text-align: left;

  &:hover{
    color: ${Theme.colors.secondary_color};
    cursor: pointer;
    border-color: ${Theme.colors.secondary_color};
  }
`
