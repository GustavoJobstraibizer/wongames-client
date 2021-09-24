import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import PaymentOptions from '.'
import cardsMock from './mock'

describe('PaymentOptions', () => {
  it('should render the credit card options and the add new credit card button', () => {
    render(<PaymentOptions cards={cardsMock} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/1234/)).toBeInTheDocument()
    expect(screen.getByLabelText(/5678/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    render(<PaymentOptions cards={cardsMock} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/1234/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /1234/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()

    render(<PaymentOptions cards={cardsMock} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()

    render(<PaymentOptions cards={cardsMock} handlePayment={handlePayment} />)

    userEvent.click(screen.getByLabelText(/1234/))

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
