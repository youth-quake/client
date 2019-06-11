import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import { target } from '../../services'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2% auto;
  width: calc(100vw - 60vw);
  background: red;
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

export const NewTarget = () => (
  <Wrapper>
    <Formik
      render={({
        values,
        errors
      }) => (
          <Container>
            <WrapperInput>
              <Label>Titulo</Label>
              <Field
                name="initialValues.name"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Titulo'
                    errors={errors}
                  />
                )}
              />
            </WrapperInput>
            <WrapperInput>
              <Label>Descrição</Label>
              <Field
                name="initialValues.description"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Descrição'
                    errors={errors}
                  />
                )}
              />
            </WrapperInput>
            <WrapperInput>
              <Label>Data final</Label>
              <Field
                name="initialValues.dateEnd"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Data final'
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
                  />
                )}
              />
            </WrapperInput>
            <Button
              backgroundColor={Theme.colors.secondary_color}
              onClick={values => {
                console.log(values)
                fetch(target, {
                  method: 'post',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    "name": values.name,
                    "description": values.description,
                    "dtEnd": values.dateEnd,
                    "value": values.value,
                  })
                })
                  .then(response => response.json())
                  .then(json => {
                    if (json) {
                      console.log(json)
                    } else {

                    }
                  })
              }}> Cadastrar </Button>
          </Container>
        )}
    />
  </Wrapper>
)