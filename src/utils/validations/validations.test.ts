import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate
} from '.'

describe('validations', () => {
  describe('SignInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid', password: '123456' }

      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('SignUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = {
        username: 'a',
        email: '',
        password: '',
        confirm_password: ''
      }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: '',
        email: 'invalid',
        password: '',
        confirm_password: ''
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return error if password does not match with confirm_password', () => {
      const values = {
        username: 'Jhon Doe',
        email: 'teste@teste.com',
        password: '123456',
        confirm_password: '12'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })

  describe('forgotValidate', () => {
    it('should validate empty fields', () => {
      const values = { email: '' }

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid' }

      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('resetValidate', () => {
    it('should validate empty fields', () => {
      const values = {
        password: '',
        confirm_password: ''
      }

      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should validate confirm_password', () => {
      const values = {
        password: '123',
        confirm_password: ''
      }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm_password\\" is not allowed to be empty"`
      )
    })

    it('should validate confirm_password when different', () => {
      const values = {
        password: '123',
        confirm_password: '321'
      }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
