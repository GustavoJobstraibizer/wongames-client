import {
  CheckCircleOutline,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import {
  FormError,
  FormLoading,
  FormSuccess,
  FormWrapper
} from 'components/Form'
import TextField from 'components/TextField'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FieldErrors, forgotValidate } from 'utils/validations'

const FormForgotPassword = () => {
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const { query } = useRouter()

  const [values, setValues] = useState({
    email: (query.email as string) || ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/forgot-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }
      )

      const data = await response.json()

      if (data?.error) {
        setFormError(data?.message[0].messages[0].message)
        return
      }

      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  const handleInput = (field: string, value: string | undefined) => {
    setValues((previousValue) => ({ ...previousValue, [field]: value }))
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email with a link to reset your password.
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline />
              {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="email"
              icon={<Email />}
              onInputChange={(v) => handleInput('email', v)}
              error={fieldError?.email}
              initialValue={query.email as string}
            />

            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : 'Send email'}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
