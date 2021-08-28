import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import GameInfo from '.'

const props = {
  title: 'My Games',
  description: 'All my games',
  price: '300,00'
}

describe('GameInfo', () => {
  it('should render the game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my games/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/\$300,00/)).toBeInTheDocument()
    expect(screen.getByText(/all my games/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
