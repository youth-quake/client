export const date = value => {
  value = value.replace(/\D/g, "")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")

  return value
}

export const moneyFormat = number => `R$ ${number
  .toFixed(2)
  .replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
  .replace(/\.(\d{2})$/, ',$1')}`

const onlyNumber = (value = '') => (value || '').replace(/[^\d]/g, '')

export const amount = (value = '') => {
  const number = onlyNumber(value)
  const onlyNums = parseInt(number.length >= 1 ? number : 0, 10)

  const currency = parseFloat(onlyNums / (10 ** 2)).toFixed(2).split('.')
  const cents = currency[1]
  const integer = currency[0]

  const realValue = integer
    .split('')
    .reverse()
    .join('')
    .replace(/(.{3})/g, '$1.')
    .split('')
    .reverse()
    .join('')
    .replace(/^\./, '')

  return `R$ ${realValue},${cents}`
}

export default amount
