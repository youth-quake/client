import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

const Container = styled.div`
  width: 48%;
  margin: 0 auto; 
  
  & > input {
    padding: 22px 10px;
  }

  & > input, textarea {
    width: 100%;
    box-sizing: border-box;
  }

  & > button {
    bottom: 20px;
    position: absolute;
    width: 100px;
  }
`

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & > input {
    margin-left: 20px;
  }
  & > div {
    float: left;
    margin: -5px;
  }
`

const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  align-items:center;  
`

const Title = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 21px;
  margin-top: 30px;
  font-weight: bold;
  color: ${Theme.colors.font_color};
`

const LabelInput = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 18px;
  color: ${Theme.colors.font_color};
`

const Line = styled.div`
  width:100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: ${Theme.colors.font_color};
`

const WrapperButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  & > button {
  width: 120px;
}
`

const WrapperButtonDelete = styled.div`
& > button {
  width: 120px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-weight: normal;
  color: ${Theme.colors.font_color};
} 
`

export const Config = ({
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
            {/* <div>
            <Title>Usuário e E-mail</Title>
            <Line/>
            </div> */}
              <Wrapper>
              <WrapperInput>
              <LabelInput>Nome de usuário</LabelInput>
                <Field
                name="register.username"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Nome do usuário'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
              </WrapperInput>
              </Wrapper>
              <Wrapper>
              <WrapperInput>
              <LabelInput>Email</LabelInput>   
              <Field
                name="register.email"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='E-mail'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
              </WrapperInput>
              </Wrapper>
            
            <Wrapper>
            <WrapperInput>
            <LabelInput>Senha atual</LabelInput>
            <Field
              name="register.password"
              render={({ field }) => (
                <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Digite sua senha atual' 
                    type={'password'}
                    disabled={editable}
                    errors={errors}
                  />
              )}
            />
            </WrapperInput>
            </Wrapper>
            <Wrapper>     
            <WrapperInput>
            <LabelInput>Nova senha</LabelInput>
            <Field
              name="register.newpassword"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Nova senha'
                  type={'password'}
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
            </WrapperInput>
            </Wrapper>

            <Wrapper>
                   
            <WrapperInput>
            <LabelInput>Confirme a senha</LabelInput>
            <Field
              name="register.repeatnewpassword"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Repita a nova senha'
                  type={'password'}
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
            </WrapperInput>
            </Wrapper>
          <WrapperButton>      
          <Button 
          backgroundColor={Theme.colors.secondary_color}
          >
            Alterar
          </Button>
          </WrapperButton>
          <WrapperButtonDelete>
            <Button 
            backgroundColor={'transparent'}
            >
            Excluir conta
            </Button>
          </WrapperButtonDelete>
          </Container>
        )}
    />
  )
}