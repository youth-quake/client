import React, { Fragment } from 'react'
import { Button, InputEditable as Input, Theme} from '../../components'
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
  Image,
  Footer,
  Social,
  Targets,
  TargetDescription,
  TargetContainer,
  TargetTitle,
  WrapperInformation,
  Percent,
  Description
} from './Profile.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import ProfileImage from '../../assets/img/girl big.png'
import { Formik, Field } from 'formik'
import Trofeu from '../../assets/img/trofeu.png'
import linkedin from '../../assets/img/linkedin.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook-logo-button.png'
import twitter from '../../assets/img/twitter.png'
import DonutChart from 'react-donut-chart'

const Profile = ({
  initialValues,
  isAchievements,
  isTarget,
  setEditable,
  editable,
  showComponent,
  achievements,
  targets
}) => (
    <Container>

      <Navbar>
        <NavbarImage src={youthquake} title="Ir para a página inicial" />
        <NavbarImage src={iconProfileMini} title="Visualizar opções" />
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
                        <ImageProfile src={ProfileImage} title="Foto de perfil" />
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
                      <Title>Minhas conquistas</Title>
                      <Achievements>
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
                  )}
                  {isTarget && (
                    <Content>
                      <Title>Meus objetivos</Title>
                      <Targets>
                        {targets.map(item => (
                          <TargetContainer>
                            <TargetTitle>{item.title}</TargetTitle>
                            <TargetDescription>
                              <Description>{item.description}</Description>
                              <Percent>
                                <DonutChart
                                  data={[
                                    { value: item.percent},
                                    { value: 100 - item.percent}
                                  ]}
                                  colors={[
                                    '#FFF',
                                    Theme.colors.primary_color
                                  ]}
                                  width={200}
                                  height={200}
                                  legend={false}
                                />
                              </Percent>
                            </TargetDescription>
                            <WrapperInformation>
                              <div>
                                <span>Data de início:</span>
                                <text>{item.start}</text>
                                <br />
                                <span>Data de fim:</span>
                                <text>{item.end}</text>
                              </div>
                              <div>
                                <span>Renda:</span>
                                <text>R$ {item.amount}</text>
                              </div>
                            </WrapperInformation>
                          </TargetContainer>
                        )
                        )}
                      </Targets>
                    </Content>
                  )}
                </WrapperContent>
                <Footer>
                  <span>&copy; Todos os direitos reservados</span>
                  <p>Contate-nos&nbsp;&nbsp;&nbsp;&nbsp;F.A.Q</p>
                  <Social>
                    <img src={linkedin} title={'LinkedIn'} />
                    <img src={facebook} title={'Facebook'} />
                    <img src={instagram} title={'Instagram'} />
                    <img src={twitter} title={'Twitter'} />
                  </Social>
                </Footer>
              </Fragment>
            )}
        />
      )}

    </Container>
  )

export default Profile

