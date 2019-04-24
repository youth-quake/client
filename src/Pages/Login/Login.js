import React from 'react'
import { Title, Button, Input, Anchor, Password, Requirements } from '../../components'
import { Form, Wrapper, WrapperRequirements } from './Login.style'

const requirements = [
  { key: 1, validation: value => (/^.{6,}$/).test(value), text: '6 ou mais caracteres' },
  { key: 2, validation: value => (/[a-zà-û]{1,}/).test(value), text: 'um caracter especial (@*!%;:.)' },
  { key: 3, validation: value => (/[A-ZÀ-Û]{1,}/).test(value), text: 'uma letra maiúscula' },
  { key: 4, validation: value => (/[a-zà-û]{1,}/).test(value), text: 'uma letra minúscula' }
]



const Login = ({
  value, 
  isVisible, 
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable
}) => (
  <Form>
    <Wrapper>
      <Title>Youthquake</Title>
      <Input placeholder='Login' />
      <Password 
        placeholder='Senha' 
        onChange={e => handleChange(e.target.value, requirements)}
          onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
      />
      <WrapperRequirements>
        <Requirements
          value={value}
          title={'Sua senha deve ter:'}
          warning={'Evite senhas utilizadas em outros sites, ou que sejam fáceis de descobrir.'}
          visible={isVisible}
          requirements={requirements}
          onChange={handleRequirements}
        />
      </WrapperRequirements>
      <Button disable={isDisable}>Login</Button>
      <Anchor 
        text='Não tem sua conta ainda?'
        description='Cadastre-se'
        to='/cadastro'
      />
    </Wrapper>
  </Form>
)


export default Login
