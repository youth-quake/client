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
  Level,
  Progress
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
        text="Como é sua primeira vez aqui precisamos de algumas informações:"
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
                  <WrapperGrid>
                    <GridLeft>
                      <Picture>
                        <Progress
                          type="circle"
                          strokeWidth={8}
                          percent={30}
                          width={230}
                          height={230}
                          theme={
                            {
                              active: {
                                symbol: <ImageProfile src={ProfileImage} title="Foto de perfil" />,
                                trailColor: Theme.colors.base_color,
                                color: 'orange'
                              }
                            }
                          }
                        />
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
                          name="initialValues.message"
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
                          name="initialValues.name"
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
                            name="initialValues.username"
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
                            name="initialValues.level"
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

