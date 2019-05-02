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
  mapPropsToValues: () => ({
    register: {
      name: 'Gabriela Garcia Delfino',
      username: '@gabrieladelfino',
      email: 'gabriela.delfino@outlook.com.br',
      message: `Procurando novos desafios para sair da zona de conforto e entrar de vez no mundo dos investimentos. Adoro apostas, jogos e livros.`,
      level: 'Nível 55'
    }
  })
})

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('editable', 'setEditable', true),
  withHandlers({
    showObjetives: () => () => {
      
    },
    showAchievements: () => () => {
     
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