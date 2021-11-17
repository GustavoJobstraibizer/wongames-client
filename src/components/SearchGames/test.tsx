import { render, screen } from 'utils/test-utils'
import SearchGames from '.'

describe('SearchGames', () => {
  it('should render SearchGames component', () => {
    const { container } = render(<SearchGames />)

    expect(screen.getByText(/React Avançado/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
