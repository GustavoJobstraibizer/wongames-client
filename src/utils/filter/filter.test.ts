import { parseQueryStringToFilter, parseQueryStringToWhere } from '.'

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 200,
  platforms: ['windows', 'linux'],
  developers: 'Ubisoft',
  sort: 'price:asc'
}

describe('parseQueryStringToWhere', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 200,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'Ubisoft' }
    })
  })
})

describe('parseQueryStringToFilter', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 200,
      platforms: ['windows', 'linux'],
      developers: ['Ubisoft'],
      sort: 'price:asc'
    })
  })
})
