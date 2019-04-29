import styled from 'styled-components'
import { Title as TitleComponent, Theme} from '../../components'
import ProfileImage from '../../assets/img/girl big.png'

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
  width: 100%;
  height: 300px;
  background: ${Theme.colors.secondary_color};
  margin-top: -21px;
`

export const DivPictureProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  border: solid 1px ${Theme.colors.text_color}
  margin-left: 140px;
  top: 100px;
  position: relative;
`

export const Information = styled.div`
  width: 300px;
  height: 100px;
  margin-left: 350px;
  position: relative;
  top: 200px;
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

export const InfoAboutUser = styled.p`
  display: inline;
  text-align:center;
  padding: 20px;
  font-size: 18px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.base_color};
`

export const MessageUser = styled.div`
  width: 650px;
  height: 100px;
  border-radius: 5px;
  margin-left: 400px;
  margin-top: 20px;
  background: ${Theme.colors.base_color};
  &:after{
  content: '';
	position: absolute;
	left: 24.8%;
  top: 68%;
	width: 80px;
	height: 0px;
	border: 30px solid transparent;
	border-right-color: ${Theme.colors.base_color};
	border-left: 0;
	margin-top: -7px;
	margin-left: -5px; 
  }
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

export const Achievements = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 10px;
`

export const Navegator = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 100%;
`

export const Ul = styled.ul`
  list-style: none;
`

export const Li = styled.li`
  cursor: pointer;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
  &:hover{
    font-weight: bold;
  }
`