import { compose, withState, withHandlers } from 'recompose'
import { action } from '../../services'

const enhance = compose(
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', false),
  withHandlers({
    toggleVisible: ({ visible, setVisible }) => () => {
      setVisible(!visible)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    submitAction: () => values => {
      fetch(action, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "nameActionUser": values.action,
          "quantity": values.quantity
        })
      })
        .then(response => response.json())
        .then(json => console.log(json))
    }
  })
)

export default enhance