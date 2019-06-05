import { compose, withState, withHandlers, lifecycle } from 'recompose'

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('editable', 'setEditable', true),
  withState('isTarget', 'setIsTarget', true),
  withState('isAchievements', 'setIsAchievements', false),
  withState('titleButton', 'setTitleButton', 'Editar'),
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
    },
    handleSetInitialValues: ({ setInitialValues }) => () => {
      fetch('http://demo2803150.mockable.io/profile')
        .then(response => response.json())
        .then(data => {
          const register = {
            name: data.name,
            username: data.login,
            email: data.email,
            message: data.about,
            level: data.level,
            achievements: data.achievements,
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

          return setInitialValues(register)
        }).catch(error => console.log(error))
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