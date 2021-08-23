import { Meta, Story } from '@storybook/react'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider, { GameCardSliderProps } from '.'

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

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
