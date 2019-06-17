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
    title: 'Introdução',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Conceitos básicos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Outros conceitos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Conteúdo adicional',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
          <Title>Conteúdo intermediário</Title>
          <Column>
            {cards.map(item => (
              <Card>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </Card>
            ))}
          </Column>
          <Title>Conteúdo Avançado</Title>
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

