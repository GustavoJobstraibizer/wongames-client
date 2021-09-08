import { screen } from '@testing-library/react'
import cardsMock from 'components/PaymentOptions/mock'
import { renderWithTheme } from 'utils/test-utils'
import CardsList from '.'

describe('CardsList', () => {
  it('should render CardsList component', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png'
    )
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/cards/mastercard.png'
    )

    expect(screen.getByText(/1234/i)).toBeInTheDocument()
    expect(screen.getByText(/5678/i)).toBeInTheDocument()
  })
})
