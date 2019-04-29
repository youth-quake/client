import React from 'react'
import { Button, Input, Anchor } from '../../components'
import { Body, Navbar, ImgLogo, ImgProfile, BackgroundProfile,
   DivPictureProfile, PictureProfile,
   Information, NameUser, InfoAboutUser, MessageUser,
   TitleMessage, MessageAboutUser, Achievements, Navegator, Ul, Li } from './Profile.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import girlM from '../../assets/img/girl mini.png'
import ProfileImage from '../../assets/img/girl big.png'

const Profile = ({
  value, 
  isVisible, 
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable
}) => (
  <Body>
    <Navbar>
      <ImgLogo src={youthquake}></ImgLogo>
      <ImgProfile src={girlM}></ImgProfile>
    </Navbar>
    <BackgroundProfile>
        <Information> 
            <NameUser>Nome do usuário</NameUser>
            <InfoAboutUser>Username</InfoAboutUser>
            <InfoAboutUser>Nível 100</InfoAboutUser>
        </Information>
        <DivPictureProfile>
          <PictureProfile src={ProfileImage}></PictureProfile>
        </DivPictureProfile>
    </BackgroundProfile>
    <MessageUser>
      <TitleMessage>Sobre mim</TitleMessage>
      <MessageAboutUser>Mensagem de status do usuário</MessageAboutUser>
    </MessageUser>
    <Achievements>
      <Navegator>
        <Ul>
          <Li>Conquistas</Li>
          <Li>Objetivos</Li>   
        </Ul> 
      </Navegator>
    </Achievements>
  </Body>
)

export default Profile
