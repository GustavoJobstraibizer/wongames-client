import { GameCardProps } from 'components/GameCard'
import 'match-media-mock'
import 'session.mock'
import { render, screen } from 'utils/test-utils'
import GameCardSlider from '.'

const items: GameCardProps[] = [
  {
    id: '1',
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 230,
    slug: 'population-zero-1'
  },
  {
    id: '2',
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 230,
    slug: 'population-zero-2'
  },
  {
    id: '3',
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 230,
    slug: 'population-zero-3'
  },
  {
    id: '4',
    title: 'Population Zero 4',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 230,
    promotionalPrice: 200,
    ribbon: '20% OFF',
    slug: 'population-zero-4'
  },
  {
    id: '5',
    title: 'Population Zero 5',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 230,
    promotionalPrice: 200,
    slug: 'population-zero-5'
  }
]

describe('GameCardSlider', () => {
  it('should render GameCardSlider component', () => {
    const { container } = render(<GameCardSlider items={items} />)

    const slickList = container.querySelector('.slick-list')

    expect(slickList).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/jogo anterior/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/jogo seguinte/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
