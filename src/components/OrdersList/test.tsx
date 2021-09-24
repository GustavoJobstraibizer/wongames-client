import { render, screen } from 'utils/test-utils'
import OrdersList from '.'
import orderListMock from './mock'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock gameItem">{children}</div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock empty" />
    }
  }
})

describe('OrdersList', () => {
  it('should render OrdersList component', () => {
    render(<OrdersList items={orderListMock} />)

    expect(
      screen.getByRole('heading', { name: /my order/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId(/gameitem/i)).toHaveLength(2)

    expect(screen.queryByTestId(/mock empty/i)).not.toBeInTheDocument()
  })

  it('should render empty state', () => {
    render(<OrdersList />)

    expect(screen.getByTestId(/mock empty/i)).toBeInTheDocument()
  })
})
