import { compose, withState, withHandlers, lifecycle } from 'recompose'

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withState('showModal', 'setShowModal', false),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      fetch('http://demo2803150.mockable.io/profile')
        .then(response => response.json())
        .then(data => {
          const moviments = {
            description: data.moviments.description,
            firstTarget: data.moviments.firstTarget,
            lastTarget: data.moviments.lastTarget,
            progress: data.moviments.progress,
            moviment: data.moviments.values.map(item => {
              const line = {
                title: item.title,
                value: item.value
              }

              return line
            }),
            category: data.moviments.category.map(item => {
              const line = {
                title: item.title,
                value: `${item.value}%`
              }

              return line
            })
          }

          return setInitialValues(moviments)
        }).catch(error => error)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
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


