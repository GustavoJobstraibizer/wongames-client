import { ErrorOutline, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormError, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FieldErrors, resetValidate } from 'utils/validations'

const FormResetPassword = () => {
  const routes = useRouter()
  const { query } = routes

  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            password: values.password,
            passwordConfirmation: values.confirm_password,
            code: query.code
          })
        }
      )

      const data = await response.json()

      if (data?.error) {
        setFormError(data?.message[0].messages[0].message)
        return
      }

      signIn('credentials', {
        email: data?.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleInput = (field: string, value: string | undefined) => {
    setValues((previousValue) => ({ ...previousValue, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => handleInput('password', v)}
          error={fieldError?.password}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => handleInput('confirm_password', v)}
          error={fieldError?.confirm_password}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : 'Reset Password'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
