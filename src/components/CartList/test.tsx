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

  it('should render the button', () => {
    renderWithTheme(
      <CartList items={cartListMock} hasButton total="R$ 350,00" />
    )

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render <Empty /> when items is empty', () => {
    renderWithTheme(<CartList items={[]} hasButton total="R$ 350,00" />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
