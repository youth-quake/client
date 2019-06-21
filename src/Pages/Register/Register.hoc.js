import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { register } from '../../services'
import getProfile from '../../utils/getProfile'

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('message', 'setMessage', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('showModal', 'setShowModal', false),
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    handleChange: ({
      setValue,
    }) => value => {
      setValue(value)
    },
    handleSubmit: ({ setMessage, setShowModal }) => data => {
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
        .then(response => {
          response.json()
          getProfile(data.register.login, data.register.password)
        }).catch(() => {
          setMessage('Ops! Ocorreu um erro ao salvar suas informações.')
          setShowModal(true)
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
