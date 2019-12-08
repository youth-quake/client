import { login } from '../services'

const getProfile = (username, password) => {
  fetch(`${login}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "login": username,
      "password": password
    })
  })
    .then(response => response.json())
    .then(profile => {
      if (profile) {
        localStorage.removeItem('profile')
        localStorage.setItem('profile', JSON.stringify(profile))

        return true
      } else {
        localStorage.removeItem('profile')

        return false
      }
    })
    .catch(error => { return error })
}

export default getProfile
