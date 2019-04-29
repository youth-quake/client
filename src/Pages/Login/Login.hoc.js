import { compose, withState, withHandlers, lifecycle } from 'recompose'

const PATH = '/'

const enhance = compose(
  withState('isDisable', 'setIsDisabled', true),
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    handleChange: ({
      setIsDisabled
    }) => () => {
      setIsDisabled(false)
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
          username: 'gabrieladelfino',
          password: 'ZAQ!2wsx'
        }
      })

      setIsDisabled(true)
    }
  })
)

export default enhance
