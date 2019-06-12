import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { register } from '../../services'

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    handleChange: ({
      setValue,
    }) => value => {
      setValue(value)
    },
    handleSubmit: () => async data => {
      fetch(register, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": data.register.name,
          "login": data.register.login,
          "email": data.register.email,
          "password": data.register.password
        })
      })
      .then(response => response.json())
      .then(json => {
        if(json){
          
        } else {
          
        }
      })
    },
    handleRequirements: ({ setIsDisabled }) => (requirements, value) => {
      requirements.reduce((isValid, { validation }) => {
        if (isValid) {
          return validation(value)
        }

        return isValid
      }, true)
    },
  }),
  lifecycle({
    componentDidMount() {
      const { setIsDisabled } = this.props
      setIsDisabled(true)
    }
  })
)

export default enhance
