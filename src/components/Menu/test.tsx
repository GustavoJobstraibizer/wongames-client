import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import Menu from '.'

describe('Menu', () => {
  it('should render Menu component', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // Selecionar o menu
    const fullMenu = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu está fechado
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    // clicar no botão abrir o menu e verificar se o menu está aberto
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle({ opacity: 1 })

    // cliar no botão fechar o menu e verificar se o menu está fechado
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account link when logged in', () => {
    renderWithTheme(<Menu username="Jobs" />)

    // when the expect is an negation, use queryByText instead of getByText
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
  })
})
