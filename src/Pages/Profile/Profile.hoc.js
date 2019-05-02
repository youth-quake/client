import { compose, withState, withHandlers } from 'recompose'

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('isVisible', 'setIsVisible', false),
  withState('isValid', 'setIsValid', false),
  withState('isDisable', 'setIsDisabled', true),
  withHandlers({
    showObjetives: () => () => {
      console.log("AAAA");
      document.getElementById("conquistas").style.display = "none";
      document.getElementById("objetivos").style.display = "inline";
    },
    showAchievements: () => () => {
      console.log("BBBB");
      document.getElementById("objetivos").style.display = "none";
      document.getElementById("conquistas").style.display = "inline";
    },
  })
)

export default enhance