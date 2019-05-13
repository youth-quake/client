import React, { Fragment } from 'react'
import { Theme, Input } from '../../components'
import { Formik, Field } from 'formik'

export const PatrimonialSituation = ({
  ...props
}) => {

  const {
    editable
  } = props

  return (
    <Formik
      render={({
        errors,
        values
      }) => (
          <Fragment>
            <Field
              name="register.name"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Nome completo'
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
          </Fragment>
        )}
    />
  )
}