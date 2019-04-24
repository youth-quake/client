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
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    handleChange: ({ 
      setIsVisible, 
      setValue, 
      isDisabled, 
      setIsValid 
    }) => (value, requirements) => {
      setIsVisible(isDisabled)
      setValue(value)
      setIsValid(valid(value, requirements))
    }
  })
)

export default enhance