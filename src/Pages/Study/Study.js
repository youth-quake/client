import React from 'react'

import {
  Footer,
  NavBar,
  Friends,
  Modal,
  PatrimonialSituation,
} from '../../components'

import { 
  Container, 
  Column, 
  Card, 
  Wrapper, 
  Title 
} from './Study.style'

const cards = [
  {
    title: 'Title',
    description: 'skjjhksajhakjs'
  },
  {
    title: 'Title',
    description: 'skjjhksajhakjs'
  },
  {
    title: 'Title',
    description: 'skjjhksajhakjs'
  },
  {
    title: 'Title',
    description: 'skjjhksajhakjs'
  }
]

const Study = ({
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
        Form={() => (<PatrimonialSituation />)}
      />
      <Friends
        visible={visible}
        toggleVisible={toggleVisible}
      />
      <NavBar />
      <Container>
        <Wrapper>
          <Title>Conteúdo básico</Title>
          <Column>
            {cards.map(item => (
              <Card>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </Card>
            ))}
          </Column>
          <Title>Conteúdo básico</Title>
          <Column>
            {cards.map(item => (
              <Card>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </Card>
            ))}
          </Column>
        </Wrapper>
      </Container>
      <Footer />
    </Container>
  )

export default Study

