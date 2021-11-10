/// <reference path="../support/index.d.ts" />

describe('Game', () => {
  it('should render Game page section', () => {
    cy.visit('/game/fallout');

    cy.wait(600);
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /fallout/i }).should('exist')
      cy.findByText(/^When you buy this game, The Elder Scrolls/i).should('exist')
      cy.findByText('$5.89').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

    // content
    cy.getByDataCy('text-content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('text-content').children().should('have.length.at.least', 2)
  })
})
