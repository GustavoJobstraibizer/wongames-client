import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from './../../graphql/mutations/wishlist'

const gameMock = (id: string) => ({
  id,
  name: `Game ${id}`,
  slug: `game-${id}`,
  price: 10.5,
  developers: [{ name: 'sample developer' }],
  cover: {
    url: '/sample-game.jpg'
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: 'jwt' } },
    variables: {
      identifier: 'teste@teste.com'
    }
  },
  result: {
    data: {
      wishlists: [
        {
          id: 1,
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}

export const createWishlistMock = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { jwt: 'jwt' } },
    variables: {
      input: {
        data: {
          games: ['3']
        }
      }
    }
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('3')]
        }
      }
    }
  }
}

export const updateWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'jwt' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['1', '2', '3'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('1'), gameMock('2'), gameMock('3')]
        }
      }
    }
  }
}

export const removeWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'jwt' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['2'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('2')]
        }
      }
    }
  }
}

export const wishlistItems = [
  {
    id: '1',
    title: 'Game 1',
    price: 10.5,
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    slug: 'game-1'
  },
  {
    id: '2',
    title: 'Game 2',
    price: 10.5,
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    slug: 'game-2'
  },
  {
    id: '3',
    title: 'Game 3',
    price: 10.5,
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    slug: 'game-3'
  }
]
