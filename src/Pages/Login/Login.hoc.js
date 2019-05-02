import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { login } from '../../services'

const enhance = compose(
  withState('isDisable', 'setIsDisabled', true),
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    handleChange: ({
      setIsDisabled
    }) => () => {
      setIsDisabled(false)
    },
    handleSubmit: ({ setSubmitting }) => async (data) => {
      fetch(login, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          register: {
            login: data.login,
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
