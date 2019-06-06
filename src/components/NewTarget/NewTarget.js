import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import { target } from '../../services'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2% auto;
  width: 70%;
`

const Container = styled.div`
  width: 80%;
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

const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  & > button+button {
    width: 220px;
    margin-right: 10px;
  }
`

const Delete = styled(Button)`
  width: 120px;
  font-weight: normal;
  color: #A8A8A8; 
  padding: 0;
  border: solid 1px #E8E8E8;

  &:hover {
    background: ${Theme.colors.font_color};
    color: #FFF;
    opacity: 0.5;
  }
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