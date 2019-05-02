import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { withFormik } from 'formik'
import { getProfile } from '../../services'

const request = new Request(getProfile, {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
});

const getProfileInformation = () => {
  fetch(request).then(response => {
    return response.json().then(json => {
      console.log(json)
      return json
    })
  })
}

export const showInformation = withFormik({
  mapPropsToValues: data => ({
    register: {
      name: data.name,
      username: data.username,
      email: data.email,
      confirmEmail: data.confirmEmail,
      password: data.password
    }
  })
})

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    showObjetives: () => () => {
      document.getElementById('conquistas').style.display = 'none';
      document.getElementById('objetivos').style.display = 'inline';
    },
    showAchievements: () => () => {
      document.getElementById('objetivos').style.display = 'none';
      document.getElementById('conquistas').style.display = 'inline';
    },
  }),
  lifecycle({
    componentDidMount() {
      const { setIsDisabled } = this.props
      setIsDisabled(true)

      const data = getProfileInformation()
      showInformation(data)
    }
  })
)

export default enhance