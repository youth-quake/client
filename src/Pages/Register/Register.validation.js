import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Campo obrigatório')
    .min(5, 'O nome deve conter no minimo 5 letras')
    .max(100, 'O nome deve conter no maximo 100 letras'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Formato de email invalido')
})

export default validationSchema