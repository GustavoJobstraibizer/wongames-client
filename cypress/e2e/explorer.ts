/// <reference path="../support/index.d.ts" />

import { genreFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields';

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games');
  })

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(genreFields)
    cy.getFields(sortFields)
  })

  it('should show 9 games and show more games when button show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 9)

    cy.findByRole('button', { name: /show more/i }).click()

    cy.getByDataCy('game-card').should('have.length', 19)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()

    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText(/free/i).should('exist')
    })

    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeGreaterThan(0)
    })
  })

  it('should order by specific price', () => {
    cy.getByDataCy('Price').within(() => {

      priceFields.map(({ label, name }) => {
        cy.findByText(label).click()
        cy.location('href').should('contain', `price_lte=${name}`)
      })
    })
  })

  it('should order by platform and genre', () => {
    platformFields.map(({ label, name }) => {
      cy.findByText(label).click()
      cy.location('href').should('contain', `platforms=${name}`)
    })

    cy.findByText(/action/i).click()
    cy.location('href').should('contain', 'categories=action')
  })

  it('should return empty when no games filters match', () => {
    cy.visit('/games')

    cy.findByText(/free/i).click()
    cy.findByText(/linux/i).click()
    cy.findByText(/horror/i).click()

    cy.findByText(/We didn't find any games with this filter/i).should('exist')
  })
})
