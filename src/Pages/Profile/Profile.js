import React, { Fragment } from 'react'

import {
  InputEditable as Editable,
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
  Grid,
  Left,
  Right,
  Content,
  WrapperContent,
  Menu,
  Item,
  Title,
  Level
} from './Profile.style'

import ProfileImage from '../../assets/img/girl big.png'
import { Formik, Field } from 'formik'

const options = [
  { key: 1, description: 'Desespesas fixas' },
  { key: 2, description: 'Desespesas variaveis' },
  { key: 3, description: 'Objetivos' }
]

const Profile = ({
  initialValues,
  isAchievements,
  isTarget,
  editable,
  showComponent,
  titleButton,
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
        Form={() => (<PatrimonialSituation options={options} />)}
      />
      <Friends
        visible={visible}
        toggleVisible={toggleVisible}
      />
      <NavBar />
      {(initialValues && initialValues !== undefined) && (
        <Formik
          initialValues={initialValues}
          render={({
            errors
          }) => (
              <Fragment>
                <BackgroundProfile>
                  <Grid>
                    <Left>
                      <Picture>
                        <ImageProfile src={ProfileImage} title="Foto de perfil" />
                      </Picture>
                      <MessageWrapper title="Sobre mim">
                        <TitleMessage>Sobre mim</TitleMessage>
                        <Field
                          name="initialValues.message"
                          render={({ field }) => (
                            <About
                              {...field}
                              value={initialValues.message}
                              disabled={editable}
                              errors={errors}
                              rows="4"
                              cols="80"
                            />
                          )}
                        />
                      </MessageWrapper>
                    </Left>
                    <Right>
                      <Information title="Informações gerais">
                        <Field
                          name="initialValues.name"
                          render={({ field }) => (
                            <Editable
                              {...field}
                              placeholder='Nome completo'
                              value={initialValues.name}
                              editable={editable}
                              disabled={editable}
                              errors={errors}
                            />
                          )}
                        />
                        <Wrapper>
                          <Field
                            name="initialValues.username"
                            render={({ field }) => (
                              <Editable
                                {...field}
                                placeholder='Username'
                                value={initialValues.username}
                                editable={editable}
                                disabled={editable}
                                errors={errors}
                              />
                            )}
                          />
                          <Field
                            name="initialValues.level"
                            render={({ field }) => (
                              <Level
                                {...field}
                                placeholder='Nivel 1'
                                value={initialValues.level}
                                disabled
                                errors={errors}
                              />
                            )}
                          />
                        </Wrapper>
                      </Information>
                    </Right>
                  </Grid>
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
                  {(isAchievements && initialValues.achievements !== undefined) && (
                    <Content>
                      <Achievements achievements={initialValues.achievements} />
                    </Content>
                  )}
                  {(isTarget && initialValues.targets !== undefined) && (
                    <Content>
                      <Title>Meus objetivos</Title>
                      <Target targets={initialValues.targets} />
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

