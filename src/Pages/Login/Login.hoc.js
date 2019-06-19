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
      fetch(`${login}/${data.login.login}/${data.login.password}`)
        .then(response => response.json())
        .then(profile => {
          if (profile) {
            localStorage.setItem('profile', JSON.stringify(profile))
            window.location.href = '/perfil'
          }else{
            localStorage.setItem('profile', JSON.stringify({}))
          }

          console.log('perfil', profile)
          return {}
        })
        .catch(error => { return error })
    }
  })
)

export default enhance
