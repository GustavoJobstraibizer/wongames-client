import { render, screen } from 'utils/test-utils'
import Base from '.'

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock footer"></div>
    }
  }
})

describe('Base', () => {
  it('should render Menu, Footer and Children', () => {
    render(
      <Base>
        <h3>My children</h3>
      </Base>
    )

    expect(screen.getByTestId('mock menu')).toBeInTheDocument()
    expect(screen.getByTestId('mock footer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /my children/i })
    ).toBeInTheDocument()
  })
})
