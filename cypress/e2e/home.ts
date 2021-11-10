/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render Home sections', () => {
    cy.visit('/');

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /trine ultimate collection/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /fallout/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
