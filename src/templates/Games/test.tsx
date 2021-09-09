import { screen } from '@testing-library/react'
import itemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { renderWithTheme } from 'utils/test-utils'
import Games from '.'

const props = {
  games: gamesMock.slice(0, 3),
  filterItems: itemsMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock Base">{children}</div>
    }
  }
})

jest.mock('components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock ExploreSidebar" />
    }
  }
})

jest.mock('components/GameCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock GameCard" />
    }
  }
})

describe('Games', () => {
  it('should render Games component', () => {
    renderWithTheme(<Games {...props} />)

    expect(screen.getByTestId('mock Base')).toBeInTheDocument()
    expect(screen.getByTestId('mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getAllByTestId('mock GameCard')).toHaveLength(3)

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
