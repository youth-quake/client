import React from 'react'
import { ACHIEVEMENTS } from '../../utils/achievements'

import {
  Footer,
  NavBar,
  Friends,
  Modal,
  PatrimonialSituation,
  Button
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    action: ACHIEVEMENTS.READ_ARTICLE.ACTION,
    quantity: ACHIEVEMENTS.READ_ARTICLE.POINT
  },
  {
    title: 'Conceitos básicos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    action: ACHIEVEMENTS.REGISTER_INCOME.ACTION,
    quantity: ACHIEVEMENTS.REGISTER_INCOME.POINT
  },
  {
    title: 'Outros conceitos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    action: ACHIEVEMENTS.WIN_BET.ACTION,
    quantity: ACHIEVEMENTS.WIN_BET.POINT
  },
  {
    title: 'Conteúdo adicional',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    action: ACHIEVEMENTS.FINISH_GOAL.ACTION,
    quantity: ACHIEVEMENTS.FINISH_GOAL.POINT
  }
]

const buildContent = (submitAction, showModal, toggleModal) => (
  <Column>
    {cards.map(item => (
      <div>
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          title={item.title}
          Form={() => (
            <div>
              conteudo
              <Button
                onClick={() => submitAction(item.action, item.quantity)}
              >
                submitAction
              </Button>
            </div>
          )}
        />
        <Card key={item.title}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Button
            backgroundColor="transparent"
            onClick={() => toggleModal()}
          >
            Visualizar
        </Button>
        </Card>
      </div>
    ))}
  </Column>
)

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
  setTitleButton,
  submitAction
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
          {buildContent(submitAction, showModal, toggleModal)}
          <Title>Conteúdo intermediário</Title>
          {buildContent(submitAction, showModal, toggleModal)}
          <Title>Conteúdo Avançado</Title>
          {buildContent(submitAction, showModal, toggleModal)}
        </Wrapper>
      </Container>
      <Footer />
    </Container>
  )

export default Study

