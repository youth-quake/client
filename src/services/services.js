const BASE = 'http://serviceyouthquake.azurewebsites.net'
const MICRO_SERVICE = 'microserviceyouthquake.azurewebsites.net'

export const register = `${BASE}/include`
export const login = `${BASE}/login`
export const profile = `${BASE}/profile`
export const target = `${BASE}/target/include`
export const alterRegister = `${BASE}/user/update`
export const newBet = `${BASE}/bet/include`
export const friend = `${BASE}/friend`
export const movements = `${BASE}/movements/include`
export const downloadCsv = `${MICRO_SERVICE}/target/download`