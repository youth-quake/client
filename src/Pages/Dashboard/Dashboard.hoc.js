import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { downloadCsv } from '../../services'

import { getMovements } from '../../services'

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', false),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      const profile = JSON.parse(localStorage.getItem('profile'))

      fetch(`${getMovements}/${profile.idUser}`)
        .then(response => response.json())
        .then(data => {
          let total = 0

          data.forEach(item => {
            total += item.value
          })
        

          const moviments = {
            firstTarget: '22/06/2019',
            lastTarget: '22/06/2019',
            progress: 90,
            movements: data.map(item => {
              const line = {
                description: item.description,
                date: item.date,
                value: item.value,
                type: item.type
              }

              return line
            }),
            category: [
              {
                value: total,
                title: '$$$ acumulado'
              },
              {
                value: data[0].value,
                title: 'Poupança'
              },
              {
                value: data[1].value,
                title: 'Investimentos'
              },
              {
                value: data[2].value,
                title: 'Renda mensal'
              }
            ]
          }

          return setInitialValues(moviments)
        }).catch(error => error)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    toggleVisible: ({ visible, setVisible }) => () => {
      setVisible(!visible)
    },
    downloadCsv: ({ initialValues }) => () => {
      fetch(`${downloadCsv}/${initialValues.id}`)
        .catch(error => { return error })
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


