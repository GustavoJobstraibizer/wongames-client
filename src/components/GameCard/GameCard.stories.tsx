import { Meta, Story } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://via.placeholder.com/300x140',
    price: 230
  },
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onFavorite: {
      action: 'clicked'
    },
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const withPromotion: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

withPromotion.args = {
  promotionalPrice: 200,
  ribbon: '20% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}

export const withRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

withRibbon.args = {
  ribbon: 'Best selling',
  ribbonColor: 'secondary',
  ribbonSize: 'small'
}
