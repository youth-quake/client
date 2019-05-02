import styled from 'styled-components'
import { Theme } from '../../components'

export const Container = styled.body`
  margin: 0 auto;
  padding: 0px;
`

export const Navbar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`

export const NavbarImage = styled.img`
  margin: 10px;
  height: 50px;
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
  background: ${Theme.colors.base_color};
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: rgba(255,255,255,0.75) solid 1px;
  box-shadow: 7px 2px 16px -11px rgba(0,0,0,0.75);

  &:after{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 21px 12px 0;
    border-color: transparent ${Theme.colors.base_color};
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
  font-size: 20px;
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
  
  & > div {
    margin: 0 20px;
  }
`

export const Achievements = styled.div`
  display: flex;
  flex-flow: row wrap;

  & img > {
    margin: 10px;
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

export const Title = styled.p`
  font-size: 28px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 10px 20px;
`

export const Badge = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: baseline;
  align-items: center;
  padding: 10px;
  height: 150px;
  width: 150px;
  margin: 20px 10px; 

  & > span {
    cursor: default;
    font-weight: bold;
    box-sizing: border-box;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.secondary_color};
  }

  & > p {
    cursor: default;
    box-sizing: border-box;
    font-family: ${Theme.font.font_family};
    font-size: 14px;
    color: ${Theme.colors.secondary_color};
  }
`

export const Image = styled.img`
  height: 120px;
  width: 120px;
`

export const Objective = styled.div`
  display: none;
  float: left;
  width: 70%;
  height: 100%;
`

export const ListObjectives = styled.div`
  width: 650px;
  border-radius: 5px;
  height: 200px;
  border: 1px solid ${Theme.colors.text_color}
`

export const TitleCategory = styled.div`
  width: 140px;
  background: ${props => props.backgroundColor};
  color: white;
  text-align: center;
  padding: 1px;
  font-weight: bold;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
`

export const DescriptionObjective = styled.div`
  width: 450px;
  height: 120px;
  overflow-wrap: break-word;
  color: ${Theme.colors.font_color};
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
`