import photos from './photos'

const random = Math.floor(Math.random() * 23)

export const getPhoto = () => {
  const profile = JSON.parse(localStorage.getItem('profile'))

  if (profile.picture === null) {
    return photos[random]
  }

  return localStorage.getItem('iconUser')
}

export default getPhoto