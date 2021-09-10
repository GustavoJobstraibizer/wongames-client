import { Meta, Story } from '@storybook/react'
import CartList, { CartListProps } from '.'
import cartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: cartListMock,
    total: 'R$ 350,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    items: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

export const withButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

withButton.args = {
  hasButton: true
}

export const empty: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

empty.args = {
  items: []
}
