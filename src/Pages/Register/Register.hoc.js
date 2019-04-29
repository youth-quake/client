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

    },
    handleSubmit: ({ initialValues }) => () => {
      fetch(PATH, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          initialValues
        }
      })

      console.log('>>>', initialValues)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { setInitialValues } = this.props

      setInitialValues({
        register: {
          name: 'Gabriela Garcia Delfino',
          username: 'gabrieladelfino',
          email: 'email@exemplo.com',
          confirmEmail: 'email@exemplo.com',
          password: 'ZAQ!2wsx'
        }
      })
    }
  })
)

export default enhance
