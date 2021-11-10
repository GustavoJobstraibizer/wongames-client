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

    // game details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')

      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publishers/i }).should('exist')
      cy.findByRole('heading', { name: /ratings/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')


      cy.findByText('Interplay').should('exist')
      cy.findByText(/Sep 28, 1997/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Role-playing / Sci-fi / Turn-based').should('exist')
    })

    cy.shouldRenderShowcase({ name: 'Upcomming Games', highlight: true })
    cy.shouldRenderShowcase({ name: 'You may like these Games!!!', highlight: false })
  })
})
