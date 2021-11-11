/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    const user = createUser()

    cy.visit('/sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn()

    cy.findByText('gustavojobs').should('exist').click()

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText('gustavojobs').should('not.exist')
  })

  it('should sign in the user and redirect to the page that it was attempt to access previously', () => {
    cy.visit('/profile/me')

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)

    cy.signIn()

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`)
    cy.findByLabelText(/username/i).should('have.value', 'gustavojobs')
    cy.findByLabelText(/e-mail/i).should('have.value', 'gustavojobs.dev@gmail.com')
  })
})
