import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 10
    }
  },
  result: {
    data: {
      games: [
        {
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
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 10,
      start: 1
    }
  },
  result: {
    data: {
      games: [
        {
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
      ]
    }
  }
}
