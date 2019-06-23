export const date = value => {
  value = value.replace(/\D/g, "")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")

  return value
}

export const amount = value => {
  value = value.replace(/\D/g, "") 
  value = value.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/, "$1.$2");
  value = value.replace(/(\d)(\d{2})$/, "$1.$2") 
  
  return `R$ ${value}`
}

export default date