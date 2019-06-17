import { compose, withState, withHandlers, lifecycle } from 'recompose'

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('editable', 'setEditable', true),
  withState('isTarget', 'setIsTarget', false),
  withState('isAchievements', 'setIsAchievements', false),
  withState('titleButton', 'setTitleButton', 'Editar'),
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', true),
  withState('isBet', 'setIsBet', true),
  withHandlers({
    showComponent: ({
      setIsTarget,
      setIsAchievements,
      setIsBet
    }) => (value) => {
      if (value.id === 'isTarget') {
        setIsAchievements(false)
        setIsTarget(true)
        setIsBet(false)
      }
      if (value.id === 'isAchievements') {
        setIsAchievements(true)
        setIsTarget(false)
        setIsBet(false)
      }
      if (value.id === 'isBet') {
        setIsAchievements(false)
        setIsTarget(false)
        setIsBet(true)
      }
    }
    ,
    toggleVisible: ({ visible, setVisible }) => () => {
      setVisible(!visible)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    handleSetInitialValues: ({ setInitialValues }) => () => {
      const data = JSON.parse(localStorage.getItem('profile'))

      const register = {
        name: data.name,
        username: data.login,
        email: data.email,
        message: 'Sou apaixonada por tecnologia e livros. Adoro palavras cruzadas e meu sonho é viajar para a Disney.',
        level: 'Nivel 81',
        friends: [{ key: 1, name: 'aushaus', username: 'ausuhash' }],
        achievements: data.AchievementUsers,
        targets: data.target.map(item => {
          const target = {
            key: item.idTarget,
            initialValues: {
              description: item.description,
              dateEnd: item.dtEnd,
              dateStart: item.dtStart,
              percent: item.percentage,
              amount: item.value,
              title: item.name,
              totalAmount: item.valueAccumulated
            }
          }

          return target
        })
      }

      setInitialValues(register)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { handleSetInitialValues } = this.props
      handleSetInitialValues()
    }
  })
)

export default enhance