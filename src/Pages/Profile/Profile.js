import React, {Fragment} from 'react'
import { Button, Input, Anchor } from '../../components'
import {
  Body,
  Navbar,
  ImgLogo,
  ImgProfile,
  BackgroundProfile,
  WrapperPicture,
  PictureProfile,
  Information,
  NameUser,
  InfoAboutUser,
  MessageUser,
  TitleMessage,
  MessageAboutUser,
  Achievements,
  Navegator,
  Ul,
  Li,
  Trophys,
  TitleTrophys,
  AllTrophys,
  ImgTrophys
} from './Profile.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import ProfileImage from '../../assets/img/girl big.png'
import Trofeu from '../../assets/img/trofeu.png'
import { Theme } from '../../components'
import { Formik, Field } from 'formik'
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
        <ImgLogo src={youthquake} />
        <ImgProfile src={iconProfileMini} />
      </Navbar>
      <BackgroundProfile>
        <Information>
          <Formik
            render={({
              errors,
              values,
              setFieldValue
            }) => (
              <Fragment>
                <Field
                  name="register.name"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder='Nome completo'
                      editable
                      disabled
                    />
                  )}
                />
                <Field
                  name="register.username"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder='Username'
                      editable
                    />
                  )}
                />
                 <Field
                  name="register.username"
                  render={({ field }) => (
                    <MessageUser {...field}>
                    <TitleMessage>Sobre mim</TitleMessage>
                    <MessageAboutUser>Mensagem de status do usuário</MessageAboutUser>
                  </MessageUser>
                  )}
                />
                </Fragment>
              )}
          />
          <InfoAboutUser>Nível 100</InfoAboutUser>
          <Button backgroundColor={Theme.colors.primary_color}>Editar</Button>
        </Information>
        <WrapperPicture>
          <PictureProfile src={ProfileImage}></PictureProfile>
        </WrapperPicture>
      </BackgroundProfile>
      <Achievements>
        <Navegator>
          <Ul>
            <Li title="Visualizar minhas conquistas">Conquistas</Li>
            <Li title="Visualizar meus objetivos pessoais">Objetivos</Li>
          </Ul>
        </Navegator>
        <Trophys>
          <TitleTrophys>Minhas conquistas</TitleTrophys>
        </Trophys>
        <AllTrophys>
          <ImgTrophys src={Trofeu} />
          <ImgTrophys src={Trofeu} />
        </AllTrophys>
      </Achievements>
    </Body>
  )

export default Profile
