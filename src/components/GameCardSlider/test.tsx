import { screen } from '@testing-library/react'
import { GameCardProps } from 'components/GameCard'
import 'match-media-mock'
import { renderWithTheme } from 'utils/test-utils'
import GameCardSlider from '.'

const items: GameCardProps[] = [
  {
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 'R$ 230,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 'R$ 230,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 'R$ 230,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 200,00',
    ribbon: '20% OFF'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 200,00'
  }
]

describe('GameCardSlider', () => {
  it('should render GameCardSlider component', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    const slickList = container.querySelector('.slick-list')

    expect(slickList).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/jogo anterior/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/jogo seguinte/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
