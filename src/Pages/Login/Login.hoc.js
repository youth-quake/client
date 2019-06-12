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
            console.log(profile)
            localStorage.setItem('profile', JSON.stringify(profile))
            window.location.href = '/perfil'
          }else{
            localStorage.setItem('profile', JSON.stringify({}))
          }

          return {}
        })
        .catch(error => { return error })
    }
  })
)

export default enhance
