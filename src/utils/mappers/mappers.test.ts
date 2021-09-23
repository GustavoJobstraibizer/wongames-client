import { bannerMapper, gamesMapper, highlightMapper } from '.'
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
