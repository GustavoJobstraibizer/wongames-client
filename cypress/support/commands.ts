// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library commands
import '@testing-library/cypress/add-commands';
import { User } from './generate';

Cypress.Commands.add('google', () => {
  cy.visit('https://google.com')
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /trine ultimate collection/i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /fallout/i })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    if (!/upcomming/i.test(name)) {
      cy.getByDataCy('game-card').should('have.length.gt', 0)
    }
  })
})

Cypress.Commands.add('getByDataCy', (selector: string, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

type FieldsAttr = {
  label: string
  name: number | string
}

Cypress.Commands.add('getFields', (fields: FieldsAttr[]) => {
  fields.map(({ label }) => {
    cy.findByText(label).should('exist')
  })
})

Cypress.Commands.add('shouldBeGreaterThan', (gtValue: number) => {
  cy.findByText(/^\$\d+\.\d{1,2}/i)
  .invoke('text')
  .then($el => $el.replace('$', ''))
  .then(parseFloat)
  .should('be.gt', gtValue)
})

Cypress.Commands.add('shouldBeLessThan', (ltValue: number) => {
  cy.findByText(/^\$\d+\.\d{1,2}/i)
  .invoke('text')
  .then($el => $el.replace('$', ''))
  .then(parseFloat)
  .should('be.lt', ltValue)
})

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /sign up now/i }).click()
})

Cypress.Commands.add('signIn', (email = 'gustavojobs.dev@gmail.com', password = '123456') => {
    cy.findByPlaceholderText(/email/i).type(email)
    cy.findByPlaceholderText(/^password/i).type(password)
    cy.findByRole('button', { name: /sign in now/i }).click()
})

Cypress.Commands.add('addToCartByIndex', (context: string, index: number) => {
  cy.getByDataCy(context).within(() => {
    cy.getByDataCy('game-card').eq(index).within(() => {
      cy.findByRole('button', { name: /^add to cart/i }).click()
    })
  })
})

Cypress.Commands.add('removeFromCartByIndex', (context: string, index: number) => {
  cy.getByDataCy(context).within(() => {
    cy.getByDataCy('game-card').eq(index).within(() => {
      cy.findByRole('button', { name: /^remove from cart/i }).click()
    })
  })
})
