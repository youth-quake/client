import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  
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
  & > input {
    margin-left: 20px;
  }
  & > div {
    float: left;
    margin: -5px;
  }
`

const WrapperLabel = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  float: left;
`

const WrapperInput = styled.div`
  width: 400px;
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
  margin-top: 30px;

  & > button {
  width: 180px;
}
`

const WrapperButtonDelete = styled.div`
& > button {
  width: 120px;
  position: absolute;
  bottom: 60px;
  left: 5px;
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
            <div>
            <Title>Usuário e E-mail</Title>
            <Line/>
            </div>
              <Wrapper>
              <WrapperLabel>
                  <LabelInput>Nome de usuário:</LabelInput>  
              </WrapperLabel>
              <WrapperInput>
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
              <WrapperLabel>
              <LabelInput>Email:</LabelInput>
              </WrapperLabel>
              <WrapperInput>   
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
            <div>
            <Title>Altere sua senha</Title>
            <Line/>
            </div>
            <Wrapper>
            <WrapperLabel>
            <LabelInput>Senha atual:</LabelInput>     
            </WrapperLabel>
            <WrapperInput>
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
            <WrapperLabel>
            <LabelInput>Nova senha:</LabelInput>     
            </WrapperLabel>
            <WrapperInput>
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
            <WrapperLabel>
            <LabelInput>Confirme a senha:</LabelInput>       
            </WrapperLabel>
            <WrapperInput>
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
          backgroundColor={Theme.colors.constrast_color}
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