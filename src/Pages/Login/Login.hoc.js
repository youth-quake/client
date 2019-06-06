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
      fetch(`${login}/${data.register.login}/${data.register.password}`)
      .then(response => {
        if(response.ok) {
          setIsDisabled(true)
          return response.json() 
        } 
 
        return response.error
      })
      .catch(error => { return error })   
    }
  })
)

export default enhance
