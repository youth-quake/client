import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { withFormik } from 'formik'
import { getProfile } from '../../services'


const achievements = [
  { title: 'Apostador', description: 'Criou 10 novas apostas' },
  { title: 'Visionário', description: 'Previu 5 categorias' },
  { title: 'Ganhador', description: 'Ganhou 10 apostas' },
  { title: 'Triste', description: 'Chorou por 10 horas' },
  { title: 'Popular', description: 'Adicionou 15 amigos' },
  { title: 'Economista', description: 'Guardou R$ 500,00' },
  { title: 'Pensador', description: 'Leu mais de 13 livros' }
]

const targets = [
  {
    title: 'Comprar um pão',
    description: 'Comprar um pão daora pra tomar café',
    percent: 10.5,
    start: '06/05/2019',
    end: '21/03/2020',
    amount: '100.000,95'
  },
  {
    title: 'Comprar outro pão',
    description: 'Comprar mais um pão daora pra tomar café Comprar mais um pão daora pra tomar café Comprar mais um pão daora pra tomar café Comprar mais um pão daora pra tomar café',
    percent: 17.8,
    start: '06/05/2019',
    end: '21/03/2020',
    amount: '1.000,95'
  }
]

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
  withState('targets', 'setTargets', targets),
  withState('achievements', 'setAchievements', achievements),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('editable', 'setEditable', true),
  withState('isTarget', 'setIsTarget', true),
  withState('isAchievements', 'setIsAchievements', false),
  withHandlers({
    showComponent: ({ 
      setIsTarget, 
      setIsAchievements, 
      isTarget, 
      isAchievements
    }) => () => {
      setIsTarget(!isTarget)
      setIsAchievements(!isAchievements)
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