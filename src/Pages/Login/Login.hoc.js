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
    handleSubmit: () => async (data) => {
      fetch(`${login}/${data.register.login}/${data.register.password}`)
        .then(response => response.json())
        .then(json => {
          if (json) {
            console.log('logou')
          }else{
            console.log('erro')
          }

          return json
        })
        .catch(error => { return error })
    }
  })
)

export default enhance
