import React, { Fragment } from 'react'

import {
  InputEditable as Editable,
  Target,
  Footer,
  NavBar,
  Achievements,
  Friends,
  Modal,
  PatrimonialSituation,
  Theme,
  ModalBet as Bet,
  Photos
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
  Level,
  Progress
} from './Profile.style'

import { Formik, Field } from 'formik'

import cup from '../../assets/img/cup.png'
import racingFlag from '../../assets/img/racing-flag.png'
import handshake from '../../assets/img/handshake.png'
import errorImage from '../../assets/img/girl big.png'

const isEmpty = value => {
  return value === [] || value.length < 1
}

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
  setTitleButton,
  isBet,
  handleUpdateMessageUser,
  setMessage,
  message,
  handleUpdateUser,
  showPhotos,
  togglePhotos
}) => (
    <Container>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        title="Bem vindo(a)"
        Form={() => (<PatrimonialSituation />)}
      />
      <Modal
        showModal={showPhotos}
        toggleModal={togglePhotos}
        title="Selecione uma foto"
        Form={() => (<Photos />)}
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
            errors,
            values,
            setFieldValue
          }) => (
              <Fragment>
                <BackgroundProfile>
                  <Grid>
                    <Left>
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
                                symbol: <ImageProfile
                                  src={initialValues.userPicture}
                                  title="Foto de perfil"
                                  onError={e => e.target.src = errorImage}
                                  onClick={togglePhotos}
                                />,
                                trailColor: Theme.colors.base_color,
                                color: Theme.colors.green
                              }
                            }
                          }
                        />
                      </Picture>
                      <MessageWrapper title="Sobre mim">
                        <TitleMessage>Sobre mim</TitleMessage>
                        <Field
                          name="message"
                          render={({ field }) => (
                            <About
                              {...field}
                              errors={errors}
                              rows="4"
                              cols="80"
                              placeholder="Nessa seção você conta um pouco sobre você para seus amigos..."
                              onChange={e => setFieldValue('message', e.target.value)}
                              onBlur={() => handleUpdateMessageUser(initialValues, values)}
                            />
                          )}
                        />
                      </MessageWrapper>
                    </Left>
                    <Right>
                      <Information title="Informações gerais">
                        <Field
                          name="name"
                          render={({ field }) => (
                            <Editable
                              {...field}
                              placeholder='Nome completo'
                              errors={errors}
                              onChange={e => {
                                setFieldValue('name', e.target.value)
                                handleUpdateUser(initialValues, values)
                              }}
                              onBlur={() => handleUpdateUser(initialValues, values)}
                            />
                          )}
                        />
                        <Wrapper>
                          <Field
                            name="username"
                            render={({ field }) => (
                              <Editable
                                {...field}
                                placeholder='Username'
                                errors={errors}
                                onChange={e => {
                                  setFieldValue('name', e.target.value)
                                  handleUpdateUser(initialValues, values)
                                }}
                                onBlur={() => handleUpdateUser(initialValues, values)}
                              />
                            )}
                          />
                          <Field
                            name="level"
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
                    </Right>
                  </Grid>
                </BackgroundProfile>
                <WrapperContent>
                  <Menu>
                    <Item
                      title="Visualizar minhas conquistas"
                      onClick={e => showComponent(e.target)}
                    >
                      <img src={cup} alt="Conquistas" />
                      <span id="isAchievements">Conquistas</span>
                    </Item>
                    <Item
                      title="Visualizar meus objetivos pessoais"
                      onClick={e => showComponent(e.target)}
                    >
                      <img src={racingFlag} alt="Objetivos" />
                      <span id="isTarget">Objetivos</span>
                    </Item>
                    <Item
                      title="Visualizar meus objetivos pessoais"
                      onClick={e => showComponent(e.target)}
                    >
                      <img src={handshake} alt="Apostas" />
                      <span id="isBet">Apostas</span>
                    </Item>
                  </Menu>
                  {(isEmpty(initialValues.achievements)) && (
                    <p>Ops! Você ainda não tem nenhum objetivo cadastrado</p>
                  )}
                  {(!isEmpty(initialValues.achievements)) && (
                    <Content>
                      <Achievements achievements={initialValues.achievements} />
                    </Content>
                  )}
                  {isEmpty(initialValues.targets) && (
                    <p>Ops! Você ainda não tem nenhum objetivo cadastrado</p>
                  )}
                  {!isEmpty(initialValues.targets) && (
                    <Content>
                      <Target targets={initialValues.targets} />
                    </Content>
                  )}
                  {isEmpty(initialValues.targets) && (
                    <p>Ops! Você ainda não tem nenhuma aposta cadastrada</p>
                  )}
                  {!isEmpty(initialValues.targets) && (
                    <Content>
                      <Bet bet={initialValues.targets} />
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

