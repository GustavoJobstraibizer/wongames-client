/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill the email input and receive a success message', () => {
    const email = 'gustavojobs.dev@gmail.com'

    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq(email)
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type(email)
    cy.findByRole('button', { name: /send email/i }).click()

    cy.findByText(/You just received an email/i).should('exist')
  })

  it('should fill the email input with an invalid email and receive an error', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('message-error@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.findByText(/This email does not exist/i).should('exist')
  })
})
