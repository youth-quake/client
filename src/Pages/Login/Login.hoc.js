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
    handleSubmit: ({ setIsDisabled }) => async data => {
      fetch(`${login}/${data.register.login}+${data.register.password}`)
      .then(response => {
        if(response.ok) { 
          return response.json() 
        } 

        return response.error
      })
      .catch(error => { setIsDisabled(true) })
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
