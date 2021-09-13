export const formatPrice = (price: number | bigint): string => {
  return price > 0
    ? new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    : 'FREE'
}
