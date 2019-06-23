import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { register } from '../../services'
import { login } from '../../services'

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('message', 'setMessage', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('showModal', 'setShowModal', false),
  withState('loading', 'setLoading', false),
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    handleSubmit: ({ setMessage, setShowModal, setLoading }) => data => {
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
          fetch(`${login}/${data.register.login}/${data.register.password}`)
            .then(response => {
              setLoading(((response.status === 'pending') || (response.status === 200) ) ? true : false)
              return response.json()
            })
            .then(profile => {
              if (profile) {
                localStorage.removeItem('profile')
                localStorage.setItem('profile', JSON.stringify(profile))
                window.location.pathname = '/perfil'

                return true
              } else {
                localStorage.removeItem('profile')

                return false
              }
            })
            .catch(error => { return error })

            return response.json()
        }).catch(() => {
          setMessage('Ops! Ocorreu um erro ao salvar suas informações.')
          setShowModal(true)
        })
    },
    handleChange: ({ setIsVisible, setValue, isDisabled }) => value => {
      setIsVisible(true)
      setValue(value)
      console.log()
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
