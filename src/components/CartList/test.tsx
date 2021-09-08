import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/test-utils'
import CartList from '.'
import cartListMock from './mock'

describe('CartList', () => {
  it('should render CartList component', () => {
    const { container } = renderWithTheme(
      <CartList items={cartListMock} total="R$ 350,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 350,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 350,00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
