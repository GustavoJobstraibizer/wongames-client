import { Divider } from 'components/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  recommendedTitle?: string
  upcommingTitle?: string
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
  recommendedTitle,
  upcommingTitle
}: GameTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title={`${gameInfo.title} - Won Games`}
        description={gameInfo.description}
        canonical={`https://wongames.com.br/game/${slug}`}
        openGraph={{
          url: `https://wongames.com.br/game/${slug}`,
          title: `${gameInfo.title} - Won Games`,
          description: gameInfo.description,
          images: [
            {
              url: cover,
              alt: `${gameInfo.title}`
            }
          ]
        }}
      />

      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <Showcase
          title={upcommingTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase
          title={recommendedTitle || 'You may like these Games'}
          games={recommendedGames}
          color="white"
        />
      </S.Main>
    </Base>
  )
}

export default Game
