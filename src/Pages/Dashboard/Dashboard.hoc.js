import { compose, withState, withHandlers, lifecycle } from 'recompose'

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      fetch('http://demo2803150.mockable.io/profile')
        .then(response => response.json())
        .then(data => {
          console.log("moviments", data)
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
                value: item.value
              }

              return line
            })
          }

          return setInitialValues(moviments)
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


