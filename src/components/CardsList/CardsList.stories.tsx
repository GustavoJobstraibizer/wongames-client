import { Meta, Story } from '@storybook/react'
import cardsMock from 'components/PaymentOptions/mock'
import CardsList, { CardsListProps } from '.'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Basic: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 400, margin: '0 auto' }}>
    <CardsList {...args} />
  </div>
)
