import { render, screen } from 'utils/test-utils'
import Auth from '.'

describe('Auth', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /auth/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
