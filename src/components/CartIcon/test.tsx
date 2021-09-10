import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import CartIcon from '.'

describe('CartIcon', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={10} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('should render with badge only with has positive number', () => {
    renderWithTheme(<CartIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText('-1')).not.toBeInTheDocument()
  })
})
