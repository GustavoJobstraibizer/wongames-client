import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import {
  QueryUpcomming,
  QueryUpcommingVariables
} from 'graphql/generated/QueryUpcomming'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_UPCOMMING } from 'graphql/queries/upcomming'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Game, { GameTemplateProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

// generate in build time
// generating 9 pages with different slugs
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({ query: QUERY_GAME_BY_SLUG, variables: { slug: `${params?.slug}` } })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  const { data: resultRecommended } =
    await apolloClient.query<QueryRecommended>({
      query: QUERY_RECOMMENDED
    })

  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: resultUpcomming } = await apolloClient.query<
    QueryUpcomming,
    QueryUpcommingVariables
  >({
    query: QUERY_UPCOMMING,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `${getImageUrl(image?.src)}`,
        label: image?.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcommingTitle: resultUpcomming.showcase?.upcommingGames?.title,
      upcomingGames: gamesMapper(resultUpcomming.upcommingGames),
      recommendedTitle: resultRecommended.recommended?.section?.title,
      recommendedGames: gamesMapper(
        resultRecommended.recommended?.section?.games
      ),
      upcomingHighlight: highlightMapper(
        resultUpcomming.showcase?.upcommingGames?.highlight
      )
    }
  }
}
