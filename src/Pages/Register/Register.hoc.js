import { compose, withState, withHandlers } from 'recompose'

const valid = (value, requirements) => {
  requirements.reduce((isValid, { validation }) => {
    if (isValid) {
      return validation(value)
    }

    return isValid
  }, true)
}

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isDisable', 'setIsDisabled', true),
  withState('values', 'setValues', [{}]),
  withHandlers({
    handleChange: ({
      setIsVisible,
      setValue,
      isDisabled,
      setIsValid,
      setIsDisabled
    }) => (value, requirements) => {
      setIsVisible(true)
      setValue(value)
      setIsDisabled(valid(value, requirements))
    },
    handleSubmit: ({ values }) => () => {
      fetch('/', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: {
          values
        }
       });
    }
  })
)

export default enhance
