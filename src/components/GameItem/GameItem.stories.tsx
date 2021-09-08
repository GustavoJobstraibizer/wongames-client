import { Meta, Story } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://via.placeholder.com/180',
    title: 'Red Dead Redemption 2',
    price: 'R$ 250,00'
  }
} as Meta

export const Basic: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://google.com',
  paymentInfo: {
    flag: 'mastercard',
    number: '**** **** **** 4562',
    img: '/img/cards/mastercard.png',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:30'
  }
}
