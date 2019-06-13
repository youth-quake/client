import { compose, withState, withHandlers } from 'recompose'

const enhance = compose(
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', false),
  withHandlers({
    toggleVisible: ({ visible, setVisible }) => () => {
      setVisible(!visible)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    }
  })
)

export default enhance