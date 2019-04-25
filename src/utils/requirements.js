const requirements = [
  { validation: value => (/^.{6,}$/).test(value), text: '6 ou mais caracteres' },
  { validation: value => (/[a-zà-û]{1,}/).test(value), text: 'um caracter especial (@*!%;:.)' },
  { validation: value => (/[A-ZÀ-Û]{1,}/).test(value), text: 'uma letra maiúscula' },
  { validation: value => (/[\d]{1,}/).test(value), text: 'um número' }
]

export default requirements