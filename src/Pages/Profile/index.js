import Profile from './Profile'
import enhance, { showInformation } from './Profile.hoc'

export default enhance(showInformation(Profile))