import { compose, withState, withHandlers, lifecycle } from 'recompose'

const PATH = '/'

const valid = (value, requirements) => {
  requirements.reduce((isValid, { validation }) => {
    if (isValid) {
      return validation(value)
    }

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
      isDisabled,
      setIsValid,
      setIsDisabled,
      initialValues
    }) => (value, requirements) => {
      setIsVisible(true)
      setValue(value)
      setIsDisabled(valid(value, requirements))
      console.log('aaaaaaaaaa')

    },
    handleSubmit: ({ initialValues, setSubmitting }) => () => {
      fetch(PATH, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          initialValues
        }
      })

      setSubmitting(false)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { setInitialValues, setIsDisabled } = this.props

      setInitialValues({
        register: {
          name: 'Gabriela Garcia Delfino',
          username: 'gabrieladelfino',
          email: 'email@exemplo.com',
          confirmEmail: 'email@exemplo.com',
          password: 'ZAQ!2wsx'
        }
      })

      setIsDisabled(true)
    }
  })
)

export default enhance
