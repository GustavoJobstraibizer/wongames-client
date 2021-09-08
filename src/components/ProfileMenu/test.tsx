import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/test-utils'
import ProfileMenu from '.'

describe('ProfileMenu', () => {
  it('should render ProfileMenu component', () => {
    const { container } = renderWithTheme(<ProfileMenu />)
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with active link', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/me" />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
