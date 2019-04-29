import { compose, withState, withHandlers } from 'recompose'

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    
  })
)

export default enhance