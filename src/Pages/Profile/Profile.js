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
  Image,
  Footer,
  Social
} from './Profile.style'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import ProfileImage from '../../assets/img/girl big.png'
import { Theme } from '../../components'
import { Formik, Field } from 'formik'
import Trofeu from '../../assets/img/trofeu.png'

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
                      <Badge>
                        <Image src={Trofeu} />
                        <p>Apostador</p>
                      </Badge>
                      <Badge>
                        <Image src={Trofeu} />
                        <p>Visionário</p>
                      </Badge>
                      <Badge>
                        <Image src={Trofeu} />
                        <p>Popular</p>
                      </Badge>
                    </Achievements>
                  </Content>
                </WrapperContent>
                <Footer>
                  <span>&copy; Todos os direitos reservados</span>
                  <p>Contate-nos&nbsp;&nbsp;&nbsp;&nbsp;F.A.Q</p>
                  <Social>
                    <img src={Trofeu} title={'Facebook'}/>
                    <img src={Trofeu} title={'Facebook'}/>
                    <img src={Trofeu} title={'Facebook'}/>
                  </Social>
                </Footer>
              </Fragment>
            )}
        />
      )}

    </Container>
  )

export default Profile


{/* Objetivos [display none como padrao] */ }
{/* <Objective id="objetivos">
        <DivTitle>
          <Title>Meus objetivos</Title>
        </DivTitle>
            <ListObjectives>
                <TitleCategory backgroundColor={Theme.colors.secondary_color}>
                <p>Comprar um carro</p>
                </TitleCategory>
                <DescriptionObjective>
                  Descrição do objetivo.
                  <div style={{marginTop: '20px'}}>
                      <p style={{display: 'inline'}}>Data inicio: </p>
                      <p style={{display: 'inline', margin: '70px'}} >Data Fim:</p>
                      <p>Preço:</p>  
                  </div> 
                </DescriptionObjective>
            </ListObjectives>
        </Objective> */}