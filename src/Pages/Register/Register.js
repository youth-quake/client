import React from 'react'
import { Button, Input, Anchor, Requirements } from '../../components'
import { Form, Wrapper, Logo, Password } from './Register.style'
import requirements from '../../utils/requirements'
import youthquake from '../../assets/img/youthquake.png'

const Register = ({
  value, 
  isVisible, 
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable
}) => (
  <Form>
    <Wrapper>
      <Logo src={youthquake}/> 
      <Input placeholder='Apelido' />
      <Input placeholder='E-mail' />
      <Password>
        <Input 
          type='password'
          placeholder='Senha' 
          onChange={e => handleChange(e.target.value, requirements)}
          onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
        />
        <Requirements
          value={value}
          title={'Sua senha deve ter:'}
          warning={'Evite senhas utilizadas em outros sites, ou que sejam fáceis de descobrir.'}
          visible={isVisible}
          requirements={requirements}
          onChange={handleRequirements}
        />
      </Password>
      <Button>Register</Button>
      <Anchor 
        text='Já possui uma conta?'
        description='Entre agora mesmo'
        to='/login'
      />
    </Wrapper>
  </Form>
)


export default Register
