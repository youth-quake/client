import React from 'react'
import { Theme, Input, Button as ButtonWithTheme } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

import { compose, withHandlers, withState } from 'recompose'
import { movementsInitial } from '../../services'

import TargetImage from '../../assets/img/target.png'
import FriendImage from '../../assets/img/friendship.png'
import TrophyImage from '../../assets/img/trophy.png'

import getProfile from '../../utils/getProfile'
import { amount, onlyNumber } from '../../utils/mask'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40%;
  padding: 10px 0;
  line-height: 1.2;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 30%;
  height: 100%;
  border: solid 1px ${Theme.colors.base_color};  
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  margin: 0 10px;

  & > div {
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 14px;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.text_color};
  }
`

const Paragraph = styled.h3`
  width: 90%;
  font-family: ${Theme.font.font_family};
  text-align: center;
  color: ${Theme.colors.font_color};  
  padding: 10px;
  margin: 10px 0;
`

const Title = styled.h3`
  font-family: ${Theme.font.font_family};
  font-size: 17px;
  padding: 10px 0;
  font-weight: bold;
  color: ${Theme.colors.font_color};
`

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px;
`

const Button = styled(ButtonWithTheme)`
  width: 120px;
`

const Message = styled.span`
  color: ${Theme.colors.primary_color};
  padding: 10px;
  width: 100%;
  height: 20px;
  margin: 2px 0;
  text-align: center;
`

const enhance = compose(
  withState('message', 'setMessage', ''),
  withState('isDisabled', 'setIsDisabled', false),
  withHandlers({
    handleSubmit: ({ setMessage, setIsDisabled }) => values => {
      const date = new Date()
      const profile = JSON.parse(localStorage.getItem('profile'))

      fetch(`${movementsInitial}/${profile.idUser}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "type": values.type,
          "value": onlyNumber(values.value),
          "dateMovement": `${date.getDay()}/${date.getMonth}/${date.getFullYear()}`,
          "reference": 'Valor inicial',
          "descriptionMovement": 'Essa é sua primeira movimentação'
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json) {
            setMessage('Parabéns! Agora é hora de começar')
            setIsDisabled(true)
            getProfile(profile.login, profile.password)
          } else {
            setMessage('Ops! Ocurreu um erro ao durante a operação')
          }
        })
        .catch(() => {
          setMessage('Ops! Ocurreu um erro ao durante a operação')
        })
    }
  })
)

const Form = ({
  editable,
  handleSubmit,
  isDisabled,
  message
}) => (
    <Formik
      render={({
        errors,
        values,
        setFieldValue
      }) => (
          <Container>
            <Wrapper>
              <Content>
                <Image src={TargetImage}></Image>
                <Title>Defina seus objetivos</Title>
                <p>Para um bom controle financeiro, o primeiro passo
                é entender seus objetivos e controlar as suas movimentações.</p>
              </Content>
              <Content>
                <Image src={FriendImage}></Image>
                <Title>Aposte com amigos</Title>
                <p>Proponha apostas com um mesmo objetivo em comum!
              Com datas e regras definidas por vocês. Que vença o melhor!</p>
              </Content>
              <Content>
                <Image src={TrophyImage}></Image>
                <Title>Ganhe conquistas</Title>
                <p>Ao ganhar apostas e concluir objetivos,
              você ganhará conquistas e subirá de níveis!</p>
              </Content>
            </Wrapper>
            <Paragraph>
              Como primeiro passo, você precisa nos dizer sua renda total acumulada no momento!
              (Não tem problema se você começar do zero).
            </Paragraph>
            <Field
              name="value"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Valor'
                  disabled={editable}
                  errors={errors}
                  onChange={e => setFieldValue('value', amount(e.target.value))}
                />
              )}
            />
            <Field
              name="type"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Tipo (Ex.: Poupança, Investimentos)'
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
            <Message>{message}</Message>
            <Button
              disabled={isDisabled}
              backgroundColor={Theme.colors.secondary_color}
              onClick={() => handleSubmit(values)}
            >
              Enviar
            </Button>
          </Container>
        )}
    />
  )

export const PatrimonialSituation = enhance(Form)
