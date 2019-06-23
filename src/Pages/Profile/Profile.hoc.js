import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { updateMessage, update } from '../../services'
import { withFormik } from 'formik'
import getProfile from '../../utils/getProfile'
import getPhoto from '../../utils/getPhoto'

let data = JSON.parse(localStorage.getItem('profile'))

export let values = withFormik({
  mapPropsToValues: () => ({
    id: data.idUser,
    name: data.name,
    username: data.login,
    email: data.email,
    message: data.messageStatus,
    level: data.level,
    userPicture: getPhoto(),
    picture: data.picture,
    achievements: data.achievementUsers,
    password: data.password,
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
  })
})

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('photo', 'setPhoto', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('editable', 'setEditable', true),
  withState('isTarget', 'setIsTarget', false),
  withState('isAchievements', 'setIsAchievements', true),
  withState('titleButton', 'setTitleButton', 'Editar'),
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', true),
  withState('showPhotos', 'setShowPhotos', false),
  withState('isBet', 'setIsBet', false),
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
    togglePhotos: ({ showPhotos, setShowPhotos }) => () => {
      setShowPhotos(!showPhotos)
    },
    handleUpdateUser: () => (initialValues, values) => {
      fetch(`${update}/${initialValues.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": values.name,
          "login": initialValues.username,
          "email": initialValues.email,
          "password": initialValues.password,
          "statusMessage": initialValues.statusMessage
        })
      }).then(response => {
        response.json()
        getProfile(initialValues.username, initialValues.password)
      })
    },
    handleUpdateMessageUser: () => (initialValues, values) => {
      fetch(`${updateMessage}/${initialValues.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "messageStatus": values.message || ""
        })
      })
        .then(response => {
          response.json()
          getProfile(initialValues.username, initialValues.password)
        })
    }
  }),
  lifecycle({
    componentWillUnmount() {
      data = JSON.parse(localStorage.getItem('profile'))

      values = withFormik({
        mapPropsToValues: () => ({
          id: data.idUser,
          name: data.name,
          username: data.login,
          email: data.email,
          message: data.messageStatus,
          level: data.level,
          userPicture: getPhoto(),
          picture: data.picture,
          achievements: data.achievementUsers,
          password: data.password,
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
        })
      })
    },
    componentDidMount() {
      const { setShowModal } = this.props

      data = JSON.parse(localStorage.getItem('profile'))

      values = withFormik({
        mapPropsToValues: () => ({
          id: data.idUser,
          name: data.name,
          username: data.login,
          email: data.email,
          message: data.messageStatus,
          level: data.level,
          userPicture: getPhoto(),
          picture: data.picture,
          achievements: data.achievementUsers,
          password: data.password,
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
        })
      })

      if (data.movements.length > 0) {
        setShowModal(false)
      }
    }
  })
)

export default enhance
