import { compose, withState, withHandlers } from 'recompose'
import { login } from '../../services'

const enhance = compose(
  withState('loading', 'setLoading', false),
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    handleSubmit: ({ setLoading }) => data => {
      fetch(`${login}/${data.login}/${data.password}`)
        .then(response => {
          setLoading(response.status === 'pending' || response.status === 200 ? true : false)
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
    }
  })
)

export default enhance
