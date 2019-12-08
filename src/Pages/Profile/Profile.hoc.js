import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { update } from '../../services'
import { withFormik } from 'formik'
import getPhoto from '../../utils/getPhoto'

let data = JSON.parse(localStorage.getItem('profile'))

const targets = data.targets
const achievements = data.achievements

export let values = withFormik({
  mapPropsToValues: () => ({
    id: data.idUser,
    firstAcess: data.firstAcess,
    name: data.name,
    username: data.login,
    email: data.email,
    messageStatus: data.messageStatus,
    level: data.level,
    userPicture: getPhoto(),
    picture: data.picture,
    password: data.password
  })
})

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('photo', 'setPhoto', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('isTarget', 'setIsTarget', false),
  withState('isAchievements', 'setIsAchievements', true),
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', true),
  withState('showPhotos', 'setShowPhotos', false),
  withState('isBet', 'setIsBet', false),
  withState('targets', 'setTargets', targets),
  withState('achievements', 'setAchievements', achievements),
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
      fetch(`${update}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "idUser": initialValues.id,
          "name": values.name,
          "email": values.email,
          "messageStatus": values.messageStatus,
          "picture": initialValues.picture
        })
      }).then(response => {
         return response.json()
      })
      .then(information => {
        localStorage.removeItem('profile')
        localStorage.setItem('profile', JSON.stringify(information))
      })
    }}),
  lifecycle({
    componentDidMount() {
      const { setShowModal } = this.props
      
      data = JSON.parse(localStorage.getItem('profile'))
      
      values = withFormik({
        mapPropsToValues: () => ({
          id: data.idUser,
          name: data.name,
          username: data.login,
          firstAcess: data.firstAcess,
          email: data.email,
          messageStatus: data.messageStatus,
          level: data.level,
          userPicture: getPhoto(),
          picture: data.picture,
          password: data.password
        })
      })

      if (data.movements.length > 0) {
        setShowModal(false)
      }
    },
  })
)

export default enhance
