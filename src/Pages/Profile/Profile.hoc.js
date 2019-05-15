import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { withFormik } from 'formik'
import iconProfileMini from '../../assets/img/girl mini.png'

const friends = [
  { key: 11, name: 'Maria', nickname: '@maria', img: iconProfileMini },
  { key: 12, name: 'Giuliana', nickname: '@giuliana', img: iconProfileMini },
  { key: 13, name: 'Livia', nickname: '@livia', img: iconProfileMini },
  { key: 14, name: 'Gabi', nickname: '@gabi', img: iconProfileMini },
  { key: 15, name: 'Alessandra', nickname: '@alessandra', img: iconProfileMini },
  { key: 16, name: 'Ricardo', nickname: '@ricardo', img: iconProfileMini },
  { key: 17, name: 'José', nickname: '@jose', img: iconProfileMini },
  { key: 18, name: 'João', nickname: '@joao', img: iconProfileMini }
]

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
    key: 32,
    initialValues: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet consectetur dui. Sed venenatis at purus vel suscipit. Aenean luctus tellus vehicula quam luctus rhoncus. Praesent venenatis sem nunc, laoreet euismod risus luctus ut. ',
      dateEnd: '10/09/2020',
      dateStart: '11/09/2020',
      percent: 10.2,
      amount: 'R$ 10.000,00',
      title: 'Comprar uma casa'
    }
  },
  {
    key: 31,
    initialValues: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet consectetur dui. Sed venenatis at purus vel suscipit. Aenean luctus tellus vehicula quam luctus rhoncus. Praesent venenatis sem nunc, laoreet euismod risus luctus ut. ',
      dateEnd: '15/05/2020',
      dateStart: '21/10/2020',
      percent: 99.2,
      amount: 'R$ 100.000,00',
      title: 'Comprar um carro'
    }
  }
]

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
  withState('titleButton', 'setTitleButton', 'Editar'),
  withState('friends', 'setFriends', friends),
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', true),
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
    toggleVisible: ({ visible, setVisible }) => () => {
      setVisible(!visible)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
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