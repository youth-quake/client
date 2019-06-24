import React from 'react'

import {
  Footer,
  NavBar,
  Friends,
  Modal,
  Button,
  Article
} from '../../components'

import {
  Container,
  Column,
  Card,
  Wrapper,
  Title
} from './Study.style'

import { easy, content, hard } from '../../utils/content'

const buildContent = (cards, setItem, toggleModal) => (
  <Column>
    {cards.map(item => (
      <div>
        <Card key={item.title}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Button
            backgroundColor="transparent"
            onClick={() => {
              setItem(item)
              toggleModal()
            }}
          >
            Visualizar
        </Button>
        </Card>
      </div>
    ))}
  </Column>
)

const Study = ({
  visible,
  toggleVisible,
  toggleModal,
  showModal,
  submitAction,
  item,
  setItem
}) => (
    <Container>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        title={item.description}
        Form={() => ( <Article item={item} action={submitAction} /> )}
      />
      <Friends
        visible={visible}
        toggleVisible={toggleVisible}
      />
      <NavBar />
      {console.log(item)}
      <Container>
        <Wrapper>
          <Title>Conteúdo básico</Title>
          {buildContent(easy, setItem, toggleModal)}
          <Title>Conteúdo intermediário</Title>
          {buildContent(content, setItem, toggleModal)}
          <Title>Conteúdo Avançado</Title>
          {buildContent(hard, setItem, toggleModal)}
        </Wrapper>
      </Container>
      <Footer />
    </Container>
  )

export default Study

