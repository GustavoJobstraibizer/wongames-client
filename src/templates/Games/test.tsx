import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import itemsMock from 'components/ExploreSidebar/mock'
import apolloCache from 'utils/apolloCache'
import { renderWithTheme } from 'utils/test-utils'
import Games from '.'
import { fetchMoreMock, gamesMock } from './mocks'

const props = {
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

describe('Games', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games {...props} />
      </MockedProvider>
    )

    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games {...props} />
      </MockedProvider>
    )
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument()

    // get => Tem certeza que o elemento existe na pagina
    // query => Não tem o elemento
    // find => Processamento assincrono
    expect(await screen.findByTestId('mock ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findByText(/first game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games {...props} />
      </MockedProvider>
    )
    expect(await screen.findByText(/first game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/fetch more Games/i)).toBeInTheDocument()

    // screen.logTestingPlaygroundURL()
  })
})
