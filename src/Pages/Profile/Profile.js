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

import getPhoto from '../../utils/getPhoto'

import { Formik, Field } from 'formik'

import cup from '../../assets/img/cup.png'
import racingFlag from '../../assets/img/racing-flag.png'
import handshake from '../../assets/img/handshake.png'

const isEmpty = value => {
  return value === [] || value.length < 1
}

const allBets = JSON.parse(localStorage.getItem('friends'))
const data = JSON.parse(localStorage.getItem('profile'))

const Profile = ({
  initialValues,
  isAchievements,
  isTarget,
  showComponent,
  visible,
  toggleVisible,
  toggleModal,
  showModal,
  isBet,
  handleUpdateUser,
  showPhotos,
  togglePhotos,
  targets,
  achievements
}) => (
    <Container>
      {(data.firstAcess) && (
        <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        title="Bem vindo(a)"
        Form={() => (<PatrimonialSituation />)}
        />
      )}
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
                        {console.log('picture', initialValues.picture)}
                        {console.log('userPicture', initialValues.userPicture)}
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
                                  src={initialValues.picture === null ? initialValues.userPicture : initialValues.picture}
                                  title="Foto de perfil"
                                  onError={e => e.target.src = getPhoto()}
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
                          name="messageStatus"
                          render={({ field }) => (
                            <About
                              {...field}
                              errors={errors}
                              rows="4"
                              cols="80"
                              placeholder="Nessa seção você conta um pouco sobre você para seus amigos..."
                              onChange={e => setFieldValue('messageStatus', e.target.value)}
                              onBlur={() => handleUpdateUser(initialValues, values)}
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
                  {(isAchievements && achievements) && (
                    <Content>
                      <Achievements achievements={achievements} />
                      {(isEmpty(achievements)) && (
                        <p>Ops! Você ainda não tem nenhuma conquista obtida <span role="img" aria-label="cry">😢</span></p>
                      )}
                    </Content>
                  )}
                  {(isTarget && targets) && (
                    <Content>
                      <Target targets={targets} />
                      {isEmpty(targets) && (
                        <p>Ops! Você ainda não tem nenhum objetivo cadastrado <span role="img" aria-label="cry">😢</span></p>
                      )}
                    </Content>
                  )}
                  {(isBet && allBets) && (
                    <Content>
                      <Bet />
                      {isEmpty(allBets) && (
                        <p>Ops! Você ainda não tem nenhuma aposta cadastrada <span role="img" aria-label="cry">😢</span></p>
                      )}
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

