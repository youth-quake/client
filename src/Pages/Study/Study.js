import React from 'react'
import { ACHIEVEMENTS } from '../../utils/achievements'

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

const cards = [
  {
    title: 'Introdução',
    description: 'Mas o que é investir?',
    content: `Estudos mostram que as pessoas que tentam começar a investir falham em 90% das vezes. Isso ocorre porque a maioria começa a investir antes mesmo de adquirir conhecimento e entender seu perfil de investidor.
      Investir significa colocar seu dinheiro para trabalhar para você. É uma forma diferente de pensar sobre como fazer dinheiro.
      A maioria das pessoas pensam que só podemos ganhar mais dinheiro através do trabalho. E é exatamente o que a maioria faz.
      Há um grande problema nisso: se você quer mais dinheiro, tem que trabalhar mais.
    `,
    action: ACHIEVEMENTS.READ_ARTICLE.ACTION,
    quantity: ACHIEVEMENTS.READ_ARTICLE.POINT
  },
  {
    title: 'Conceitos básicos',
    description: 'Como identificar seu perfil de investidor?',
    content: `Qual é o seu estilo? Você ama carros esportivos, esportes radicais e a emoção de algo arriscado? Ou você prefere ler em sua rede, enquanto aprecia a calma, estabilidade e segurança do seu quintal?
    Peter Lynch, um dos maiores investidores de todos os tempos, disse: “O órgão-chave para investir é o estômago, e não o cérebro “.
    Em outras palavras, você precisa saber quanta volatilidade você pode suportar em seus investimentos.
    Descobrir isso por si mesmo está longe de ser uma ciência exata, mas há alguma verdade a uma antiga máxima de investimento: você se arriscou mais que devia quando não consegue dormir à noite por estar se preocupando com seus investimentos.
    Outra característica da personalidade que determinará sua forma de investir é o seu desejo para buscar informações sobre investimentos.
    Algumas pessoas amam analisar demonstrações financeiras e ler notícias sobre finanças. Para outros, fazer isso é algo cansativo e entediante. Outros até gostariam de analisar investimentos, mas não têm tempo.    
    `,
    action: ACHIEVEMENTS.REGISTER_INCOME.ACTION,
    quantity: ACHIEVEMENTS.REGISTER_INCOME.POINT
  },
  {
    title: 'Outros conceitos',
    description: 'Perca o Medo de Investir',
    content: `Muita gente simplesmente tem medo de investir, alguns acham que é muito complexo. Outros pensam que é muito custoso. Há ainda quem acredite que vá perder dinheiro ou ser enganado.
    No final das contas, simplesmente desistem (antes mesmo de tentar!).
    Tesouro Direto
    O Tesouro Direto é uma das melhores alternativas de renda fixa, possui taxas baixíssimas, é muito fácil e está ao alcance de todos (investimento a partir de R$ 30).
    Visitando o site do Tesouro, é possível ver que existem atualmente 4 corretoras que não cobram taxa de administração. Dessas as mais conhecidas são a CGD Investimentos (antiga Banif, agora Directa Invest) e a Título (Easynvest).    
    `,
    action: ACHIEVEMENTS.WIN_BET.ACTION,
    quantity: ACHIEVEMENTS.WIN_BET.POINT
  },
  {
    title: 'Conteúdo adicional',
    description: 'Livros Para Aprender a Investir - Para Iniciantes',
    content: `•	Segredos da Mente Milionária - T. Harv Eker;
    •	Pai Rico, Pai Pobre - Robert T. Kiyosaki e Sharon L. Lechter;
    •	O Investidor Inteligente - Benjamin Graham;
    •	O Homem Mais Rico da Babilônia - George S. Clason.    
    `,
    action: ACHIEVEMENTS.FINISH_GOAL.ACTION,
    quantity: ACHIEVEMENTS.FINISH_GOAL.POINT,
  }
]

const buildContent = (setItem, toggleModal) => (
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
          {buildContent(setItem, toggleModal)}
          <Title>Conteúdo intermediário</Title>
          {buildContent(setItem, toggleModal)}
          <Title>Conteúdo Avançado</Title>
          {buildContent(setItem, toggleModal)}
        </Wrapper>
      </Container>
      <Footer />
    </Container>
  )

export default Study

