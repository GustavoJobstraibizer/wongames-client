import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import SkeletonLoader from 'components/SkeletonLoader'
import { useQueryGames } from 'graphql/queries/games'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 10 }
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        start: data?.games.length,
        limit: 10
      }
    })
  }

  const handleFilter = () => {
    return
  }

  return (
    <Base>
      <S.Content>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <>
            <SkeletonLoader quantity={3} />
          </>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover?.url}`}
                  price={game.price}
                  slug={game.slug}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={32} />
            </S.ShowMore>
          </section>
        )}
      </S.Content>
    </Base>
  )
}

export default GamesTemplate
