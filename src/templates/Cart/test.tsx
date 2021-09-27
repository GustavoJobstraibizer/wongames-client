import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { render, screen } from 'utils/test-utils'
import Cart from '.'

const props = {
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: hightlightMock,
  cards: cardsMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock base">{children}</div>
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

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock cart"></div>
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock paymentOptions"></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock empty"></div>
    }
  }
})

describe('Cart', () => {
  it('should render Cart component', () => {
    render(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('mock cart')).toBeInTheDocument()
    expect(screen.getByTestId('mock showcase')).toBeInTheDocument()
    expect(screen.getByTestId('mock paymentOptions')).toBeInTheDocument()
    expect(screen.queryByTestId('mock empty')).not.toBeInTheDocument()
  })
})
