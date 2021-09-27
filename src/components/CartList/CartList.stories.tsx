import { Meta, Story } from '@storybook/react'
import CartList from '.'
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
    },
    cartContextValue: {
      type: ''
    }
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

Basic.args = {
  items: cartListMock,
  total: 'R$ 350,00'
}

export const withButton: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

withButton.args = {
  hasButton: true
}

export const empty: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)
