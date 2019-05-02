import React, { Fragment } from 'react'
import { Button, InputEditable as Input } from '../../components'
import {
  Container,
  Navbar,
  NavbarImage,
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
  Achievements,
  Title,
  Badge,
  WrapperContent,
  Menu,
  Item,
  Image
} from './Profile.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import ProfileImage from '../../assets/img/girl big.png'
import { Theme } from '../../components'
import { Formik, Field } from 'formik'
import Trofeu from '../../assets/img/trofeu.png'

const achievements = [
  { title: 'Apostador', description: 'Criou 10 novas apostas' },
  { title: 'Visionário', description: 'Previu 5 categorias' },
  { title: 'Ganhador', description: 'Ganhou 10 apostas' },
  { title: 'Popular', description: 'Adicionou 15 amigos' },
  { title: 'Economista', description: 'Guardou R$ 500,00' },
  { title: 'Pensador', description: 'Leu mais de 13 livros' }
]

const Profile = ({
  initialValues,
  showAchievements,
  showObjetives,
  setEditable,
  editable
}) => (
    <Container>
      <Navbar>
        <NavbarImage src={youthquake} />
        <NavbarImage src={iconProfileMini} />
      </Navbar>
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
                        <ImageProfile src={ProfileImage} />
                      </Picture>
                      <Button
                        backgroundColor={Theme.colors.constrast_color}
                        onClick={() => setEditable(!editable)}
                      >
                        Editar
                    </Button>
                      <MessageWrapper>
                        <TitleMessage>Sobre mim</TitleMessage>
                        <Field
                          name="register.message"
                          render={({ field }) => (
                            <About
                              {...field}
                              placeholder='Nome completo'
                              editable={editable}
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
                    <Item title="Visualizar minhas conquistas" onclick={showAchievements}>Conquistas</Item>
                    <Item title="Visualizar meus objetivos pessoais" onclick={showObjetives}>Objetivos</Item>
                  </Menu>
                  <Content>
                    <Title>Minhas conquistas</Title>
                    <Achievements id="conquistas">
                      {achievements.map(item => (
                        <Badge>
                          <Image src={Trofeu} />
                          <span>{item.title}</span>
                          <p>{item.description}</p>
                        </Badge>
                      )
                    )}
                    </Achievements>
                  </Content>
                </WrapperContent>
              </Fragment>
            )}
        />
      )}
    </Container>
  )

export default Profile

