import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  it('should set the item from localStorage', () => {
    setStorageItem('cartItems', ['1', '2'])

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})
