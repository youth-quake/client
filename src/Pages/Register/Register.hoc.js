import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { register } from '../../services'
import * as Yup from 'yup'
import { withFormik } from 'formik'

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
    handleSubmit: ({ setSubmitting }) => data => {
      fetch(register, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          register: {
            name: data.name,
            username: data.username,
            email: data.email,
            confirmEmail: data.confirmEmail,
            password: data.password
          }
        }
      })

      setSubmitting(false)
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
