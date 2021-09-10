import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/test-utils'
import UserDropdown from '.'

describe('UserDropdown', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Jhon" />)

    expect(screen.getByText(/jhon/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Jhon" />)

    userEvent.click(screen.getByText(/jhon/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
