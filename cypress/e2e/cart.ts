/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    cy.addToCartByIndex(0, 'New Games')
    cy.addToCartByIndex(1, 'New Games')
    cy.addToCartByIndex(2, 'New Games')

    cy.findAllByLabelText(/cart items/i).first().should('have.text', '3').click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    cy.findAllByLabelText(/cart items/i).first().click()

    cy.removeFromCartByIndex(0, 'New Games')
    cy.removeFromCartByIndex(1, 'New Games')
    cy.removeFromCartByIndex(2, 'New Games')

    cy.findAllByLabelText(/cart items/i).should('not.exist')

    cy.findAllByLabelText(/shopping cart/i).first().click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /Your cart is Empty/i, hidden: false }).should('exist')
    })

    cy.findAllByLabelText(/shopping cart/i).first().click()
  })
})
