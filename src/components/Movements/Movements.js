import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled, { css } from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'

import { movements } from '../../services'
import { amount, onlyNumber } from '../../utils/mask'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2% auto;
  width: calc(100vw - 60vw);
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto; 
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;

  & > * {
    margin: 0;
    width: 100%;
  }

  & > button {
    width: 200px;
  }
`

const WrapperInput = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;  
  margin: 2px 0;

  & > input {
    width: 95%;
    box-sizign: border-box;
  }
`

const Label = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 14px;
  color: ${Theme.colors.font_color};
`

const Message = styled.span`
  color: ${props => props.visible ? Theme.colors.primary_color : css`transparent`};
  padding: 20px 0;
  margin: 2px 0;
  height: 20px;
  text-align: center;
`

const enhance = compose(
  withState('visible', 'setVisible', false),
  withState('message', 'setMessage', ''),
  withHandlers({
    handleSubmit: ({ setVisible, setMessage }) => values => {
      const date = new Date()
      const profile = JSON.parse(localStorage.getItem('profile'))

      fetch(`${movements}/${profile.idUser}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "date": `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
          "value": onlyNumber(values.value),
          "type": values.type,
          "reference": values.reference
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json) {
            setMessage('Hey! Movimentação registrada com sucesso.')
            setVisible(true)
          } else {
            setMessage('Ops! Ocurreu um erro ao registrar sua movimentação.')
            setVisible(true)
          }
        })
        .catch(() => {
          setMessage('Ops! Ocurreu um erro ao registrar sua movimentação.')
          setVisible(true)
        })
    }
  })
)

const Component = ({
  message,
  visible,
  handleSubmit
}) => (
    <Wrapper>
      <Formik
        render={({
          values,
          errors,
          setFieldValue
        }) => (
            <Container>
              <WrapperInput>
                <Label>Descrição</Label>
                <Field
                  name="initialValues.reference"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Referência (Ex.: Gastou, Economia)'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
                <Label>Tipo</Label>
                <Field
                  name="initialValues.type"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Tipo (Ex.: Poupança, Investimentos)'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
                <Label>Valor</Label>
                <Field
                  name="initialValues.value"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Valor'
                      errors={errors}
                      onChange={e => setFieldValue('value', amount(e.target.value))}
                    />
                  )}
                />
              </WrapperInput>
              <Message
                visible={visible}
              >
                {message}
              </Message>
              <Button
                backgroundColor={Theme.colors.secondary_color}
                onClick={() => handleSubmit(values)}
              >
                Movimentar
              </Button>
            </Container>
          )}
      />
    </Wrapper>
  )

export const Movements = enhance(Component)