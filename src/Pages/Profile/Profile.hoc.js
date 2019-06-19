import { compose, withState, withHandlers } from 'recompose'
import { updateMessage, update } from '../../services'
import { withFormik } from 'formik'

const data = JSON.parse(localStorage.getItem('profile'))

export const values = withFormik({
  mapPropsToValues: () => ({
    id: data.idUser,
    name: data.name,
    username: data.login,
    email: data.email,
    message: data.messageStatus,
    level: 'Nivel 81',
    friends: [{ key: 1, name: 'aushaus', username: 'ausuhash' }],
    achievements: data.AchievementUsers,
    targets: data.target.map(item => {
      return {
        key: item.idTarget,
        initialValues: {
          id: item.idTarget,
          description: item.description,
          dateEnd: item.dtEnd,
          dateStart: item.dtStart,
          percent: item.percentage,
          amount: item.value,
          title: item.name,
          totalAmount: item.valueAccumulated
        }
      }
    })
  }),
  handleSubmit: values => { }
})

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
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
    handleUpdateUser: () => (initialValues, values) => {
      fetch(`${update}/${initialValues.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": values.name,
          "login": values.username,
        })
      })
        .then(response => response.json())
    },
    handleUpdateMessageUser: () => (initialValues, values) => {
      fetch(`${updateMessage}/${initialValues.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "messageStatus": values.message || ""
        })
      })
        .then(response => response.json())
    }
  })
)

export default enhance
