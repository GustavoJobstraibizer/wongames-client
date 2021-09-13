import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('should format price when positive price is passed', () => {
    const price = formatPrice(200)

    expect(price).toBe('$200.00')
  })

  it('should format price when zero price is passed', () => {
    const price = formatPrice(0)

    expect(price).toBe('FREE')
  })
})
