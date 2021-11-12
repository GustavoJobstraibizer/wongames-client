/// <reference path="../support/index.d.ts" />

import { createUser } from "../support/generate"

describe('Checkout', () => {
  describe('Free Games', () => {
    let user: User
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      // criar usuário
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.checkUrl()

      // acessar pagina de explore
      cy.findByRole('link', { name: /explore/i }).click()
      cy.checkUrl('/games')

      // filtrar por games gratuitos
      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      // adicionar game ao carrinho
      cy.addToCartByIndex(0)

      // verificar se o carrinho tem 1 jogo e abrir dropdown
      cy.findAllByLabelText(/cart item/i)
        .first()
        .should('have.length', 1)
        .click()

      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // verificar se redirecionou para a página de Cart
      cy.checkUrl('/cart')

      // encontrar um texto de somente jogos gratuitos
      cy.findByText(/only free games, click buy and enjoy!/i).should('exist')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()

      // verificar se redirecionou para a pagina de success
      cy.checkUrl('/success')

      // mostrar texto de sucesso
      cy.findByRole('heading', { name: /your purchase was successful!/i }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.checkUrl('/sign-in?callbackUrl=/profile/orders')

      cy.signIn(user.email, user.password)
      cy.checkUrl('/profile/orders')

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe('Paid Games', () => {
    let user: User
    before(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      // criar usuário
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.checkUrl()

      // acessar pagina de explore
      cy.findByRole('link', { name: /explore/i }).click()
      cy.checkUrl('/games')

      // filtrar por games gratuitos
      cy.findByText(/highest to lowest/i).click()
      cy.location('href').should('contain', 'sort=price%3Adesc')

      // adicionar game ao carrinho
      cy.addToCartByIndex(0)

      // verificar se o carrinho tem 1 jogo e abrir dropdown
      cy.findAllByLabelText(/cart item/i)
        .first()
        .should('have.length', 1)
        .click()

      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // verificar se redirecionou para a página de Cart
      cy.checkUrl('/cart')

      // botão de comprar deve estar desabilitado
      cy.findByRole('button', { name: /buy now/i }).should('be.disabled')

      // preencher com cartão de crédito
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '103')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()

      // verificar se redirecionou para a pagina de success
      cy.checkUrl('/success')

      // mostrar texto de sucesso
      cy.findByRole('heading', { name: /your purchase was successful!/i }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.checkUrl('/sign-in?callbackUrl=/profile/orders')

      cy.signIn(user.email, user.password)
      cy.checkUrl('/profile/orders')

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
