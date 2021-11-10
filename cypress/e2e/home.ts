/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render Home sections', () => {
    cy.visit('/');

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /trine ultimate collection/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
