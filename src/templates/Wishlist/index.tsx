import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
  recommendedTitle?: string
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games = [],
  recommendedTitle
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games?.length >= 1 ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle || 'You may like these games'}
        highlight={recommendedHighlight}
        games={recommendedGames}
        color="white"
      />
    </Base>
  )
}

export default Wishlist
