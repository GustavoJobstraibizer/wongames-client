import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { WishListContextDefaultValues } from 'hooks/use-wishlist'
import 'session.mock'
import { render, screen } from 'utils/test-utils'
import Whishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock Base">{children}</div>
    }
  }
})

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
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Whishlist {...props} />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('mock showcase')).toBeInTheDocument()

    expect(screen.getByText(/Population Zero/i)).toBeInTheDocument()
  })

  it('should render Empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      items: []
    }
    render(<Whishlist {...props} />, { wishlistProviderProps })

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
