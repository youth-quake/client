const requirements = [
  { key: 1, validation: value => (/^.{6,}$/).test(value), text: '6 ou mais caracteres' },
  { key: 2, validation: value => (/[a-zà-û]{1,}/).test(value), text: 'um caracter especial (@*!%;:.)' },
  { key: 3, validation: value => (/[A-ZÀ-Û]{1,}/).test(value), text: 'uma letra maiúscula' },
  { key: 4, validation: value => (/[\d]{1,}/).test(value), text: 'um número' }
]

export default requirements