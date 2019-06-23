import { login } from '../services'

const getProfile = (username, password) => {
  fetch(`${login}/${username}/${password}`)
    .then(response => response.json())
    .then(profile => {
      if (profile) {
        localStorage.removeItem('profile')
        localStorage.setItem('profile', JSON.stringify(profile))

        const location = window.location.pathname
        if (location === '/login' || window.location.pathname === '/cadastro') {
          window.location.pathname = '/perfil'
        }

        return true
      } else {
        localStorage.removeItem('profile')

        return false
      }
    })
    .catch(error => { return error })
}

export default getProfile
