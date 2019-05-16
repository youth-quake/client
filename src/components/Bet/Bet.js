import React from 'react'
import { Theme, Input } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import iconProfileMini from '../../assets/img/girl mini.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow-y: auto;
  
  & > input {
    padding: 22px 10px;
  }

  & > input, textarea {
    width: 100%;
    box-sizing: border-box;
  }

  & > textarea {
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
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > input+input {
    margin-left: 10px;
  }
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

export const Bet = ({
  ...props
}) => {

  const {
    editable
  } = props

  return (
    <Formik
      render={({
        errors,
        values
      }) => (
          <Container>
            <ContentImage>
              <Image src={iconProfileMini} title="Visualizar opções" />
              <Icon icon={faTimes} />
              <Image src={iconProfileMini} title="Visualizar opções" />
            </ContentImage>
            <Wrapper>
              <Field
                name="register.dateStart"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Data inicial'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
              <Field
                name="register.dateEnd"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Data final'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
            </Wrapper>
            <Field
              name="register.description"
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder='Descrição'
                  disabled={editable}
                  errors={errors}
                  maxLength={200}
                  title="Descrição do objetivo"
                  rows="4"
                  cols="80"
                />
              )}
            />
            <Field
              name="register.value"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Valor proposto'
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
          </Container>
        )}
    />
  )
}