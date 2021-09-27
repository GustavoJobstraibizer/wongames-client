import { Meta, Story } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story = (args) => <CartIcon {...args} />

export const withItems: Story = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 10
}
