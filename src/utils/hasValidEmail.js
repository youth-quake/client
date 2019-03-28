const hasValidEmail = value => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/gi
    return regex.test(value)
}

export default hasValidEmail
