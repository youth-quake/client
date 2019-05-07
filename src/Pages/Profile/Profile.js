import React, { Fragment } from 'react'
import { Button, InputEditable as Input, Theme, Target, Footer, NavBar, Achievements } from '../../components'
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
  Item
} from './Profile.style'
import ProfileImage from '../../assets/img/girl big.png'
import { Formik, Field } from 'formik'

const Profile = ({
  initialValues,
  isAchievements,
  isTarget,
  setEditable,
  editable,
  showComponent,
  achievements,
  targets,
  titleButton,
  handleChange
}) => (
    <Container>
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
                        onClick={() => handleChange()}
                      >
                        {titleButton}
                    </Button>
                      <MessageWrapper>
                        <TitleMessage>Sobre mim</TitleMessage>
                        <Field
                          name="register.message"
                          render={({ field }) => (
                            <About
                              {...field}
                              placeholder='Nome completo'
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
                      <Information>
                        <Field
                          name="register.name"
                          render={({ field }) => (
                            <Input
                              {...field}
                              backgroundColor='transparent'
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
                              <Input
                                {...field}
                                backgroundColor='transparent'
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
                              <Input
                                {...field}
                                backgroundColor='transparent'
                                placeholder='Nivel 1'
                                editable={editable}
                                disabled={editable}
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

