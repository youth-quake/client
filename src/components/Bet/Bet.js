import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled, { css } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { compose, withState, withHandlers } from 'recompose'
import { newBet } from '../../services'
import { amount, onlyNumber } from '../../utils/mask'

import errorImage from '../../assets/img/girl mini.png'
import getProfile from '../../utils/getProfile'

const Container = styled.div`
  width: 100%;

  & > div {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 30px auto;
  }
`

const Description = styled.textarea`
  padding: 12px;
  font-size: 15px;
  text-align: justify;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
  border: none;
  outline: none;
  resize: none;
  border-radius: 3px;
  background-color: ${Theme.colors.base_color};
`

const ContentImage = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const Image = styled.img`
  margin: 10px;
  height: 50px;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 22px;

  &:hover {
    opacity: 0.5;
  }
`

const Message = styled.span`
  color: ${Theme.colors.primary_color};
  display: ${props => props.visible ? css`block` : css`none`};
`

const profile = JSON.parse(localStorage.getItem('profile'))

const enhance = compose(
  withState('visible', 'setVisible', false),
  withState('message', 'setMessage', ''),
  withHandlers({
    handleSubmit: ({ setVisible, setMessage }) => (values, selectedFriend) => {
      fetch(newBet, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "idUser1": profile.idUser,
          "idUser2": selectedFriend.id,
          "name": values.name,
          "description": values.description,
          "time": values.dateEnd,
          "value": onlyNumber(values.value)
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json) {
            setMessage('Aposta cadastrada com sucesso')
            setVisible(true)
            getProfile(profile.login, profile.password)
          } else {
            setMessage('Ocurreu um erro ao atualizar o cadastro')
            setVisible(true)
          }
        })
        .catch(() => {
          setMessage('Ocurreu um erro ao atualizar o cadastro')
          setVisible(true)
        })
    }
  })
)

const Component = ({
  editable,
  visible,
  message,
  handleSubmit,
  selectedFriend
}) => (
    <Formik
      render={({
        errors,
        values,
        setFieldValue
      }) => (
          <Container>
            {selectedFriend && (
              <div>
                <ContentImage>
                  <Image
                    src={profile.picture} title="Visualizar opções"
                    onError={e => e.target.src = errorImage}
                  />
                  <Icon icon={faTimes} />
                  <Image
                    src={selectedFriend.picture} title="Visualizar opções"
                    onError={e => e.target.src = errorImage}
                  />
                </ContentImage>
                <Field
                  name="name"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder='Nome'
                      disabled={editable}
                      errors={errors}
                      backgroundColor={Theme.colors.base_color}
                    />
                  )}
                />
                <Field
                  name="dateEnd"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Tempo em dias'
                      disabled={editable}
                      errors={errors}
                      onChange={e => setFieldValue('dateEnd', onlyNumber(e.target.value))}
                      maxLength="10"
                    />
                  )}
                />
                <Field
                  name="description"
                  render={({ field }) => (
                    <Description
                      {...field}
                      placeholder='Descrição'
                      disabled={editable}
                      errors={errors}
                      maxLength={200}
                      title="Descrição do objetivo"
                      rows="4"
                      cols="42"
                    />
                  )}
                />
                <Field
                  name="value"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Valor proposto'
                      disabled={editable}
                      errors={errors}
                      onChange={e => setFieldValue('value', amount(e.target.value))}
                    />
                  )}
                />
                <Message visible={visible}>{message}</Message>
                <Button
                  backgroundColor={Theme.colors.secondary_color}
                  onClick={() => handleSubmit(values, selectedFriend)}
                >
                  Cadastrar
                </Button>
              </div>
            )}
          </Container>
        )}
    />
  )

export const Bet = enhance(Component)
