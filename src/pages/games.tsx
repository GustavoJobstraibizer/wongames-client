import itemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: itemsMock
    }
  }
}
