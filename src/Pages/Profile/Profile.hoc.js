import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { withFormik } from 'formik'
import { getProfile } from '../../services'


const achievements = [
  { key: 11, title: 'Apostador', description: 'Criou 10 novas apostas' },
  { key: 22, title: 'Visionário', description: 'Previu 5 categorias' },
  { key: 33, title: 'Ganhador', description: 'Ganhou 10 apostas' },
  { key: 44, title: 'Triste', description: 'Chorou por 10 horas' },
  { key: 55, title: 'Popular', description: 'Adicionou 15 amigos' },
  { key: 66, title: 'Economista', description: 'Guardou R$ 500,00' },
  { key: 77, title: 'Pensador', description: 'Leu mais de 13 livros' }
]

const targets = [
  {
    key: 31,
    title: 'Titulo do objetivo',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor, est at pharetra sollicitudin, eros nulla ultricies sapien, eget placerat magna enim at urna. In hac habitasse platea dictumst.`,
    percent: 10.5,
    start: '06/05/2019',
    end: '21/03/2020',
    amount: '100.000,95'
  },
  {
    key: 32,
    title: 'Titulo do objetivo',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor, est at pharetra sollicitudin, eros nulla ultricies sapien, eget placerat magna enim at urna. In hac habitasse platea dictumst.`,
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
  withState('isTarget', 'setIsTarget', false),
  withState('isAchievements', 'setIsAchievements', true),
  withState('titleButton', 'setTitleButton', 'Editar'),
  withHandlers({
    showComponent: ({ 
      setIsTarget, 
      setIsAchievements, 
      isTarget, 
      isAchievements
    }) => () => {
      setIsTarget(!isTarget)
      setIsAchievements(!isAchievements)
    },
    handleChange: ({ 
      setEditable, 
      setTitleButton, 
      editable, 
      titleButton 
    }) => () => {
      setTitleButton(titleButton === 'Salvar' ? 'Editar' : 'Salvar')
      setEditable(!editable)
      console.log(editable)
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