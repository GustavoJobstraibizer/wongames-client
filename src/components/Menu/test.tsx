import { fireEvent } from '@testing-library/react'
import { render, screen } from 'utils/test-utils'
import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

jest.mock('components/UserDropdown', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock UserDropdown" />
    }
  }
})

describe('Menu', () => {
  it('should render Menu component', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)

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
    render(<Menu />)

    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and profile link when logged in', () => {
    render(<Menu username="Jhon" />)

    // when the expect is an negation, use queryByText instead of getByText
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()

    expect(screen.getByTestId('mock UserDropdown')).toBeInTheDocument()
  })

  it('should not show sign in or dropdown user if loading', () => {
    render(<Menu username="Jhon" loading />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
