import { compose, withState, withHandlers } from 'recompose'
import { login } from '../../services'

const enhance = compose(
  withState('loading', 'setLoading', false),
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    handleSubmit: ({ setLoading }) => data => {
      fetch(`${login}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "login": data.login,
          "password": data.password
        })
      })
      .then(response => {
          setLoading(response.status === 'pending' || response.status === 200 ? true : false)
          return response.json()
        })
        .then(profile => {
          localStorage.setItem('targets', [])
          localStorage.setItem('achievements', [])
          
          if (profile) {
            localStorage.removeItem('profile')
            localStorage.setItem('profile', JSON.stringify(profile))

            localStorage.removeItem('targets')
            localStorage.setItem('targets', JSON.stringify(profile.targets))

            localStorage.removeItem('achievements')
            localStorage.setItem('achievements', JSON.stringify(profile.achievements))

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
