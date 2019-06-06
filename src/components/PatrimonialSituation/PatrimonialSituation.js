import React, { Fragment } from 'react'
import { Theme, Input, Select } from '../../components'
import { Formik, Field } from 'formik'

export const PatrimonialSituation = ({
  ...props
}) => {

  const {
    editable,
    options
  } = props

  return (
    <Formik
      render={({
        errors,
        values
      }) => (
          <Fragment>
            <h3>Meu primeiro objetivo</h3>
            <Field
              name="register.name"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Renda total'
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
            <Field
              name="register.categoria"
              render={({ field }) => (
                <Select
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Renda total'
                  disabled={editable}
                  errors={errors}
                >
                  {options.map(item => (
                    <option key={item.key}>{item.description}</option>
                  ))}
                </Select>
              )}
            />
          </Fragment>
        )}
    />
  )
}