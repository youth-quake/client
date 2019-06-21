import { compose, withState, withHandlers } from 'recompose'
import getProfile from '../../utils/getProfile'

const enhance = compose(
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    handleChange: ({
      setIsDisabled
    }) => () => {
      setIsDisabled(false)
    },
    handleSubmit: () => async (data) => {
      getProfile(data.login.login, data.login.password)
    }
  })
)

export default enhance
