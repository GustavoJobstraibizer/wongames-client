/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    cy.addToCartByIndex('New Games', 0)
    cy.addToCartByIndex('New Games', 1)
    cy.addToCartByIndex('New Games', 2)

    cy.findAllByLabelText(/cart items/i).first().should('have.text', '3').click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    cy.findAllByLabelText(/cart items/i).first().click()

    cy.removeFromCartByIndex('New Games', 0)
    cy.removeFromCartByIndex('New Games', 1)
    cy.removeFromCartByIndex('New Games', 2)

    cy.findAllByLabelText(/cart items/i).should('not.exist')

    cy.findAllByLabelText(/shopping cart/i).first().click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /Your cart is Empty/i, hidden: false }).should('exist')
    })

    cy.findAllByLabelText(/shopping cart/i).first().click()
  })
})
