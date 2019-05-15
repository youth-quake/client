import React, { Fragment } from 'react'

import {
  Button,
  InputEditable as Editable,
  Theme,
  Target,
  Footer,
  NavBar,
  Achievements,
  Friends,
  Modal,
  PatrimonialSituation
} from '../../components'

import {
  Container,
  BackgroundProfile,
  Picture,
  ImageProfile,
  Information,
  Wrapper,
  MessageWrapper,
  TitleMessage,
  About,
  WrapperGrid,
  GridLeft,
  GridRight,
  Content,
  WrapperContent,
  Menu,
  Item,
  Title,
  Level
} from './Profile.style'

import ProfileImage from '../../assets/img/girl big.png'
import { Formik, Field } from 'formik'

const Profile = ({
  initialValues,
  isAchievements,
  isTarget,
  editable,
  showComponent,
  achievements,
  targets,
  titleButton,
  handleChange,
  friends,
  visible,
  toggleVisible,
  toggleModal,
  showModal,
  setEditable,
  setTitleButton
}) => (
    <Container>
      <Modal 
        showModal={showModal} 
        toggleModal={toggleModal}
        title="Bem vindo(a)"
        text="Como é sua primeira vez aqui precisamos de algumas informações.
        Então conta um pouco sobre sua experiencia de pobreza nos campos abaixo"
        Form={PatrimonialSituation}
      />
      <Friends
        friends={friends}
        visible={visible}
        toggleVisible={toggleVisible}
      />
      <NavBar />
      {initialValues && (
        <Formik
          initialValues={initialValues}
          render={({
            errors
          }) => (
              <Fragment>
                <BackgroundProfile>
                  <WrapperGrid>
                    <GridLeft>
                      <Picture>
                        <ImageProfile src={ProfileImage} title="Foto de perfil" />
                      </Picture>
                      <Button
                        backgroundColor={Theme.colors.constrast_color}
                        onClick={() => {
                          setTitleButton(titleButton === 'Salvar' ? 'Editar' : 'Salvar')
                          setEditable(!editable)
                        }}
                        title={titleButton}
                      >
                        {titleButton}
                      </Button>
                      <MessageWrapper title="Sobre mim">
                        <TitleMessage>Sobre mim</TitleMessage>
                        <Field
                          name="register.message"
                          render={({ field }) => (
                            <About
                              {...field}
                              disabled={editable}
                              errors={errors}
                              rows="4"
                              cols="80"
                            />
                          )}
                        />
                      </MessageWrapper>
                    </GridLeft>
                    <GridRight>
                      <Information title="Informações gerais">
                        <Field
                          name="register.name"
                          render={({ field }) => (
                            <Editable
                              {...field}
                              placeholder='Nome completo'
                              editable={editable}
                              disabled={editable}
                              errors={errors}
                            />
                          )}
                        />
                        <Wrapper>
                          <Field
                            name="register.username"
                            render={({ field }) => (
                              <Editable
                                {...field}
                                placeholder='Username'
                                editable={editable}
                                disabled={editable}
                                errors={errors}
                              />
                            )}
                          />
                          <Field
                            name="register.level"
                            render={({ field }) => (
                              <Level
                                {...field}
                                placeholder='Nivel 1'
                                disabled
                                errors={errors}
                              />
                            )}
                          />
                        </Wrapper>
                      </Information>
                    </GridRight>
                  </WrapperGrid>
                </BackgroundProfile>
                <WrapperContent>
                  <Menu>
                    <Item
                      title="Visualizar minhas conquistas"
                      onClick={() => showComponent()}
                    >
                      Conquistas
                    </Item>
                    <Item
                      title="Visualizar meus objetivos pessoais"
                      onClick={() => showComponent()}
                    >
                      Objetivos
                    </Item>
                  </Menu>
                  {isAchievements && (
                    <Content>
                      <Achievements achievements={achievements} />
                    </Content>
                  )}
                  {isTarget && (
                    <Content>
                      <Title>Meus objetivos</Title>
                        <Target targets={targets} />
                    </Content>
                  )}
                </WrapperContent>
                <Footer />
              </Fragment>
            )}
        />
      )}
    </Container>

  )

export default Profile

