import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 10, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 10,
      where: {}
    }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'First Game',
          slug: 'first-game',
          short_description: 'A short description',
          price: 200,
          developers: [{ name: 'Developer One' }],
          cover: {
            url: 'cover.jpg'
          },
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 10,
      where: {},
      start: 1
    }
  },
  result: {
    data: {
      games: [
        {
          id: '2',
          name: 'fetch more Games',
          slug: 'fetch-more-games',
          short_description: 'A short description',
          price: 200,
          developers: [{ name: 'Developer One' }],
          cover: {
            url: 'cover-2.jpg'
          },
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}
