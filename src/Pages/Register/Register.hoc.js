import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { register } from '../../services'
import * as Yup from 'yup'

const valid = (value, requirements) => {
  requirements.reduce((isValid, { validation }) => {
    if (isValid) {
      return validation(value)
    }

    return isValid
  }, true)
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Campo obrigatório')
    .min(5, 'O nome deve conter no minimo 5 letras')
    .max(100, 'O nome deve conter no maximo 100 letras'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Formato de email invalido')
})

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    handleChange: ({
      setIsVisible,
      setValue,
      setIsDisabled,
    }) => (value, requirements) => {
      setIsVisible(true)
      setValue(value)
      setIsDisabled(valid(value, requirements))
    },
    handleSubmit: () => async data => {
      fetch(register, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": data.register.name,
          "username": data.register.username,
          "email": data.register.email,
          "confirmEmail": data.register.confirmEmail,
          "password": data.register.password
        })
      })
    }
  }),
  lifecycle({
    componentDidMount() {
      const { setIsDisabled } = this.props
      setIsDisabled(true)
    }
  })
)

export default enhance
