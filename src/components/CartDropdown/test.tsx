import items from 'components/CartList/mock'
import { render, screen } from 'utils/test-utils'
import CartDropdown from '.'

describe('CartDropdown', () => {
  beforeEach(() => {
    render(<CartDropdown items={items} total="R$ 300,00" />)
  })

  it('should render CartDropdown component with badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render CartDropdown Content with cart items and total', () => {
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
