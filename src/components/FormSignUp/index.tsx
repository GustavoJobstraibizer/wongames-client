import { useMutation } from '@apollo/client'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signin } from 'next-auth/client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [values, setValues] = useState<
    UsersPermissionsRegisterInput & { confirm_password: string }
  >({
    email: '',
    password: '',
    username: '',
    confirm_password: ''
  })
  const [loading, setLoading] = useState(false)

  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [createUser] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: (data) => {
      data &&
        signin('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    try {
      await createUser({
        variables: {
          input: {
            email: values.email,
            username: values.username,
            password: values.password
          }
        }
      })
    } catch (e) {
      console.error(e)
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
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          onInputChange={(v) => handleInput('username', v)}
          error={fieldError?.username}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(v) => handleInput('email', v)}
          error={fieldError?.email}
        />
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
          {loading ? <FormLoading /> : 'Sign up now'}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
