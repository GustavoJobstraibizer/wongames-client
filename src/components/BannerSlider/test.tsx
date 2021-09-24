import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import BannerSlider from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x500.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season.</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x500.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season.</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('BannerSlider', () => {
  it('should render vertical slider', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render an active item at a time', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots with 2 items', () => {
    const { container } = render(<BannerSlider items={items} />)

    const slickDots = container.querySelector('ul.slick-dots')

    expect(slickDots).toBeInTheDocument()

    expect(slickDots?.childNodes).toHaveLength(2)
  })
})
