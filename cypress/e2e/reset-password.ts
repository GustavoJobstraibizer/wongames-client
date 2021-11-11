/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=1234')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('1234')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('should show error if code is no valid', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorret code provided'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=1234')
    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/Incorret code provided/i).should('exist')
  })

  it('should fill the form and redirect to the home page with the user logged', () => {
    cy.intercept('POST', '**/auth/reset-password', {
      status: 200,
      body: { user: { email: 'user@email.com' } }
    })

    cy.intercept('POST', '**/auth/callback/credentials*', {
      status: 200,
      body: { user: { email: 'user@email.com' } }
    })

    cy.intercept('GET', '**/auth/session*', {
      status: 200,
      body: { user: { name: 'user-1', email: 'user@email.com' } }
    })

    cy.visit('/reset-password?code=valid_token')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/user-1/i).should('exist')
  })
})
