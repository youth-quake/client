import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { register } from '../../services'

const isValid = (value, requirements) => { 
  requirements.reduce((isValid, { validation }) => {
    if (isValid) return validation(value)

    return isValid
  }, true)
}

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
      value
    }) => requirements => {
      setIsVisible(true)
      setValue(value)
      setIsDisabled(isValid(value, requirements))
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
