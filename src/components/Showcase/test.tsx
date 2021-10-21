import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'
import 'session.mock'
import { render, screen } from 'utils/test-utils'
import Showcase from '.'

const props = {
  title: 'Free Games',
  highlight: highlightMock,
  games: gamesMock.splice(0, 2)
}

describe('Showcase', () => {
  it('should render Showcase with all props', () => {
    const { container } = render(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /read dead its back/i })
    ).toBeInTheDocument()

    const slickList = container.querySelector('.slick-list')

    expect(slickList).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(2)
  })

  it('should render Showcase without title', () => {
    const { container } = render(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    expect(
      screen.queryByRole('heading', { name: /free games/i })
    ).not.toBeInTheDocument()

    screen.getByRole('heading', { name: /read dead its back/i })

    const slickList = container.querySelector('.slick-list')

    expect(slickList).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(2)
  })

  it('should render Showcase without highlight', () => {
    const { container } = render(
      <Showcase title={props.title} games={props.games} />
    )

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: /read dead its back/i })
    ).not.toBeInTheDocument()

    const slickList = container.querySelector('.slick-list')

    expect(slickList).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(2)
  })

  it('should render Showcase without games', () => {
    const { container } = render(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /read dead its back/i })
    ).toBeInTheDocument()

    const slickList = container.querySelector('.slick-list')

    expect(slickList).not.toBeInTheDocument()
  })
})
