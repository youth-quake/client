import photos from './photos'

const random = Math.floor(Math.random() * 23)

export const getPhoto = () => photos[random]

export default getPhoto