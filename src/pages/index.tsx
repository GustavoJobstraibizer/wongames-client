import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highligthMock from 'components/Highlight/mock'
import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighligth: highligthMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highligthMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highligthMock
    }
  }
}
