/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add or remove games from wishlist', () => {
    cy.visit('/wishlist')

    cy.signIn()

    cy.findByText(/Your wishlist is empty/i).should('exist')

    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByLabelText(/add to wishlist/i).should('exist').click()
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
      cy.getByDataCy('game-card').within(() => {
        cy.findByLabelText(/remove from wishlist/i).should('exist').click()
      })
    })

    cy.findByText(/Your wishlist is empty/i).should('exist')
  })
})
