/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render Home sections', () => {
    cy.visit('/');

    cy.shouldRenderBanner();
  })
})
