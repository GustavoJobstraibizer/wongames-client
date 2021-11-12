// load type definitions that come with Cypress module

/// <reference types="cypress" />

type ShowCaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttr = {
  label: string
  name: number | string
}

type User = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * Custom command to get element by data-cy values
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string, ...args): Chainable<Window>
    /**
     * Custom command to check banners in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>
    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowCaseAttributes): Chainable<Element>
    /**
     * Custom command to get Fields in page
     * @example cy.getFields()
     */
    getFields(list: FieldsAttr[]): Chainable<Element>
    /**
     * Custom command to check if value is Greater than to given value
     * @example cy.shouldBeGreaterThan(10)
     */
    shouldBeGreaterThan(gtValue: number): Chainable<Element>
    /**
     * Custom command to check if value is Less than to given value
     * @example cy.shouldBeLessThan(20)
     */
    shouldBeLessThan(ltValue: number): Chainable<Element>
    /**
     * Custom command fill the form with User data
     * @example cy.signUp(user: User)
     */
    signUp(user: User): Chainable<Element>
    /**
     * Custom command fill the form with User data for sign in
     * @example cy.signIn(user: User)
     */
    signIn(email?: string, password?: string): Chainable<Element>
    /**
     * Custom command add the product to cart by index
     * @example cy.addToCartByIndex(context, index: number)
     */
    addToCartByIndex(context: string, index: number): Chainable<Element>
    /**
     * Custom command remove the product to cart by index
     * @example cy.removeFromCartByIndex(index: number)
     */
    removeFromCartByIndex(context: string, index: number): Chainable<Element>
  }
}
