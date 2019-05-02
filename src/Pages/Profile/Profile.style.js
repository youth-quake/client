import styled from 'styled-components'
import { Title as TitleComponent, Theme} from '../../components'

export const Logo = styled.img`
  width: 310px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 10px;
`

export const Body = styled.body`
  margin: 0 auto;
  padding: 0px;
`

export const Navbar = styled.div`
  width: 100%;
  height: 70px;
`

export const ImgLogo = styled.img`
  width: 200px;
  height: 60px;
  margin: 10px;
  margin-top: 4px;
  float: left;
`

export const ImgProfile = styled.img`
  margin: 10px;
  float: right;
  height: 50px;
  margin-bottom: 2px;
  cursor: pointer;
`

export const BackgroundProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background: ${Theme.colors.secondary_color};
`

export const WrapperPicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${Theme.colors.base_color};
  margin-left: 200px;
  top: 185px;
  position: relative;
`

export const Information = styled.div`
  width: 335px;
  height: auto;
  margin-top: 170px;
  margin-left: 15px; 
`

export const PictureProfile = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
`

export const NameUser = styled.p`
  font-size: 21px;
  margin-left: 20px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.base_color};
  font-weight: bold;
`

export const LevelUser = styled.p`
  display: inline;
  font-size: 18px;
  height: 30px;
  margin-top: 10px; 
  padding: 10px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.base_color};
`

export const GridLeft = styled.div`
  display: inline;
  float: left;
  height: 100%;
  width: 30%;
`

export const GridRight = styled.div`
  display: inline;
  float: left;
  height: 100%;
  width: 70%;
`

export const MessageUser = styled.div`
  width: 650px;
  height: 100px;
  border-radius: 5px;
  background: ${Theme.colors.base_color};
`

export const TitleMessage = styled.p`
  position: relative;
  top: 10px;
  font-size: 18px;
  margin: 30px;
  margin-top: 30px;
  font-weight: bold;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const MessageAboutUser = styled.p`
  position: relative;
  bottom: 10px;
  font-size: 15px;
  margin: 30px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const Content = styled.div` 
  width: 100%;
  height: 500px; 
`

export const Achievements = styled.div`
  display: inline;
  float: left;
  width: 70%;
  height: 100%;
`

export const Navegator = styled.div`
  display: inline;
  float: left;
  width: 30%;
  height: 100%;
  text-align: center;
`

export const DivTitle = styled.div`
  justify-content: center;
  width: 100%;
  height: 15%;
`

export const Ul = styled.ul`
  list-style: none;
  margin-left: 100px;
  margin-top: 50px;
`

export const Li = styled.li`
  cursor: pointer;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
  &:hover{
    font-weight: bold;
  }
`

export const Title = styled.p`
  font-size: 21px;
  margin: 20px;
  
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
  font-weight: bold;
`

export const AllTrophys = styled.div`
  width: 100%;
  height: 100%;
`

export const ImgTrophys = styled.img`
  display: inline;
  padding: 10px;
  height: 130px;
  width: 130px;
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
  margin-bottom: 10px;
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
  margin: 10px;
  padding: 10px;
  width: 450px;
  height: 120px;
  overflow-wrap: break-word;
  color: ${Theme.colors.font_color};
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
`