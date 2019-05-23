import { compose, withState, withHandlers } from 'recompose'
import { login } from '../../services'

const enhance = compose(
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    handleChange: ({
      setIsDisabled
    }) => () => {
      setIsDisabled(false)
    },
    handleSubmit: ({ setIsDisabled }) => async data => {
      fetch(login, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "login": data.login.login,
          "password": data.register.password
        })
      })
    }
  })
)

export default enhance
