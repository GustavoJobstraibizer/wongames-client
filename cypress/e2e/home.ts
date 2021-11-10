/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render Home sections', () => {
    cy.visit('/');

    cy.shouldRenderBanner();

    cy.shouldRenderShowcase({ name: 'New Games' })
    cy.shouldRenderShowcase({ name: 'Most Popular Games' })
    cy.shouldRenderShowcase({ name: 'Upcomming Games' })
    cy.shouldRenderShowcase({ name: 'Free Games' })
  })
})
