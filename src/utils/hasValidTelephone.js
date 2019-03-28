const hasValidTelphone = value => {
    
    const onlyNumbers = /[^0-9]/
    value.replace(onlyNumbers, '') 

    const mask = /\(\d\)\d{5}-\d{4}/gi
    value = value.replace(mask)
}