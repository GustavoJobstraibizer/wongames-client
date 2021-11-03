import { queryOrders_orders } from 'graphql/generated/queryOrders'
import { bannerMapper, gamesMapper, highlightMapper, ordersMapper } from '.'
import { QueryGames_games } from './../../graphql/generated/QueryGames'
import { QueryHome_banners } from './../../graphql/generated/QueryHome'
import { cartMapper } from './index'

describe('bannerMapper', () => {
  it('should return the formatted value correctly', () => {
    const banner = {
      image: { url: '/image.png' },
      title: 'title',
      subtitle: 'subtitle',
      button: { label: 'button', link: 'button-link' },
      ribbon: { text: 'free', color: 'primary', size: 'normal' }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.png',
        title: 'title',
        subtitle: 'subtitle',
        buttonLabel: 'button',
        buttonLink: 'button-link',
        ribbon: 'free',
        ribbonColor: 'primary',
        ribbonSize: 'normal'
      }
    ])
  })
})

describe('gamesMapper', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the formatted value correctly', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.png'
      },
      price: 100
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        price: 100,
        img: 'http://localhost:1337/image.png'
      }
    ])
  })
})

describe('highlightMapper', () => {
  it('should return the formatted value correctly', () => {
    const highlight = {
      title: 'highlight',
      subtitle: 'highlight sub',
      background: { url: '/image/bg.png' },
      floatImage: { url: '/image/float-image.png' },
      buttonLabel: 'button text',
      buttonLink: 'button-link',
      alignment: 'right'
    }

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'highlight',
      subtitle: 'highlight sub',
      buttonLabel: 'button text',
      buttonLink: 'button-link',
      backgroundImage: 'http://localhost:1337/image/bg.png',
      floatImage: 'http://localhost:1337/image/float-image.png',
      alignment: 'right'
    })
  })
})

describe('cartMapper', () => {
  it('should return an empty array if there are no games', () => {
    expect(cartMapper(null)).toStrictEqual([])
  })

  it('should return the formatted value correctly', () => {
    const game = {
      id: '1',
      name: 'game',
      cover: {
        url: '/image.png'
      },
      price: 100
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        price: '$100.00',
        img: 'http://localhost:1337/image.png'
      }
    ])
  })
})

describe('ordersMapper', () => {
  it('should return an empty array if there are no orders', () => {
    expect(ordersMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 10
          }
        ]
      }
    ] as queryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00'
          }
        ]
      }
    ])
  })

  it('should return free games when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 0
          }
        ]
      }
    ] as queryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: 'FREE'
          }
        ]
      }
    ])
  })
})
