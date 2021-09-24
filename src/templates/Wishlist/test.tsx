import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { render, screen } from 'utils/test-utils'
import Whishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

describe('Whishlist', () => {
  it('should render Whishlist component', () => {
    render(<Whishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('mock showcase')).toBeInTheDocument()

    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(5)
  })

  it('should render Empty when there are no games', () => {
    render(<Whishlist {...props} games={undefined} />)

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
